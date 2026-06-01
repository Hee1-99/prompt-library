const state = {
  audience: "all",
  industry: "all",
  functionId: "all",
  tag: "all",
  sort: "recommended",
  selected: null,
  variableValues: {},
};

const els = {
  audienceFilter: document.querySelector("#audienceFilter"),
  industryFilter: document.querySelector("#industryFilter"),
  functionFilter: document.querySelector("#functionFilter"),
  tagFilter: document.querySelector("#tagFilter"),
  resetButton: document.querySelector("#resetButton"),
  sortSelect: document.querySelector("#sortSelect"),
  promptGrid: document.querySelector("#promptGrid"),
  resultSummary: document.querySelector("#resultSummary"),
  totalCount: document.querySelector("#totalCount"),
  industryCount: document.querySelector("#industryCount"),
  functionCount: document.querySelector("#functionCount"),
  builderEmpty: document.querySelector("#builderEmpty"),
  builderContent: document.querySelector("#builderContent"),
  selectedIndustry: document.querySelector("#selectedIndustry"),
  selectedTitle: document.querySelector("#selectedTitle"),
  variableFields: document.querySelector("#variableFields"),
  generatedPrompt: document.querySelector("#generatedPrompt"),
  copyGenerated: document.querySelector("#copyGenerated"),
  copyBase: document.querySelector("#copyBase"),
  toast: document.querySelector("#toast"),
};

const unique = (items) => [...new Set(items)].sort((a, b) => a.localeCompare(b, "ko"));

const optionSets = {
  audience: {
    select: els.audienceFilter,
    defaultLabel: "전체 대상",
    items: () => unique(INDUSTRIES.map((industry) => industry.audience)).map((audience) => ({
      value: audience,
      label: audience,
    })),
  },
  industry: {
    select: els.industryFilter,
    defaultLabel: "전체 산업군/분야",
    items: () => INDUSTRIES.map((industry) => ({
      value: industry.id,
      label: industry.name,
    })),
  },
  functionId: {
    select: els.functionFilter,
    defaultLabel: "전체 업무 유형",
    items: () => WORKFLOWS.map((workflow) => ({
      value: workflow.id,
      label: workflow.name,
    })),
  },
  tag: {
    select: els.tagFilter,
    defaultLabel: "전체 태그",
    items: () => unique(PROMPTS.flatMap((prompt) => prompt.tags)).map((tag) => ({
      value: tag,
      label: tag,
    })),
  },
};

const matchesFilters = (prompt, filters = state) => {
  const audienceMatch = filters.audience === "all" || prompt.audience === filters.audience;
  const industryMatch = filters.industry === "all" || prompt.industryId === filters.industry;
  const functionMatch = filters.functionId === "all" || prompt.functionId === filters.functionId;
  const tagMatch = filters.tag === "all" || prompt.tags.includes(filters.tag);

  return audienceMatch && industryMatch && functionMatch && tagMatch;
};

const getPromptCount = (filters = state) =>
  PROMPTS.filter((prompt) => matchesFilters(prompt, filters)).length;

const formatOptionLabel = (label, count) => `${label} (${count.toLocaleString("ko-KR")})`;

const normalizeFilters = (lockedField) => {
  const fields = Object.keys(optionSets);
  let changed = true;

  while (changed && getPromptCount() === 0) {
    changed = false;
    for (const field of fields) {
      if (field === lockedField || state[field] === "all") continue;
      state[field] = "all";
      changed = true;
      if (getPromptCount() > 0) break;
    }
  }
};

const renderFilterOptions = (lockedField) => {
  normalizeFilters(lockedField);

  Object.entries(optionSets).forEach(([field, config]) => {
    const select = config.select;
    const currentValue = state[field];
    const fragment = document.createDocumentFragment();
    const baseFilters = { ...state, [field]: "all" };
    const allCount = getPromptCount(baseFilters);

    const defaultOption = document.createElement("option");
    defaultOption.value = "all";
    defaultOption.textContent = formatOptionLabel(config.defaultLabel, allCount);
    fragment.appendChild(defaultOption);

    const validValues = new Set(["all"]);
    config.items().forEach((item) => {
      const count = getPromptCount({ ...baseFilters, [field]: item.value });
      if (count === 0) return;

      validValues.add(item.value);
      const option = document.createElement("option");
      option.value = item.value;
      option.textContent = formatOptionLabel(item.label, count);
      fragment.appendChild(option);
    });

    if (!validValues.has(currentValue) && field !== lockedField) {
      state[field] = "all";
    }

    select.replaceChildren(fragment);
    select.value = state[field];
  });
};

const initFilters = () => {
  renderFilterOptions();

  els.totalCount.textContent = PROMPTS.length.toLocaleString("ko-KR");
  els.industryCount.textContent = INDUSTRIES.length.toLocaleString("ko-KR");
  els.functionCount.textContent = WORKFLOWS.length.toLocaleString("ko-KR");
};

const getFilteredPrompts = () => {
  const filtered = PROMPTS.filter((prompt) => matchesFilters(prompt));

  return filtered.sort((a, b) => {
    if (state.sort === "industry") {
      return a.industry.localeCompare(b.industry, "ko") || a.function.localeCompare(b.function, "ko");
    }
    if (state.sort === "function") {
      return a.function.localeCompare(b.function, "ko") || a.industry.localeCompare(b.industry, "ko");
    }
    return a.id.localeCompare(b.id);
  });
};

