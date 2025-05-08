import styles from './news.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarSection}>
          <div className={styles.sidebarTitle}>
            <div className={styles.skeleton} style={{ width: '80px', height: '24px' }} />
          </div>
          <ul className={styles.categoryList}>
            {[1, 2, 3, 4].map((i) => (
              <li key={i}>
                <div className={styles.skeleton} style={{ width: '100px', height: '20px' }} />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <div className={styles.sidebarTitle}>
            <div className={styles.skeleton} style={{ width: '80px', height: '24px' }} />
          </div>
          <ul className={styles.yearList}>
            {[1, 2, 3].map((i) => (
              <li key={i}>
                <div className={styles.skeleton} style={{ width: '120px', height: '20px' }} />
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.title}>
          <div className={styles.skeleton} style={{ width: '200px', height: '32px' }} />
        </div>
        <ul className={styles.newsList}>
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className={styles.newsItem}>
              <div className={styles.newsContent}>
                <div className={styles.eyecatch}>
                  <div className={styles.skeleton} style={{ width: '200px', height: '150px' }} />
                </div>
                <div className={styles.textContent}>
                  <div className={styles.newsMeta}>
                    <div className={styles.skeleton} style={{ width: '80px', height: '20px' }} />
                    <div className={styles.skeleton} style={{ width: '100px', height: '20px' }} />
                  </div>
                  <div className={styles.newsTitle}>
                    <div className={styles.skeleton} style={{ width: '80%', height: '24px' }} />
                  </div>
                  <div className={styles.newsExcerpt}>
                    <div className={styles.skeleton} style={{ width: '100%', height: '60px' }} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
} 