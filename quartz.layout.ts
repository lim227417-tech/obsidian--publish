// quartz.layout.ts

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
    // 把目录放到左侧（可选，或者直接不要目录看看效果）
    Component.DesktopOnly(Component.TableOfContents()), 
  ],
  right: [
    // 【关键操作】清空右侧栏，让中间内容自动向右延展
    // 如果你非常需要右侧栏，后面可以再加回来，先确保布局正常
  ],
}
