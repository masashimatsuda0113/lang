"use client";

import Image from "next/image";
import styles from "./recruit.module.scss";
import Link from "next/link";

export default function RecruitPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className="animate-fade-up" data-animate>
            採用情報
          </h1>
          <p className={`${styles.catchphrase} animate-fade-up`} data-animate>
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
              data-animate
            >
              今すぐ応募する
            </Link>
            <Link
              href="/contact"
              className={`${styles.secondaryButton} animate-fade-up`}
              data-animate
            >
              まずは話を聞きたい方はこちら
            </Link>
          </div>
        </div>
        <div className={styles.heroOverlay} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up" data-animate>
            ウィルネットの仕事とは？
          </h2>
          <div className={styles.workFeatures}>
            <div
              className={`${styles.workFeature} animate-fade-up`}
              data-animate
            >
              <div className={styles.workImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                  alt="電気工事"
                  width={600}
                  height={400}
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
            <div
              className={`${styles.workFeature} animate-fade-up`}
              data-animate
            >
              <div className={styles.workContent}>
                <h3>防犯設備</h3>
                <p>
                  防犯カメラや入退室管理システムを通じて、人々の暮らしと財産を守る仕事。
                  <br />
                  最新の技術を駆使して、安心できる環境を作ります。
                </p>
              </div>
              <div className={styles.workImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                  alt="防犯設備"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
            </div>
            <div
              className={`${styles.workFeature} animate-fade-up`}
              data-animate
            >
              <div className={styles.workImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                  alt="ネットワーク工事"
                  width={600}
                  height={400}
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
          <h2 className="animate-fade-up" data-animate>
            社員・代表メッセージ
          </h2>
          <div
            className={`${styles.messageContainer} animate-fade-up`}
            data-animate
          >
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
                  技術はあとから必ずついてきます。
                  <br />
                  大事なのは、真面目さと、学ぶ気持ち。
                  <br />
                  私たちは、決して『職人気質』だけの会社じゃありません。
                  <br />
                  チームで力を合わせて、一つひとつの現場を丁寧に仕上げる。
                  <br />
                  それが、創業以来ずっと守ってきたウィルネットの姿勢です。
                  <br />
                  電気工事、防犯、通信インフラ――
                  <br />
                  どれも社会を支える大事な仕事です。
                  <br />
                  「自分にできるだろうか」そんな不安は大丈夫。
                  <br />
                  私たちがしっかり育てます。
                  <br />
                  手に職をつけ、現場で必要とされる人材になる。
                  <br />
                  その挑戦を、ここで一緒に始めませんか？
                </p>
              </div>
            </div>
          </div>
          <div className={styles.employeeVoices}>
            <div
              className={`${styles.employeeVoice} animate-fade-up`}
              data-animate
            >
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
          <h2 className="animate-fade-up" data-animate>
            一日の流れ
          </h2>
          <div className={styles.messageBox}>
            <p className="animate-fade-up" data-animate>
              毎日、ただのルーチンじゃない。
              <br />
              現場ごとに違う挑戦とやりがいがあります。
            </p>
          </div>
          <div className={styles.timeline}>
            <div
              className={`${styles.timelineItem} animate-fade-up`}
              data-animate
            >
              <div className={styles.time}>8:00</div>
              <div className={styles.content}>
                <h3>出社・現場集合</h3>
                <p>朝礼で一日の作業を確認、チームで役割を分担。</p>
                <Image
                  src="/images/recruit/recruit_1.jpg"
                  alt="朝礼"
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div
              className={`${styles.timelineItem} animate-fade-up`}
              data-animate
            >
              <div className={styles.time}>10:00</div>
              <div className={styles.content}>
                <h3>配線・機器設置</h3>
                <p>現場の安全を最優先に、丁寧かつスピーディーに作業。</p>
                <Image
                  src="/images/recruit/recruit_2.jpg"
                  alt="配線"
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div
              className={`${styles.timelineItem} animate-fade-up`}
              data-animate
            >
              <div className={styles.time}>12:00</div>
              <div className={styles.content}>
                <h3>昼休憩</h3>
                <p>仲間と一緒に昼食。現場の裏話や趣味の話でリフレッシュ。</p>
                <Image
                  src="/images/recruit/recruit_3.jpg"
                  alt="昼休憩"
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div
              className={`${styles.timelineItem} animate-fade-up`}
              data-animate
            >
              <div className={styles.time}>13:00</div>
              <div className={styles.content}>
                <h3>作業再開・調整</h3>
                <p>
                  午後は午前の続き＋調整作業、現場によって新しい技術に触れることも。
                </p>
                <Image
                  src="/images/recruit/recruit_4.jpg"
                  alt="作業再開"
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div
              className={`${styles.timelineItem} animate-fade-up`}
              data-animate
            >
              <div className={styles.time}>17:00</div>
              <div className={styles.content}>
                <h3>作業終了・片付け</h3>
                <p>
                  現場の片付け、最終確認。
                  <br />
                  次の現場準備も万全に。
                </p>
                <Image
                  src="/images/recruit/recruit_5.jpg"
                  alt="作業終了"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up" data-animate>
            資格取得・成長サポート
          </h2>
          <div className={styles.messageBox}>
            <p className="animate-fade-up" data-animate>
              ウィルネットは「人を育てる会社」
            </p>
          </div>
          <div className={styles.supportFeatures}>
            <div
              className={`${styles.supportFeature} animate-fade-up`}
              data-animate
            >
              <div className={styles.supportImage}>
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  alt="資格支援"
                  width={800}
                  height={500}
                  className={styles.image}
                />
              </div>
              <div className={styles.supportContent}>
                <h3>資格支援</h3>
                <p>
                  電気工事士などの資格取得を会社が支援。
                  <br />
                  受験費用の補助や、勉強時間の確保など、
                  <br />
                  あなたの成長を全面的にバックアップします。
                </p>
              </div>
            </div>

            <div
              className={`${styles.supportFeature} animate-fade-up`}
              data-animate
            >
              <div className={styles.supportContent}>
                <h3>マンツーマン指導</h3>
                <p>
                  経験豊富な先輩社員が、あなたの成長をサポート。
                  <br />
                  現場で実践的に学びながら、
                  <br />
                  確実にスキルを身につけることができます。
                </p>
              </div>
              <div className={styles.supportImage}>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="マンツーマン指導"
                  width={800}
                  height={500}
                  className={styles.image}
                />
              </div>
            </div>

            <div
              className={`${styles.supportFeature} animate-fade-up`}
              data-animate
            >
              <div className={styles.supportImage}>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                  alt="昇給チャンス"
                  width={800}
                  height={500}
                  className={styles.image}
                />
              </div>
              <div className={styles.supportContent}>
                <h3>昇給チャンス</h3>
                <p>
                  資格取得やスキルアップに応じて、
                  <br />
                  昇給や手当が充実。
                  <br />
                  あなたの努力が、確実に評価されます。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.messageBox}>
            <p className="animate-fade-up" data-animate>
              成長する人には、しっかり応える環境があります。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up" data-animate>
            募集要項
          </h2>
          <div
            className={`${styles.requirements} animate-fade-up`}
            data-animate
          >
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
              <div
                className={`${styles.highlight} animate-fade-up`}
                data-animate
              >
                未経験歓迎！
              </div>
              <div
                className={`${styles.highlight} animate-fade-up`}
                data-animate
              >
                学歴不問！
              </div>
              <div
                className={`${styles.highlight} animate-fade-up`}
                data-animate
              >
                20代活躍中！
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className="animate-fade-up" data-animate>
            応募・お問い合わせ
          </h2>
          <div className={styles.messageBox}>
            <p className="animate-fade-up" data-animate>
              気になること、まずは話してみませんか？
              <br />
              「応募する前に相談したい」そんな方も大歓迎です。
            </p>
          </div>
          <div
            className={`${styles.contactButtons} animate-fade-up`}
            data-animate
          >
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
