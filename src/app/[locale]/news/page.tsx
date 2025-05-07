// app/[locale]/news/page.tsx
import { fetchNews } from '@/lib/newt-client';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

// ニュースアイテムの型定義
interface NewsItem {
  _id: string;
  title: string;
  publishDate: string;
}

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('NewsPage');
  const newsList = await fetchNews();

  return (
    <main>
      <h1>{t('title')}</h1>
      <ul>
        {newsList.map((item: NewsItem) => (
          <li key={item._id}>
            <Link href={`/${params.locale}/news/${item._id}`}>
              {item.title}（{new Date(item.publishDate).toLocaleDateString()})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
