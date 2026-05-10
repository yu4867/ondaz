import "./styles.css";
import mainImage from "../main1.png";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="ONDAZ 홈">ONDAZ</a>
    <nav class="nav" aria-label="주요 메뉴">
      <a href="#guide">이용 안내</a>
      <a href="#menu">메뉴</a>
      <a href="#quote">견적내보기</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero__media image-placeholder image-placeholder--photo" style="background-image: url('${mainImage}')"></div>
      <div class="hero__content">
        <p class="eyebrow">Coffee Truck Catering Service</p>
        <h1>행사장에 도착하는<br />시원한 커피 한 잔, <span class="hero__brand">ONDAZ</span></h1>
        <p>
          기업 행사, 촬영 현장, 학교 축제, 브랜드 프로모션까지 필요한 곳으로 직접 찾아가는
          맞춤형 커피차 서비스를 준비합니다.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="#quote">견적내보기</a>
          <a class="button button--ghost" href="#guide">이용 안내</a>
        </div>
      </div>
    </section>

    <section class="intro section">
      <div class="section-heading">
        <p class="eyebrow">Why ONDAZ</p>
        <h2>처음 상담부터 행사 종료까지 한 번에</h2>
        <p>
          ONDAZ는 행사 목적과 현장 상황에 맞춰 메뉴 구성, 운영 인원, 차량 동선,
          제공 수량을 함께 설계합니다.
        </p>
      </div>
      <div class="feature-grid">
        <article class="feature-card">
          <div class="feature-card__image image-placeholder"><span>서비스 이미지</span></div>
          <h3>현장 맞춤 운영</h3>
          <p>행사 규모, 시간대, 제공 방식에 따라 가장 효율적인 운영안을 제안합니다.</p>
        </article>
        <article class="feature-card">
          <div class="feature-card__image image-placeholder"><span>메뉴 이미지</span></div>
          <h3>다양한 음료 구성</h3>
          <p>커피, 논커피, 티, 시즌 음료까지 목적에 맞는 메뉴 라인업을 준비합니다.</p>
        </article>
        <article class="feature-card">
          <div class="feature-card__image image-placeholder"><span>행사 이미지</span></div>
          <h3>브랜드 경험 강화</h3>
          <p>컵 홀더, 배너, 차량 래핑 등 임시 브랜딩 요소를 활용할 수 있습니다.</p>
        </article>
      </div>
    </section>

    <section class="stats section" aria-label="ONDAZ 서비스 지표">
      <div>
        <strong>120+</strong>
        <span>누적 행사</span>
      </div>
      <div>
        <strong>35</strong>
        <span>음료 메뉴</span>
      </div>
      <div>
        <strong>3h</strong>
        <span>기본 운영 시간</span>
      </div>
      <div>
        <strong>1:1</strong>
        <span>전담 상담</span>
      </div>
    </section>

    <section id="guide" class="guide section">
      <div class="section-heading section-heading--left">
        <p class="eyebrow">Service Guide</p>
        <h2>이용 안내</h2>
        <p>아래 내용은 임시 안내문입니다. 실제 운영 정책에 맞춰 금액, 지역, 시간 기준을 조정할 수 있습니다.</p>
      </div>
      <div class="process">
        <article>
          <span>01</span>
          <h3>문의 접수</h3>
          <p>행사 날짜, 장소, 예상 인원, 희망 메뉴를 전달해 주세요.</p>
        </article>
        <article>
          <span>02</span>
          <h3>맞춤 견적</h3>
          <p>제공 수량, 운영 시간, 이동 거리 기준으로 견적을 안내합니다.</p>
        </article>
        <article>
          <span>03</span>
          <h3>운영 준비</h3>
          <p>메뉴 확정 후 차량 배치, 현장 동선, 필요 전력을 확인합니다.</p>
        </article>
        <article>
          <span>04</span>
          <h3>행사 진행</h3>
          <p>전담 바리스타가 현장에서 음료를 제조하고 안정적으로 운영합니다.</p>
        </article>
      </div>
    </section>

    <section id="menu" class="menu section">
      <div class="menu__media image-placeholder">
        <span>음료 메뉴 이미지</span>
      </div>
      <div class="menu__content">
        <p class="eyebrow">Menu Lineup</p>
        <h2>행사 분위기에 맞춘 커피차 메뉴</h2>
        <p>
          아래 메뉴는 임시 구성입니다. 계절, 예산, 행사 성격에 따라 추천 메뉴를 다시 구성합니다.
        </p>
        <div class="menu-list">
          <article>
            <h3>커피</h3>
            <p>아메리카노, 카페라떼, 바닐라라떼, 카라멜라떼</p>
          </article>
          <article>
            <h3>논커피</h3>
            <p>초코라떼, 말차라떼, 딸기라떼, 밀크티</p>
          </article>
          <article>
            <h3>티 & 에이드</h3>
            <p>레몬티, 자몽티, 청포도에이드, 패션후르츠에이드</p>
          </article>
          <article>
            <h3>시즌 메뉴</h3>
            <p>행사 시즌에 맞춘 한정 음료와 디저트 세트</p>
          </article>
        </div>
      </div>
    </section>

    <section class="clients section">
      <div class="section-heading">
        <p class="eyebrow">Event Moments</p>
        <h2>다양한 현장에 어울리는 ONDAZ</h2>
        <p>
          기업 복지 이벤트, 팝업 스토어, 영화 촬영장, 캠퍼스 행사 등 커피가 필요한 순간을 함께합니다.
        </p>
      </div>
      <div class="gallery" aria-label="행사 이미지 갤러리">
        <div class="image-placeholder"><span>현장 이미지</span></div>
        <div class="image-placeholder"><span>브랜딩 이미지</span></div>
        <div class="image-placeholder"><span>음료 이미지</span></div>
        <div class="image-placeholder"><span>고객 이미지</span></div>
        <div class="image-placeholder"><span>차량 이미지</span></div>
        <div class="image-placeholder"><span>행사 이미지</span></div>
      </div>
    </section>

    <section id="quote" class="quote section">
      <div>
        <p class="eyebrow">Quick Quote</p>
        <h2>견적내보기</h2>
        <p>
          날짜, 장소, 예상 인원만 알려주시면 ONDAZ가 행사에 맞는 커피차 구성을 임시 견적으로 안내드립니다.
        </p>
      </div>
      <form class="quote-form">
        <label>
          행사명
          <input type="text" placeholder="예: 임직원 감사 이벤트" />
        </label>
        <label>
          행사 날짜
          <input type="date" />
        </label>
        <label>
          예상 인원
          <input type="number" placeholder="예: 200" />
        </label>
        <label>
          행사 장소
          <input type="text" placeholder="예: 서울시 강남구" />
        </label>
        <label class="quote-form__wide">
          요청 사항
          <textarea placeholder="희망 메뉴, 운영 시간, 브랜딩 여부 등을 적어주세요."></textarea>
        </label>
        <button type="button">임시 견적 요청</button>
      </form>
    </section>
  </main>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
    <p>문의: ondaz@example.com · 상담시간: 평일 09:00 - 18:00</p>
  </footer>
`;
