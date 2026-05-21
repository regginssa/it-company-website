import type { Locale } from "./config";

export function localizedPath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  if (!normalized || normalized === "/") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && (segments[0] === "en" || segments[0] === "pl")) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "";
  }
  return pathname === "/" ? "" : pathname;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = stripLocaleFromPath(pathname);
  return localizedPath(locale, pathWithoutLocale);
}
