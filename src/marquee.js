const marqueeMessages = [
  "오늘의 공간을 카페로, ONDAZ♥",
  "야외결혼식 · 촬영장 · 기업행사 · 브랜드 프로모션",
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
