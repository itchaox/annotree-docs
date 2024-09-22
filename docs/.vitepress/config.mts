/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-07-13 09:50
 * @LastAuthor : itchaox
 * @LastTime   : 2024-08-07 23:07
 * @desc       :
 */
import { defineConfig } from 'vitepress'

import { loadEnv } from 'vite'
const mode = process.env.NODE_ENV || 'development'
const { VITE_BASE_URL } = loadEnv(mode, process.cwd())

console.log('Mode:', process.env.NODE_ENV)
console.log('VITE_BASE_URL:', VITE_BASE_URL)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Annotree',
  description: 'A VitePress Site',
  head: [
    // logo
    ['link', { rel: 'icon', href: '/logo-96.png' }],

    // FIXME 配置 Google Analytics 网站统计
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-Q0JKGYQF74' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q0JKGYQF74');`,
    ],

    // Microsoft Clarity 网站分析
    [
      'script',
      {},
      `
 (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "n75hvvjzlw");
`,
    ],
  ],
  lastUpdated: true,
  base: VITE_BASE_URL,
  markdown: { // markdown 配置
    math: true,
    lineNumbers: true, // 行号显示
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    // 组件插入h1标题下
    config: (md) => {
      // 创建 markdown-it 插件
      md.use((md) => {
        const defaultRender = md.render
        md.render = function (...args) {
          const [content, env] = args
          const isHomePage = env.path === '/' || env.relativePath === 'index.md'  // 判断是否是首页

          if (isHomePage) {
            return defaultRender.apply(md, args) // 如果是首页，直接渲染内容
          }
          // 调用原始渲染
          let defaultContent = defaultRender.apply(md, args)
          // 替换内容
          defaultContent = defaultContent.replace(/NOTE/g, '提醒')
            .replace(/TIP/g, '建议')
            .replace(/IMPORTANT/g, '重要')
            .replace(/WARNING/g, '警告')
            .replace(/CAUTION/g, '注意')
          // 在每个 md 文件内容的开头插入组件
          const component = '<ArticleMetadata />\n'
          // 返回渲染的内容
          return component + defaultContent
        }
      })
    }
  },
  themeConfig: {
    logo: '/logo.png',
    footer: {
      message: '基于 <a href="https://opensource.org/license/MIT">MIT</a> 许可发布.',
      copyright: '版权所有 © 2024 <a href="https://github.com/itchaox">itchaox</a>',
    },
    search: {
      provider: 'local',
    },
    // 修改文档页脚的文字
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdatedText: '最后更新于',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    outlineTitle: '本页目录',
    outline: 'deep',
    nav: [
      { text: '指南', link: '/notes/why' },
      { text: '下载', link: '/notes/download' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '为什么选择 Annotree', link: '/notes/why' },
          { text: '功能介绍', link: '/notes/features' },
          { text: '软件下载', link: '/notes/download' },
          { text: '反馈渠道', link: '/notes/feedback' },
          { text: '开发 Annotree 的故事', link: '/notes/story' },
          { text: 'Annotree 的团队', link: '/notes/team' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/itchaox/annotree' }],
  },
})
