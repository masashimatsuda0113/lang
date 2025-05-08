import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {routing} from '@/i18n/routing';
import '@/styles/globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {notoSerifJP, yuGothic, minionPro} from '@/lib/fonts';
import ClientLayout from './ClientLayout';

// このページの設定を定義します
type Props = {
  children: ReactNode;  // ページの中身
  params: Promise<{locale: Locale}>;  // 言語の設定
};

// どの言語のページを作るか決めます
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

// ページのタイトルなどの情報を設定します
export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params;

  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')  // ページのタイトルを設定
  };
}

// メインのレイアウトを作ります
export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  // 設定された言語が正しいかチェックします
  if (!hasLocale(routing.locales, locale)) {
    notFound();  // 間違った言語の場合は「ページが見つかりません」と表示
  }

  // 言語の設定を保存します
  setRequestLocale(locale);
  
  // ページの見た目を作ります
  return (
    <html lang={locale} className={`${notoSerifJP.variable} ${yuGothic.variable} ${minionPro.variable}`}>
      <body>
        <NextIntlClientProvider>
          <ClientLayout>
            <Header />  {/* ページの上部に表示する部分 */}
            {children}  {/* ページのメインの内容 */}
            <Footer />  {/* ページの下部に表示する部分 */}
          </ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

