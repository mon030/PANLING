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
          "AudioPlayer",
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
     
         feed: {
      atom: true,
      json: true,
      rss: true,
    },
    

    
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      VPCard: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: true,
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
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

     pwa: {
       favicon: "/favicon.ico",
       cacheHTML: true,
       cachePic: true,
      appendBase: true,
       apple: {
        icon: "/assets/icon/apple-icon-152.png",
         statusBarColor: "black",
       },
       msTile: {
         image: "/assets/icon/ms-icon-144.png",
         color: "#ffffff",
       },
       themeColor: "#ff6347",

       manifest: {
         icons: [
           {
             src: "/assets/icon/chrome-mask-512.png",
             sizes: "512x512",
             purpose: "maskable",
             type: "image/png",
           },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
           },
         ],
         
       },
     },
  },
});