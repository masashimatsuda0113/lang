import { fetchWorkById } from '@/lib/newt-client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './detail.module.scss';
import { getTranslations } from 'next-intl/server';

interface GalleryImage {
  src: string;
  altText?: string;
}

interface Work {
  _id: string;
  title: string;
  mainImage?: {
    src: string;
    altText?: string;
  };
  techPoint: string;
  description: string;
  area: string;
  cat: string;
  period: string;
  gallery?: GalleryImage[];
  _sys: {
    raw: {
      publishedAt: string;
    };
  };
}

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await Promise.resolve(params);
  const work = await fetchWorkById(id) as Work;
  const t = await getTranslations('WorkDetail');

  if (!work) return <p>施工実績が見つかりませんでした</p>;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{work.title}</h1>

      {work.mainImage?.src && (
        <div className={styles.mainImage}>
          <Image
            src={work.mainImage.src}
            alt={work.mainImage.altText || work.title}
            width={1200}
            height={800}
            priority
          />
        </div>
      )}

      <div className={styles.info}>
        <h2>{t('basicInfo')}</h2>
        <div className={styles.meta}>
          <div className={styles.item}>
            <span className={styles.label}>{t('period')}</span>
            <span className={styles.value}>{work.period}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>{t('area')}</span>
            <span className={styles.value}>{work.area}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>{t('category')}</span>
            <span className={styles.value}>{work.cat}</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>{t('techPoint')}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: work.techPoint }}
          className={styles.rich}
        />
      </div>

      <div className={styles.section}>
        <h2>{t('description')}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: work.description }}
          className={styles.rich}
        />
      </div>

      {work.gallery && work.gallery.length > 0 && (
        <div className={styles.section}>
          <h2>{t('gallery')}</h2>
          <div className={styles.gallery}>
            {work.gallery.map((image: GalleryImage, index: number) => (
              <div key={index} className={styles.image}>
                <Image
                  src={image.src}
                  alt={image.altText || `${work.title} - ${index + 1}`}
                  width={400}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Link href="/works" className={styles.backButton}>
        ← {t('backToList')}
      </Link>
    </main>
  );
}
