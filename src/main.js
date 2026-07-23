import "./styles.css";
import mainImage from "../image/main.jpg";
import mainVideo from "../video/main-video.mp4";
import { setupMobileNav } from "./nav.js";
import { renderTopMarquee } from "./marquee.js";
import whyImage1_1 from "../image/1-1.jpg";
import whyImage1_2 from "../image/1-2.jpg";
import whyImage1 from "../image/1.jpg";
import whyImage2_1 from "../image/2-1.jpg";
import whyImage2_2 from "../image/2-2.jpg";
import whyImage2 from "../image/2.jpg";
import whyImage3 from "../image/3.jpg";
import whyImage3Alt from "../image/3-1.jpg";
import whyImage6 from "../image/6.jpg";
import whyImage7 from "../image/7.jpg";
import promiseBeansImage from "../image/Coffee beans.jpg";
import promiseShotImage from "../image/shot.png";
import promiseCleanImage from "../image/clean.jpg";

const whyImages = [
  whyImage1_1,
  whyImage1_2,
  whyImage1,
  whyImage2_1,
  whyImage2_2,
  whyImage2,
  whyImage3,
  whyImage3Alt,
  whyImage6,
  whyImage7,
];
const promiseItems = [
  {
    image: promiseBeansImage,
    title: "고품질 원두 사용",
    description: "저렴한 원두가 아닌, 향과 밸런스가 좋은 고품질 원두를 사용해 행사 현장에서도 완성도 있는 커피를 제공합니다.",
  },
  {
    image: promiseShotImage,
    title: "그때그때 추출하는 신선함",
    description: "샷을 미리 뽑아두지 않고 주문과 제공 흐름에 맞춰 바로 추출해 신선한 커피 맛을 지킵니다.",
  },
  {
    image: promiseCleanImage,
    title: "항상 유지하는 청결",
    description: "장비와 작업 공간을 수시로 정돈하고 위생 상태를 꼼꼼히 관리해 안심할 수 있는 서비스를 제공합니다.",
  },
];
const reviewItems = [
  {
    category: "웨딩 커피차",
    title: "예식 후에도 계속 이야기 나온 커피차",
    highlight: "커피차는 진짜 만족도 높은 것 같아요.",
    paragraphs: [
      "결혼 준비하면서 한 것 중에 커피차는 진짜 만족도 높은 것 같아요ㅎㅎ 처음에는 굳이 해야 하나 고민했는데 예식 끝나고 친구들이 커피차 너무 좋았다고 계속 얘기해줘서 뿌듯했어요!",
      "야외에서 진행하다 보니 기다리는 시간도 있었는데 음료 한 잔씩 드시면서 이야기 나누시니까 분위기도 훨씬 편안해진 느낌이었어요.",
      "차량도 예쁘고 현수막까지 웨딩 분위기에 맞게 준비해주셔서 사진도 잘 나왔습니다. 신랑도 처음엔 별 관심 없더니 당일에는 커피차 앞에서 사진 엄청 찍었어요ㅋㅋ 추천합니다!",
    ],
  },
  {
    category: "팬서포트",
    title: "처음 준비하는 서포트도 마음 놓였어요",
    highlight: "업체 선택이 제일 걱정됐는데 마음 놓을 수 있었어요.",
    paragraphs: [
      "팬서포트 준비하시는 분들 추천드려요. 처음 준비하는 서포트라 진짜 아무것도 몰랐는데 문의하면서 많이 도움받았어요ㅠㅠ 제가 문구도 계속 바꾸고 질문도 많이 드렸는데 그때마다 잘 확인해주셔서 감사했습니다.",
      "완성된 현수막이랑 배너도 제가 원했던 분위기로 잘 나와서 너무 만족했어요. 배우님과 현장 스태프분들도 음료 잘 드셨다고 전달받았습니다!",
      "제가 직접 가지 못하는 서포트라 업체 선택이 제일 걱정됐는데 진행 상황도 알려주시고 잘 마무리해주셔서 마음 놓을 수 있었어요. 다음 작품에도 꼭 다시 이용할게요ㅎㅎ",
    ],
  },
  {
    category: "지역 행사",
    title: "방문객 반응까지 만족스러웠던 행사",
    highlight: "방문객분들이 커피차를 보자마자 좋아하셨어요.",
    paragraphs: [
      "지역 행사 방문객분들께 음료 제공하려고 예약했습니다. 행사 특성상 정확한 인원을 예상하기 어려워서 메뉴랑 수량을 어떻게 준비해야 할지 고민이었는데 문의할 때 잘 안내해주셨어요.",
      "당일에도 행사 시간에 맞춰 미리 준비해주셨고 차량 외관이나 주변 세팅도 깔끔했습니다. 방문객분들이 커피차를 보자마자 좋아하셔서 준비한 입장에서도 만족스러웠어요ㅎㅎ",
      "음료 맛도 좋았고 전체적인 진행이 편해서 다음 행사에도 이용할 예정입니다. 친절하게 진행해주셔서 감사합니다!",
    ],
  },
  {
    category: "사내 행사",
    title: "담당자가 신경 쓸 일이 적었던 진행",
    highlight: "답변도 빠르고 안내가 깔끔해서 온다즈로 결정했어요.",
    paragraphs: [
      "사내 행사에 이용할 커피차 업체를 찾다가 예약했습니다. 여러 업체에 문의했는데 답변도 빠르고 안내가 깔끔해서 온다즈로 결정했어요.",
      "행사 당일 차량과 테이블 세팅도 전체적으로 깔끔했고 요청드린 내용도 잘 반영해주셨습니다. 직원들 반응도 좋았고 특히 오후 시간대라 그런지 커피 주문이 정말 많았는데 진행도 원활했어요.",
      "행사 담당하면서 업체 때문에 스트레스 받는 경우가 종종 있는데 이번에는 크게 신경 쓸 일이 없어서 편했습니다. 다음 행사에도 이용하고 싶습니다.",
    ],
  },
  {
    category: "가족 행사",
    title: "다양한 연령대가 함께 만족한 메뉴",
    highlight: "커피 안 드시는 분들까지 편하게 이용했습니다.",
    paragraphs: [
      "부모님 관련 행사라 연령대가 다양해서 메뉴 때문에 고민을 많이 했는데 상담할 때 추천도 잘 해주셨어요. 커피뿐만 아니라 다른 음료도 있어서 커피 안 드시는 분들까지 편하게 이용했습니다.",
      "무엇보다 차량이 깔끔하고 직원분들이 친절해서 좋았어요. 부모님도 이런 걸 언제 준비했냐고 너무 좋아하시더라고요ㅎㅎ",
      "행사 준비하면서 정신이 없었는데 시간 맞춰 오셔서 세팅하고 진행해주셔서 저는 따로 신경 쓸 게 없었습니다. 좋은 추억 만들어주셔서 감사해요!",
    ],
  },
  {
    category: "회사 체육대회",
    title: "인원이 많아도 빠르고 편했던 음료 제공",
    highlight: "인원이 많아도 음료가 빠르게 나왔고 친절했어요.",
    paragraphs: [
      "회사 체육대회 때 직원들 간식 겸 음료 제공하려고 이용했습니다. 인원이 많아서 진행이 늦어지지 않을까 걱정했는데 생각보다 음료도 빠르게 나왔고 직원분들도 친절하셨어요.",
      "운동하고 나서 다들 시원한 음료부터 찾았는데 아이스 아메리카노랑 에이드가 특히 인기 많았습니다ㅋㅋ 평소 커피 안 드시는 직원분들도 선택할 수 있는 메뉴가 많아서 좋았어요.",
      "행사 담당자 입장에서는 시간 맞춰 도착해서 세팅까지 알아서 해주시는 게 제일 편했습니다. 다음 사내 행사 때도 이용할 것 같아요!",
    ],
  },
];
document.querySelector("#app").innerHTML = `
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

  <main id="top">
    <section class="hero">
      <div class="hero__media image-placeholder image-placeholder--photo" aria-label="ONDAZ 메인 이미지">
        <video class="hero__media-video" autoplay muted loop playsinline preload="metadata" poster="${mainImage}">
          <source src="${mainVideo}" type="video/mp4" />
        </video>
      </div>
      <div class="hero__content">
        <p class="eyebrow">Coffee Truck Catering Service</p>
        <h1>오늘의 공간을 카페로,<br /><span class="hero__brand">ONDAZ</span></h1>
        <p>
          기업 행사, 촬영 현장, 학교 축제, 브랜드 프로모션까지 필요한 곳으로 직접 찾아가는
          맞춤형 커피차 서비스를 준비합니다.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="/quote.html">견적 문의</a>
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
          ${[0, 1].map((groupIndex) => `
            <div class="why-slider__group"${groupIndex === 1 ? ' aria-hidden="true"' : ""}>
              ${whyImages.map((image, index) => `
                <figure class="why-slide">
                  <img src="${image}" alt="ONDAZ 현장 이미지 ${index + 1}" loading="eager" decoding="async" />
                </figure>
              `).join("")}
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section promise-section">
      <div class="section-heading">
        <p class="eyebrow">ONDAZ Coffee Promise</p>
        <h2>온다즈 커피의 3가지 약속</h2>
        <p>한 잔의 커피가 행사 경험을 더 좋게 만들 수 있도록, 기본에 가장 충실하게 준비합니다.</p>
      </div>
      <div class="promise-grid">
        ${promiseItems.map((item, index) => `
          <article class="promise-card">
            <div class="promise-card__image image-placeholder image-placeholder--photo" style="background-image: url('${item.image}')"></div>
            <div class="promise-card__body">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section review-section">
      <div class="section-heading">
        <p class="eyebrow">Real Reviews</p>
        <h2>고객님들의 실제 후기</h2>
        <p>웨딩, 팬서포트, 지역 행사, 사내 행사까지 다양한 현장에서 전해주신 온다즈 이용 후기입니다.</p>
      </div>
      <div class="review-carousel" data-review-carousel>
        <div class="review-carousel__viewport">
          <div class="review-grid">
            ${reviewItems.map((review, index) => `
              <article class="review-card">
                <div class="review-card__top">
                  <span>${review.category}</span>
                  <div class="review-card__stars" aria-label="별점 5점">★★★★★</div>
                </div>
                <strong>${review.highlight}</strong>
                <div class="review-card__content" id="review-content-${index}">
                  ${review.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                </div>
                <button class="review-card__more" type="button" aria-expanded="false" aria-controls="review-content-${index}">더 보기</button>
              </article>
            `).join("")}
          </div>
        </div>
        <div class="review-carousel__controls" aria-label="리뷰 이동">
          <button class="review-carousel__button" type="button" data-review-prev aria-label="이전 리뷰">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 5 8.5 12l7 7" /></svg>
          </button>
          <button class="review-carousel__button" type="button" data-review-next aria-label="다음 리뷰">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.5 5 7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
    <p>대표자 : 배민준 · 서울시 송파구 방이동 48-5, 33호 · 사업자등록번호 : 185-16-02483</p>
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
setupWhySlider();
setupReviewCarousel();

document.querySelectorAll(".review-card__more").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".review-card");
    const isExpanded = card.classList.toggle("is-expanded");
    button.setAttribute("aria-expanded", String(isExpanded));
    button.textContent = isExpanded ? "접기" : "더 보기";
  });
});

function setupWhySlider() {
  const sliders = document.querySelectorAll(".why-slider");
  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const track = slider.querySelector(".why-slider__track");
    const firstGroup = slider.querySelector(".why-slider__group");
    if (!track || !firstGroup) return;

    const setDistance = () => {
      const distance = firstGroup.getBoundingClientRect().width;
      if (!distance) return;

      const isMobile = window.matchMedia("(max-width: 680px)").matches;
      const pixelsPerSecond = isMobile ? 42 : 52;
      const minimumDuration = isMobile ? 58 : 56;
      const duration = Math.max(minimumDuration, distance / pixelsPerSecond);

      slider.style.setProperty("--why-slide-distance", `${distance}px`);
      slider.style.setProperty("--why-slide-duration", `${duration}s`);
      track.style.animation = "none";
      track.offsetHeight;
      track.style.animation = "";
    };

    const scheduleDistanceUpdate = () => requestAnimationFrame(setDistance);
    firstGroup.querySelectorAll("img").forEach((image) => {
      if (!image.complete) image.addEventListener("load", scheduleDistanceUpdate, { once: true });
    });

    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(scheduleDistanceUpdate);
      resizeObserver.observe(firstGroup);
      resizeObserver.observe(slider);
    } else {
      window.addEventListener("resize", scheduleDistanceUpdate);
    }

    scheduleDistanceUpdate();
  });
}

function setupReviewCarousel() {
  const carousel = document.querySelector("[data-review-carousel]");
  if (!carousel) return;

  const viewport = carousel.querySelector(".review-carousel__viewport");
  const track = carousel.querySelector(".review-grid");
  const cards = Array.from(track.querySelectorAll(".review-card"));
  const prevButton = carousel.querySelector("[data-review-prev]");
  const nextButton = carousel.querySelector("[data-review-next]");
  let currentIndex = 0;
  let startX = 0;
  let dragOffset = 0;
  let isDragging = false;

  const getStep = () => {
    if (cards.length < 2) return cards[0]?.getBoundingClientRect().width || 0;
    return cards[1].offsetLeft - cards[0].offsetLeft;
  };

  const getMaxIndex = () => {
    const step = getStep();
    const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
    if (!step || !cardWidth) return 0;

    const gap = Math.max(step - cardWidth, 0);
    const visibleCount = Math.max(1, Math.floor((viewport.clientWidth + gap) / step));
    return Math.max(cards.length - visibleCount, 0);
  };

  const moveTo = (nextIndex, animate = true) => {
    const maxIndex = getMaxIndex();
    if (nextIndex > maxIndex) currentIndex = 0;
    else if (nextIndex < 0) currentIndex = maxIndex;
    else currentIndex = nextIndex;

    track.style.transition = animate ? "" : "none";
    track.style.transform = `translateX(${-currentIndex * getStep()}px)`;

    if (!animate) {
      requestAnimationFrame(() => {
        track.style.transition = "";
      });
    }
  };

  prevButton.addEventListener("click", () => moveTo(currentIndex - 1));
  nextButton.addEventListener("click", () => moveTo(currentIndex + 1));

  viewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest("button")) return;
    isDragging = true;
    startX = event.clientX;
    dragOffset = 0;
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add("is-dragging");
    track.style.transition = "none";
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    dragOffset = event.clientX - startX;
    track.style.transform = `translateX(${-currentIndex * getStep() + dragOffset}px)`;
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove("is-dragging");

    const threshold = Math.min(90, viewport.clientWidth * 0.18);
    if (Math.abs(dragOffset) > threshold) {
      moveTo(currentIndex + (dragOffset < 0 ? 1 : -1));
    } else {
      moveTo(currentIndex);
    }
  };

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
  window.addEventListener("resize", () => moveTo(Math.min(currentIndex, getMaxIndex()), false));
  moveTo(0, false);
}
