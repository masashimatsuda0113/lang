import styles from './company.module.scss';

export default function CompanyPage() {
  return (
    <main className={styles.main}>
      <h1>会社情報</h1>

      <section className={styles.section}>
        <h2>会社概要</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>会社名</th>
              <td>有限会社ウィルネット</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒263-0001 千葉県千葉市稲毛区長沼原町942-67</td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>043-258-6852</td>
            </tr>
            <tr>
              <th>FAX</th>
              <td>043-258-6832</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>1000万</td>
            </tr>
            <tr>
              <th>許認可</th>
              <td>電気工事業 千葉県知事許可（般-1）第45982号</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2>アクセスマップ</h2>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps?q=千葉県千葉市稲毛区長沼原町942-67&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>代表メッセージ</h2>
        <p>
          ウィルネットは「安心・安全・誠実」をモットーに、日々社会インフラを支える工事に取り組んでおります。
          若い人材の力も取り入れながら、時代に合わせた柔軟な対応力を大切にしています。
        </p>
      </section>

      <section className={styles.section}>
        <h2>会社外観</h2>
        <img
          src="/images/company/gaikan.jpg"
          alt="ウィルネット外観"
          width={800}
          height={400}
          className={styles.image}
        />
      </section>
    </main>
  );
}
