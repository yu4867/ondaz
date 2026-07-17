const marqueeMessages = [
  "오늘의 공간을 카페로, ONDAZ♥",
  "기업 · 학교 · 어린이집 행사 · 연예인 서포트 · 야외결혼식 ",
];

const marqueeLoop = Array.from({ length: 8 }, () => marqueeMessages).flat();
const marqueeItems = [...marqueeLoop, ...marqueeLoop];

export const renderTopMarquee = () => `
  <div class="top-marquee" aria-label="ONDAZ 안내">
    <div class="top-marquee__track">
      ${marqueeItems.map((message) => `<span>${message}</span>`).join("")}
    </div>
  </div>
`;
