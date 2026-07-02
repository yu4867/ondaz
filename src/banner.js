import "./styles.css";
import printGuideImage from "../image/출력물 안내.png";
import { setupMobileNav } from "./nav.js";
import circleSticker1 from "../image/출력물 안내/원형스티커 (1).png";
import circleSticker2 from "../image/출력물 안내/원형스티커 (2).png";
import circleSticker3 from "../image/출력물 안내/원형스티커 (3).png";
import circleSticker4 from "../image/출력물 안내/원형스티커 (4).png";
import circleSticker5 from "../image/출력물 안내/원형스티커 (5).png";
import horizontalBanner1 from "../image/출력물 안내/가로현수막 (1).png";
import horizontalBanner2 from "../image/출력물 안내/가로현수막 (2).png";
import horizontalBanner3 from "../image/출력물 안내/가로현수막 (3).png";
import horizontalBanner4 from "../image/출력물 안내/가로현수막 (4).png";
import horizontalBanner5 from "../image/출력물 안내/가로현수막 (5).png";
import banner1 from "../image/출력물 안내/현수막(1).png";
import banner2 from "../image/출력물 안내/현수막(2).png";
import banner3 from "../image/출력물 안내/현수막(3).png";
import banner4 from "../image/출력물 안내/현수막(4).png";
import banner5 from "../image/출력물 안내/현수막(5).png";

const circleStickerSamples = [circleSticker1, circleSticker2, circleSticker3, circleSticker4, circleSticker5];
const horizontalBannerSamples = [horizontalBanner1, horizontalBanner2, horizontalBanner3, horizontalBanner4, horizontalBanner5];
const bannerSamples = [banner1, banner2, banner3, banner4, banner5];

const NAV = `
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
`;

