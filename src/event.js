import "./styles.css";
import { setupMobileNav } from "./nav.js";
import { renderTopMarquee } from "./marquee.js";

const STORAGE_KEY = "ondaz-event-content";
const EDITOR_PASSWORD = "8961";

const NAV = `
  ${renderTopMarquee()}
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

const EMPTY_EVENT = {
  title: "ONDAZ 이벤트",
  body: "등록된 이벤트가 없습니다.",
  image: "",
  imageRatio: "",
  status: "progress",
};

const EVENT_STATUS_LABELS = {
  progress: "진행 중",
  done: "완료",
};

function createEvent(overrides = {}) {
  return {
    id: overrides.id || `event-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: overrides.title || "ONDAZ 이벤트",
    body: overrides.body || "이벤트 내용을 입력해 주세요.",
    image: overrides.image || "",
    imageRatio: overrides.imageRatio || "",
    status: overrides.status in EVENT_STATUS_LABELS ? overrides.status : "progress",
  };
}

function normalizeEvents(value) {
  if (Array.isArray(value)) {
    return value.map((eventData) => createEvent(eventData)).filter(Boolean);
  }

  if (value && typeof value === "object") {
    return [createEvent(value)];
  }

  return [];
}

function loadEvents() {
  try {
    return normalizeEvents(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch {
    return [];
  }
}

function saveEvents(events) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

function getSelectedStatus(statusInput) {
  return statusInput.value in EVENT_STATUS_LABELS ? statusInput.value : "progress";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderEventCard(eventData) {
  const status = eventData.status in EVENT_STATUS_LABELS ? eventData.status : "progress";
  const imageStyle = [
    eventData.image ? `background-image: url('${eventData.image}');` : "",
    eventData.imageRatio ? `aspect-ratio: ${eventData.imageRatio};` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `
    <article class="event-preview" data-event-id="${eventData.id || ""}">
      <div class="event-preview__image"${imageStyle ? ` style="${imageStyle}"` : ""}></div>
      <div class="event-preview__content">
        <div class="event-preview__badges">
          <span class="event-badge">EVENT</span>
          <span class="event-status-badge" data-status="${status}">${EVENT_STATUS_LABELS[status]}</span>
        </div>
        <h2>${escapeHtml(eventData.title || EMPTY_EVENT.title)}</h2>
        <p>${escapeHtml(eventData.body || EMPTY_EVENT.body)}</p>
      </div>
    </article>
  `;
}

function renderEvents(events) {
  const eventList = document.querySelector("#event-list");
  const visibleEvents = events.length > 0 ? events : [EMPTY_EVENT];
  eventList.innerHTML = visibleEvents.map(renderEventCard).join("");
}

function renderAdminList(events, selectedEventId) {
  const adminList = document.querySelector("#event-admin-list");

  if (events.length === 0) {
    adminList.innerHTML = `<p class="event-admin-empty">작성된 이벤트가 없습니다.</p>`;
    return;
  }

  adminList.innerHTML = events
    .map(
      (eventData) => `
        <button class="event-admin-item${eventData.id === selectedEventId ? " is-active" : ""}" type="button" data-event-id="${eventData.id}">
          <span>${escapeHtml(eventData.title || "제목 없음")}</span>
          <small>${EVENT_STATUS_LABELS[eventData.status] || EVENT_STATUS_LABELS.progress}</small>
        </button>
      `,
    )
    .join("");
}

function initEditor() {
  const editOpenButton = document.querySelector("#event-edit-open");
  const passwordForm = document.querySelector("#event-password-form");
  const passwordInput = document.querySelector("#event-password-input");
  const passwordError = document.querySelector("#event-password-error");
  const editor = document.querySelector("#event-editor");
  const adminPanel = document.querySelector("#event-admin-panel");
  const adminList = document.querySelector("#event-admin-list");
  const newButton = document.querySelector("#event-new");
  const titleInput = document.querySelector("#event-title-input");
  const bodyInput = document.querySelector("#event-body-input");
  const statusInput = document.querySelector("#event-status-input");
  const imageInput = document.querySelector("#event-image-input");
  const clearButton = document.querySelector("#event-clear-image");
  const deleteButton = document.querySelector("#event-delete");
  const confirmButton = document.querySelector("#event-confirm");
  const editorStatus = document.querySelector("#event-editor-status");
  let events = loadEvents();
  let selectedEventId = events[0]?.id || null;

  const selectedEvent = () => events.find((eventData) => eventData.id === selectedEventId) || null;

  const sync = () => {
    renderEvents(events);
    renderAdminList(events, selectedEventId);
  };

  const fillEditor = (eventData) => {
    titleInput.value = eventData?.title || "";
    bodyInput.value = eventData?.body || "";
    statusInput.value = eventData?.status in EVENT_STATUS_LABELS ? eventData.status : "progress";
    imageInput.value = "";
  };

  sync();
  fillEditor(selectedEvent());

  editOpenButton.addEventListener("click", () => {
    passwordForm.hidden = false;
    editOpenButton.hidden = true;
    passwordInput.focus();
  });

  passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (passwordInput.value !== EDITOR_PASSWORD) {
      passwordError.textContent = "비밀번호가 일치하지 않습니다.";
      passwordInput.select();
      return;
    }

    passwordError.textContent = "";
    passwordForm.hidden = true;
    adminPanel.hidden = false;
    editor.hidden = false;
    titleInput.focus();
  });

  const persist = () => {
    let next = selectedEvent();

    if (!next) {
      next = createEvent();
      selectedEventId = next.id;
      events = [next, ...events];
    }

    next.title = titleInput.value.trim() || "ONDAZ 이벤트";
    next.body = bodyInput.value.trim() || "이벤트 내용을 입력해 주세요.";
    next.status = getSelectedStatus(statusInput);

    saveEvents(events);
    sync();
    return next;
  };

  const clearEditorStatus = () => {
    editorStatus.textContent = "";
  };

  titleInput.addEventListener("input", () => {
    clearEditorStatus();
    persist();
  });
  bodyInput.addEventListener("input", () => {
    clearEditorStatus();
    persist();
  });
  statusInput.addEventListener("change", () => {
    clearEditorStatus();
    persist();
  });

  imageInput.addEventListener("change", () => {
    const file = imageInput.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("load", () => {
        persist();
        const next = selectedEvent();
        if (!next) return;

        next.image = reader.result;
        next.imageRatio = image.naturalWidth && image.naturalHeight ? `${image.naturalWidth} / ${image.naturalHeight}` : "";
        saveEvents(events);
        sync();
      });
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  });

  clearButton.addEventListener("click", () => {
    const next = selectedEvent();
    if (!next) return;

    imageInput.value = "";
    next.image = "";
    next.imageRatio = "";
    saveEvents(events);
    sync();
    clearEditorStatus();
  });

  deleteButton.addEventListener("click", () => {
    const next = selectedEvent();
    if (!next) return;
    if (!confirm("선택한 이벤트 글을 삭제할까요?")) return;

    events = events.filter((eventData) => eventData.id !== next.id);
    selectedEventId = events[0]?.id || null;
    saveEvents(events);
    fillEditor(selectedEvent());
    sync();
    editorStatus.textContent = "선택한 글을 삭제했습니다.";
  });

  confirmButton.addEventListener("click", () => {
    persist();
    editorStatus.textContent = "이벤트 글을 저장했습니다.";
  });

  newButton.addEventListener("click", () => {
    const next = createEvent();
    events = [next, ...events];
    selectedEventId = next.id;
    saveEvents(events);
    fillEditor(next);
    sync();
    titleInput.focus();
  });

  adminList.addEventListener("click", (event) => {
    const item = event.target.closest("[data-event-id]");
    if (!item) return;

    selectedEventId = item.dataset.eventId;
    fillEditor(selectedEvent());
    sync();
  });
}

document.querySelector("#app").innerHTML = `
  ${NAV}
  <main>
    <section class="page-hero event-page-hero">
      <p class="eyebrow">Event</p>
      <h1>이벤트</h1>
      <p>ONDAZ에서 진행 중인 이벤트를 확인하세요.</p>
    </section>

    <section class="section event-section">
      <div class="event-layout">
        <div id="event-list" class="event-list"></div>
      </div>

      <div class="event-admin">
        <button id="event-edit-open" class="event-admin-open" type="button">작성하기</button>
        <form id="event-password-form" class="event-password-form" hidden>
          <label>
            관리자 비밀번호
            <input id="event-password-input" type="password" inputmode="numeric" autocomplete="off" />
          </label>
          <button class="button button--primary" type="submit">확인</button>
          <p id="event-password-error" class="event-password-error" aria-live="polite"></p>
        </form>

        <div id="event-admin-panel" class="event-admin-panel" hidden>
          <button id="event-new" class="button button--ghost" type="button">새 글 작성</button>
          <div id="event-admin-list" class="event-admin-list"></div>
        </div>
      </div>

      <aside id="event-editor" class="event-editor" aria-label="이벤트 편집" hidden>
        <label>
          제목
          <input id="event-title-input" type="text" placeholder="이벤트 제목" />
        </label>
        <label>
          내용
          <textarea id="event-body-input" rows="8" placeholder="이벤트 내용을 입력하세요."></textarea>
        </label>
        <label>
          상태
          <select id="event-status-input">
            <option value="progress">진행 중</option>
            <option value="done">완료</option>
          </select>
        </label>
        <label>
          이미지
          <input id="event-image-input" type="file" accept="image/*" />
        </label>
        <button id="event-clear-image" class="button button--ghost" type="button">이미지 제거</button>
        <button id="event-confirm" class="button button--primary" type="button">확인</button>
        <button id="event-delete" class="button button--danger" type="button">선택 글 삭제</button>
        <p id="event-editor-status" class="event-editor-status" aria-live="polite"></p>
      </aside>
    </section>
  </main>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
    <p>문의: yu4867@naver.com · 연락처 0508-9306-5718</p>
  </footer>
`;

setupMobileNav();
initEditor();
