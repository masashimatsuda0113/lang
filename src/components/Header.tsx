'use client';

import { usePathname, Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import styles from './header.module.scss';
import { useState } from 'react';
import { useLocale } from 'next-intl';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const currentLocale = useLocale();

  // メニューを閉じる関数
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 言語切替コンポーネント
  const LocaleSwitcher = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <div className={className}>
      <span>🌍 Language:</span>
      <ul>
        {routing.locales.map((locale) => (
          <li key={locale}>
            <Link 
              href={pathname} 
              locale={locale} 
              onClick={onClick}
              className={locale === currentLocale ? styles.active : ''}
            >
              {locale.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" onClick={closeMenu}>Willnet</Link>
          <nav>
            <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
              <li><Link href="/services" onClick={closeMenu}>事業内容</Link></li>
              <li><Link href="/works" onClick={closeMenu}>施工実績</Link></li>
              <li><Link href="/company" onClick={closeMenu}>会社情報</Link></li>
              <li><Link href="/recruit" onClick={closeMenu}>採用情報</Link></li>
              <li><Link href="/contact" onClick={closeMenu}>お問い合わせ</Link></li>
            </ul>
          </nav>

          {/* ハンバーガーメニューボタン */}
          <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* PC版の言語スイッチャー */}
          <div className={styles.pcLocaleSwitcher}>
            <LocaleSwitcher />
          </div>
        </div>
      </header>

      {/* SP版の言語切替フローティングボタン */}
      <div className={styles.spLangButton}>
        <button 
          onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          className={isLangMenuOpen ? styles.active : ''}
          aria-label="言語切替"
        >
          🌍
        </button>
        {isLangMenuOpen && (
          <div className={styles.spLangMenu}>
            {routing.locales.map((locale) => (
              <Link 
                key={locale}
                href={pathname} 
                locale={locale}
                className={locale === currentLocale ? styles.active : ''}
                onClick={() => setIsLangMenuOpen(false)}
              >
                {locale.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
