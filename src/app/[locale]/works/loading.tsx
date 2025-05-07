import styles from './works.module.scss';

export default function Loading() {
  return (
    <main className={styles.main}>
      {/* ヒーローセクションのスケルトン */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonText}></div>
        </div>
      </section>

      {/* フィルターセクションのスケルトン */}
      <section className={styles.filters}>
        <div className={styles.filterGroup}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.filterButtons}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.skeletonButton}></div>
            ))}
          </div>
        </div>
        <div className={styles.filterGroup}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.filterButtons}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.skeletonButton}></div>
            ))}
          </div>
        </div>
      </section>

      {/* 施工実績一覧のスケルトン */}
      <section className={styles.worksList}>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article key={i} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonCategory}></div>
              </div>
              <div className={styles.content}>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.meta}>
                  <div className={styles.skeletonMeta}></div>
                  <div className={styles.skeletonMeta}></div>
                </div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonButton}></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
} 