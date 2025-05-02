'use client';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>&copy; {new Date().getFullYear()} 有限会社ウィルネット All rights reserved.</p>
      </div>
    </footer>
  );
}
