export const STORAGE_KEY = "ondaz-event-content";

let editorPassword = "";

export const EMPTY_EVENT = {
  title: "ONDAZ 이벤트",
  body: "등록된 이벤트가 없습니다.",
  image: "",
  imageRatio: "",
  detailImages: [],
  status: "progress",
};

export const EVENT_STATUS_LABELS = {
  progress: "진행 중",
  done: "완료",
};

export function setEditorPassword(password) {
  editorPassword = password;
}

export function createEvent(overrides = {}) {
  return {
    id: overrides.id || `event-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: overrides.title || "ONDAZ 이벤트",
    body: overrides.body || "이벤트 내용을 입력해 주세요.",
    image: overrides.image || overrides.image_url || "",
    imageRatio: overrides.imageRatio || overrides.image_ratio || "",
    detailImages: Array.isArray(overrides.detailImages) ? overrides.detailImages : [],
    status: overrides.status in EVENT_STATUS_LABELS ? overrides.status : "progress",
  };
}

export function normalizeEvents(value) {
  if (Array.isArray(value)) {
    return value.map((eventData) => createEvent(eventData)).filter(Boolean);
  }

  if (value && typeof value === "object") {
    return [createEvent(value)];
  }

  return [];
}

export async function loadEvents() {
  try {
    const response = await fetch("/api/events");
    if (!response.ok) throw new Error("Failed to load events");
    const payload = await response.json();
    return normalizeEvents(payload.events);
  } catch {
    try {
      return normalizeEvents(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch {
      return [];
    }
  }
}

export async function saveEvents(events) {
  const normalizedEvents = normalizeEvents(events);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedEvents));

  const response = await fetch("/api/events", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: editorPassword,
      events: normalizedEvents,
    }),
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || "이벤트 저장에 실패했습니다.");
  }

  return normalizedEvents;
}

export async function uploadEventImage(file) {
  if (!file) return null;

  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });

  const response = await fetch("/api/event-images", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: editorPassword,
      fileName: file.name,
      dataUrl,
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || "이미지 업로드에 실패했습니다.");
  }

  return payload.image;
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function renderFloatingContactButtons() {
  return `
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
}
