import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './ContactCTA.module.scss';

export default function ContactCTA() {
  const t = useTranslations('ContactCTA');

  return (
    <section className={styles.contact}>
      <div className={styles.contactContent}>
        <h2>{t('title')}</h2>
        <p>{t('description')}</p>
        <div className={styles.contactButtons}>
          <Link href="/contact" className={styles.primaryButton}>
            {t('cta')}
          </Link>
          <a href="tel:03-XXXX-XXXX" className={styles.phoneButton}>
            <span className={styles.phoneIcon}>📞</span>
            <span className={styles.phoneNumber}>03-XXXX-XXXX</span>
          </a>
        </div>
      </div>
    </section>
  );
} 