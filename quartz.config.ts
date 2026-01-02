import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * ⚠️ 需要修改的配置项已用 "👉" 标注
 */

const config: QuartzConfig = {
  configuration: {
    // 👉 修改为你的网站标题
    pageTitle: "ZenGen",
    
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible", // 如果不需要分析，改为 null
    },
    
    // 👉 修改为你的语言（中文保持 "zh-CN"）
    locale: "zh-CN",
    
    // 👉 修改为你的网站域名（例如：mysite.github.io）
    baseUrl: "zengen.top",
    
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // 👉 字体可选方案：
        // 方案1（推荐）：苹果风格
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
        
        // 方案2：如果上面字体加载慢，用这个
        // header: "system-ui",
        // body: "system-ui",
        // code: "Consolas",
      },
      colors: {
        // 浅色模式配色
        lightMode: {
          light: "#fafafa",           // 主背景色
          lightgray: "#f0f0f0",       // 次级背景
          gray: "#8e8e93",            // 灰色文字
          darkgray: "#1d1d1f",        // 深色文字
          dark: "#000000",            // 最深文字
          secondary: "#007AFF",       // 👉 主题强调色（苹果蓝）
          tertiary: "#5AC8FA",        // 次级强调色
          highlight: "rgba(0, 122, 255, 0.15)", // 高亮背景
        },
        // 深色模式配色
        darkMode: {
          light: "#0a0a0f",           // 主背景色（深色）
          lightgray: "#1c1c1e",       // 次级背景
          gray: "#8e8e93",            // 灰色文字
          darkgray: "#e5e5e7",        // 浅色文字
          dark: "#ffffff",            // 最浅文字
          secondary: "#0A84FF",       // 👉 深色模式强调色
          tertiary: "#64D2FF",        // 次级强调色
          highlight: "rgba(10, 132, 255, 0.15)", // 高亮背景
        },
      },
    },
  },
  
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
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
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
