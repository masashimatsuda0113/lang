// app/[locale]/news/[id]/page.tsx
import { fetchNewsById } from '@/lib/newt-client';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './newsDetail.module.scss';

interface NewsItem {
  _id: string;
  title: string;
  category: string;
  eyecatch?: {
    src: string;
    altText?: string;
  };
  content: string;
  _sys: {
    raw: {
      publishedAt: string;
    };
  };
}

export default async function NewsDetailPage({ params }: { params: { locale: string; id: string } }) {
  const t = await getTranslations('NewsDetailPage');
  const newsItem = await fetchNewsById(params.id) as NewsItem;

  if (!newsItem) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{newsItem.category}</span>
            <time className={styles.date}>
              {new Date(newsItem._sys.raw.publishedAt).toLocaleDateString()}
            </time>
          </div>
          <h1 className={styles.title}>{newsItem.title}</h1>
        </div>

        {newsItem.eyecatch && (
          <div className={styles.eyecatch}>
            <Image
              src={newsItem.eyecatch.src}
              alt={newsItem.eyecatch.altText || newsItem.title}
              width={1200}
              height={600}
              className={styles.image}
            />
          </div>
        )}

        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />

        <div className={styles.footer}>
          <Link href="/news" className={styles.backLink}>
            ← {t('backToList')}
          </Link>
        </div>
      </article>
    </main>
  );
}
