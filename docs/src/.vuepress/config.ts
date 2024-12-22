import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "盘灵古域攻略站",
  description: "盘灵古域WIKI&攻略站",

  theme,


  // 和 PWA 一起启用
  // shouldPrefetch: false,
  
});
