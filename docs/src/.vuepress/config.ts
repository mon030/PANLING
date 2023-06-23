import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { defaultTheme } from "@vuepress/theme-default";
import { commentPlugin } from "vuepress-plugin-comment2";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'





export default defineUserConfig({
  base: "/",

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
    
  ],
  
    sidebar: "heading",


  // Enable it with pwa
  // shouldPrefetch: false,
});
