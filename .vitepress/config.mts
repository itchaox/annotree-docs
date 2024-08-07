/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-07-13 09:50
 * @LastAuthor : itchaox
 * @LastTime   : 2024-08-07 23:07
 * @desc       :
 */
import { defineConfig } from 'vitepress';

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
      { text: '指南', link: '/why' },
      { text: '下载', link: '/download' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '为什么选择 Annotree', link: '/why' },
          { text: '功能介绍', link: '/features' },
          { text: '软件下载', link: '/download' },
          { text: '反馈渠道', link: '/feedback' },
          { text: '开发 Annotree 的故事', link: '/story' },
          { text: 'Annotree 的团队', link: '/team' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/itchaox/annotree' }],
  },
});
