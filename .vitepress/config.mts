/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-07-13 09:50
 * @LastAuthor : itchaox
 * @LastTime   : 2024-07-14 11:04
 * @desc       :
 */
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Annotree',
  description: 'A VitePress Site',
  head: [['link', { rel: 'icon', href: '/logo-96.png' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
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
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/itchaox/annotree' }],
  },
});
