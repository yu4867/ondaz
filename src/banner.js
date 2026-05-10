import "./styles.css";
import { setupMobileNav } from "./nav.js";

const NAV = `
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
        <a href="/quote.html" class="nav-btn nav-btn--primary">견적 문의</a>
      </div>
    </nav>
  </header>
`;

document.querySelector("#app").innerHTML = `
  ${NAV}

  <main>
    <section class="page-hero quote-page-hero">
      <p class="eyebrow">Work Guidelines</p>
      <h1>배너 안내</h1>
      <p>홍보물 제작 가이드 및 출력물 서비스를 안내드립니다.</p>
    </section>

    <!-- 작업 시 주의사항 -->
    <section class="section bn-guidelines">
      <div class="section-heading">
        <p class="eyebrow">Work Guidelines</p>
        <h2>작업 시 주의사항</h2>
        <p>홍보물 제작 시 반드시 확인해주세요</p>
      </div>
      <ul class="bn-guide-list">
        <li>홍보물 전달 : 원형스티커 <span class="bhl">7일 전</span>까지 / 나머지 파일 <span class="bhl">5일 전</span>까지 (완성파일로 보내주셔야합니다.)</li>
        <li>반드시 고화질 사진을 이용해 작업해주세요. (<span class="bhl">300dpi 이상</span>)</li>
        <li>스티커는 칼선(재단선) 없는 파일로 전송해주세요.</li>
        <li>파일은 <span class="bhl">JPG / AI / EPS / PSD</span> 형식으로 저장해서 전송해주세요.</li>
        <li>동영상 파일은 <span class="bhl">mp4 형식, 해상도 720</span>으로 작업해주세요. (고해상도는 재생 안됨)</li>
        <li>홍보물 전달 기한을 못 지킬 시, <span class="bhl">긴급출력비용 장당 2만원</span>이 발생합니다.</li>
      </ul>
    </section>

    <!-- 배치 가이드 -->
    <section class="section bn-layout">
      <div class="section-heading">
        <p class="eyebrow">Layout Guide</p>
        <h2>커피차 홍보물 배치 가이드</h2>
      </div>
      <div class="bn-layout-grid">
        <div class="bn-layout-card">
          <span class="bn-num">1</span>
          <strong>상단현수막</strong>
          <span>가로 2740mm × 세로 550mm</span>
        </div>
        <div class="bn-layout-card">
          <span class="bn-num">2</span>
          <strong>X배너</strong>
          <span>가로 600mm × 세로 1800mm</span>
        </div>
        <div class="bn-layout-card">
          <span class="bn-num">3</span>
          <strong>프로필 배너</strong>
          <span>가로 520mm × 세로 675mm</span>
        </div>
        <div class="bn-layout-card">
          <span class="bn-num">4</span>
          <strong>액자사진 3장</strong>
          <span>가로 150mm × 세로 200mm</span>
        </div>
        <div class="bn-layout-card">
          <span class="bn-num">5</span>
          <strong>원형스티커</strong>
          <span>지름 60mm<small>작업 시 바탕여백 70mm</small></span>
        </div>
        <div class="bn-layout-card">
          <span class="bn-num">6</span>
          <strong>우측 대형 배너</strong>
          <span>가로 920mm × 세로 920mm</span>
        </div>
        <div class="bn-layout-card bn-layout-card--wide">
          <span class="bn-num bn-num--dark">▶</span>
          <strong>동영상 (32인치 TV)</strong>
          <span>파일 또는 유튜브 링크</span>
        </div>
      </div>
      <p class="bn-layout-note">* 배치 번호는 위 번호대로 사용해주세요</p>
      <div class="bn-mail-box">
        <div class="bn-mail-row">
          <span class="bn-mail-label">파일 보내주실 메일</span>
          <strong>stdd8604@naver.com</strong>
        </div>
        <div class="bn-mail-row">
          <span class="bn-mail-label">제목</span>
          <strong>날짜, 아티스트 이름, 작품제목</strong>
        </div>
      </div>
    </section>

    <!-- 출력물 서비스 안내 -->
    <section class="section bn-print">
      <div class="section-heading">
        <p class="eyebrow">Print Service</p>
        <h2>출력물 서비스 안내</h2>
        <p>주문 금액 기준 서비스 품목 · 음료가격 또는 음료 + 디저트 금액 기준입니다.</p>
      </div>
      <div class="print-tier-grid">
        <div class="print-tier">
          <p class="print-tier__amount">60만원 이상</p>
          <ul class="print-tier__list">
            <li>상단 현수막</li>
            <li>X배너</li>
            <li>액자사진 3장</li>
          </ul>
        </div>
        <div class="print-tier">
          <p class="print-tier__amount">80만원 이상</p>
          <ul class="print-tier__list">
            <li>상단 현수막</li>
            <li>X배너</li>
            <li>액자사진 3장</li>
            <li>프로필 배너</li>
          </ul>
        </div>
        <div class="print-tier print-tier--accent">
          <p class="print-tier__amount">100만원 이상</p>
          <ul class="print-tier__list">
            <li>상단 현수막</li>
            <li>X배너</li>
            <li>액자사진 3장</li>
            <li>프로필 배너</li>
            <li>원형 스티커</li>
          </ul>
        </div>
      </div>

      <h3 class="print-extras__title">별도 제작 비용</h3>
      <div class="print-extras">
        <div><strong>X배너</strong><span>30,000원</span></div>
        <div><strong>프로필 배너</strong><span>20,000원</span></div>
        <div><strong>원형스티커</strong><span>30,000원</span></div>
        <div><strong>우측 대형 배너 (920×920mm)</strong><span>40,000원</span></div>
      </div>
      <div class="bn-notes">
        <p>* 출력물 디자인 완성파일은 평일기준 행사 5일 전까지 전달 부탁드립니다.</p>
        <p>* 긴급건인 경우 유선연락 부탁드립니다.</p>
      </div>
    </section>

    <!-- 디자이너 지원 -->
    <section class="section bn-designer">
      <div class="section-heading">
        <p class="eyebrow">Designer Support</p>
        <h2>디자인 작업이 어려우시다면?</h2>
        <p>전담 디자이너가 도와드립니다. 디자이너 연결 후 간단한 진행 절차를 안내드립니다.</p>
      </div>
      <div class="designer-card">
        <ul class="designer-card__list">
          <li><strong>디자이너 연결 비용 : 기본 30,000원</strong></li>
          <li>디자이너 샘플 디자인 중 선택 후 수정 진행됩니다.</li>
          <li>
            추가 수정 요청 시 비용이 발생할 수 있습니다.
            <ul class="designer-card__sublist">
              <li>A 간단한 수정 → 추가요금 5,000원</li>
              <li>B 새로운 디자인 제안 → 추가요금 10,000원 내외</li>
            </ul>
          </li>
        </ul>
        <div class="designer-card__cta">
          <p>디자이너 연결을 원하시는 분의 연락처를<br><strong>문의 양식의 &lt;디자이너 연결 희망란&gt;</strong>에 기재해주세요!</p>
          <a class="button button--primary" href="/quote.html">견적 문의하기</a>
        </div>
        <p class="designer-card__note">* 디자이너님 개인 스케줄에 따라 연결 불가할 수도 있는 점 참고 부탁드립니다.</p>
      </div>
    </section>

    <!-- 홍보물 예시 -->
    <section class="section bn-gallery">
      <div class="section-heading">
        <p class="eyebrow">Sample Gallery</p>
        <h2>홍보물 예시</h2>
      </div>
      <div class="bn-gallery-grid">
        <div class="bn-sample">
          <div class="image-placeholder bn-sample__img"><span>원형스티커 예시</span></div>
          <p class="bn-sample__label">원형스티커</p>
        </div>
        <div class="bn-sample">
          <div class="image-placeholder bn-sample__img"><span>상단현수막 예시</span></div>
          <p class="bn-sample__label">상단현수막</p>
        </div>
        <div class="bn-sample">
          <div class="image-placeholder bn-sample__img"><span>X배너 예시</span></div>
          <p class="bn-sample__label">X배너</p>
        </div>
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
