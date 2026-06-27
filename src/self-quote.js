import "./styles.css";
import { setupMobileNav } from "./nav.js";

const DRINKS = [
  { id: "premium",   label: "프리미엄 음료", price: 3500, unit: "잔" },
  { id: "signature", label: "시그니처 음료", price: 4000, unit: "잔" },
];

const DESSERTS = [
  { id: "none",      label: "선택 안 함",        price: 0,    min: 0,   unit: "" },
  { id: "croissant", label: "크로붕",             price: 3500, min: 70,  unit: "개" },
  { id: "bakery",    label: "베이커리 단품세트",  price: 4000, min: 70,  unit: "인분" },
  { id: "special",   label: "프리미엄 & 스페셜", price: 5000, min: 100, unit: "인분" },
];

const FEE = { trip: 70000, extraHour: 50000, generator: 70000, designer: 30000 };
const MIN_ORDER = 600000;

const state = {
  drinkId: "premium",
  drinkQty: 100,
  dessertId: "none",
  dessertQty: 70,
  extraHours: 0,
  hasPower: true,
  wantsDesigner: false,
};

function fmt(n) {
  return n.toLocaleString("ko-KR") + "원";
}

document.querySelector("#app").innerHTML = `
  <div class="top-marquee" aria-label="ONDAZ 안내"><div class="top-marquee__track"><span>감도 높은 커피차 ONDAZ</span><span>7월 여름 한정 30만 원 이벤트 🖤</span><span>감도 높은 커피차 ONDAZ</span><span>7월 여름 한정 30만 원 이벤트 🖤</span><span>감도 높은 커피차 ONDAZ</span><span>7월 여름 한정 30만 원 이벤트 🖤</span><span>감도 높은 커피차 ONDAZ</span><span>7월 여름 한정 30만 원 이벤트 🖤</span></div></div>  <header class="site-header">
    <a class="brand brand--crimson" href="/" aria-label="ONDAZ 홈">ONDAZ</a>
    <button class="hamburger" aria-label="메뉴 열기" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav class="nav" aria-label="주요 메뉴">
      <a href="/guide.html">이용 안내</a>
      <a href="/menu.html">메뉴</a>
      <a href="/banner.html">배너 안내</a>
      <a href="/event.html">이벤트</a>
      <div class="nav-btn-group">
        <a href="/self-quote.html" class="nav-btn nav-btn--ghost">셀프 견적</a>
        <a href="/quote.html" class="nav-btn nav-btn--primary">견적문의</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="page-hero quote-page-hero">
      <p class="eyebrow">Self Estimate</p>
      <h1>셀프 견적 계산기</h1>
      <p>예상 비용을 미리 계산해보세요. 실제 견적은 문의를 통해 확인하실 수 있습니다.</p>
    </section>

    <section class="section sq-section">
      <div class="sq-layout">

        <div class="sq-options">

          <div class="sq-card">
            <p class="sq-card__title">음료 선택 *</p>
            <div class="sq-drink-group">
              ${DRINKS.map(d => `
                <label class="sq-drink-card">
                  <input type="radio" name="drinkId" value="${d.id}" ${d.id === state.drinkId ? "checked" : ""} />
                  <span class="sq-drink-card__name">${d.label}</span>
                  <span class="sq-drink-card__price">${fmt(d.price)} / ${d.unit}</span>
                </label>
              `).join("")}
            </div>
            <label class="sq-qty-label">
              수량
              <div class="sq-qty-row">
                <div class="sq-qty-wrap">
                  <button class="sq-qty-btn" data-target="drinkQty" data-dir="-1">−</button>
                  <input id="drinkQty" class="sq-qty-input" type="number" value="${state.drinkQty}" min="1" />
                  <button class="sq-qty-btn" data-target="drinkQty" data-dir="1">+</button>
                </div>
              </div>
            </label>
          </div>

          <div class="sq-card">
            <p class="sq-card__title">디저트 선택</p>
            <div class="sq-dessert-group">
              ${DESSERTS.map(d => `
                <label class="sq-dessert-row">
                  <input type="radio" name="dessertId" value="${d.id}" ${d.id === state.dessertId ? "checked" : ""} />
                  <span class="sq-dessert-row__name">${d.label}</span>
                  ${d.price > 0 ? `<span class="sq-dessert-row__price">${fmt(d.price)} / ${d.unit} · 최소 ${d.min}${d.unit}</span>` : ""}
                </label>
              `).join("")}
            </div>
            <label class="sq-qty-label" id="dessertQtyWrap" style="display:none">
              수량
              <div class="sq-qty-row">
                <div class="sq-qty-wrap">
                  <button class="sq-qty-btn" data-target="dessertQty" data-dir="-1">−</button>
                  <input id="dessertQty" class="sq-qty-input" type="number" value="${state.dessertQty}" min="1" />
                  <button class="sq-qty-btn" data-target="dessertQty" data-dir="1">+</button>
                </div>
                <small id="dessertQtyHint" class="sq-hint"></small>
              </div>
            </label>
          </div>

          <div class="sq-card">
            <p class="sq-card__title">추가 옵션</p>

            <div class="sq-opt-row">
              <div class="sq-opt-row__label">
                추가 운영 시간
                <small>기본 2시간 포함 · 추가 ${fmt(FEE.extraHour)} / 시간</small>
              </div>
              <div class="sq-stepper">
                <button class="sq-qty-btn" data-target="extraHours" data-dir="-1">−</button>
                <span id="extraHoursDisplay">0시간</span>
                <button class="sq-qty-btn" data-target="extraHours" data-dir="1">+</button>
              </div>
            </div>

            <div class="sq-opt-row">
              <div class="sq-opt-row__label">
                전기 사용 가능 여부
                <small>불가 시 발전기 대여 ${fmt(FEE.generator)} 추가</small>
              </div>
              <div class="sq-pill-group">
                <label class="sq-pill"><input type="radio" name="hasPower" value="yes" checked /> 가능</label>
                <label class="sq-pill"><input type="radio" name="hasPower" value="no" /> 불가</label>
              </div>
            </div>

            <div class="sq-opt-row">
              <div class="sq-opt-row__label">
                디자이너 연결
                <small>홍보물 디자인 제작 · ${fmt(FEE.designer)}</small>
              </div>
              <label class="sq-pill">
                <input type="checkbox" id="wantsDesigner" /> 희망
              </label>
            </div>
          </div>

        </div>

        <div class="sq-result-wrap">
          <div class="sq-result" id="sqResult"></div>
        </div>

      </div>
    </section>
  </main>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
    <p>문의: yu4867@naver.com · 연락처: 0504-0802-2129</p>
  </footer>

  <a href="tel:05040802129" class="phone-fab" aria-label="전화로 문의하기">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="#ffffff" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
    <span class="phone-fab__label">전화 문의</span>
  </a>

  <a href="https://open.kakao.com/o/srnbrlui" class="kakao-fab" target="_blank" rel="noopener noreferrer" aria-label="카카오톡으로 문의하기">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path fill="#3C1E1E" d="M12 3C6.93 3 2.5 6.58 2.5 11c0 2.8 1.68 5.27 4.24 6.78L5.5 22l4.74-2.48c.56.08 1.14.12 1.76.12 5.07 0 9.5-3.58 9.5-8S17.07 3 12 3z"/>
    </svg>
    <span class="kakao-fab__label">카카오톡 문의</span>
  </a>
`;

