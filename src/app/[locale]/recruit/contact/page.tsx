"use client";
import { useEffect, useState } from "react";
import styles from "./contact.module.scss";
import Link from "next/link";

// reCAPTCHAの型チェック
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

// フォームの型定義
type ContactForm = HTMLFormElement & {
  elements: {
    name: HTMLInputElement;
    kana: HTMLInputElement;
    age: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    preferredContact: HTMLSelectElement;
    message: HTMLTextAreaElement;
    experience: HTMLSelectElement;
    preferredWork: HTMLSelectElement;
  };
};

export default function RecruitContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const scriptId = "recaptcha-script";
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const getRecaptchaToken = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
            action: "submit",
          })
          .then((token) => {
            resolve(token);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as ContactForm;
    const data = {
      name: form.elements.name.value,
      kana: form.elements.kana.value,
      age: form.elements.age.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      preferredContact: form.elements.preferredContact.value,
      message: form.elements.message.value,
      experience: form.elements.experience.value,
      preferredWork: form.elements.preferredWork.value,
    };

    try {
      const token = await getRecaptchaToken();

      const res = await fetch("/api/recruit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("送信に失敗しました");
      }
    } catch (err) {
      console.error("reCAPTCHAエラー:", err);
      alert("reCAPTCHAの実行に失敗しました");
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "未経験でも応募できますか？",
      answer: "はい！未経験の方も大歓迎です。入社後に先輩が丁寧に教えます。"
    },
    {
      question: "資格がないのですが応募可能ですか？",
      answer: "大丈夫です。資格取得支援制度がありますので、入社後に学べます。"
    },
    {
      question: "応募前に相談だけでもいいですか？",
      answer: "もちろんです。LINEやお電話でもお気軽にご相談ください。"
    }
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>採用エントリー・お問い合わせ</h1>
        <div className={styles.messageBox}>
          <p>
            未経験からプロの電気工事士へ。
            <br />
            あなたの挑戦を、ウィルネットは全力で応援します。
            <br />
            「まず話を聞くだけでもOK！」
            <br />
            お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className={styles.faq}>
        <h2>よくある質問</h2>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className={styles.question}>
                <h3>{item.question}</h3>
                <span className={styles.arrow} />
              </div>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.lineConsultation}>
        <h2>LINEで気軽に相談！</h2>
        <p>「ちょっとした質問だけでも…」そんな方にはLINE相談がおすすめ！</p>
        <div className={styles.lineContent}>
          <div className={styles.qrCode}>
            {/* QRコード画像を配置 */}
            <div className={styles.qrPlaceholder}>QRコード</div>
          </div>
          <Link href="https://line.me/..." className={styles.lineButton}>
            LINEで友だち追加
          </Link>
        </div>
      </section>

      <section className={styles.flow}>
        <h2>応募後の流れ</h2>
        <div className={styles.flowSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>内容確認</h3>
            <p>送信内容を確認後、2営業日以内に採用担当よりご連絡します。</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>面談日程の調整</h3>
            <p>希望に応じて、対面またはオンライン面談を設定します。</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>面接・選考</h3>
            <p>面接後、1週間以内に合否結果をご連絡します。</p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <h2>お問い合わせ・応募フォーム</h2>
        <p className={styles.formDescription}>
          以下のフォームから、応募または質問内容をお送りください。
          <br />
          担当者より2営業日以内にご連絡差し上げます。
        </p>
        {submitted ? (
          <p className={styles.complete}>
            送信が完了しました。ご連絡ありがとうございました！
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>
                お名前 <span className={styles.required}>*</span>
                <input type="text" name="name" required />
              </label>
              <label>
                フリガナ
                <input type="text" name="kana" />
              </label>
            </div>

            <div className={styles.formGroup}>
              <label>
                年齢
                <input type="number" name="age" min="18" max="70" />
              </label>
              <label>
                電話番号 <span className={styles.required}>*</span>
                <input type="tel" name="phone" required />
              </label>
            </div>

            <div className={styles.formGroup}>
              <label>
                メールアドレス <span className={styles.required}>*</span>
                <input type="email" name="email" required />
              </label>
              <label>
                希望連絡方法
                <select name="preferredContact">
                  <option value="phone">電話</option>
                  <option value="email">メール</option>
                  <option value="line">LINE</option>
                </select>
              </label>
            </div>

            <div className={styles.formGroup}>
              <label>
                経験年数
                <select name="experience">
                  <option value="none">未経験</option>
                  <option value="1-3">1-3年</option>
                  <option value="3-5">3-5年</option>
                  <option value="5-10">5-10年</option>
                  <option value="10+">10年以上</option>
                </select>
              </label>
              <label>
                希望する業務
                <select name="preferredWork">
                  <option value="construction">建設工事</option>
                  <option value="maintenance">メンテナンス</option>
                  <option value="both">どちらも</option>
                  <option value="other">その他</option>
                </select>
              </label>
            </div>

            <label className={styles.fullWidth}>
              お問い合わせ内容・質問
              <textarea 
                name="message" 
                rows={5} 
                placeholder="例：未経験ですが、どのような研修がありますか？&#13;&#10;　　　勤務時間や休日について詳しく知りたいです。"
              />
            </label>

            <button type="submit">送信する</button>
          </form>
        )}
      </section>

      <section className={styles.contactInfo}>
        <h2>その他の問い合わせ先</h2>
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <h3>採用担当直通電話</h3>
            <p>043-258-6852</p>
            <p className={styles.businessHours}>（平日 8:00〜17:00／第1・第3土曜・日曜定休）</p>
          </div>
          <div className={styles.contactItem}>
            <h3>メール</h3>
            <p>recruit@m-willnet.com</p>
          </div>
        </div>
      </section>
    </main>
  );
} 