document.querySelector("#app").innerHTML = `
  ${NAV}

  <main>
<section class="section bn-guidelines">
      <div class="section-heading">
        <p class="eyebrow">Work Guidelines</p>
        <h2>배너 안내</h2>
        <p>출력물 제작 요청 시 반드시 확인해주세요.</p>
      </div>
      <figure class="bn-guide-image">
        <img src="${printGuideImage}" alt="커피차 출력물 안내" loading="lazy" />
      </figure>
      <div class="bn-guide-grid">
        <div class="bn-guide-card">
          <span class="bn-guide-card__label">권장 이미지 해상도</span>
          <strong>300dpi 이상</strong>
          <span>선명한 출력물을 위해</br>고화질 원본 이미지로 작업해주세요.</span>
        </div>
        <div class="bn-guide-card bn-guide-card--file-type">
          <span class="bn-guide-card__label">전달 가능 파일 형식</span>
          <strong>AI / PSD / EPS / PDF / JPG / PNG</strong>
          <span>가능하면 편집 가능한 원본 파일 또는 고해상도 완성 파일로 전달해주세요.</span>
        </div>
        <div class="bn-guide-card">
          <span class="bn-guide-card__label">스티커 파일 주의</span>
          <strong>칼선 없는 파일</strong>
          <span>원형스티커는 재단선 없이</br>완성 이미지로 보내주세요.</span>
        </div>
        <div class="bn-guide-card bn-guide-card--wide">
          <span class="bn-guide-card__label">홍보물 전달 기한</span>
          <div class="bn-guide-card__rows">
            <span>원형스티커: <strong>행사 7일 전까지</strong></span>
            <span>그 외 출력물: <strong>행사 5일 전까지</strong></span>
          </div>
        </div>
        <div class="bn-guide-card bn-guide-card--fee bn-guide-card--mail">
          <span class="bn-guide-card__label">파일 보내주실 메일</span>
          <strong>yu4867@naver.com</strong>
          <span>메일 제목: 날짜, 행사명</br>(작품명 or 서포트 받는 분)</span>
        </div>
        <div class="bn-guide-card">
          <span class="bn-guide-card__label">영상 파일 기준</span>
          <strong>mp4 형식 / 해상도 720</strong>
          <span>고해상도 영상은</br>현장 장비에서 재생이 어려울 수 있습니다.</span>
        </div>
        <div class="bn-guide-card bn-guide-card--fee">
          <span class="bn-guide-card__label">긴급 출력 비용</span>
          <strong>장당 20,000원</strong>
          <span>전달 기한을 넘기는 경우</br>비용이 발생할 수 있습니다.</span>
        </div>
        <div class="bn-guide-card bn-guide-card--fee">
          <span class="bn-guide-card__label">디자이너 연결 비용</span>
          <strong>기본 30,000원</strong>
          <span>디자인 작업이 어려우신 경우</br>추가 가능합니다.</span>
        </div>
      </div>
    </section>

    <section class="section bn-print" id="print-service">
      <div class="section-heading">
        <p class="eyebrow">Print Service</p>
        <h2>출력물 서비스</h2>
        <p>주문 금액 기준 서비스 품목입니다.</br> <strong>음료가격</strong> 또는 <strong>음료 + 디저트 금액</strong> 기준으로 적용됩니다.</p>
      </div>
      <div class="print-tier-grid">
        <div class="print-tier">
          <p class="print-tier__amount">60만 원 이상</p>
          <ul class="print-tier__list">
            <li>오른쪽 현수막</li>
            <li>32인치 모니터</li>
          </ul>
        </div>
        <div class="print-tier">
          <p class="print-tier__amount">80만원 이상</p>
          <ul class="print-tier__list">
            <li><strong>왼쪽 현수막</strong></li>
            <li>오른쪽 현수막</li>
            <li>32인치 모니터</li>
            <li>원형스티커</li>
          </ul>
        </div>
        <div class="print-tier print-tier--accent">
          <p class="print-tier__amount">100만원 이상</p>
          <ul class="print-tier__list">
            <li><strong>왼쪽 현수막</strong></li>
            <li>오른쪽 현수막</li>
            <li>32인치 모니터</li>
            <li><strong>X배너</strong></li>
            <li><strong>원형 스티커</strong></li>
          </ul>
        </div>
      </div>
      <div class="bn-notes">
      </div>
    </section>

    <section class="section bn-gallery">
      <div class="section-heading">
        <p class="eyebrow">Sample Gallery</p>
        <h2>홍보물 예시</h2>
      </div>
      <div class="bn-gallery-categories">
        <section class="bn-gallery-category">
          <h3>원형스티커</h3>
          <div class="bn-gallery-grid">
            ${circleStickerSamples.map((image, index) => `
              <figure class="bn-sample">
                <img class="bn-sample__img" src="${image}" alt="원형스티커 예시 ${index + 1}" loading="lazy" />
                <figcaption class="bn-sample__label">원형스티커 ${index + 1}</figcaption>
              </figure>
            `).join("")}
          </div>
        </section>

        <section class="bn-gallery-category">
          <h3>가로현수막</h3>
          <div class="bn-gallery-grid">
            ${horizontalBannerSamples.map((image, index) => `
              <figure class="bn-sample bn-sample--banner">
                <img class="bn-sample__img" src="${image}" alt="가로현수막 예시 ${index + 1}" loading="lazy" />
                <figcaption class="bn-sample__label">가로현수막 ${index + 1}</figcaption>
              </figure>
            `).join("")}
          </div>
        </section>

        <section class="bn-gallery-category">
          <h3>현수막</h3>
          <div class="bn-gallery-grid">
            ${bannerSamples.map((image, index) => `
              <figure class="bn-sample bn-sample--banner">
                <img class="bn-sample__img" src="${image}" alt="현수막 예시 ${index + 1}" loading="lazy" />
                <figcaption class="bn-sample__label">현수막 ${index + 1}</figcaption>
              </figure>
            `).join("")}
          </div>
        </section>

        <section class="bn-gallery-category">
          <h3>X배너</h3>
          <div class="bn-gallery-empty">샘플 준비 중</div>
        </section>
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
