import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 👉 可以修改这里的组件来调整页面布局

// 顶部和底部的共享布局
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      // 👉 修改为你的社交链接（不需要的可以删除）
      "GitHub": "https://github.com/你的用户名",
      "Twitter": "https://twitter.com/你的用户名",
      // "Discord": "https://discord.gg/你的服务器",
    },
  }),
}

// 页面主体布局
export const defaultContentPageLayout: PageLayout = {
  // 内容前（标题区域）
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  
  // 左侧栏（桌面端显示）
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      // 👉 文件浏览器设置
      title: "📂 文件浏览器", // 可以修改标题
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
      sortFn: (a, b) => {
        // 按字母排序
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName, "zh-CN")
        }
        if (a.file && !b.file) {
          return 1
        } else {
          return -1
        }
      },
    })),
  ],
  
  // 右侧栏（桌面端显示）
  right: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,
        scale: 1.1,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        showTags: true,
        removeTags: [],
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        showTags: true,
        removeTags: [],
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  
  // ⚠️ 这是之前遗漏的关键部分！
  // 内容后（文章底部）
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // 👉 如果你想启用评论，需要配置 Giscus
        // 不需要评论系统可以删除整个 Comments 组件
        repo: '你的用户名/你的仓库名
