import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { MeiliSearchPlugin } from 'vuepress-plugin-meilisearch2'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "盘灵古域攻略站",
  description: "盘灵古域WIKI&攻略站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  
  plugins: [
    MeiliSearchPlugin({
      apiKey: "a90f00084e9e009494ae9b6028f44194a4468ed2122a74d2292695b94557e0ba",
      indexUid: "vuepress",
    })
  ],
});
