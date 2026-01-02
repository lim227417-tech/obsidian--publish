import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ZenGen",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "zengen.top",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local", // 【重要修正】改为 local，防止去 Google 下载系统字体导致报错
      cdnCaching: true,
      typography: {
        header: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
        body: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif",
        code: "'SF Mono', 'Menlo', monospace",
      },
      colors: {
        lightMode: {
          light: "#F5F5F7",      // 页面整体背景
          lightgray: "#E5E5E5",  // 边框
          gray: "#86868b",       // 次要文字
          darkgray: "#1d1d1f",   // 正文
          dark: "#000000",       // 标题
          secondary: "#0071e3",  // Apple 官方蓝色
          tertiary: "#5AC8FA",
          highlight: "rgba(0, 113, 227, 0.1)",
        },
        darkMode: {
          light: "#000000",      // 暗色模式背景
          lightgray: "#333333",
          gray: "#86868b",
          darkgray: "#f5f5f7",   // 正文
          dark: "#ffffff",       // 标题
          secondary: "#2997ff",  // Apple 暗色模式蓝
          tertiary: "#64D2FF",
          highlight: "rgba(41, 151, 255, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // 【修正】这里已经帮你真正注释掉了，可以加快构建速度
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
