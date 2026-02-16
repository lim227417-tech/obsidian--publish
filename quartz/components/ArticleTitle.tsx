import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const isIndexPage = fileData.slug === "index"
  if (title) {
    return (
      <h1 class={classNames(displayClass, "article-title", isIndexPage ? "index-title" : "")}>
        {title}
      </h1>
    )
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

.article-title.index-title {
  text-align: center;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
