"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useI18n } from "@/contexts/I18nProvider";
import { localizedPath } from "@/lib/i18n/navigation";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

const LocalizedLink = ({ href, ...props }: LocalizedLinkProps) => {
  const { locale } = useI18n();
  const path = href.startsWith("http") ? href : localizedPath(locale, href);

  return <Link href={path} {...props} />;
};

export default LocalizedLink;
