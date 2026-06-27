import "./styles.css";
import { setupMobileNav } from "./nav.js";

document.querySelector("#app").innerHTML = `
  <div class="top-marquee" aria-label="ONDAZ 안내">
    <div class="top-marquee__track">
      <span>감도 높은 커피차 ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
      <span>감도 높은 커피차 ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
      <span>감도 높은 커피차 ONDAZ</span>
      <span>7월 여름 한정 30만 원 이벤트 🖤</span>
      <span>감도 높은 커피차 ONDAZ</span>
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
      <h1>?롪벴?놁쓤 ??쒖굣???/h1>
      <p>* ??戮?뻣??????? ?熬곣뫖?????놁졑 ??????낅퉵??</p>
    </section>

    <section class="quote-page-section section">
      <div class="quote-page-form-wrap">
        <form class="quote-form" id="quoteForm">
          <p class="quote-section-label">?リ옇????筌먲퐢沅?/p>
          <label>
            ?낅슣?뽪룇???繹먮봾留????裕?????®춯?*
            <input name="customer" type="text" placeholder="???녹춸??/ (?????꾨Ь???녠덧" required />
          </label>
          <label>
            ??⑤벡逾?춯?
            <input name="phone" type="tel" placeholder="010-1234-5678" />
          </label>
          <label>
            ?꾩룇猷????*
            <input name="recipient" type="text" placeholder="?꾩룇猷???????藥? required />
          </label>
          <label>
            ??얜낄?嶺????熬곣뫁夷?윜諛몄굡??쇱춻?*
            <input name="program" type="text" placeholder="??얜낄?嶺????裕??熬곣뫁夷?윜諛몄굡??쇱춻? required />
          </label>

          <p class="quote-section-label">??源껎뀬 ?筌먲퐢沅?/p>
          <label class="quote-form__wide">
            ??源껎뀬 ??リ턁筌?*
            <input name="eventType" type="text" placeholder="?띠룄??????源껎뀬??怨몃뮔" required />
          </label>
          <label>
            ???ワ폌????ル‘? *
            <input name="supportDate" type="date" required />
          </label>
          <label>
            ??戮곗굚??蹂?뜟 *
            <input name="startTime" type="text" placeholder="?? ???깆쓧 10?? required />
            <small>?リ옇???嶺뚯쉳?듸쭛?2??蹂?뜟</small>
          </label>
          <label class="quote-form__wide">
            ?낅슣???*
            <input name="address" type="text" placeholder="??源껎뀬 ?????낅슣???섎ご????놁졑??怨삵룖?筌뤾쑴?? required />
          </label>
          <fieldset class="quote-form__wide">
            <legend>?熬곥룗??????띠럾???쒑굢?寃? *</legend>
            <label><input type="radio" name="power" value="?띠럾??? required /> ?띠럾???/label>
            <label><input type="radio" name="power" value="?釉띾쐝??? /> ?釉띾쐝???/label>
            <label><input type="radio" name="power" value="嶺뚮ㅄ維??듭물?ル‘踰? /> 嶺뚮ㅄ維??듭물?ル‘踰?/label>
          </fieldset>

          <p class="quote-section-label">?낅슣?뽪룇 ?筌먲퐢沅?/p>
          <label class="quote-form__wide">
            嶺뚮∥???????濡?럸 *
            <textarea name="menu" placeholder="?? ??蹂μ쟽???깊뱱 ????루춯濡ル???100?? ??餓λ뜂寃?100?? required></textarea>
            <small>嶺뚮∥?????뉖? ??瑜곷턄嶺뚯솘???嶺뚣볝늾???怨삵룖?筌뤾쑴?? 嶺뚮∥?????㉱???怨뺣뼺? ??쒖굣??뀁쾸? ???깅さ??類쏅듆 ??節띾쐾 ??⑤챶?좈썒??닔???</small>
          </label>
          <label class="quote-form__wide">
            ?リ옇?? ??쒖굣?????
            <textarea name="message" placeholder="?怨뺣뼺???雅?굛???????逾????븐슙????????⑤챶?좈썒??닔???"></textarea>
          </label>
          <fieldset class="quote-form__wide">
            <legend>??븐슦????????⑤슡????壤?/legend>
            <label><input type="radio" name="designer" value="??壤? /> ??壤?/label>
            <label><input type="radio" name="designer" value="亦껋꼶梨???춹? /> 亦껋꼶梨???춹?/label>
            <p>???쒓텠????븐슦?????戮곗굚???熬???類싲뉴????븐슦????????⑤슡????類λ룴???깅엷???덈펲. (?リ옇???30,000??</p>
          </fieldset>

          <div class="quote-notice quote-form__wide">
            <h3>???뉖?????/h3>
            <p>??쒖굣????얄뵛 ?뺢퀗?????熬곣뱿???類쏅듆 ??얜????琉용뼁 ??怨몃뮔????諛몄뵜??怨쀬Ŧ ?筌먲퐘遊??紐껊퉵??</p>
            <p>?곸궠?삭맱???덇퐡 ??쒖굣????얄뵛 ?뺢퀗?????熬곣뱿??춯???怨몃뮔?????吏??곌랜踰딀쾮???겶?嶺????멥럶???さ????????紐껊퉵??</p>
          </div>
          <button type="submit">??쒖굣????얄뵛</button>
        </form>
      </div>
    </section>
  </main>

  <div class="quote-modal-overlay" id="quoteModal" role="dialog" aria-modal="true">
    <div class="quote-modal">
      <div class="quote-modal__header">
        <h3 class="quote-modal__title">?롪벴?놁쓤 ??쒖굣????怨몃뮔 ?筌먦끉逾?/h3>
        <button class="quote-modal__close" id="quoteModalClose" aria-label="???뗢뵛">??/button>
      </div>
      <pre class="quote-modal__content" id="quoteModalContent"></pre>
      <div class="quote-modal__guide">
        <p>?熬곣뫁???뺢퀗?????熬곣뱿??춯???怨몃뮔?????吏??怨쀬Ŧ ?곌랜踰딀쾮??紐껊퉵??<br>?곸궠?삭맱???덇퐡 嶺????멥럶???뱺??<strong>?釉먮듌??影?끸뵛(Ctrl+V)</strong> ??怨삵룖?筌뤾쑴??</p>
      </div>
      <button class="quote-modal__cta" id="quoteModalCta">?곸궠?삭맱???덇퐡 ??쒖굣????얄뵛</button>
    </div>
  </div>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>??ｋ걢?얠뼲????類λ룴??鸚??リ옇?ｆ캆???源껎뀬 鸚??科?녾껀 ?熬곣뫗??鸚???곗뒧????熬곣뫁夷?춯琉대쳛??/p>
    <p>문의: yu4867@naver.com · 연락처: 0504-0802-2129</p>
  </footer>

  <a href="tel:05040802129" class="phone-fab" aria-label="?熬곥굦?끻슖???쒖굣????얄뵛">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="#ffffff" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
    <span class="phone-fab__label">?熬곥굦????쒖굣??/span>
  </a>

  <a href="https://open.kakao.com/o/srnbrlui" class="kakao-fab" target="_blank" rel="noopener noreferrer" aria-label="?곸궠?삭맱???덇퐡??怨쀬Ŧ ??쒖굣????얄뵛">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path fill="#3C1E1E" d="M12 3C6.93 3 2.5 6.58 2.5 11c0 2.8 1.68 5.27 4.24 6.78L5.5 22l4.74-2.48c.56.08 1.14.12 1.76.12 5.07 0 9.5-3.58 9.5-8S17.07 3 12 3z"/>
    </svg>
    <span class="kakao-fab__label">?곸궠?삭맱???덇퐡 ??쒖굣??/span>
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
    "[ONDAZ ?롪벴?놁쓤 ??쒖굣???",
    `?낅슣?뽪룇???繹먮봾留????裕?????®춯? ${form.get("customer") || ""}`,
    `??⑤벡逾?춯? ${form.get("phone") || ""}`,
    `?꾩룇猷???? ${form.get("recipient") || ""}`,
    `??얜낄?嶺????熬곣뫁夷?윜諛몄굡??쇱춻? ${form.get("program") || ""}`,
    `??源껎뀬 ??リ턁筌? ${form.get("eventType") || ""}`,
    `???ワ폌????ル‘?: ${form.get("supportDate") || ""}`,
    `?낅슣??? ${form.get("address") || ""}`,
    `??戮곗굚??蹂?뜟: ${form.get("startTime") || ""}`,
    "?リ옇???嶺뚯쉳?듸쭛? 2??蹂?뜟",
    `?熬곥룗??????띠럾???쒑굢?寃?: ${form.get("power") || ""}`,
    `嶺뚮∥???????濡?럸: ${form.get("menu") || ""}`,
    `?リ옇?? ??쒖굣????? ${form.get("message") || ""}`,
    `??븐슦????????⑤슡????壤? ${form.get("designer") || ""}`,
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
    // clipboard API 亦껋꼶梨??????삵렱
  }
  window.open("https://open.kakao.com/o/srnbrlui", "_blank", "noopener,noreferrer");
});
