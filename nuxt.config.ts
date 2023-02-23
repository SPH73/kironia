// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  ssr: true,
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    private: {
      atApiKey: process.env.AT_API_KEY,
    },
    public: {
      atBaseId: process.env.AT_BASE_ID,
    },
  },
});
