import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";
import { I18nProvider } from "@/contexts/I18nProvider";
import { defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = getDictionary(defaultLocale);

  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body>
        <I18nProvider locale={defaultLocale} dict={dict}>
          {children}
          <InitAnimations />
        </I18nProvider>
      </body>
    </html>
  );
}
