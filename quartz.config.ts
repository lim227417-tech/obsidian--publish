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
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
  lightMode: {
    lightMode: {
      light: "#faf8f8",      // 背景色
      lightgray: "#e5e5e5",  // 边框、分割线
      gray: "#b8b8b8",       // 辅助文字、图表节点
      darkgray: "#4e4e4e",   // 正文文字
      dark: "#2b2b2b",       // 标题文字
      secondary: "#284b63",  // 链接颜色、强调色 (最重要)
      tertiary: "#84a59d",   // 鼠标悬停颜色、高亮背景
      highlight: "rgba(143, 159, 169, 0.15)", // 文本高亮背景
  },
  darkMode: {
    light: "#191919",       // Notion 深色模式背景
    lightgray: "#2F2F2F",
    gray: "#9B9A97",
    darkgray: "#D3D3D3",    // 深色模式文字
    dark: "#FFFFFF",
    secondary: "#5AC8FA",   // 深色模式下的蓝色
    tertiary: "#2F2F2F",
    highlight: "rgba(90, 200, 250, 0.15)",
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
