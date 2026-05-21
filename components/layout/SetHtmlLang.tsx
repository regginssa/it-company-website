"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

type SetHtmlLangProps = {
  locale: Locale;
};

const SetHtmlLang = ({ locale }: SetHtmlLangProps) => {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
};

export default SetHtmlLang;
