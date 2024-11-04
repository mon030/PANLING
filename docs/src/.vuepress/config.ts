import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js"
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import googleAdSensePlugin from 'vuepress-plugin-google-adsense2'
import { searchProPlugin } from "vuepress-plugin-search-pro"

export default defineUserConfig({
  base: "/",
  bundler: viteBundler(),

  locales: {
    "/": {
      lang: "zh-CN",
      title: "盘灵古域攻略站",
      description: "盘灵古域WIKI & 攻略站",
    },
    "/zh-TW/": {
      lang: "zh-TW",
      title: "盤靈古域攻略站",
      description: "盤靈古域WIKI & 攻略站",
    },
  },

  theme,

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-EFWFD2M8G0',
    }),
    
    googleAdSensePlugin({
      id: "ca-pub-2860229584748328",
    }),

  ],

  sidebar: "heading",

  // Enable it with pwa
  shouldPrefetch: false,
})
