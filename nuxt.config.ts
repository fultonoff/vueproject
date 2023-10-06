// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1,user-scalable=no",
      // title: "AEvent",
      // link: [{ rel: "icon", type: "image/png", href: `${process.env.CDN_URL}favicon.png` }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/public/assets/css/main.css"],
  tailwindcss: {
    configPath: "tailwind.config",
    exposeConfig: false,
    cssPath: "~/assets/css/tailwind.css",
  }
});