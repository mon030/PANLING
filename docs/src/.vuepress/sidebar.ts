import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "服务器列表",
      icon: "person-chalkboard",
      link: "https://servers.panling.link/",
    },
    "portfolio",
    {
      text: "剧情记录",
      icon: "laptop-code",
      prefix: "stories/",
      link: "stories/",
      children: "structure",
    },
    "maps/",
    "items/",
	"equipments/",
  ],
});
