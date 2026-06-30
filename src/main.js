import "./styles.css";
import mainImage from "../main2.png";
import { setupMobileNav } from "./nav.js";
import whyImage1 from "../image/1.png";
import whyImage2 from "../image/2.png";
import whyImage3 from "../image/3.png";
import whyImage4 from "../image/4.jpg";
import whyImage5 from "../image/5.png";
import whyImage6 from "../image/6.png";

const whyImages = [whyImage1, whyImage2, whyImage3, whyImage4, whyImage5, whyImage6];

document.querySelector("#app").innerHTML = `
  <div class="top-marquee" aria-label="ONDAZ 안내">
    <div class="top-marquee__track">
      <span>오늘의 공간을 카페로, ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
      <span>오늘의 공간을 카페로, ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
      <span>오늘의 공간을 카페로, ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
      <span>오늘의 공간을 카페로, ONDAZ</span>
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

  <main id="top">
    <section class="hero">
      <div class="hero__media image-placeholder image-placeholder--photo" style="background-image: url('${mainImage}')"></div>
      <div class="hero__content">
        <p class="eyebrow">Coffee Truck Catering Service</p>
        <h1>오늘의 공간을 카페로,<br /><span class="hero__brand">ONDAZ</span></h1>
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

    <section class="intro section why-image-section" aria-label="Why ONDAZ 이미지 슬라이드">
      <div class="section-heading why-slider-heading">
        <p class="eyebrow">Why ONDAZ</p>
        <h2>다양한 행사와 함께하는 온다즈</h2>
        <p>행사 목적과 현장 상황에 맞춰 메뉴 구성, 차량 동선, 제공 수량을 함께 고민합니다.</p>
      </div>
      <div class="why-slider">
        <div class="why-slider__track">
          ${[...whyImages, ...whyImages].map((image, index) => `
            <figure class="why-slide">
              <img src="${image}" alt="ONDAZ 현장 이미지 ${(index % whyImages.length) + 1}" loading="lazy" />
            </figure>
          `).join("")}
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
    <p>문의: yu4867@naver.com · 연락처: 0508-9306-5718</p>
  </footer>

  <a href="tel:05040802129" class="phone-fab" aria-label="전화로 문의하기">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="#ffffff" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
    <span class="phone-fab__label">전화 문의</span>
  </a>

  <a href="http://pf.kakao.com/_IcCPX/chat" class="kakao-fab" target="_blank" rel="noopener noreferrer" aria-label="카카오톡으로 문의하기">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path fill="#3C1E1E" d="M12 3C6.93 3 2.5 6.58 2.5 11c0 2.8 1.68 5.27 4.24 6.78L5.5 22l4.74-2.48c.56.08 1.14.12 1.76.12 5.07 0 9.5-3.58 9.5-8S17.07 3 12 3z"/>
    </svg>
    <span class="kakao-fab__label">카카오톡 문의</span>
  </a>
`;

setupMobileNav();
