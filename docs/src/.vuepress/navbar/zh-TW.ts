import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "遊玩指南", icon: "solar:book-bookmark-line-duotone", link: "/basic/start/" },
  { text: "伺服器", icon: "solar:server-bold-duotone", link: "/servers/" },

  {
    text: "投稿",
    icon: "jam:write",
    link: "other/post",
  },
]);
