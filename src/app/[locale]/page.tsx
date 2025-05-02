import {Locale} from 'next-intl';
import {setRequestLocale, getTranslations} from 'next-intl/server';
import styles from "./top.module.scss";
import Image from "next/image";
import { fetchWorks, fetchNews } from "@/lib/newt-client";

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

    const t = await getTranslations('IndexPage');
  return (

    <main className={styles.main}>
      {/* ファーストビュー */}
      <h1>{t('title')}</h1>
      <section className={styles.hero}>
        <h1>安全と信頼を支えるプロフェッショナル集団</h1>
        <p>電気・通信・セキュリティ工事を一貫対応。</p>
        <div className={styles.buttons}>
          <button>ご相談はこちら</button>
          <button>採用情報を見る</button>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className={styles.services}>
        <h2>対応工事について</h2>
        <div className={styles.serviceList}>
          <div className={styles.serviceCard}>一般電気工事</div>
          <div className={styles.serviceCard}>防犯設備工事</div>
          <div className={styles.serviceCard}>LAN配線工事</div>
          <div className={styles.serviceCard}>光ケーブル融着測定</div>
        </div>
      </section>

      {/* 施工実績ダイジェスト */}
      <section className={styles.works}>
        <h2>施工実績</h2>
        <div className={styles.workList}>
          {works?.length > 0 ? (
            works.slice(0, 3).map((work) => (
              <div key={work._id} className={styles.workCard}>
                <Image
                  src={work.thumbnail?.src || "/images/works/sample1.jpg"}
                  alt={work.title}
                  width={400}
                  height={250}
                  priority
                />
                <h3>{work.title}</h3>
              </div>
            ))
          ) : (
            <p>施工実績データがありません</p>
          )}
        </div>
      </section>

      {/* 採用バナー */}
      <section className={styles.recruit}>
        <div className={styles.recruitInner}>
          <h2>仲間を募集しています！</h2>
          <p>未経験からでもしっかり育成。あなたのチャレンジを応援します。</p>
          <button>採用情報を見る</button>
        </div>
      </section>

       {/* 📰 News セクション */}
       <section style={{ padding: '40px' }}>
        <h2>📰 お知らせ</h2>
        <ul>
          {news.slice(0, 3).map((item: News) => (
            <li key={item._id}>
              <span>{item.publishDate?.split('T')[0]}</span> — {item.title}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
