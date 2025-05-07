import Image from 'next/image';
import styles from './services.module.scss';
import { getTranslations } from 'next-intl/server';
import ContactCTA from '@/components/ContactCTA';
export default async function ServicesPage() {
  const t = await getTranslations('ServicesPage');

  return (
    <main className={styles.main}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.description')}</p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=1920&auto=format&fit=crop"
            alt="電気工事のイメージ"
            width={1920}
            height={1080}
            priority
            className={styles.image}
          />
        </div>
      </section>

      {/* サービス一覧 */}
      <section className={styles.services}>
        <div className={styles.serviceGrid}>
          {/* 一般電気工事 */}
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
              <h2>{t('services.electrical.title')}</h2>
              <p className={styles.catch}>{t('services.electrical.catch')}</p>
              <div className={styles.description}>
                <p>{t('services.electrical.description')}</p>
              </div>
            </div>
          </div>

          {/* 防犯設備工事 */}
          <div className={styles.serviceItem}>
            <div className={styles.serviceImage}>
              <Image
                src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"
                alt="防犯設備工事のイメージ"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.serviceContent}>
              <h2>{t('services.security.title')}</h2>
              <p className={styles.catch}>{t('services.security.catch')}</p>
              <div className={styles.description}>
                <p>{t('services.security.description')}</p>
              </div>
            </div>
          </div>

          {/* LAN配線工事 */}
          <div className={styles.serviceItem}>
            <div className={styles.serviceImage}>
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
                alt="LAN配線工事のイメージ"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.serviceContent}>
              <h2>{t('services.network.title')}</h2>
              <p className={styles.catch}>{t('services.network.catch')}</p>
              <div className={styles.description}>
                <p>{t('services.network.description')}</p>
              </div>
            </div>
          </div>

          {/* 光ケーブル工事 */}
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
              <h2>{t('services.fiber.title')}</h2>
              <p className={styles.catch}>{t('services.fiber.catch')}</p>
              <div className={styles.description}>
                <p>{t('services.fiber.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 強みセクション */}
      <section className={styles.strengths}>
        <div className={styles.strengthsHeader}>
          <h2>{t('strengths.title')}</h2>
          <p>{t('strengths.description')}</p>
        </div>
        <div className={styles.strengthsGrid}>
          <div className={styles.strengthItem}>
            <div className={styles.strengthIcon}>
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee284c4d9cc0?q=80&w=800&auto=format&fit=crop"
                alt="資格保有者のイメージ"
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <h3>{t('strengths.items.qualification.title')}</h3>
            <p>{t('strengths.items.qualification.description')}</p>
          </div>
          <div className={styles.strengthItem}>
            <div className={styles.strengthIcon}>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="ワンストップ対応のイメージ"
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <h3>{t('strengths.items.onestop.title')}</h3>
            <p>{t('strengths.items.onestop.description')}</p>
          </div>
          <div className={styles.strengthItem}>
            <div className={styles.strengthIcon}>
              <Image
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                alt="地域密着型のイメージ"
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <h3>{t('strengths.items.local.title')}</h3>
            <p>{t('strengths.items.local.description')}</p>
          </div>
        </div>
      </section>

      {/* 対応エリア */}
      <section className={styles.area}>
        <div className={styles.areaHeader}>
          <h2>{t('area.title')}</h2>
          <p>{t('area.description')}</p>
        </div>
        <div className={styles.areaMap}>
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1920&auto=format&fit=crop"
            alt="対応エリアマップ"
            width={1920}
            height={1080}
            className={styles.image}
          />
        </div>
      </section>

      {/* お問い合わせCTA */}
      <ContactCTA />
    </main>
  );
}
