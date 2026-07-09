import "./styles.css";
import { setupMobileNav } from "./nav.js";
import { renderTopMarquee } from "./marquee.js";
import {
  EVENT_STATUS_LABELS,
  escapeHtml,
  loadEvents,
  renderFloatingContactButtons,
  saveEvents,
  setEditorPassword,
  uploadEventImage,
} from "./event-store.js";

const NAV = `
  ${renderTopMarquee()}
  <header class="site-header">
    <a class="brand brand--crimson" href="/" aria-label="ONDAZ">ONDAZ</a>
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

function readEventId() {
  return new URLSearchParams(window.location.search).get("id") || "";
}

function findEvent(events, eventId) {
  return events.find((eventData) => eventData.id === eventId) || null;
}

function renderDetailImage(imageData, index) {
  return `
    <figure class="event-detail-gallery__item">
      <img src="${imageData.src}" alt="${escapeHtml(imageData.alt || `이벤트 상세 이미지 ${index + 1}`)}" loading="lazy" />
    </figure>
  `;
}

function renderAdminImageItem(imageData, index) {
  return `
    <div class="event-detail-admin-image">
      <img src="${imageData.src}" alt="${escapeHtml(imageData.alt || `첨부 이미지 ${index + 1}`)}" />
      <button class="event-detail-image-remove" type="button" data-image-index="${index}">삭제</button>
    </div>
  `;
}

function renderPage(eventData) {
  const status = eventData.status in EVENT_STATUS_LABELS ? eventData.status : "progress";
  const detailImages = Array.isArray(eventData.detailImages) ? eventData.detailImages : [];

  document.querySelector("#event-detail-root").innerHTML = `
    <section class="page-hero event-detail-hero">
      <p class="eyebrow">Event</p>
      <div class="event-preview__badges">
        <span class="event-badge">EVENT</span>
        <span class="event-status-badge" data-status="${status}">${EVENT_STATUS_LABELS[status]}</span>
      </div>
      <h1>${escapeHtml(eventData.title)}</h1>
      <a class="event-detail-back" href="/event.html">이벤트 목록으로 돌아가기</a>
    </section>

    <section class="section event-detail-section">
      <article class="event-detail-card">
        <div id="event-detail-gallery-wrap">
          ${
            detailImages.length
              ? `<div class="event-detail-gallery">${detailImages.map(renderDetailImage).join("")}</div>`
              : `<p class="event-detail-empty">첨부된 상세 이미지가 없습니다.</p>`
          }
        </div>
        <div class="event-detail-body">
          <p>${escapeHtml(eventData.body)}</p>
        </div>
      </article>
    </section>

    <section class="section event-detail-admin-section">
      <div class="event-admin">
        <button id="event-detail-edit-open" class="event-admin-open" type="button">상세 이미지 관리</button>
        <form id="event-detail-password-form" class="event-password-form" hidden>
          <label>
            관리자 비밀번호
            <input id="event-detail-password-input" type="password" inputmode="numeric" autocomplete="off" />
          </label>
          <button class="button button--primary" type="submit">확인</button>
          <p id="event-detail-password-error" class="event-password-error" aria-live="polite"></p>
        </form>

        <aside id="event-detail-editor" class="event-editor event-detail-editor" aria-label="이벤트 상세 이미지 편집" hidden>
          <label>
            상세 이미지 첨부
            <input id="event-detail-image-input" type="file" accept="image/*" multiple />
          </label>
          <div id="event-detail-image-list" class="event-detail-admin-images">
            ${detailImages.map(renderAdminImageItem).join("") || `<p class="event-admin-empty">첨부된 이미지가 없습니다.</p>`}
          </div>
          <p id="event-detail-editor-status" class="event-editor-status" aria-live="polite"></p>
        </aside>
      </div>
    </section>
  `;
}

function initDetailAdmin(eventId, initialEvents) {
  const openButton = document.querySelector("#event-detail-edit-open");
  const passwordForm = document.querySelector("#event-detail-password-form");
  const passwordInput = document.querySelector("#event-detail-password-input");
  const passwordError = document.querySelector("#event-detail-password-error");
  const editor = document.querySelector("#event-detail-editor");
  const imageInput = document.querySelector("#event-detail-image-input");
  const imageList = document.querySelector("#event-detail-image-list");
  const editorStatus = document.querySelector("#event-detail-editor-status");
  let events = initialEvents;

  const refreshImageList = (eventData) => {
    const detailImages = Array.isArray(eventData.detailImages) ? eventData.detailImages : [];
    imageList.innerHTML = detailImages.map(renderAdminImageItem).join("") || `<p class="event-admin-empty">첨부된 이미지가 없습니다.</p>`;
  };

  const refreshPublicGallery = (eventData) => {
    const galleryWrap = document.querySelector("#event-detail-gallery-wrap");
    const detailImages = Array.isArray(eventData.detailImages) ? eventData.detailImages : [];
    galleryWrap.innerHTML = detailImages.length
      ? `<div class="event-detail-gallery">${detailImages.map(renderDetailImage).join("")}</div>`
      : `<p class="event-detail-empty">첨부된 상세 이미지가 없습니다.</p>`;
  };

  const updateEvent = async (updater) => {
    const eventData = findEvent(events, eventId);
    if (!eventData) return null;
    updater(eventData);
    await saveEvents(events);
    refreshPublicGallery(eventData);
    refreshImageList(eventData);
    return eventData;
  };

  openButton.addEventListener("click", () => {
    passwordForm.hidden = false;
    openButton.hidden = true;
    passwordInput.focus();
  });

  passwordForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    setEditorPassword(passwordInput.value);

    try {
      await saveEvents(events);
    } catch {
      passwordError.textContent = "비밀번호가 일치하지 않습니다.";
      passwordInput.select();
      return;
    }

    passwordError.textContent = "";
    passwordForm.hidden = true;
    editor.hidden = false;
    imageInput.focus();
  });

  imageInput.addEventListener("change", async () => {
    const files = Array.from(imageInput.files || []);
    if (files.length === 0) return;

    editorStatus.textContent = "이미지를 업로드하고 있습니다.";

    try {
      const nextImages = await Promise.all(files.map(uploadEventImage));
      const updated = await updateEvent((eventData) => {
        eventData.detailImages = [...(Array.isArray(eventData.detailImages) ? eventData.detailImages : []), ...nextImages];
      });

      if (updated) {
        refreshImageList(updated);
        editorStatus.textContent = "상세 이미지를 저장했습니다.";
      }
    } catch (error) {
      editorStatus.textContent = error.message || "이미지 업로드에 실패했습니다.";
    }
  });

  imageList.addEventListener("click", async (event) => {
    const button = event.target.closest(".event-detail-image-remove");
    if (!button) return;

    const imageIndex = Number(button.dataset.imageIndex);

    try {
      const updated = await updateEvent((eventData) => {
        eventData.detailImages = (Array.isArray(eventData.detailImages) ? eventData.detailImages : []).filter((_, index) => index !== imageIndex);
      });

      if (updated) {
        refreshImageList(updated);
        editorStatus.textContent = "상세 이미지를 삭제했습니다.";
      }
    } catch (error) {
      editorStatus.textContent = error.message || "삭제 중 오류가 발생했습니다.";
    }
  });
}

function renderMissingPage() {
  document.querySelector("#app").innerHTML = `
    ${NAV}
    <main>
      <section class="page-hero event-detail-hero">
        <p class="eyebrow">Event</p>
        <h1>이벤트를 찾을 수 없습니다.</h1>
        <a class="event-detail-back" href="/event.html">이벤트 목록으로 돌아가기</a>
      </section>
    </main>
    <footer class="footer">
      <strong>ONDAZ</strong>
      <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
      <p>문의: yu4867@naver.com · 연락처 0508-9306-5718</p>
    </footer>
    ${renderFloatingContactButtons()}
  `;
}

async function initPage() {
  const eventId = readEventId();
  const events = await loadEvents();
  const eventData = findEvent(events, eventId);

  if (!eventData) {
    renderMissingPage();
    setupMobileNav();
    return;
  }

  document.querySelector("#app").innerHTML = `
    ${NAV}
    <main id="event-detail-root"></main>
    <footer class="footer">
      <strong>ONDAZ</strong>
      <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
      <p>문의: yu4867@naver.com · 연락처 0508-9306-5718</p>
    </footer>
    ${renderFloatingContactButtons()}
  `;
  renderPage(eventData);
  initDetailAdmin(eventId, events);
  setupMobileNav();
}

initPage();
