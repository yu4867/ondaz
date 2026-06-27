import "./styles.css";
import { setupMobileNav } from "./nav.js";

const STORAGE_KEY = "ondaz-event-content";

const NAV = `
  <div class="top-marquee" aria-label="ONDAZ 안내"><div class="top-marquee__track"><span>감도 높은 커피차 ONDAZ</span><span>7월 여름 한정 30만 원 이벤트 🖤</span><span>감도 높은 커피차 ONDAZ</span><span>7월 여름 한정 30만 원 이벤트 🖤</span><span>감도 높은 커피차 ONDAZ</span><span>7월 여름 한정 30만 원 이벤트 🖤</span><span>감도 높은 커피차 ONDAZ</span><span>7월 여름 한정 30만 원 이벤트 🖤</span></div></div>
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
        <a href="/quote.html" class="nav-btn nav-btn--primary">견적 문의</a>
      </div>
    </nav>
  </header>
`;

const DEFAULT_EVENT = {
  title: "ONDAZ 이벤트",
  body: "이벤트 제목과 내용을 입력해 주세요.",
  image: "",
};

function loadEvent() {
  try {
    return { ...DEFAULT_EVENT, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
  } catch {
    return DEFAULT_EVENT;
  }
}

function saveEvent(eventData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(eventData));
}

function renderPreview(eventData) {
  const previewImage = document.querySelector("#event-preview-image");
  document.querySelector("#event-preview-title").textContent = eventData.title || DEFAULT_EVENT.title;
  document.querySelector("#event-preview-body").textContent = eventData.body || DEFAULT_EVENT.body;

  if (eventData.image) {
    previewImage.style.backgroundImage = `url('${eventData.image}')`;
    previewImage.classList.add("has-image");
  } else {
    previewImage.style.backgroundImage = "";
    previewImage.classList.remove("has-image");
  }
}

function initEditor() {
  const titleInput = document.querySelector("#event-title-input");
  const bodyInput = document.querySelector("#event-body-input");
  const imageInput = document.querySelector("#event-image-input");
  const clearButton = document.querySelector("#event-clear-image");
  const current = loadEvent();

  titleInput.value = current.title;
  bodyInput.value = current.body;
  renderPreview(current);

  const persist = () => {
    const next = {
      title: titleInput.value.trim() || DEFAULT_EVENT.title,
      body: bodyInput.value.trim() || DEFAULT_EVENT.body,
      image: loadEvent().image,
    };
    saveEvent(next);
    renderPreview(next);
  };

  titleInput.addEventListener("input", persist);
  bodyInput.addEventListener("input", persist);

  imageInput.addEventListener("change", () => {
    const file = imageInput.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const next = {
        title: titleInput.value.trim() || DEFAULT_EVENT.title,
        body: bodyInput.value.trim() || DEFAULT_EVENT.body,
        image: reader.result,
      };
      saveEvent(next);
      renderPreview(next);
    });
    reader.readAsDataURL(file);
  });

  clearButton.addEventListener("click", () => {
    imageInput.value = "";
    const next = {
      title: titleInput.value.trim() || DEFAULT_EVENT.title,
      body: bodyInput.value.trim() || DEFAULT_EVENT.body,
      image: "",
    };
    saveEvent(next);
    renderPreview(next);
  });
}

document.querySelector("#app").innerHTML = `
  ${NAV}
  <main>
    <section class="page-hero event-page-hero">
      <p class="eyebrow">Event</p>
      <h1>이벤트</h1>
      <p>이벤트를 열 때마다 제목, 내용, 이미지를 직접 입력해 관리할 수 있습니다.</p>
    </section>

    <section class="section event-section">
      <div class="event-layout">
        <article class="event-preview">
          <div id="event-preview-image" class="event-preview__image"></div>
          <div class="event-preview__content">
            <span class="event-badge">EVENT</span>
            <h2 id="event-preview-title"></h2>
            <p id="event-preview-body"></p>
          </div>
        </article>

        <aside class="event-editor" aria-label="이벤트 편집">
          <label>
            제목
            <input id="event-title-input" type="text" placeholder="이벤트 제목" />
          </label>
          <label>
            내용
            <textarea id="event-body-input" rows="8" placeholder="이벤트 내용을 입력하세요."></textarea>
          </label>
          <label>
            이미지
            <input id="event-image-input" type="file" accept="image/*" />
          </label>
          <button id="event-clear-image" class="button button--ghost" type="button">이미지 제거</button>
        </aside>
      </div>
    </section>
  </main>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
    <p>문의: yu4867@naver.com · 연락처: 0504-0802-2129</p>
  </footer>
`;

setupMobileNav();
initEditor();
