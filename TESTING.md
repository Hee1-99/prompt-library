# Testing Notes

Playwright coverage targets the deployed GitHub Pages site by default:

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

To test a local static server instead:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
env BASE_URL=http://127.0.0.1:4173/ npm run test:e2e
```

The suite checks:

- catalog statistics and rendered prompt cards
- keyword search and filter reset
- audience, industry, workflow, tag, and sort controls
- variable input generation
- base and generated prompt copy buttons
- mobile viewport usability

## Issues Found During Verification

- Playwright initially opened the GitHub Pages account root instead of the project path. The test now navigates to the configured project-relative URL.
- The student audience count expectation was corrected from 150 to 175 because 7 student-oriented categories x 25 workflows are present.
- Variable inputs reused labels such as `대상`, which conflicted with sidebar filter labels for browser automation and assistive technology. Generated variable inputs now receive explicit `aria-label` values such as `변수 대상`.
- The sticky builder panel could place copy buttons below the viewport on desktop. The panel now has a viewport-bounded height and internal scrolling so all controls remain reachable.
