// app/[locale]/news/[id]/page.tsx
import { fetchNews } from '@/lib/newt-client';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function NewsDetailPage({ params }: { params: { locale: string; id: string } }) {
  const t = await getTranslations('NewsDetailPage');
  const newsList = await fetchNews();
  const newsItem = newsList.find((item: any) => item._id === params.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <main>
      <h1>{newsItem.title}</h1>
      <p>{new Date(newsItem.publishDate).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
    </main>
  );
}
