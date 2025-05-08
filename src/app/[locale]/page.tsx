// src/app/[locale]/page.tsx
import {Locale} from 'next-intl';
import {setRequestLocale, getTranslations} from 'next-intl/server';
import styles from "./top.module.scss";
import Image from "next/image";
import { fetchWorks, fetchNews } from "@/lib/newt-client";
import Link from 'next/link';

type Work = {
  _id: string;
  title: string;
  thumbnail?: {
    src: string;
  };
}

type News = {
  _id: string;
  title: string;
  content: string;
  eyecatch?: {
    src: string;
  };
  publishDate: string;
}


type Props = {
  params: Promise<{locale: Locale}>;
};

export default async function Home({params}: Props) {
  const {locale} = await params;
  const works = await fetchWorks() as Work[];
  const news = await fetchNews() as News[];
    // Enable static rendering
    setRequestLocale(locale);

    const t = await getTranslations('HomePage');
  return (

    <main className={styles.main}>
      {/* ファーストビュー */}
      <section className={styles.hero}>
        <div className={styles.videoBackground}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.heroVideo}
          >
            <source src="/movies/hero_bg_movie.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.description')}</p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>{t('hero.cta.consultation')}</button>
            <button className={styles.secondaryButton}>{t('hero.cta.careers')}</button>
            <button className={styles.secondaryButton}>{t('hero.cta.works')}</button>
          </div>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className={styles.services}>
        <h2>{t('services.title')}</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceImage}>
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
                alt="電気工事のイメージ"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3>{t('services.items.electrical.title')}</h3>
              <p>{t('services.items.electrical.description')}</p>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceImage}>
              <Image
                src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"
                alt="防犯設備のイメージ"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3>{t('services.items.security.title')}</h3>
              <p>{t('services.items.security.description')}</p>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceImage}>
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
                alt="ネットワーク工事のイメージ"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3>{t('services.items.network.title')}</h3>
              <p>{t('services.items.network.description')}</p>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceImage}>
              <Image
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop"
                alt="光ケーブル工事のイメージ"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3>{t('services.items.fiber.title')}</h3>
              <p>{t('services.items.fiber.description')}</p>
            </div>
          </div>
        </div>
        <div className={styles.serviceButton}>
          <button>{t('services.cta')}</button>
        </div>
      </section>

      {/* 施工実績ダイジェスト */}
      <section className={styles.works}>
        <div className={styles.worksHeader}>
          <h2>{t('works.title')}</h2>
          <p>{t('works.description')}</p>
        </div>
        <div className={styles.workList}>
          {works?.length > 0 ? (
            works.slice(0, 3).map((work) => (
              <div key={work._id} className={styles.workItem}>
                <div className={styles.workImage}>
                  <Image
                    src={work.thumbnail?.src || "/images/works/sample1.jpg"}
                    alt={work.title}
                    width={800}
                    height={600}
                    className={styles.image}
                  />
                  <div className={styles.workOverlay}>
                    <h3>{work.title}</h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>施工実績データがありません</p>
          )}
        </div>
        <div className={styles.worksButton}>
          <Link href="/works">
            <button>{t('works.cta')}</button>
          </Link>
        </div>
      </section>

      {/* 採用バナー */}
      <section className={styles.recruit}>
        <div className={styles.recruitImage}>
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
            alt="チームワークのイメージ"
            width={1920}
            height={1080}
            className={styles.image}
          />
          <div className={styles.recruitOverlay}>
            <div className={styles.recruitContent}>
              <h2>{t('recruit.title')}</h2>
              <p>{t('recruit.description')}</p>
              <Link href="/recruit">
                <button>{t('recruit.cta')}</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

       {/* 📰 News セクション */}
       <section className={styles.news}>
        <div className={styles.newsHeader}>
          <h2>{t('news.title')}</h2>
          <p>{t('news.description')}</p>
        </div>
        <div className={styles.newsList}>
          {news.slice(0, 3).map((item: News) => (
            <div key={item._id} className={styles.newsItem}>
              {item.eyecatch && (
                <div className={styles.newsImage}>
                  <Image
                    src={item.eyecatch.src}
                    alt={item.title}
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.newsContent}>
                <time className={styles.date}>{item.publishDate?.split('T')[0]}</time>
                <h3>{item.title}</h3>
                <p className={styles.excerpt}>
                  {item.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.newsButton}>
          <Link href="/news">
            <button>{t('news.cta')}</button>
          </Link>
        </div>
      </section>

      {/* 会社紹介・強み */}
      <section className={styles.strengths}>
        <div className={styles.strengthsHeader}>
          <h2>{t('strengths.title')}</h2>
          <p>{t('strengths.description')}</p>
        </div>
        <div className={styles.strengthsList}>
          <div className={styles.strengthItem}>
            <div className={styles.strengthIcon}>
              <Image
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                alt="技術力のイメージ"
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.strengthContent}>
              <h3>{t('strengths.items.technology.title')}</h3>
              <p>{t('strengths.items.technology.description')}</p>
            </div>
          </div>
          <div className={styles.strengthItem}>
            <div className={styles.strengthIcon}>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="対応力のイメージ"
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.strengthContent}>
              <h3>{t('strengths.items.flexibility.title')}</h3>
              <p>{t('strengths.items.flexibility.description')}</p>
            </div>
          </div>
          <div className={styles.strengthItem}>
            <div className={styles.strengthIcon}>
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee284c4d9cc0?q=80&w=800&auto=format&fit=crop"
                alt="実績のイメージ"
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.strengthContent}>
              <h3>{t('strengths.items.experience.title')}</h3>
              <p>{t('strengths.items.experience.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせエリア */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactContent}>
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.description')}</p>
            <div className={styles.contactButtons}>
              <Link href="/contact">
                <button className={styles.primaryButton}>
                  {t('contact.cta')}
                </button>
              </Link>
              <a href="tel:03-XXXX-XXXX" className={styles.phoneButton}>
                <span className={styles.phoneIcon}>📞</span>
                <span className={styles.phoneNumber}>03-XXXX-XXXX</span>
              </a>
            </div>
          </div>
          <div className={styles.contactImage}>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
              alt="お問い合わせ"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
