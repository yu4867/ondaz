import "./styles.css";
import { setupMobileNav } from "./nav.js";

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

  <main>
    <section class="page-hero quote-page-hero">
      <p class="eyebrow">Quote Request</p>
      <h1>프로젝트 상담 및 견적문의</h1>
      <p>* 아래 항목을 남겨주시면 확인 후 빠르게 안내드리겠습니다.</p>
    </section>

    <section class="quote-page-section section">
      <div class="quote-page-form-wrap">
        <form class="quote-form" id="quoteForm">
          <p class="quote-section-label">신청자 정보를 입력해주세요</p>
          <label>
            신청자명 / 업체명 / 담당자명 *
            <input name="customer" type="text" placeholder="예: 온다즈 / 홍길동" required />
          </label>
          <label>
            연락처
            <input name="phone" type="tel" placeholder="010-1234-5678" />
          </label>
          <label>
            수령자명 *
            <input name="recipient" type="text" placeholder="현장에서 받을 분 성함" required />
          </label>
          <label>
            행사명 / 프로그램명 *
            <input name="program" type="text" placeholder="예: 팬미팅, 촬영장, 기업행사" required />
          </label>

          <p class="quote-section-label">행사 정보를 입력해주세요</p>
          <label class="quote-form__wide">
            행사 종류 *
            <input name="eventType" type="text" placeholder="예: 촬영장 서포트, 기업 행사, 학교 축제" required />
          </label>
          <label>
            지원 날짜 *
            <input name="supportDate" type="date" required />
          </label>
          <label>
            시작 시간 *
            <input name="startTime" type="text" placeholder="예: 오전 10시" required />
            <small>세팅은 시작 시간 약 2시간 전부터 진행됩니다.</small>
          </label>
          <label class="quote-form__wide">
            행사 장소 *
            <input name="address" type="text" placeholder="행사 장소의 정확한 주소를 입력해주세요." required />
          </label>
          <fieldset class="quote-form__wide">
            <legend>전기 사용 가능 여부 *</legend>
            <label><input type="radio" name="power" value="전기 사용 가능" required /> 전기 사용 가능</label>
            <label><input type="radio" name="power" value="전기 사용 불가" /> 전기 사용 불가</label>
            <label><input type="radio" name="power" value="현장 확인 필요" /> 현장 확인 필요</label>
          </fieldset>

          <p class="quote-section-label">메뉴 및 요청사항을 입력해주세요</p>
          <label class="quote-form__wide">
            희망 메뉴 / 수량 *
            <textarea name="menu" placeholder="예: 아메리카노 100잔, 라떼 100잔" required></textarea>
            <small>메뉴와 수량이 확정되지 않았다면 예상 인원과 선호 메뉴를 적어주세요. 상황에 맞춰 추천드리겠습니다.</small>
          </label>
          <label class="quote-form__wide">
            추가 요청사항
            <textarea name="message" placeholder="배너, 스티커, 디저트, 현장 운영 관련 요청사항을 적어주세요."></textarea>
          </label>
          <fieldset class="quote-form__wide">
            <legend>디자이너 제작물 요청</legend>
            <label><input type="radio" name="designer" value="요청" /> 요청</label>
            <label><input type="radio" name="designer" value="요청 안 함" /> 요청 안 함</label>
            <p>배너나 스티커 디자인이 필요한 경우 선택해주세요. 디자인 제작은 별도 비용이 발생할 수 있습니다. (기본 30,000원)</p>
          </fieldset>

          <div class="quote-notice quote-form__wide">
            <h3>확인해주세요</h3>
            <p>견적문의 제출 후 입력하신 내용을 복사해 카카오톡 문의로 이동합니다. 카카오톡 채팅방에 붙여넣어 주시면 접수가 완료됩니다.</p>
            <p>일정과 장소, 메뉴 구성에 따라 최종 견적이 달라질 수 있으며, 세부 내용 확인 후 정확한 금액을 안내드립니다.</p>
          </div>
          <button type="submit">견적문의 내용 복사하기</button>
        </form>
      </div>
    </section>
  </main>

  <div class="quote-modal-overlay" id="quoteModal" role="dialog" aria-modal="true">
    <div class="quote-modal">
      <div class="quote-modal__header">
        <h3 class="quote-modal__title">프로젝트 상담 및 견적문의 내용이 준비됐습니다</h3>
        <button class="quote-modal__close" id="quoteModalClose" aria-label="닫기">×</button>
      </div>
      <pre class="quote-modal__content" id="quoteModalContent"></pre>
      <div class="quote-modal__guide">
        <p>입력하신 내용을 복사한 뒤 카카오톡 문의창으로 이동합니다.<br>채팅방에서 <strong>붙여넣기(Ctrl+V)</strong> 해주세요.</p>
      </div>
      <button class="quote-modal__cta" id="quoteModalCta">카카오톡으로 문의하기</button>
    </div>
  </div>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>오늘의 공간을 카페로, 커피차와 디저트로 행사 현장을 더 특별하게 만드는 ONDAZ입니다.</p>
    <p>문의: yu4867@naver.com · 연락처: 0508-9306-5718</p>
  </footer>

  <a href="tel:05040802129" class="phone-fab" aria-label="전화로 견적문의">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="#ffffff" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
    <span class="phone-fab__label">전화 문의</span>
  </a>

  <a href="http://pf.kakao.com/_IcCPX/chat" class="kakao-fab" target="_blank" rel="noopener noreferrer" aria-label="카카오톡으로 견적문의">
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
    "[ONDAZ 프로젝트 상담 및 견적문의]",
    `신청자명 / 업체명 / 담당자명: ${form.get("customer") || ""}`,
    `연락처: ${form.get("phone") || ""}`,
    `수령자명: ${form.get("recipient") || ""}`,
    `행사명 / 프로그램명: ${form.get("program") || ""}`,
    `행사 종류: ${form.get("eventType") || ""}`,
    `지원 날짜: ${form.get("supportDate") || ""}`,
    `행사 장소: ${form.get("address") || ""}`,
    `시작 시간: ${form.get("startTime") || ""}`,
    "세팅은 시작 시간 약 2시간 전부터 진행됩니다.",
    `전기 사용 가능 여부: ${form.get("power") || ""}`,
    `희망 메뉴 / 수량: ${form.get("menu") || ""}`,
    `추가 요청사항: ${form.get("message") || ""}`,
    `디자이너 제작물 요청: ${form.get("designer") || ""}`,
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
    // Clipboard access can fail on non-secure origins.
  }
  window.open("http://pf.kakao.com/_IcCPX/chat", "_blank", "noopener,noreferrer");
});
