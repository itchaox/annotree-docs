/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-23 00:25
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-11-15 12:30
 * @desc       :
 */
import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    { text: '为什么选择 Annotree', link: '/notes/why/' },
    { text: '功能介绍', link: '/notes/features/' },
    { text: '软件下载', link: '/notes/download/' },
    { text: '反馈渠道', link: '/notes/feedback/' },
    { text: '开发 Annotree 的故事', link: '/notes/story/' },
    { text: 'Annotree 的团队 🤝🏻', link: '/notes/team/' },
    { text: 'Annotree 的支持者 🌟', link: '/notes/star/' },
    { text: '赞助我 💖', link: '/notes/sponsor/' },
  ],
};

export default sidebar;
