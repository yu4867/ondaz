import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        guide: resolve(__dirname, "guide.html"),
        menu: resolve(__dirname, "menu.html"),
        quote: resolve(__dirname, "quote.html"),
        selfQuote: resolve(__dirname, "self-quote.html"),
        banner: resolve(__dirname, "banner.html"),
        event: resolve(__dirname, "event.html"),
      },
    },
  },
});
