// app/[locale]/contact/page.tsx
"use client";
import { useEffect, useState } from "react";
import styles from "./contact.module.scss";
import Image from "next/image";
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
    type: HTMLSelectElement;
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
  };
};

export default function ContactPage() {
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
      type: form.elements.type.value,
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    try {
      const token = await getRecaptchaToken();

      const res = await fetch("/api/contact", {
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
      question: "見積もりは無料ですか？",
      answer: "はい、初回お見積もりは無料です。お気軽にご相談ください。"
    },
    {
      question: "急ぎの依頼も相談できますか？",
      answer: "スケジュールによりますが、まずはお電話またはLINEでご連絡ください。可能な限り調整します。"
    },
    {
      question: "小さな工事でも相談できますか？",
      answer: "もちろんです。1件からでも対応しますので、まずはご相談ください。"
    },
    {
      question: "未経験でも採用に応募できますか？",
      answer: "大歓迎です！現場での丁寧な研修・指導体制がありますのでご安心ください。"
    },
    {
      question: "LINE相談はどんな内容がOKですか？",
      answer: "見積もり依頼・作業スケジュールの確認・簡単な質問など、幅広く受け付けています。"
    }
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>お問い合わせ</h1>
        <div className={styles.messageBox}>
          <p>
            どんな小さなことでも、お気軽にご相談ください！
            <br />
            見積もりのご相談、現場のご質問、採用についての疑問など、
            <br />
            ウィルネットはあなたの声をしっかり受け止めます。
          </p>
        </div>
      </section>

      <section className={styles.contactMethods}>
        <div className={styles.method}>
          <h2>LINEで問い合わせ</h2>
          <p>スマホから簡単に相談できます</p>
          <Link href="https://line.me/..." className={styles.lineButton}>
            LINEで問い合わせる
          </Link>
        </div>

        <div className={styles.method}>
          <h2>お電話での問い合わせ</h2>
          <p>お急ぎの方はお電話ください</p>
          <a href="tel:043-258-6852" className={styles.phoneButton}>
            043-258-6852
            <span>（平日 8:00～17:00）</span>
          </a>
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

      <section className={styles.staff}>
        <h2>私たちが対応します</h2>
        <div className={styles.staffContent}>
          <div className={styles.staffImage}>
            <Image
              src="/images/staff.jpg"
              alt="スタッフ"
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.staffInfo}>
            <h3>現場経験10年以上のスタッフが直接対応</h3>
            <p>
              お客様のご要望をしっかりとお伺いし、
              <br />
              最適なご提案をさせていただきます。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.flow}>
        <h2>お問い合わせ後の流れ</h2>
        <p className={styles.flowMessage}>
          仕事の相談・採用の相談、どちらも大歓迎です！
        </p>

        <div className={styles.flowContainer}>
          <div className={styles.flowType}>
            <div className={styles.flowHeader}>
              <span className={styles.flowIcon}>🛠</span>
              <h3>業務・お仕事のご相談の場合</h3>
            </div>
            <div className={styles.flowSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h4>内容確認</h4>
                <p>お問い合わせ内容を確認後、2営業日以内に担当者からご連絡します。</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h4>詳細ヒアリング</h4>
                <p>必要に応じて現場調査や具体的な作業内容をヒアリングします。</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h4>ご提案</h4>
                <p>お見積もり・作業日程・施工内容をご提案します。</p>
              </div>
            </div>
          </div>

          <div className={styles.flowType}>
            <div className={styles.flowHeader}>
              <span className={styles.flowIcon}>👷</span>
              <h3>採用に関するお問い合わせの場合</h3>
            </div>
            <div className={styles.flowSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h4>内容確認</h4>
                <p>採用担当が内容を確認し、2営業日以内にご連絡します。</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h4>簡単なご質問・相談</h4>
                <p>電話・メール・LINEで気軽に相談いただけます。<br />
                「実際の仕事内容は？」「未経験でも大丈夫？」など、<br />
                どんな質問でも歓迎です。</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h4>応募・面談へ進む場合</h4>
                <p>希望される方には、面談日程の調整をご案内します。</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.recruitContact}>
          <h3>採用に関するお問い合わせはこちら</h3>
          <div className={styles.recruitButtons}>
            <Link href="https://line.me/..." className={styles.recruitLineButton}>
              LINEで採用相談
            </Link>
            <a href="tel:043-258-6852" className={styles.recruitPhoneButton}>
              電話で採用担当に聞く
              <span>（平日 8:00～17:00）</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <h2>メールフォーム</h2>
        {submitted ? (
          <p className={styles.complete}>
            送信が完了しました。ご連絡ありがとうございました！
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              お問い合わせ区分
              <select name="type" required>
                <option value="">選択してください</option>
                <option value="business">業務に関するご相談</option>
                <option value="recruit">採用について</option>
              </select>
            </label>

            <label>
              お名前
              <input type="text" name="name" required />
            </label>

            <label>
              メールアドレス
              <input type="email" name="email" required />
            </label>

            <label>
              お問い合わせ内容
              <textarea name="message" rows={5} required />
            </label>

            <button type="submit">送信する</button>
          </form>
        )}
      </section>

      <section className={styles.map}>
        <h2>アクセスマップ</h2>
        <iframe
          src="https://www.google.com/maps?q=千葉県千葉市稲毛区長沼原町942-67&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        />
      </section>
    </main>
  );
}
