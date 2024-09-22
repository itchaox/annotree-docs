// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import ArticleMetadata from "./components/ArticleMetadata.vue"
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick, h } from 'vue'
import { useData, useRoute } from 'vitepress'
import confetti from "./components/confetti.vue"
import backTop from "./components/backTop.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import './style/index.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(backTop), // 使用doc-footer-before插槽
    })
  },
  enhanceApp({ app }) {
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('confetti', confetti)
    app.component('HomeUnderline', HomeUnderline)
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData()
    const route = useRoute()
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    }
    onMounted(() => {
      initZoom()

      // 添加 .VPNavBarTitle 的点击事件
      const navBarTitle = document.querySelector('.VPNavBarTitle')
      if (navBarTitle) {
        navBarTitle.addEventListener('click', () => {
          // 刷新页面
          location.reload()
        })
      }

      // 禁止 ios 缩放屏幕
      document.addEventListener('gesturestart', function (event) {
        event.preventDefault()
      })

      // 禁止移动端（IOS）双击页面变大
      let touchTime = 0
      document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
          event.preventDefault()
        }
      })
      document.addEventListener(
        'touchend',
        function (event) {
          //记录当前点击的时间与下一次时间的间隔
          const nowTime = new Date()
          if (nowTime.getTime() - touchTime <= 300) {
            event.preventDefault()
          }
          touchTime = nowTime.getTime()
        },
        false
      )
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}