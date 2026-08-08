import "./styles.css";
import { setupMobileNav } from "./nav.js";
import { renderTopMarquee } from "./marquee.js";

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

  <main>
    <section class="page-hero guide-page-hero">
      <p class="eyebrow">Service Guide</p>
      <h1>예약 전 필독사항</h1>
      <p>커피차 예약 전, 반드시 먼저 확인해주세요.</p>
    </section>

    <section class="section accordion-section">
      <div class="accordion-list">
        <details class="accordion-card" open>
          <summary>
            <span class="accordion-icon icon-location" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>진행 위치 확인</strong>
              <small>차량 높이 및 주차 공간 확보</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <p>촬영장, 공연장, 행사장 등 장소 담당자에게 미리 문의해 주세요.</p>
            <ul>
              <li>차량높이 3M 이상 확보</li>
              <li>주차라인 3칸 확보</li>
              <li>커피차 사이즈 확인 후 현장 진입 및 고정 주차 가능 여부 확인</li>
            </ul>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-power" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>전기 지원여부 확인</strong>
              <small>현장 콘센트 사용 가능 여부</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <p>현장에서 전기(콘센트) 사용 가능 여부를 반드시 확인해주세요.</p>
            <ul>
              <li>전기지원 가능이란? 콘센트 연결이 가능한 상태를 의미</li>
              <li>전기 사용량 : 약 3KW</li>
              <li>전기 미지원 시 : 발전기 대여료 50,000원 (2시간 기준)</li>
              <li>시간에 따라 추가 비용이 발생할 수 있습니다.</li>

            </ul>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-payment" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>예약금 및 환불안내</strong>
              <small>예약금 선지급 시 날짜가 확정됩니다.</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <h3>예약금 기준</h3>
            <ul>
              <li>음료만 주문 : 200,000원</li>
              <li>음료 + 디저트 주문 : 200,000원 + 디저트 금액</li>
            </ul>
            <h3>예약금 환불 안내</h3>
            <ul>
              <li>예약금은 환불이 불가합니다.</li>
            </ul>
            <p>* 서포트 날짜 하루 전까지 잔금 완납해 주시면 예약이 완료됩니다.</p>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-time" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>운영 시간 안내</strong>
              <small>기본 2시간 운영</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <ul>
              <li>기본 운영시간 : 2시간</li>
              <li>추가 이용 : 시간당 30,000원 별도 발생</li>
              <li>준비 시간 : 원활한 운영을 위해 행사 약 1시간 전 도착</li>
            </ul>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-booking" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>예약 안내</strong>
              <small>최소 5일 전 예약</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <ul>
              <li>예약 시기 : 서포트 날짜 기준 최소 5일 전</li>
              <li>예약 방법 : 카카오 채널톡 또는 유선을 통해 문의 주시면 됩니다.</li>
              <li>문의 방법 : 페이지 상단 '견적 문의'를 이용해주세요.</li>
            </ul>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-quantity" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>최소 주문금액 기준</strong>
              <small>주문 구성별 최소 금액 안내</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <div class="quantity-table">
              <div class="quantity-table__head">
                <strong>구분</strong>
                <strong>최소 주문 기준</strong>
              </div>
              <div>
                <span>음료만 주문</span>
                <span>음료 금액 50만 원 이상</span>
              </div>
              <div>
                <span>음료 + 디저트 주문</span>
                <span>합산 50만 원 이상</span>
              </div>
            </div>
            <p>자세한 설명은 메뉴안내를 참고해주세요.</p>
            <a class="button button--ghost" href="/menu.html">메뉴안내 바로가기</a>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-location" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>지역별 출장비 안내</strong>
              <small>지역에 따라 출장비가 다르게 책정됩니다.</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <p>출장비는 지역에 따라 다르게 책정됩니다.</p>
            <div class="quantity-table">
              <div class="quantity-table__head">
                <strong>지역</strong>
                <strong>출장비</strong>
              </div>
              <div>
                <span>서울, 경기남부권</span>
                <span>70,000 ~ 100,000원</span>
              </div>
              <div>
                <span>경기북부, 외곽</span>
                <span>120,000 ~ 150,000원</span>
              </div>
              <div>
                <span>천안, 아산</span>
                <span>130,000원</span>
              </div>
              <div>
                <span>충청권</span>
                <span>150,000원</span>
              </div>
              <div>
                <span>전라, 강원, 경상</span>
                <span>150,000 ~ 300,000원</span>
              </div>
              <div>
                <span>제주 및 섬지역권</span>
                <span>1,000,000원 ~</span>
              </div>
            </div>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-cost" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>총 금액 산정 기준</strong>
              <small>음료, 디저트, 출장비, 홍보물</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <div class="cost-box">
              <strong>음료(디저트) + 출장비 + 홍보물 = 총 금액</strong>
            </div>
            <ul>
              <li>기본 출장비 : 70,000원 (거리/지역에 따라 추가 발생)</li>
              <li>출력비 : 주문금액에 따라 서비스 제공 <a class="guide-inline-link" href="/banner.html">배너 안내</a> 참고</li>
              <li>전기 사용 불가 시 : 발전기 대여료 50,000원 추가 발생 (2시간 기준)</li>
            </ul>
          </div>
        </details>
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
