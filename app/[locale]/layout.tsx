import { notFound } from "next/navigation";
import { I18nProvider } from "@/contexts/I18nProvider";
import SetHtmlLang from "@/components/layout/SetHtmlLang";
import JsonLd from "@/components/seo/JsonLd";
import { locales, type Locale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <I18nProvider locale={locale} dict={dict}>
        <SetHtmlLang locale={locale} />
        {children}
      </I18nProvider>
      <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
    </>
  );
}
