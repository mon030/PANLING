import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { defaultTheme } from "@vuepress/theme-default";
import { commentPlugin } from "vuepress-plugin-comment2";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";




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
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  
    sidebar: "heading",


  // Enable it with pwa
  // shouldPrefetch: false,
});
