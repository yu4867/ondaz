import "./styles.css";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="ONDAZ 홈">ONDAZ</a>
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
              <li>차량높이 5M 이상 확보</li>
              <li>주차라인 3칸 이상 확보</li>
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
              <li>전기 미지원 시 : 발전기 대여료 70,000원 추가</li>
            </ul>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-people" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>현장 인원 및 수량 체크 후 문의 내용 전달</strong>
              <small>담당자 확인 후 문의 양식 작성</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <p>현장담당자님께 현장인원 및 수량 문의해주세요.</p>
            <p>전달 받으신 내용대로 문의 양식표 작성해 전달해주세요.</p>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-payment" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>예약금 및 취소 위약금 안내</strong>
              <small>예약금 기준 및 취소 정책</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <h3>예약금 기준</h3>
            <ul>
              <li>음료만 주문 : 200,000원</li>
              <li>음료 + 디저트 주문 : 200,000원 + 디저트 금액</li>
            </ul>
            <h3>취소 위약금 안내 (행사일 기준)</h3>
            <ul>
              <li>4일 전 취소 : 무료</li>
              <li>2~3일 전 취소 : 예약금 50%</li>
              <li>1일 전/당일 취소 : 예약금 100%</li>
            </ul>
            <p>일정 변경은 가능하나, 불가능할 시 위약금 동일 적용됩니다.</p>
            <p>디저트는 행사 전날 준비 및 당일 생산을 원칙으로 하므로, 일정 변경 시 이미 준비 및 제작된 디저트에 대해 위약금이 발생할 수 있습니다.</p>
            <p>우천, 태풍 등과 같은 천재지변으로 인한 취소의 경우 위약금 발생하지 않습니다.</p>
          </div>
        </details>
      </div>
    </section>

    <section class="section accordion-section accordion-section--alt">
      <div class="section-heading">
        <p class="eyebrow">Use Guide</p>
        <h2>커피차 이용안내</h2>
      </div>

      <div class="accordion-list">
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
              <li>추가 이용 : 시간당 50,000원 별도 발생</li>
              <li>준비 시간 : 원활한 운영을 위해 행사 약 1시간 전 도착 (교통상황에 따라 달라질 수 있습니다.)</li>
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
              <li>예약 방법 : 카카오 채널톡을 통해 문의 주시면, 순차적으로 연락 드립니다.</li>
              <li>긴급 서포트 : 반드시 전화 문의 부탁드립니다.</li>
              <li>문의 방법 : 페이지 하단 '온라인 견적 문의하기'를 이용해주세요.</li>
            </ul>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-quantity" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>최소 주문수량 기준</strong>
              <small>메뉴별 최소 수량 안내</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <div class="quantity-table">
              <div class="quantity-table__head">
                <strong>구분</strong>
                <strong>최소 수량</strong>
              </div>
              <div>
                <span>음료만 진행 시 (시그니처)</span>
                <span>150잔 이상</span>
              </div>
              <div>
                <span>음료만 진행 시 (프리미엄)</span>
                <span>170잔 이상</span>
              </div>
              <div>
                <span>음료 / 디저트</span>
                <span>70개 이상</span>
              </div>
              <div>
                <span>베이커리 단품세트 메뉴</span>
                <span>70인분 이상</span>
              </div>
              <div>
                <span>프리미엄 & 스페셜 메뉴</span>
                <span>100인분 이상</span>
              </div>
            </div>
            <p>자세한 설명은 메뉴안내를 참고해주세요.</p>
            <a class="button button--ghost" href="/menu.html">메뉴안내 바로가기</a>
          </div>
        </details>

        <details class="accordion-card">
          <summary>
            <span class="accordion-icon icon-cost" aria-hidden="true"></span>
            <span class="accordion-title">
              <strong>총 금액 산정 기준</strong>
              <small>음료, 디저트, 출장비, 출력비</small>
            </span>
            <span class="accordion-toggle">⌄</span>
          </summary>
          <div class="accordion-content">
            <div class="cost-box">
              <strong>음료 비용 + (디저트 비용) + 출장비 + 출력비 = 총 금액 (VAT 별도)</strong>
            </div>
            <ul>
              <li>최소 주문 금액 : 600,000원 이상 *최소주문금액 = [음료만 or 음료 + 디저트] 가격</li>
              <li>디저트 선택 시 : 디저트 비용 별도 추가</li>
              <li>기본 출장비 : 70,000원 (거리/지역에 따라 추가 발생)</li>
              <li>출력비 : 음료비용 + (디저트비용)에 따라 서비스 제공 *디자인안내 참고</li>
              <li>전기 사용 불가 시 : 발전기 대여료 70,000원 추가 발생</li>
            </ul>
            <h3>EXAMPLE</h3>
            <ol>
              <li>음료만 + 출장비 + 출력비 = 총 금액 (VAT 별도)</li>
              <li>음료 + 디저트 + 출장비 + 출력비 = 총 금액 (VAT 별도)</li>
            </ol>
          </div>
        </details>
      </div>
    </section>
  </main>

  <footer class="footer">
    <strong>ONDAZ</strong>
    <p>커피차 서비스 · 기업 행사 · 촬영 현장 · 브랜드 프로모션</p>
    <p>문의: ondaz@example.com · 상담시간: 평일 09:00 - 18:00</p>
  </footer>

  <a href="https://pf.kakao.com/_ondaz/chat" class="kakao-fab" target="_blank" rel="noopener noreferrer" aria-label="카카오톡으로 문의하기">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path fill="#3C1E1E" d="M12 3C6.93 3 2.5 6.58 2.5 11c0 2.8 1.68 5.27 4.24 6.78L5.5 22l4.74-2.48c.56.08 1.14.12 1.76.12 5.07 0 9.5-3.58 9.5-8S17.07 3 12 3z"/>
    </svg>
    <span class="kakao-fab__label">카카오톡 문의</span>
  </a>
`;
