import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    { text: '为什么选择 Annotree', link: '/notes/why/' },
    { text: '功能介绍', link: '/notes/features/' },
    { text: '软件下载', link: '/notes/download/' },
    { text: '反馈渠道', link: '/notes/feedback/' },
    { text: '开发 Annotree 的故事', link: '/notes/story/' },
    { text: 'Annotree 的团队', link: '/notes/team/' },
    { text: '💗 赞助我', link: '/notes/sponsor/' },
  ],
};

export default sidebar;
