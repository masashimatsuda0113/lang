import Image from 'next/image';
import styles from './services.module.scss';

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <h1>事業内容</h1>

      <section className={styles.section}>
        <h2>一般電気工事</h2>
        <p>オフィス・工場・店舗などの電気工事全般に対応します。配線、照明設備、動力など安心の技術でサポート。</p>
        <Image src="/images/services/denki.jpg" alt="電気工事" width={800} height={400} />
      </section>

      <section className={styles.section}>
        <h2>防犯設備工事</h2>
        <p>防犯カメラ・センサー・ICカード連携など、建物の安全を守るための設備を提案・施工いたします。</p>
        <Image src="/images/services/security.jpg" alt="防犯設備工事" width={800} height={400} />
      </section>

      <section className={styles.section}>
        <h2>LAN配線・サーバールーム整備</h2>
        <p>ネットワーク配線、無線LAN設置、サーバーラック整備など、オフィスのITインフラを支えます。</p>
        <Image src="/images/services/lan.jpg" alt="LAN配線" width={800} height={400} />
      </section>

      <section className={styles.section}>
        <h2>光ケーブル融着測定</h2>
        <p>光ファイバーの融着、OTDRによる損失測定など、専門技術者による高精度な対応を行います。</p>
        <Image src="/images/services/hikari.jpg" alt="光ケーブル融着" width={800} height={400} />
      </section>
    </main>
  );
}
