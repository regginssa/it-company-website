"use client";

import { createContext, useContext, useMemo } from "react";
import type { Locale } from "@/lib/i18n/config";
import {
  createTranslator,
  type Dictionary,
} from "@/lib/i18n/get-dictionary";

type I18nContextValue = {
  locale: Locale;
  dict: Dictionary;
  t: ReturnType<typeof createTranslator>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

type I18nProviderProps = {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
};

export function I18nProvider({ locale, dict, children }: I18nProviderProps) {
  const value = useMemo(
    () => ({
      locale,
      dict,
      t: createTranslator(dict),
    }),
    [locale, dict]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
