import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        internal: resolve(__dirname, "internal/index.html"),
      },
    },
  },
})
