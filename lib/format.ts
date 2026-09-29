import { localeInfo, t, type Locale } from "@/lib/i18n";

const formatters = new Map<string, Intl.DateTimeFormat>();

const formatter = (locale: Locale, month: "short" | "long") => {
  const key = `${locale}-${month}`;
  let f = formatters.get(key);
  if (!f) {
    f = new Intl.DateTimeFormat(localeInfo[locale].intl, {
      month,
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
    formatters.set(key, f);
  }
  return f;
};

export function formatDate(iso: string, locale: Locale = "en"): string {
  return formatter(locale, "short").format(new Date(iso));
}

export function formatReadingTime(minutes: number, locale: Locale = "en"): string {
  return t(locale).minRead(minutes);
}

export function formatLongDate(iso: string, locale: Locale = "en"): string {
  return formatter(locale, "long").format(new Date(iso));
}
