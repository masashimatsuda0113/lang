//app/[locale]/works/page.tsx
import { fetchWorks } from "@/lib/newt-client";
import styles from "./works.module.scss";
import { getTranslations } from 'next-intl/server';
import ContactCTA from "@/components/ContactCTA";
import WorksList from "@/components/WorksList";
// Work型を定義
interface Work {
  _id: string;
  title: string;
  mainImage?: {
    src: string;
    altText?: string;
  };
  techPoint: string;
  area: string;
  cat: string;
  period: string;
  _sys: {
    raw: {
      publishedAt: string;
    };
  };
}

export default async function WorksPage() {
  const works = await fetchWorks() as Work[];
  const t = await getTranslations('WorksPage');

  // カテゴリーとエリアの一覧を取得
  const categories = Array.from(new Set(works.map((work: Work) => work.cat))) as string[];
  const areas = Array.from(new Set(works.map((work: Work) => work.area))) as string[];

  return (
    <main className={styles.main}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t('title')}</h1>
          <p className={styles.catch}>{t('catch')}</p>
        </div>
      </section>

      {/* フィルターと作品一覧 */}
      <WorksList 
        works={works}
        categories={categories}
        areas={areas}
        translations={{
          category: t('filters.category'),
          area: t('filters.area'),
          all: t('filters.all'),
          viewDetails: t('viewDetails')
        }}
      />

      {/* お問い合わせCTA */}
      <ContactCTA />
    </main>
  );
}
