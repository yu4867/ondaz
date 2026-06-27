import "./styles.css";
import { setupMobileNav } from "./nav.js";
import basicMenuImage from "../image/menu/basic메뉴.png";
import standardMenuImage from "../image/menu/standard 메뉴.png";
import snackMenuImage from "../image/menu/스낵.png";
import bakeryMenuImage from "../image/menu/베이커리.png";

const renderMenuImage = ({ title, subtitle, image, alt, pending = false }) => `
  <article class="menu-image-card${pending ? " menu-image-card--pending" : ""}">
    <div class="menu-image-card__heading">
      <span>${subtitle}</span>
      <h3>${title}</h3>
    </div>
    <div class="menu-image-frame">
      ${image ? `<img src="${image}" alt="${alt}" loading="lazy" />` : `<div class="menu-image-placeholder">이미지 준비 중</div>`}
    </div>
  </article>
`;

document.querySelector("#app").innerHTML = `
  <div class="top-marquee" aria-label="ONDAZ 안내">
    <div class="top-marquee__track">
      <span>감도 높은 커피차 ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
      <span>감도 높은 커피차 ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
      <span>감도 높은 커피차 ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
      <span>감도 높은 커피차 ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
    </div>
  </div>

  <header class="site-header">
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
    <section class="page-hero menu-page-hero">
      <p class="eyebrow">Menu</p>
      <h1>메뉴</h1>
      <p>음료와 디저트 메뉴를 한눈에 확인해보세요.</p>
    </section>

    <section class="section menu-page-section menu-page-section--drink">
      <div class="section-heading">
        <p class="eyebrow">Drink Menu</p>
        <h2>음료 메뉴</h2>
      </div>
      <div class="menu-image-grid menu-image-grid--drink">
        ${renderMenuImage({
          title: "베이직 메뉴",
          subtitle: "Basic",
          image: basicMenuImage,
          alt: "ONDAZ 베이직 음료 메뉴",
        })}
        ${renderMenuImage({
          title: "스탠다드 메뉴",
          subtitle: "Standard",
          image: standardMenuImage,
          alt: "ONDAZ 스탠다드 음료 메뉴",
        })}
        ${renderMenuImage({
          title: "전메뉴",
          subtitle: "All Menu",
          image: null,
          alt: "ONDAZ 전메뉴",
          pending: true,
        })}
      </div>
    </section>

    <section class="section menu-page-section menu-page-section--dessert">
      <div class="section-heading">
        <p class="eyebrow">Dessert Menu</p>
        <h2>디저트 메뉴</h2>
      </div>
      <div class="menu-image-grid menu-image-grid--dessert">
        ${renderMenuImage({
          title: "스낵",
          subtitle: "Snack",
          image: snackMenuImage,
          alt: "ONDAZ 스낵 메뉴",
        })}
        ${renderMenuImage({
          title: "베이커리",
          subtitle: "Bakery",
          image: bakeryMenuImage,
          alt: "ONDAZ 베이커리 메뉴",
        })}
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