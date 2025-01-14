import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/other/download/",
  "/portfolio",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "基础指南",
        icon: "lightbulb",
        prefix: "basic/",
        children: ["start", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "进阶指南",
        icon: "lightbulb",
        prefix: "advanced/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "服务器列表",
    icon: "book",
    link: "https://servers.panling.link/",
  },
]);
