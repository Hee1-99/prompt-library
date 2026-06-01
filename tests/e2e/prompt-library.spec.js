const { test, expect } = require('@playwright/test');

const parseDisplayedCount = async (page) => {
  const summary = await page.locator('#resultSummary').textContent();
  const match = summary && summary.match(/중 ([\d,]+)개 표시 중/);
  if (!match) throw new Error(`Could not parse result summary: ${summary}`);
  return Number(match[1].replace(/,/g, ''));
};

const grantClipboard = async (page, context) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {
    origin: new URL(page.url()).origin,
  });
};

const expectVisibleCardsToInclude = async (page, text) => {
  const cards = page.locator('.result-card');
  await expect(cards.first()).toBeVisible();
  const count = Math.min(await cards.count(), 8);
  for (let index = 0; index < count; index += 1) {
    await expect(cards.nth(index)).toContainText(text);
  }
};

test.describe('deployed prompt library', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./');
    await expect(page).toHaveTitle('복붙 AI 업무 라이브러리');
  });

  test('loads catalog statistics and prompt cards', async ({ page }) => {
    await expect(page.locator('#totalCount')).toHaveText('1,000');
    await expect(page.locator('#industryCount')).toHaveText('40');
    await expect(page.locator('#functionCount')).toHaveText('25');
    await expect(page.locator('#resultSummary')).toHaveText('1,000개 중 1,000개 표시 중');
    await expect(page.locator('.result-card')).toHaveCount(1000);
  });

  test('filter reset restores the full catalog', async ({ page }) => {
    await page.getByLabel('업무 유형').selectOption({ label: '리뷰 답변' });
    expect(await parseDisplayedCount(page)).toBe(40);

    await page.getByRole('button', { name: '필터 초기화' }).click();
    await expect(page.locator('#resultSummary')).toHaveText('1,000개 중 1,000개 표시 중');
  });

  test('audience, industry, workflow, tag, and sort controls work', async ({ page }) => {
    await page.getByLabel('대상').selectOption({ label: '학생' });
    expect(await parseDisplayedCount(page)).toBe(175);
    await expectVisibleCardsToInclude(page, '학생');

    await page.getByRole('button', { name: '필터 초기화' }).click();
    await page.getByLabel('산업군/분야').selectOption({ label: 'SaaS/IT 스타트업' });
    expect(await parseDisplayedCount(page)).toBe(25);
    await expectVisibleCardsToInclude(page, 'SaaS/IT 스타트업');

    await page.getByRole('button', { name: '필터 초기화' }).click();
    await page.getByLabel('업무 유형').selectOption({ label: '리뷰 답변' });
    expect(await parseDisplayedCount(page)).toBe(40);
    await expectVisibleCardsToInclude(page, '리뷰 답변');

    await page.getByRole('button', { name: '필터 초기화' }).click();
    await page.getByLabel('태그').selectOption({ label: 'SEO' });
    expect(await parseDisplayedCount(page)).toBe(40);
    await expect(page.locator('.tag', { hasText: 'SEO' }).first()).toBeVisible();

    await page.getByLabel('정렬').selectOption('function');
    await expect(page.getByLabel('정렬')).toHaveValue('function');
  });

  test('custom input builder generates and copies customized prompts', async ({ page, context }) => {
    await grantClipboard(page, context);

    await page.locator('.result-card').first().getByRole('button', { name: '내용 채우기' }).click();
    await expect(page.locator('#builderContent')).toBeVisible();
    await expect(page.locator('#selectedTitle')).toContainText('시장과 사용자 맥락 빠르게 조사하기');

    await page.getByRole('textbox', { name: '입력 항목 목표' }).fill('신규 고객 유입 전략 수립');
    await page.getByRole('textbox', { name: '입력 항목 대상' }).fill('동네 카페 사장님');
    await page.getByRole('textbox', { name: '입력 항목 지역 또는 플랫폼' }).fill('서울 성수동과 인스타그램');
    await page.getByRole('textbox', { name: '입력 항목 기간' }).fill('최근 3개월');

    const generated = page.locator('#generatedPrompt');
    await expect(generated).toHaveValue(/신규 고객 유입 전략 수립/);
    await expect(generated).toHaveValue(/동네 카페 사장님/);
    await expect(generated).not.toHaveValue(/\{목표\}/);

    await page.getByRole('button', { name: '완성본 복사' }).click();
    await expect(page.locator('#toast')).toHaveClass(/show/);
    await expect(page.evaluate(() => navigator.clipboard.readText())).resolves.toContain('신규 고객 유입 전략 수립');

    await page.getByRole('button', { name: '원본 복사' }).click();
    await expect(page.evaluate(() => navigator.clipboard.readText())).resolves.toContain('{목표}');
  });

  test('card copy button copies the base prompt', async ({ page, context }) => {
    await grantClipboard(page, context);

    await page.locator('.result-card').first().getByRole('button', { name: '복사' }).click();
    await expect(page.locator('#toast')).toHaveClass(/show/);
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    expect(copied).toContain('당신은 "자영업/로컬 비즈니스" 분야의 실무를 잘 이해하는 AI 업무 파트너입니다.');
  });

  test('mobile viewport keeps the main controls usable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload();
    await expect(page.getByLabel('대상')).toBeVisible();
    await page.getByLabel('대상').selectOption({ label: '학생' });
    expect(await parseDisplayedCount(page)).toBe(175);
    await expect(page.locator('.result-card').first().getByRole('button', { name: '내용 채우기' })).toBeVisible();
  });
});
