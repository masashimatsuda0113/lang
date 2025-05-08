import styles from './detail.module.scss';

export default function Loading() {
  return (
    <main className={styles.main}>
      {/* タイトルのスケルトン */}
      <div className={styles.title} style={{ height: '2.2rem', background: '#e0e0e0', width: '70%' }} />

      {/* メイン画像のスケルトン */}
      <div className={styles.mainImage} style={{ height: '400px', background: '#e0e0e0' }} />

      {/* 基本情報のスケルトン */}
      <div className={styles.info}>
        <div style={{ height: '1.4rem', background: '#e0e0e0', width: '30%', marginBottom: '20px' }} />
        <div className={styles.meta}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.item}>
              <div style={{ height: '0.9rem', background: '#e0e0e0', width: '60%', marginBottom: '8px' }} />
              <div style={{ height: '1.1rem', background: '#e0e0e0', width: '80%' }} />
            </div>
          ))}
        </div>
      </div>

      {/* 技術ポイントのスケルトン */}
      <div className={styles.section}>
        <div style={{ height: '1.6rem', background: '#e0e0e0', width: '40%', marginBottom: '20px' }} />
        <div style={{ height: '200px', background: '#e0e0e0' }} />
      </div>

      {/* 説明のスケルトン */}
      <div className={styles.section}>
        <div style={{ height: '1.6rem', background: '#e0e0e0', width: '40%', marginBottom: '20px' }} />
        <div style={{ height: '300px', background: '#e0e0e0' }} />
      </div>

      {/* 戻るボタンのスケルトン */}
      <div style={{ height: '48px', background: '#e0e0e0', width: '120px', borderRadius: '4px' }} />
    </main>
  );
} 