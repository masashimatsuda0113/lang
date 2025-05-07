import Image from "next/image";
import styles from "./recruit.module.scss";
import Link from "next/link";

export default function RecruitPage() {
  return (
    <main className={styles.main}>
      <h1>採用情報</h1>

      <section className={styles.hero}>
        <Image
          src="/images/recruit/hero.jpg"
          alt="職場イメージ"
          width={1000}
          height={400}
        />
        <h2>一緒に、未来をつくろう。</h2>
        <p>
          ウィルネットでは、若い仲間を積極採用中！未経験から始められる環境です。
        </p>
      </section>

      <section className={styles.section}>
        <h2>1日の仕事の流れ</h2>
        <ul className={styles.timeline}>
          <li>
            <strong>8:00</strong> 出社・朝礼・準備
          </li>
          <li>
            <strong>9:00</strong> 現場作業開始
          </li>
          <li>
            <strong>12:00</strong> 昼休憩
          </li>
          <li>
            <strong>13:00</strong> 午後作業
          </li>
          <li>
            <strong>17:00</strong> 作業終了・片付け・帰社
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>職場の雰囲気</h2>
        <div className={styles.photos}>
          <Image
            src="/images/recruit/photo1.jpg"
            alt="現場作業"
            width={300}
            height={200}
          />
          <Image
            src="/images/recruit/photo2.jpg"
            alt="オフィス風景"
            width={300}
            height={200}
          />
          <Image
            src="/images/recruit/photo3.jpg"
            alt="チーム"
            width={300}
            height={200}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>募集要項</h2>
        <dl className={styles.dl}>
          <dt>雇用形態</dt>
          <dd>正社員</dd>
          <dt>勤務地</dt>
          <dd>千葉県千葉市</dd>
          <dt>勤務時間</dt>
          <dd>8:00〜17:00</dd>
          <dt>給与</dt>
          <dd>月給 250,000円〜（経験・資格により応相談）</dd>
          <dt>待遇</dt>
          <dd>交通費支給・各種保険完備・資格取得支援あり</dd>
        </dl>
      </section>

      <section className={styles.section}>
        <h2>応募方法</h2>
        <p>
          採用応募は <Link href="/ja/contact">お問い合わせフォーム</Link>{" "}
          またはお電話（043-258-6852）にてご連絡ください。
        </p>
      </section>
    </main>
  );
}
