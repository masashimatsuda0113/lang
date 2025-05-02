'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './languageSwitcher.module.scss';

const locales = ['ja', 'en', 'zh'];

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params?.locale || 'ja'; // URLから取得！

  return (
    <div className={styles.switcher}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={pathname.replace(`/${currentLocale}`, `/${locale}`)}
          className={styles.link}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
