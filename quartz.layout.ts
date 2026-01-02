import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  // 把搜索 / 标题 / 夜间模式放在 header，保证全站可见（桌面和移动都友好）
  header: [
    Component.Flex({
      components: [
        {
          Component: Component.PageTitle(),
          grow: true,
        },
        { Component: Component.Search() },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  // article header: 把 PageTitle/ArticleTitle/元数据归到内容上方，保证主内容区域居中呈现
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    // 在 beforeBody 放置 ArticleTitle，保证正文区顶部一致
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  // 左侧栏：移动端显示少量控件（避免占用正文空间）
  left: [
    // 移动端留一个轻量 PageTitle（折叠/简化），并放置移动专用控件
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(
      Component.Flex({
        components: [
          { Component: Component.Search(), grow: true },
          { Component: Component.ReaderMode() },
        ],
      }),
    ),
  ],
  // 右侧栏：桌面端的工具栏（目录、关系图、反向链接、资源树）
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.Backlinks()),
    // Explorer 放在右侧且仅桌面显示，移动端通过 header 的 Search+导航访问
    Component.DesktopOnly(Component.Explorer()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    // 列表页移动端显示简洁标题/搜索
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(
      Component.Flex({
        components: [{ Component: Component.Search(), grow: true }, { Component: Component.Darkmode() }],
      }),
    ),
  ],
  right: [
    // 列表页把 Explorer 和 TOC 等放到右侧，桌面优先
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}
