import "./styles.css";
import { setupMobileNav } from "./nav.js";

const categories = [
  {
    name: "COFFEE",
    premium: ["에스프레소", "아메리카노", "카페라떼", "카페모카", "바닐라라떼", "카라멜마끼야또", "헤이즐넛라떼", "아이스티샷"],
    signature: ["에스프레소", "아메리카노", "카페라떼", "카페모카", "바닐라라떼", "카라멜마끼야또", "헤이즐넛라떼", "아이스티샷", "샷제주말차라떼", "민트카페모카", "토피넛카페라떼"],
  },
  {
    name: "LATTE",
    premium: ["딥초코라떼", "밀크티라떼", "제주말차라떼", "방앗간곡물라떼", "고구마라떼", "딸기라떼"],
    signature: ["딥초코라떼", "밀크티라떼", "제주말차라떼", "방앗간곡물라떼", "고구마라떼", "딸기라떼", "흑임자라떼", "토피넛라떼", "민트초코라떼", "자두밀크티"],
  },
  {
    name: "ADE",
    premium: ["레몬에이드", "자몽에이드", "오렌지에이드", "청포도에이드", "애플망고에이드"],
    signature: ["레몬에이드", "자몽에이드", "오렌지에이드", "청포도에이드", "애플망고에이드", "패션후르츠에이드", "블루베리에이드", "자두에이드"],
  },
  {
    name: "TEA",
    premium: ["레몬티", "자몽티", "유자차", "페퍼민트", "캐모마일", "얼그레이", "복숭아아이스티", "레몬아이스티"],
    signature: ["레몬티", "자몽티", "유자차", "페퍼민트", "캐모마일", "얼그레이", "복숭아아이스티", "레몬아이스티"],
  },
  {
    name: "BLENDING TEA",
    note: "only Ice",
    premium: [],
    signature: ["블루베리 오미자차", "블루베리 청귤차", "리치 캐모마일", "리치 얼그레이"],
  },
  {
    name: "DRINKING YOGURT",
    note: "only Ice",
    premium: [],
    signature: ["딸기 요플레", "자두 요플레", "블루베리 요플레", "패션후르츠 요플레"],
  },
];

const renderItems = (items) =>
  items.length
    ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : `<p class="menu-empty">시그니처 전용</p>`;

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="ONDAZ 홈">ONDAZ</a>
    <button class="hamburger" aria-label="메뉴 열기" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav class="nav" aria-label="주요 메뉴">
      <a href="/guide.html">이용 안내</a>
      <a href="/menu.html">메뉴</a>
      <a href="/banner.html">배너 안내</a>
      <div class="nav-btn-group">
        <a href="/self-quote.html" class="nav-btn nav-btn--ghost">셀프 견적</a>
        <a href="/quote.html" class="nav-btn nav-btn--primary">견적문의</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="page-hero menu-page-hero">
      <p class="eyebrow">Drink Menu</p>
      <h1>음료 메뉴</h1>
      <p>프리미엄 음료메뉴와 시그니처 음료메뉴를 한눈에 비교해 보세요.</p>
    </section>

    <section class="section menu-compare-section">
      <div class="menu-plan-grid">
        <article class="menu-plan">
          <span class="menu-plan__label">PREMIUM</span>
          <h2>프리미엄 음료메뉴</h2>
          <strong>3,500원</strong>
        </article>
        <article class="menu-plan menu-plan--accent">
          <span class="menu-plan__label">SIGNATURE</span>
          <h2>시그니처 음료메뉴</h2>
          <strong>4,000원</strong>
        </article>
      </div>

      <div class="menu-comparison">
        <div class="menu-comparison__head">
          <span>Category</span>
          <span>Premium</span>
          <span>Signature</span>
        </div>
        ${categories
          .map(
            (category) => `
              <article class="menu-row">
                <div class="menu-category">
                  <h3>${category.name}</h3>
                  ${category.note ? `<small>(${category.note})</small>` : ""}
                </div>
                <div class="menu-column menu-column--premium">
                  ${renderItems(category.premium)}
                </div>
                <div class="menu-column menu-column--signature">
                  ${renderItems(category.signature)}
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="section dessert-menu-section">
      <div class="section-heading">
        <p class="eyebrow">Single Bakery Set</p>
        <h2>디저트 메뉴</h2>
        <p>음료 메뉴는 별도 선택이며, 주문 메뉴 안에서 5가지를 선택할 수 있습니다.</p>
      </div>

      <div class="dessert-grid">
        <article class="dessert-card">
          <span>튀김 세트 (5종)</span>
          <strong>4,000원</strong>
        </article>
        <article class="dessert-card">
          <span>베이커리 세트 (5종)</span>
          <strong>6,000원</strong>
        </article>
        <article class="dessert-card dessert-card--accent">
          <span>디저트 세트 (5종)</span>
          <strong>6,000원</strong>
        </article>
      </div>

      <div class="dessert-note">
        <p>주인공 베이커리 5종 박스 제공</p>
        <p>70인분 이상 주문 가능</p>
        <p>음료 메뉴 별도 선택</p>
        <p>주문 메뉴 안에서 5가지 선택</p>
      </div>
    </section>
  </main>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
    <p>문의: ondaz@example.com · 상담시간: 평일 09:00 - 18:00</p>
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
