'use client';

import { usePathname, Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import styles from './header.module.scss';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const currentLocale = useLocale();
  const t = useTranslations('navigation');

  // メニューを閉じる関数
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 言語切替コンポーネント
  const LocaleSwitcher = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <div className={className}>
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
          <Link href="/" onClick={closeMenu} className={styles.logo}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo_w_white.png"
                alt="有限会社ウィルネット"
                width={58}
                height={58}
                className={styles.logoImage}
              />
              <h1 className={styles.companyName}>有限会社ウィルネット</h1>
            </div>
          </Link>
          <nav>
            <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
              <li><Link href="/services" onClick={closeMenu}>{t('services')}</Link></li>
              <li><Link href="/works" onClick={closeMenu}>{t('works')}</Link></li>
              <li><Link href="/company" onClick={closeMenu}>{t('company')}</Link></li>
              <li>
                <Link href="/recruit" onClick={closeMenu}>{t('recruit')}</Link>
                <ul className={styles.subMenu}>
                  <li><Link href="/recruit/contact" onClick={closeMenu}>{t('recruitEntry')}</Link></li>
                </ul>
              </li>
              <li><Link href="/contact" onClick={closeMenu}>{t('contact')}</Link></li>
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
