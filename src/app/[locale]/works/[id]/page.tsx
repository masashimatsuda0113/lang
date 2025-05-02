import { fetchWorkById } from '@/lib/newt-client';
import Image from 'next/image';
import styles from './detail.module.scss';

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await Promise.resolve(params);
  const work = await fetchWorkById(id);

  if (!work) return <p>施工実績が見つかりませんでした</p>;

  return (
    <main className={styles.main}>
      <h1>{work.title}</h1>

      {work.mainImage?.src && (
        <Image
          src={work.mainImage.src}
          alt={work.mainImage.altText || work.title}
          width={800}
          height={500}
        />
      )}

      <div className={styles.meta}>
        <p>工期：{work.period}</p>
        <p>エリア：{work.area}</p>
        <p>公開日：{new Date(work._sys.raw.publishedAt).toLocaleDateString('ja-JP')}</p>
      </div>

      <h2>技術ポイント</h2>
      <div
        dangerouslySetInnerHTML={{ __html: work.techPoint }}
        className={styles.rich}
      />

      <h2>詳細説明</h2>
      <div
        dangerouslySetInnerHTML={{ __html: work.description }}
        className={styles.rich}
      />
    </main>
  );
}