setupMobileNav();

// ── 결과 렌더 ──────────────────────────────────────────────

function renderResult() {
  const drink = DRINKS.find(d => d.id === state.drinkId);
  const dessert = DESSERTS.find(d => d.id === state.dessertId);

  const drinkCost = drink.price * state.drinkQty;
  const dessertCost = dessert.id !== "none" ? dessert.price * state.dessertQty : 0;
  const menuAmt = drinkCost + dessertCost;
  const belowMin = menuAmt < MIN_ORDER;

  const extraHourCost = state.extraHours * FEE.extraHour;
  const generatorCost = state.hasPower ? 0 : FEE.generator;
  const designerCost = state.wantsDesigner ? FEE.designer : 0;

  const subtotal = menuAmt + FEE.trip + extraHourCost + generatorCost + designerCost;
  const vat = Math.round(subtotal * 0.1);
  const total = subtotal + vat;

  const rows = [
    { label: drink.label, detail: `${state.drinkQty}${drink.unit} × ${fmt(drink.price)}`, value: drinkCost },
    dessert.id !== "none" && { label: dessert.label, detail: `${state.dessertQty}${dessert.unit} × ${fmt(dessert.price)}`, value: dessertCost },
    { label: "기본 출장비", detail: "지역에 따라 추가 발생", value: FEE.trip },
    state.extraHours > 0 && { label: `추가 운영 ${state.extraHours}시간`, detail: `${fmt(FEE.extraHour)} × ${state.extraHours}`, value: extraHourCost },
    !state.hasPower && { label: "발전기 대여료", detail: "", value: FEE.generator },
    state.wantsDesigner && { label: "디자이너 연결", detail: "", value: FEE.designer },
  ].filter(Boolean);

  document.getElementById("sqResult").innerHTML = `
    <p class="sq-result__title">예상 견적</p>
    ${belowMin ? `<div class="sq-warning">최소 주문 금액(${fmt(MIN_ORDER)})에 미달합니다. 수량을 늘려주세요.</div>` : ""}
    <div class="sq-breakdown">
      ${rows.map(r => `
        <div class="sq-row">
          <span class="sq-row__label">${r.label}${r.detail ? `<small>${r.detail}</small>` : ""}</span>
          <span class="sq-row__value">${fmt(r.value)}</span>
        </div>
      `).join("")}
    </div>
    <div class="sq-total-block">
      <div class="sq-row sq-row--muted"><span>소계 (VAT 별도)</span><span>${fmt(subtotal)}</span></div>
      <div class="sq-row sq-row--muted"><span>부가세 10%</span><span>${fmt(vat)}</span></div>
      <div class="sq-row sq-row--total"><span>예상 합계</span><span>${fmt(total)}</span></div>
    </div>
    <p class="sq-disclaimer">참고 단가 기준의 예상 금액으로 실제 견적과 다를 수 있습니다.<br>출장비는 지역에 따라 추가될 수 있습니다.</p>
    <a class="button button--primary sq-cta" href="/quote.html">정식 견적 문의하기</a>
  `;
}

