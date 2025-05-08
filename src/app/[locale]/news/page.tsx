// app/[locale]/news/page.tsx
import { fetchNews } from '@/lib/newt-client';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import styles from './news.module.scss';

// ニュースアイテムの型定義
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

export default async function NewsPage({
  searchParams,
}: {
  searchParams: { category?: string; year?: string };
}) {
  const t = await getTranslations('NewsPage');
  const newsList = await fetchNews() as NewsItem[];
  const params = await Promise.resolve(searchParams);

  // カテゴリの一覧を取得（重複を除去）
  const categories = Array.from(new Set(newsList.map(item => item.category)));

  // 年別の記事数を集計
  const yearCounts = newsList.reduce((acc, item) => {
    const year = new Date(item._sys.raw.publishedAt).getFullYear();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  // 年を降順でソート
  const years = Object.keys(yearCounts)
    .map(Number)
    .sort((a, b) => b - a);

  // フィルタリング
  let filteredNews = newsList;
  if (params.category) {
    filteredNews = filteredNews.filter(item => item.category === params.category);
  }
  if (params.year) {
    const year = parseInt(params.year);
    filteredNews = filteredNews.filter(item => 
      new Date(item._sys.raw.publishedAt).getFullYear() === year
    );
  }

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarSection}>
          <h2 className={styles.sidebarTitle}>{t('categories')}</h2>
          <ul className={styles.categoryList}>
            <li>
              <Link 
                href="/news"
                className={!params.category ? styles.active : ''}
              >
                {t('filters.all')}
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <Link 
                  href={`/news?category=${category}`}
                  className={params.category === category ? styles.active : ''}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <h2 className={styles.sidebarTitle}>{t('archives')}</h2>
          <ul className={styles.yearList}>
            <li>
              <Link 
                href="/news"
                className={!params.year ? styles.active : ''}
              >
                {t('filters.all')}
              </Link>
            </li>
            {years.map((year) => (
              <li key={year}>
                <Link 
                  href={`/news?year=${year}`}
                  className={params.year === year.toString() ? styles.active : ''}
                >
                  {year}年 ({yearCounts[year]})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className={styles.main}>
        <h1 className={styles.title}>{t('title')}</h1>
        {filteredNews.length > 0 ? (
          <ul className={styles.newsList}>
            {filteredNews.map((item) => (
              <li key={item._id} className={styles.newsItem}>
                <Link href={`/news/${item._id}`}>
                  <div className={styles.newsContent}>
                    {item.eyecatch && (
                      <div className={styles.eyecatch}>
                        <Image
                          src={item.eyecatch.src}
                          alt={item.eyecatch.altText || item.title}
                          width={200}
                          height={150}
                          className={styles.image}
                        />
                      </div>
                    )}
                    <div className={styles.textContent}>
                      <div className={styles.newsMeta}>
                        <span className={styles.category}>{item.category}</span>
                        <time className={styles.newsDate}>
                          {new Date(item._sys.raw.publishedAt).toLocaleDateString()}
                        </time>
                      </div>
                      <h2 className={styles.newsTitle}>{item.title}</h2>
                      <div 
                        className={styles.newsExcerpt}
                        dangerouslySetInnerHTML={{ 
                          __html: item.content.substring(0, 100) + '...' 
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noNews}>{t('noNews')}</p>
        )}
      </main>
    </div>
  );
}
