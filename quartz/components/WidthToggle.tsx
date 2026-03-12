// @ts-ignore
import widthToggleScript from "./scripts/widthtoggle.inline"
import styles from "./styles/widthtoggle.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const WidthToggle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "widthtoggle")} aria-label="Toggle wide mode">
      {/* Icon shown in normal mode: click to expand */}
      <svg
        class="expandIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <title>展开全宽</title>
        <path d="M3 3h7v2H5v4H3V3zm11 0h7v6h-2V5h-5V3zM3 15h2v4h5v2H3v-6zm16 4h-5v2h7v-6h-2v4z" />
      </svg>
      {/* Icon shown in wide mode: click to compress */}
      <svg
        class="compressIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <title>收缩宽度</title>
        <path d="M9 9H3V7h4V3h2v6zm6-6v4h4v2h-6V3h2zm-6 12H3v-2h6v6H7v-4zm8 4v-6h6v2h-4v4h-2z" />
      </svg>
    </button>
  )
}

WidthToggle.beforeDOMLoaded = widthToggleScript
WidthToggle.css = styles

export default (() => WidthToggle) satisfies QuartzComponentConstructor