// ── 힌트 업데이트 ───────────────────────────────────────────


function updateDessertHint() {
  const dessert = DESSERTS.find(d => d.id === state.dessertId);
  if (dessert.id === "none") return;
  const hint = document.getElementById("dessertQtyHint");
  const input = document.getElementById("dessertQty");
  if (state.dessertQty < dessert.min) {
    hint.textContent = `최소 ${dessert.min}${dessert.unit} 이상 필요합니다`;
    hint.style.color = "var(--coffee)";
    input.style.borderColor = "var(--coffee)";
  } else {
    hint.textContent = `최소 ${dessert.min}${dessert.unit}`;
    hint.style.color = "";
    input.style.borderColor = "";
  }
}

function updateDessertQtyVisibility() {
  const wrap = document.getElementById("dessertQtyWrap");
  wrap.style.display = state.dessertId !== "none" ? "grid" : "none";
}

function updateExtraHoursDisplay() {
  document.getElementById("extraHoursDisplay").textContent =
    state.extraHours === 0 ? "없음" : `${state.extraHours}시간`;
}

// ── 이벤트 ──────────────────────────────────────────────────

document.querySelectorAll("input[name='drinkId']").forEach(el => {
  el.addEventListener("change", () => {
    state.drinkId = el.value;
    renderResult();
  });
});

document.getElementById("drinkQty").addEventListener("input", e => {
  state.drinkQty = Math.max(1, parseInt(e.target.value) || 1);
  e.target.value = state.drinkQty;
  renderResult();
});

document.querySelectorAll("input[name='dessertId']").forEach(el => {
  el.addEventListener("change", () => {
    state.dessertId = el.value;
    const dessert = DESSERTS.find(d => d.id === state.dessertId);
    if (dessert.id !== "none" && state.dessertQty < dessert.min) {
      state.dessertQty = dessert.min;
      document.getElementById("dessertQty").value = state.dessertQty;
    }
    updateDessertQtyVisibility();
    updateDessertHint();
    renderResult();
  });
});

document.getElementById("dessertQty").addEventListener("input", e => {
  state.dessertQty = Math.max(1, parseInt(e.target.value) || 1);
  e.target.value = state.dessertQty;
  updateDessertHint();
  renderResult();
});

document.querySelectorAll("input[name='hasPower']").forEach(el => {
  el.addEventListener("change", () => {
    state.hasPower = el.value === "yes";
    renderResult();
  });
});

document.getElementById("wantsDesigner").addEventListener("change", e => {
  state.wantsDesigner = e.target.checked;
  renderResult();
});

// +/- 버튼 공통 처리
document.querySelectorAll(".sq-qty-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    const dir = parseInt(btn.dataset.dir);

    if (target === "drinkQty") {
      state.drinkQty = Math.max(1, state.drinkQty + dir * 10);
      document.getElementById("drinkQty").value = state.drinkQty;
    } else if (target === "dessertQty") {
      state.dessertQty = Math.max(1, state.dessertQty + dir * 10);
      document.getElementById("dessertQty").value = state.dessertQty;
      updateDessertHint();
    } else if (target === "extraHours") {
      state.extraHours = Math.max(0, Math.min(4, state.extraHours + dir));
      updateExtraHoursDisplay();
    }
    renderResult();
  });
});

// ── 초기 렌더 ───────────────────────────────────────────────
renderResult();
