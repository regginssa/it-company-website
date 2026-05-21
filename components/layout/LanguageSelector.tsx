"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  localeLabels,
  locales,
  type Locale,
  isLocale,
} from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/i18n/navigation";

const LanguageSelector = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLocale: Locale = isLocale(params?.locale as string)
    ? (params.locale as Locale)
    : "en";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (locale: Locale) => {
    setOpen(false);
    if (locale === currentLocale) return;
    router.push(switchLocalePath(pathname, locale));
  };

  return (
    <div className="language-selector" ref={containerRef}>
      <button
        type="button"
        className="language-selector__toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((prev) => !prev)}
      >
        <i className="fa-solid fa-globe" aria-hidden="true"></i>
        <span style={{ color: "white" }}>{localeLabels[currentLocale]}</span>
        <i
          className={`fa-solid fa-chevron-down ${open ? "is-open" : ""}`}
          aria-hidden="true"
        ></i>
      </button>
      {open && (
        <ul className="language-selector__menu" role="listbox">
          {locales.map((locale) => (
            <li
              key={locale}
              role="option"
              aria-selected={locale === currentLocale}
            >
              <button
                type="button"
                className={locale === currentLocale ? "is-active" : ""}
                onClick={() => handleSelect(locale)}
              >
                {localeLabels[locale]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
