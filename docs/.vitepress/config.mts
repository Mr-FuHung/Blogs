import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";
// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekTheme: true,
  teekHome: true,
  vpHome: false,
  homeCardListPosition: "right",
  anchorScroll: true,
  themeSize: "large",
  backTopDone: TkMessage => TkMessage.success("返回顶部成功"),
  codeBlock: {
    disabled: false, // 是否禁用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  banner: {
    name: "🎉 Baron Blog",
    bgStyle: "fullImg",
    imgInterval: 5000,
    imgSrc: [
      "/static/images/2471500371403472896.heic",
      "/static/images/2464211254114254848.heic",
    ],
    description: [
      "情绪稳定是一生的修行，内心强大是无畏的底气",
      "故事由我书写，旅程由你见证，传奇由她聆听",
      "积跬步以至千里，致敬每个爱学习的你",
    ],
    descStyle: "types"
  },
  footerInfo: {//页脚配置
    // 页脚信息，支持 HTML 格式（位于主题版权上方）
    topMessage: ["welcome to my blog!"],
    // 页脚信息，支持 HTML 格式（位于主题版权下方）
    bottomMessage: ["博客是一个分享技术和生活的地方，欢迎大家来访！"],
    // 主题版权配置
    theme: {
      show: false, // 是否显示主题版权，建议显示
    },
    // 博客版权配置
    copyright: {
      show: true, // 是否显示博客版权
      createYear: 2024, // 创建年份
      suffix: "Baron Blog", // 后缀
    },
    // ICP 备案信息配置
    icpRecord: {
      name: "豫ICP备2021009994号",
      link: "",
    },
    // 网络安全备案信息配置
    securityRecord: {
      name: "豫公网安备",
      link: "",
    },
  },
  blogger: {//主页博主卡片配置
    avatar: "/static/images/logo.png",
    // "shape": "circle-rotate",
    name: "Baron",
    slogan: "朝圣的使徒，正在走向编程的至高殿堂！"
  },
  docAnalysis: {//主页站点信息配置
    createTime: "2025-05-17",
    statistics: {
      provider: "busuanzi"
    },
  },

  post: {//主页文章卡片的封面配置
    showCapture: true,
    imageViewer: {
      hideOnClickModal: true
    },
    coverImgMode: "full"
  },

  comment: {//评论配置---待完善
    provider: "giscus",
    options: {
      repo: "Kele-Bingtang/vitepress-theme-teek",
      repoId: "R_kgDONpVfBA",
      category: "Announcements",
      categoryId: "DIC_kwDONpVfBM4Cm3v9"
    }
  }
})



// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,//继承 Teek 主题配置
  // lang: 'en-US',
  title: "Baron",
  description: "个人技术分享",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false,
    logo: '/static/images/logo.png',
    // siteTitle: 'Hello World',
    nav: [
      { text: '主页', link: '/' },
      { text: '列表', link: '/markdown-examples' }
    ],

    sidebar: {
      '/WebPages/': [
        {
          text: 'AJAX',
          collapsed: true,//折叠
          items: [
            { text: 'XHR', link: '/WebPages/AJAX/xhr' },
            { text: 'Fetch', link: '/WebPages/AJAX/fetch' }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2024-present Evan You'
    // },
    search: {
      provider: 'local'
    }
    // editLink: {//可以显示一个链接，以在 GitHub 或 GitLab 等 Git 管理服务上编辑页面
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    // }
  }
})
