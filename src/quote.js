import "./styles.css";
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

  <main>
    <section class="page-hero quote-page-hero">
      <p class="eyebrow">Quote Request</p>
      <h1>견적 문의서</h1>
      <p>* 표시된 항목은 필수 입력 사항입니다.</p>
    </section>

    <section class="quote-page-section section">
      <div class="quote-page-form-wrap">
        <form class="quote-form" id="quoteForm">
          <p class="quote-section-label">기본 정보</p>
          <label>
            주문자 성함 또는 회사명 *
            <input name="customer" type="text" placeholder="홍길동 / (주)스탠다드" required />
          </label>
          <label>
            연락처
            <input name="phone" type="tel" placeholder="010-1234-5678" />
          </label>
          <label>
            받는 분 *
            <input name="recipient" type="text" placeholder="받는 분 이름" required />
          </label>
          <label>
            작품명 및 프로그램명 *
            <input name="program" type="text" placeholder="작품명 또는 프로그램명" required />
          </label>

          <p class="quote-section-label">행사 정보</p>
          <label class="quote-form__wide">
            행사 종류 *
            <input name="eventType" type="text" placeholder="간략한 행사내용" required />
          </label>
          <label>
            서포트 날짜 *
            <input name="supportDate" type="date" required />
          </label>
          <label>
            시작시간 *
            <input name="startTime" type="text" placeholder="예: 오전 10시" required />
            <small>기본 진행 2시간</small>
          </label>
          <label class="quote-form__wide">
            주소 *
            <input name="address" type="text" placeholder="행사 장소 주소를 입력해주세요" required />
          </label>
          <fieldset class="quote-form__wide">
            <legend>전기사용 가능여부 *</legend>
            <label><input type="radio" name="power" value="가능" required /> 가능</label>
            <label><input type="radio" name="power" value="불가능" /> 불가능</label>
            <label><input type="radio" name="power" value="모르겠음" /> 모르겠음</label>
          </fieldset>

          <p class="quote-section-label">주문 정보</p>
          <label class="quote-form__wide">
            메뉴 및 수량 *
            <textarea name="menu" placeholder="예: 시그니처 음료메뉴 100잔, 크로붕 100개" required></textarea>
            <small>메뉴안내 페이지를 참고해주세요. 메뉴 관련 추가 문의가 있으시면 함께 적어주세요.</small>
          </label>
          <label class="quote-form__wide">
            기타 문의사항
            <textarea name="message" placeholder="추가로 궁금한 점이나 요청사항을 적어주세요."></textarea>
          </label>
          <fieldset class="quote-form__wide">
            <legend>디자이너 연결 희망</legend>
            <label><input type="radio" name="designer" value="희망" /> 희망</label>
            <label><input type="radio" name="designer" value="미희망" /> 미희망</label>
            <p>홍보물 디자인 제작을 도와드리는 디자이너 연결 서비스입니다. (기본 30,000원)</p>
          </fieldset>

          <div class="quote-notice quote-form__wide">
            <h3>안내사항</h3>
            <p>문의하기 버튼을 누르시면 작성하신 내용이 팝업으로 정리됩니다.</p>
            <p>카카오톡 문의하기 버튼을 누르면 내용이 자동 복사되고 채팅창으로 이동합니다.</p>
          </div>
          <button type="submit">문의하기</button>
        </form>
      </div>
    </section>
  </main>

  <div class="quote-modal-overlay" id="quoteModal" role="dialog" aria-modal="true">
    <div class="quote-modal">
      <div class="quote-modal__header">
        <h3 class="quote-modal__title">견적 문의 내용 확인</h3>
        <button class="quote-modal__close" id="quoteModalClose" aria-label="닫기">✕</button>
      </div>
      <pre class="quote-modal__content" id="quoteModalContent"></pre>
      <div class="quote-modal__guide">
        <p>아래 버튼을 누르면 내용이 자동으로 복사됩니다.<br>카카오톡 채팅창에서 <strong>붙여넣기(Ctrl+V)</strong> 해주세요!</p>
      </div>
      <button class="quote-modal__cta" id="quoteModalCta">카카오톡 문의하기</button>
    </div>
  </div>

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

const quoteForm = document.querySelector("#quoteForm");
const quoteModal = document.querySelector("#quoteModal");
const quoteModalContent = document.querySelector("#quoteModalContent");
const quoteModalClose = document.querySelector("#quoteModalClose");
const quoteModalCta = document.querySelector("#quoteModalCta");

let quoteText = "";

function closeModal() {
  quoteModal.classList.remove("is-open");
  document.body.style.overflow = "";
}

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(quoteForm);
  const lines = [
    "[ONDAZ 견적 문의서]",
    `주문자 성함 또는 회사명: ${form.get("customer") || ""}`,
    `연락처: ${form.get("phone") || ""}`,
    `받는 분: ${form.get("recipient") || ""}`,
    `작품명 및 프로그램명: ${form.get("program") || ""}`,
    `행사 종류: ${form.get("eventType") || ""}`,
    `서포트 날짜: ${form.get("supportDate") || ""}`,
    `주소: ${form.get("address") || ""}`,
    `시작시간: ${form.get("startTime") || ""}`,
    "기본 진행: 2시간",
    `전기사용 가능여부: ${form.get("power") || ""}`,
    `메뉴 및 수량: ${form.get("menu") || ""}`,
    `기타 문의사항: ${form.get("message") || ""}`,
    `디자이너 연결 희망: ${form.get("designer") || ""}`,
  ];

  quoteText = lines.join("\n");
  quoteModalContent.textContent = quoteText;
  quoteModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

quoteModalClose.addEventListener("click", closeModal);
quoteModal.addEventListener("click", (e) => {
  if (e.target === quoteModal) closeModal();
});

quoteModalCta.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(quoteText);
  } catch {
    // clipboard API 미지원 환경
  }
  window.open("https://open.kakao.com/o/srnbrlui", "_blank", "noopener,noreferrer");
});
