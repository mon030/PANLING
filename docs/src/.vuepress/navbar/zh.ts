import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "游玩指南", icon: "solar:book-bookmark-line-duotone", link: "/basic/start/" },
  { text: "服务器", icon: "solar:server-bold-duotone", link: "/servers/" },

  {
    text: "投稿",
    icon: "solar:document-add-bold-duotone",
    link: "/other/post",
  },
]);
