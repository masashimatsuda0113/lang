'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './header.module.scss';

export default function Header() {
  const { locale } = useParams() as { locale: string };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={`/${locale}/`}>Willnet</Link>
        <nav>
          <ul className={styles.navList}>
            <li><Link href={`/${locale}/services`}>事業内容</Link></li>
            <li><Link href={`/${locale}/works`}>施工実績</Link></li>
            <li><Link href={`/${locale}/company`}>会社情報</Link></li>
            <li><Link href={`/${locale}/recruit`}>採用情報</Link></li>
            <li><Link href={`/${locale}/contact`}>お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
