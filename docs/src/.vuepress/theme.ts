import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import svgr from 'vite-plugin-svgr' 
import { componentsPlugin } from "vuepress-plugin-components";


export default hopeTheme({
  hostname: "https://panling.link",

  author: {
    name: "",
    url: "https://imon.eu.org",
  },

  iconAssets: "iconify",

    logo: "images/logo.png",

  // repo: "mon030/PANLING",
  // docsDir: "docs/src",
  // docsBranch: 'main',
    contributors: false,



  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "3ON EN",

      displayFooter: true,

      metaLocales: {
        editLink: false,
      },
    },

    /**
     * Traditional Chinese locale config
     */
    "/zh-TW/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "1",
      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: false,
        
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
  
       components: {
        // 你想使用的组件
        components: [
          "VidStack",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "StackBlitz",
          "VPCard",
          "VPBanner",
		  "SiteInfo",

          
        ],
      },
      
    comment: {
        provider: "Waline",
        serverURL: "https://c.3onem.eu.org",
        recaptchaV3Key: "6LcdIwoiAAAAAMQbdZ_wH5PVBeIwJPYbTCuOVaxM",
        pageview: true,
        reaction: true,
    },
    


	 copyright: true,
     

        markdownImage: {
        figure: true,
        lazyload: true,
        mark: true,
        size: true,
      },
      
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      include: true,
      mark: true,
      VPCard: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      vPre: true,
      vuePlayground: true,
    },

  },
});