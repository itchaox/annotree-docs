/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-07-13 09:50
 * @LastAuthor : itchaox
 * @LastTime   : 2024-07-14 10:45
 * @desc       :
 */
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Annotree',
  description: 'A VitePress Site',
  head: [['link', { rel: 'icon', href: '/logo-96.png' }]],
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
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
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/itchaox/annotree' }],
  },
});
