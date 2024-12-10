import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "primeicons/primeicons.css", // 这里引入'
  ],
  auth: {
    requestTimeout: 5000,
    provider: {
      type: "authjs",
      trustHost: false,
      defaultProvider: "github",
      addDefaultCallbackUrl: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@nuxt/icon",
    "@sidebase/nuxt-auth",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  build: {
    transpile: ["primevue"],
  },
  ssr: false,
  vite: {
    define: {
      "process.env.NODE_ENV": '"production"',
      "process.env.MONACO_EDITOR_NO_WORKER": '"true"',
    },
    optimizeDeps: {
      exclude: ["monaco-editor"],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "monaco-editor": ["monaco-editor"],
          },
        },
      },
    },
  },
});
