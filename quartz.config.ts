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
    light: "#FFFFFF",       // 背景：纯白
    lightgray: "#E5E5E5",   // 边框/分割线：极浅灰
    gray: "#9B9A97",        // 次要信息（如日期）：中灰
    darkgray: "#37352F",    // 正文：Notion 经典的深炭灰色（非纯黑！）
    dark: "#191711",        // 标题：接近黑色
    secondary: "#2eaadc",   // 链接/强调色：Notion 蓝 (或者你可以选黑灰色 #37352F 保持极简)
    tertiary: "#F0F0F0",    // 鼠标悬停背景：很淡的灰色
    highlight: "rgba(46, 170, 220, 0.15)", // 搜索高亮
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
