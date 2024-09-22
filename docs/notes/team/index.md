---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/itchaox.png',
    name: 'Wang Chao',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/itchaox' },
    ]
  },
    {
    avatar: 'https://www.github.com/Xi-Yuer.png',
    name: '小鱼儿',
    title: '开发人员',
    links: [
      { icon: 'github', link: 'https://github.com/Xi-Yuer' },
    ]
  },
      {
    avatar: 'https://github.com/Aurorxa.png',
    name: '许大仙',
    title: '文档共建者',
    links: [
      { icon: 'github', link: 'https://github.com/Aurorxa' },
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      Annotree 的开发团队由社区成员组成，以下是一些主要贡献者。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
    size="small"
  />
</VPTeamPage>
