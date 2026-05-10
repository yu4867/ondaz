import "./styles.css";
import mainImage from "../main1.png";
import { setupMobileNav } from "./nav.js";

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

  <main id="top">
    <section class="hero">
      <div class="hero__media image-placeholder image-placeholder--photo" style="background-image: url('${mainImage}')"></div>
      <div class="hero__content">
        <p class="eyebrow">Coffee Truck Catering Service</p>
        <h1>행사장에 도착하는<br />시원한 커피 한 잔,<br /><span class="hero__brand">ONDAZ</span></h1>
        <p>
          기업 행사, 촬영 현장, 학교 축제, 브랜드 프로모션까지 필요한 곳으로 직접 찾아가는
          맞춤형 커피차 서비스를 준비합니다.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="/quote.html">견적문의</a>
          <a class="button button--ghost" href="/guide.html">이용 안내</a>
        </div>
      </div>
    </section>

    <section class="intro section">
      <div class="section-heading">
        <p class="eyebrow">Why ONDAZ</p>
        <h2>처음 상담부터 행사 종료까지 한 번에</h2>
        <p>
          ONDAZ는 행사 목적과 현장 상황에 맞춰 메뉴 구성, 운영 인원, 차량 동선,
          제공 수량을 함께 설계합니다.
        </p>
      </div>
      <div class="feature-grid">
        <article class="feature-card">
          <div class="feature-card__image image-placeholder"><span>서비스 이미지</span></div>
          <h3>현장 맞춤 운영</h3>
          <p>행사 규모, 시간대, 제공 방식에 따라 가장 효율적인 운영안을 제안합니다.</p>
        </article>
        <article class="feature-card">
          <div class="feature-card__image image-placeholder"><span>메뉴 이미지</span></div>
          <h3>다양한 음료 구성</h3>
          <p>커피, 논커피, 티, 시즌 음료까지 목적에 맞는 메뉴 라인업을 준비합니다.</p>
        </article>
        <article class="feature-card">
          <div class="feature-card__image image-placeholder"><span>행사 이미지</span></div>
          <h3>브랜드 경험 강화</h3>
          <p>컵 홀더, 배너, 차량 래핑 등 임시 브랜딩 요소를 활용할 수 있습니다.</p>
        </article>
      </div>
    </section>

    <section class="clients section">
      <div class="section-heading">
        <p class="eyebrow">Event Moments</p>
        <h2>다양한 현장에 어울리는 ONDAZ</h2>
        <p>
          기업 복지 이벤트, 팝업 스토어, 영화 촬영장, 캠퍼스 행사 등 커피가 필요한 순간을 함께합니다.
        </p>
      </div>
      <div class="gallery" aria-label="행사 이미지 갤러리">
        <div class="image-placeholder"><span>현장 이미지</span></div>
        <div class="image-placeholder"><span>브랜딩 이미지</span></div>
        <div class="image-placeholder"><span>음료 이미지</span></div>
        <div class="image-placeholder"><span>고객 이미지</span></div>
        <div class="image-placeholder"><span>차량 이미지</span></div>
        <div class="image-placeholder"><span>행사 이미지</span></div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
    <p>문의: ondaz@example.com · 상담시간: 평일 09:00 - 18:00</p>
  </footer>

  <a href="https://open.kakao.com/o/srnbrlui" class="kakao-fab" target="_blank" rel="noopener noreferrer" aria-label="카카오톡으로 문의하기">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path fill="#3C1E1E" d="M12 3C6.93 3 2.5 6.58 2.5 11c0 2.8 1.68 5.27 4.24 6.78L5.5 22l4.74-2.48c.56.08 1.14.12 1.76.12 5.07 0 9.5-3.58 9.5-8S17.07 3 12 3z"/>
    </svg>
    <span class="kakao-fab__label">카카오톡 문의</span>
  </a>
`;

setupMobileNav();
