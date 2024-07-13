/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-07-13 09:50
 * @LastAuthor : itchaox
 * @LastTime   : 2024-07-13 13:15
 * @desc       :
 */
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Annotree',
  description: 'A VitePress Site',
  themeConfig: {
    logo: 'images/logo.png',
    search: {
      provider: 'local',
    },
    nav: [
      { text: '指南', link: '/why' },
      { text: '下载', link: '/download' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '为什么选择 Annotree', link: '/why' },
          { text: '功能介绍', link: '/markdown-examples' },
          { text: '软件下载', link: '/download' },
          { text: '反馈渠道', link: '/feedback' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/itchaox/annotree' }],
  },
});
