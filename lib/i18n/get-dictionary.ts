import type { Locale } from "./config";
import { en } from "@/messages/en";
import { pl } from "@/messages/pl";

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  if (locale === "pl") {
    return pl as unknown as Dictionary;
  }
  return en;
}

export function createTranslator(dict: Dictionary) {
  return function t(path: string): string {
    const value = path.split(".").reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object" && key in (acc as object)) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, dict);

    return typeof value === "string" ? value : path;
  };
}
