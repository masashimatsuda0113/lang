import styles from './company.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function CompanyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>会社情報</h1>
          <p className={styles.catchphrase}>
            私たちは、千葉を拠点に地域に根ざした電気・通信・セキュリティ工事を提供するプロフェッショナル集団です。
          </p>
        </div>
        <div className={styles.heroOverlay} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2>会社概要</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.companyTable}>
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
                  <th>電話番号</th>
                  <td>043-258-6852</td>
                </tr>
                <tr>
                  <th>FAX</th>
                  <td>043-258-6832</td>
                </tr>
                <tr>
                  <th>資本金</th>
                  <td>1,000万円</td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>代表取締役 ○○ ○○</td>
                </tr>
                <tr>
                  <th>設立</th>
                  <td>2000年4月</td>
                </tr>
                <tr>
                  <th>営業時間</th>
                  <td>8:00〜17:00</td>
                </tr>
                <tr>
                  <th>定休日</th>
                  <td>第1・第3土曜、日曜、祝日</td>
                </tr>
                <tr>
                  <th>許認可</th>
                  <td>電気工事業 千葉県知事許可（般-1）第45982号</td>
                </tr>
                <tr>
                  <th>保有資格</th>
                  <td>第1種電気工事士、2級電気施工管理技士、消防設備士 他</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2>アクセスマップ</h2>
          <div className={styles.mapContainer}>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps?q=千葉県千葉市稲毛区長沼原町942-67&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a 
              href="https://maps.google.com/?q=千葉県千葉市稲毛区長沼原町942-67"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
            >
              地図で場所を確認
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2>代表メッセージ</h2>
          <div className={styles.messageContainer}>
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
                <p>
                  ウィルネットはお客様の安心と満足のために、確実な技術と丁寧な対応を心がけています。
                  これからも地域社会の発展に貢献し、挑戦を続けます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2>スタッフ・現場紹介</h2>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <Image
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                alt="ウィルネット外観"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>ウィルネット外観</p>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop"
                alt="オフィス内観"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>オフィス内観</p>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=800&auto=format&fit=crop"
                alt="工事現場"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <p className={styles.galleryCaption}>工事現場</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2>会社の強み</h2>
          <div className={styles.strengths}>
            <div className={styles.strengthItem}>
              <div className={styles.strengthImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=400&auto=format&fit=crop"
                  alt="関東全域対応"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.strengthContent}>
                <h3>関東全域対応</h3>
                <p>千葉県を中心に、関東エリア全域で迅速な対応が可能です。</p>
              </div>
            </div>
            <div className={styles.strengthItem}>
              <div className={styles.strengthImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=400&auto=format&fit=crop"
                  alt="ワンストップサービス"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.strengthContent}>
                <h3>ワンストップサービス</h3>
                <p>防犯・電気・通信の工事を一括でご提案・施工いたします。</p>
              </div>
            </div>
            <div className={styles.strengthItem}>
              <div className={styles.strengthImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=400&auto=format&fit=crop"
                  alt="有資格者による施工"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.strengthContent}>
                <h3>有資格者による施工</h3>
                <p>国家資格保有者が安全・確実な施工を担当します。</p>
              </div>
            </div>
            <div className={styles.strengthItem}>
              <div className={styles.strengthImage}>
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=400&auto=format&fit=crop"
                  alt="豊富な実績"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.strengthContent}>
                <h3>豊富な実績</h3>
                <p>大手企業・公共施設での施工実績が多数あります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2>会社沿革</h2>
          <div className={styles.history}>
            <div className={styles.historyTimeline}>
              <div className={styles.historyItem}>
                <div className={styles.historyYear}>2000</div>
                <div className={styles.historyContent}>
                  <h3>会社設立</h3>
                  <p>千葉県千葉市にて創業</p>
                </div>
              </div>
              <div className={styles.historyItem}>
                <div className={styles.historyYear}>2005</div>
                <div className={styles.historyContent}>
                  <h3>本社移転</h3>
                  <p>現在の本社ビルに移転</p>
                </div>
              </div>
              <div className={styles.historyItem}>
                <div className={styles.historyYear}>2010</div>
                <div className={styles.historyContent}>
                  <h3>資本金増資</h3>
                  <p>1,000万円に増資</p>
                </div>
              </div>
              <div className={styles.historyItem}>
                <div className={styles.historyYear}>2020</div>
                <div className={styles.historyContent}>
                  <h3>創業20周年</h3>
                  <p>地域密着型企業としての歩みを続ける</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2>取引先一覧</h2>
          <div className={styles.clients}>
            <div className={styles.clientItem}>
              <h3>大手企業</h3>
              <ul>
                <li>三菱電機</li>
                <li>三菱エレベータ</li>
                <li>○○ゼネコン</li>
              </ul>
            </div>
            <div className={styles.clientItem}>
              <h3>公共施設</h3>
              <ul>
                <li>千葉市役所</li>
                <li>地域病院</li>
                <li>福祉施設</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.cta}>
        <Link href="/contact" className={styles.ctaButton}>お問い合わせはこちら</Link>
        <Link href="/recruit" className={styles.ctaButton}>採用情報を見る</Link>
      </div>
    </main>
  );
}
