import { GlobalConfiguration } from "../cfg"
import { ValidLocale } from "../i18n"
import { QuartzPluginData } from "../plugins/vfile"

interface Props {
  date: Date
  locale?: ValidLocale
}

export type ValidDateType = keyof Required<QuartzPluginData>["dates"]

export function getDate(cfg: GlobalConfiguration, data: QuartzPluginData): Date | undefined {
  if (!cfg.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set in the configuration object of quartz.config.ts. See https://quartz.jzhao.xyz/configuration#general-configuration for more details.`,
    )
  }
  return data.dates?.[cfg.defaultDateType]
}

export function formatDate(d: Date, locale: ValidLocale = "en-US"): string {
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

export function formatDateEnShort(d: Date): string {
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function Date({ date, locale }: Props) {
  return <time datetime={date.toISOString()}>{formatDate(date, locale)}</time>
}

interface PublishUpdateProps {
  created?: Date
  modified?: Date
}

export function PublishUpdateDate({ created, modified }: PublishUpdateProps) {
  if (!created && !modified) return null

  if (created && modified) {
    return (
      <span>
        发布于 <time datetime={created.toISOString()}>{formatDateEnShort(created)}</time>
        {" · "}
        更新于 <time datetime={modified.toISOString()}>{formatDateEnShort(modified)}</time>
      </span>
    )
  }

  if (created) {
    return (
      <span>
        发布于 <time datetime={created.toISOString()}>{formatDateEnShort(created)}</time>
      </span>
    )
  }

  return (
    <span>
      更新于 <time datetime={modified!.toISOString()}>{formatDateEnShort(modified!)}</time>
    </span>
  )
}

interface DateOnlyProps {
  date: Date
}

export function DateEnShort({ date }: DateOnlyProps) {
  return <time datetime={date.toISOString()}>{formatDateEnShort(date)}</time>
}