const renderPrompts = () => {
  const prompts = getFilteredPrompts();
  els.resultSummary.textContent = `${PROMPTS.length.toLocaleString("ko-KR")}개 중 ${prompts.length.toLocaleString("ko-KR")}개 표시 중`;

  const fragment = document.createDocumentFragment();

  prompts.forEach((prompt, index) => {
    const card = document.createElement("article");
    card.className = state.selected?.id === prompt.id ? "result-card is-selected" : "result-card";
    card.style.setProperty("--card-index", String(index % 24));
    card.innerHTML = `
      <div class="card-kicker">
        <span class="audience-pill">${prompt.audience}</span>
        <span>${prompt.industry}</span>
      </div>
      <h4>${prompt.title}</h4>
      <p>${prompt.description}</p>
      <div class="tag-row">
        ${prompt.tags.slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="button-row">
        <button class="primary-button" type="button" data-action="select" data-id="${prompt.id}">
          내용 채우기
        </button>
        <button class="secondary-button" type="button" data-action="copy" data-id="${prompt.id}">
          복사
        </button>
      </div>
    `;
    fragment.appendChild(card);
  });

  els.promptGrid.replaceChildren(fragment);
};

const applyVariables = (prompt) => {
  let generated = prompt.prompt;
  prompt.variables.forEach((variable) => {
    const value = state.variableValues[variable]?.trim() || `{${variable}}`;
    generated = generated.replaceAll(`{${variable}}`, value);
  });
  return generated;
};

const renderBuilder = () => {
  const prompt = state.selected;

  if (!prompt) {
    els.builderEmpty.classList.remove("hidden");
    els.builderContent.classList.add("hidden");
    return;
  }

  els.builderEmpty.classList.add("hidden");
  els.builderContent.classList.remove("hidden");
  els.selectedIndustry.textContent = `${prompt.industry} / ${prompt.function}`;
  els.selectedTitle.textContent = prompt.title;

  const fragment = document.createDocumentFragment();
  prompt.variables.forEach((variable) => {
    const wrapper = document.createElement("div");
    wrapper.className = "control-group";

    const label = document.createElement("label");
    label.textContent = variable;
    label.setAttribute("for", `var-${variable}`);

    const input = document.createElement("input");
    input.id = `var-${variable}`;
    input.setAttribute("aria-label", `입력 항목 ${variable}`);
    input.value = state.variableValues[variable] ?? "";
    input.placeholder = `${variable} 작성`;
    input.addEventListener("input", (event) => {
      state.variableValues[variable] = event.target.value;
      els.generatedPrompt.value = applyVariables(prompt);
    });

    wrapper.append(label, input);
    fragment.appendChild(wrapper);
  });

  els.variableFields.replaceChildren(fragment);
  els.generatedPrompt.value = applyVariables(prompt);
};

const showToast = (message) => {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.setTimeout(() => els.toast.classList.remove("show"), 1800);
};

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showToast("복사했습니다.");
  } catch {
    els.generatedPrompt.value = text;
    els.generatedPrompt.select();
    document.execCommand("copy");
    showToast("복사했습니다.");
  }
};

const bindEvents = () => {
  els.audienceFilter.addEventListener("change", (event) => {
    state.audience = event.target.value;
    renderFilterOptions("audience");
    renderPrompts();
  });

  els.industryFilter.addEventListener("change", (event) => {
    state.industry = event.target.value;
    renderFilterOptions("industry");
    renderPrompts();
  });

  els.functionFilter.addEventListener("change", (event) => {
    state.functionId = event.target.value;
    renderFilterOptions("functionId");
    renderPrompts();
  });

  els.tagFilter.addEventListener("change", (event) => {
    state.tag = event.target.value;
    renderFilterOptions("tag");
    renderPrompts();
  });

  els.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderPrompts();
  });

  els.resetButton.addEventListener("click", () => {
    state.audience = "all";
    state.industry = "all";
    state.functionId = "all";
    state.tag = "all";
    state.sort = "recommended";
    els.sortSelect.value = "recommended";
    renderFilterOptions();
    renderPrompts();
  });

  els.promptGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const prompt = PROMPTS.find((item) => item.id === button.dataset.id);
    if (!prompt) return;

    if (button.dataset.action === "copy") {
      copyText(prompt.prompt);
      return;
    }

    state.selected = prompt;
    state.variableValues = {};
    els.promptGrid.querySelectorAll(".result-card.is-selected").forEach((card) => {
      card.classList.remove("is-selected");
    });
    button.closest(".result-card")?.classList.add("is-selected");
    renderBuilder();

    if (window.matchMedia("(max-width: 1120px)").matches) {
      els.builderContent.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  els.copyGenerated.addEventListener("click", () => {
    if (!state.selected) return;
    copyText(els.generatedPrompt.value);
  });

  els.copyBase.addEventListener("click", () => {
    if (!state.selected) return;
    copyText(state.selected.prompt);
  });
};

initFilters();
bindEvents();
renderPrompts();
