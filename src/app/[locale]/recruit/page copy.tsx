"use client";

import Image from "next/image";
import styles from "./recruit.module.scss";
import Link from "next/link";
import { useScrollAnimation } from "../../../lib/scrollAnimation";

export default function RecruitPage() {
  useScrollAnimation(); // スクロールアニメーションを有効化

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className="animate-fade-up">採用情報</h1>
          <p className={`${styles.catchphrase} animate-fade-up`}>
            未来をつくるのは、あなたの手。
            <br />
            ウィルネットでは、未経験からでも一人前の職人として育つ環境があります。
            <br />
            電気工事、防犯設備、ネットワーク工事…
            <br />
            私たちの技術は、社会の安心と便利を支える力です。
          </p>
          <div className={styles.ctaButtons}>
            <Link
              href="/contact"
              className={`${styles.primaryButton} animate-fade-up`}
            >
              今すぐ応募する
            </Link>
            <Link
              href="/contact"
              className={`${styles.secondaryButton} animate-fade-up`}
            >
              まずは話を聞きたい方はこちら
            </Link>
          </div>
        </div>
        <div className={styles.heroOverlay} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up">ウィルネットの仕事とは？</h2>
          <div className={styles.workFeatures}>
            <div className={`${styles.workFeature} animate-fade-up`}>
              <div className={styles.workImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                  alt="電気工事"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.workContent}>
                <h3>電気工事</h3>
                <p>
                  オフィス、工場、商業施設など、電気のあるところに私たちの技術があります。
                  配線や照明の設置からメンテナンスまで、安全と信頼を提供します。
                </p>
              </div>
            </div>
            <div className={`${styles.workFeature} animate-fade-up`}>
              <div className={styles.workImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                  alt="防犯設備"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.workContent}>
                <h3>防犯設備</h3>
                <p>
                  防犯カメラや入退室管理システムを通じて、人々の暮らしと財産を守る仕事。
                  <br />
                  最新の技術を駆使して、安心できる環境を作ります。
                </p>
              </div>
            </div>
            <div className={`${styles.workFeature} animate-fade-up`}>
              <div className={styles.workImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                  alt="ネットワーク工事"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.workContent}>
                <h3>ネットワーク工事</h3>
                <p>
                  LAN配線や光ケーブルの設置で、オフィスや施設の通信インフラを支えます。
                  <br />
                  高速で安定した通信は、今や社会の土台です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up">社員・代表メッセージ</h2>
          <div className={`${styles.messageContainer} animate-fade-up`}>
            <div className={styles.messageImage}>
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                alt="代表者"
                width={400}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.message}>
              <div className={styles.messageContent}>
                <h3>代表メッセージ</h3>
                <p>
                  「未経験だから不安…そんな心配は不要です。
                  <br />
                  技術は、現場で先輩たちと一緒に覚えていけば大丈夫。
                  <br />
                  大事なのはやる気と誠実さ。私たちは、あなたが一人前になるまで全力でサポートします。」
                </p>
              </div>
            </div>
          </div>
          <div className={styles.employeeVoices}>
            <div className={`${styles.employeeVoice} animate-fade-up`}>
              <div className={styles.employeeImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=400&auto=format&fit=crop"
                  alt="先輩社員"
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.voiceContent}>
                <h3>20代未経験入社 → 今では現場を任されるまでに成長！</h3>
                <p>
                  「正直、最初は怖かったです（笑）。でも、チームで助け合える職場なので安心でした。
                  <br />
                  3年目の今では、新人さんに自分が教える立場。
                  <br />
                  成長を実感できる環境です。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up">一日の流れ</h2>
          <p className="animate-fade-up">
          毎日、ただのルーチンじゃない。<br />
          現場ごとに違う挑戦とやりがいがあります。
          </p>
          <div className={styles.timeline}>
            <div className={`${styles.timelineItem} animate-fade-up`}>
              <div className={styles.time}>8:00</div>
              <div className={styles.content}>
                <h3>出社・現場集合</h3>
                <p>朝礼で一日の作業を確認、チームで役割を分担。</p>
                <Image src="/images/recruit/recruit_1.jpg" alt="朝礼" width={400} height={300} />
              </div>
            </div>
            <div className={`${styles.timelineItem} animate-fade-up`}>
              <div className={styles.time}>10:00</div>
              <div className={styles.content}>
                <h3>配線・機器設置</h3>
                <p>現場の安全を最優先に、丁寧かつスピーディーに作業。</p>
                <Image src="/images/recruit/recruit_2.jpg" alt="配線" width={400} height={300} />
              </div>
            </div>
            <div className={`${styles.timelineItem} animate-fade-up`}>
              <div className={styles.time}>12:00</div>
              <div className={styles.content}>
                <h3>昼休憩</h3>
                <p>仲間と一緒に昼食。現場の裏話や趣味の話でリフレッシュ。</p>
                <Image src="/images/recruit/recruit_3.jpg" alt="昼休憩" width={400} height={300} />
              </div>
            </div>
            <div className={`${styles.timelineItem} animate-fade-up`}>
              <div className={styles.time}>13:00</div>
              <div className={styles.content}>
                <h3>作業再開・調整</h3>
                <p>午後は午前の続き＋調整作業、現場によって新しい技術に触れることも。</p>
                <Image src="/images/recruit/recruit_4.jpg" alt="作業再開" width={400} height={300} />
              </div>
            </div>
            <div className={`${styles.timelineItem} animate-fade-up`}>
              <div className={styles.time}>17:00</div>
              <div className={styles.content}>
                <h3>作業終了・片付け</h3>
                <p>現場の片付け、最終確認。<br />
                次の現場準備も万全に。</p>
                <Image src="/images/recruit/recruit_5.jpg" alt="作業終了" width={400} height={300} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up">資格取得・成長サポート</h2>
          <p className="animate-fade-up">ウィルネットは「人を育てる会社」</p>
          <div className={styles.supportFeatures}>
            <div className={`${styles.supportFeature} animate-fade-up`}>
              <h3>📝 資格支援</h3>
              <p>電気工事士などの資格取得を会社が支援。</p>
            </div>
            <div className={`${styles.supportFeature} animate-fade-up`}>
              <h3>💪 マンツーマン指導</h3>
              <p>マンツーマン指導で、現場で学べる。</p>
            </div>
            <div className={`${styles.supportFeature} animate-fade-up`}>
              <h3>📈 昇給チャンス</h3>
              <p>資格・スキルアップに応じて昇給・手当あり。</p>
            </div>
          </div>
          <p className="animate-fade-up">成長する人には、しっかり応える環境があります。</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up">募集要項</h2>
          <div className={`${styles.requirements} animate-fade-up`}>
            <table className={styles.requirementsTable}>
              <tbody>
                <tr>
                  <th>雇用形態</th>
                  <td>正社員（請負・一人親方もOK）</td>
                </tr>
                <tr>
                  <th>勤務時間</th>
                  <td>08:00〜17:00</td>
                </tr>
                <tr>
                  <th>休日</th>
                  <td>第1・第3土曜、日曜、年末年始、GW</td>
                </tr>
                <tr>
                  <th>給与</th>
                  <td>月給20〜45万円（経験・資格に応じて）</td>
                </tr>
                <tr>
                  <th>待遇</th>
                  <td>社保完備、賞与年2回、交通費支給、退職金制度</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.highlights}>
              <div className={`${styles.highlight} animate-fade-up`}>
                未経験歓迎！
              </div>
              <div className={`${styles.highlight} animate-fade-up`}>
                学歴不問！
              </div>
              <div className={`${styles.highlight} animate-fade-up`}>
                20代活躍中！
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up">応募・お問い合わせ</h2>
          <p className="animate-fade-up">気になること、まずは話してみませんか？<br />
          「応募する前に相談したい」そんな方も大歓迎です。</p>
          <div className={`${styles.contactButtons} animate-fade-up`}>
            <Link href="/contact" className={styles.contactButton}>
              応募フォームへ
            </Link>
            <Link href="/contact" className={styles.contactButton}>
              LINEで気軽に相談
            </Link>
            <a href="tel:043-258-6852" className={styles.contactButton}>
              電話で問い合わせる
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
