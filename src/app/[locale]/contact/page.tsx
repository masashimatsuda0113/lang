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
    name: HTMLInputElement;
    company: HTMLInputElement;
    phone: HTMLInputElement;
    email: HTMLInputElement;
    type: HTMLSelectElement;
    message: HTMLTextAreaElement;
    attachment: HTMLInputElement;
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
    const formData = new FormData();
    formData.append("name", form.elements.name.value);
    formData.append("company", form.elements.company.value);
    formData.append("phone", form.elements.phone.value);
    formData.append("email", form.elements.email.value);
    formData.append("type", form.elements.type.value);
    formData.append("message", form.elements.message.value);
    
    if (form.elements.attachment.files?.[0]) {
      formData.append("attachment", form.elements.attachment.files[0]);
    }

    try {
      const token = await getRecaptchaToken();
      formData.append("token", token);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
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
      answer: "はい、お見積もりは無料です。お気軽にお問い合わせください。"
    },
    {
      question: "緊急対応は可能ですか？",
      answer: "内容によりますが、可能な限り柔軟に対応します。まずはご相談ください。"
    },
    {
      question: "小規模の依頼でも受けてくれますか？",
      answer: "もちろんです。個人宅から法人案件まで幅広く対応しています。"
    }
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>業務・サービスに関するお問い合わせ</h1>
        <div className={styles.messageBox}>
          <p>
            小さなことでもお気軽にご相談ください。
            <br />
            法人様・個人様を問わず、電気・防犯・ネットワーク工事に関するご相談を承ります。
          </p>
          <div className={styles.subMessage}>
            <p>✅ お見積もりは無料です。</p>
            <p>✅ 小さなことでも大丈夫、まずはお問い合わせください。</p>
            <p>✅ お急ぎの方はお電話やLINEでのご相談も可能です。</p>
          </div>
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

      <section className={styles.contactMethods}>
        <div className={styles.method}>
          <h2>LINEで問い合わせ</h2>
          <p>スマホから簡単に相談できます</p>
          <Link href="https://line.me/..." className={styles.lineButton}>
            LINEで問い合わせる
          </Link>
          <div className={styles.qrCode}>
            <Image
              src="/images/line-qr.png"
              alt="LINE QRコード"
              width={200}
              height={200}
            />
          </div>
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

      <section className={styles.flow}>
        <h2>お問い合わせ後の流れ</h2>
        <div className={styles.flowSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h4>内容確認</h4>
            <p>担当者が内容を確認し、2営業日以内にご連絡いたします。</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h4>詳細ヒアリング</h4>
            <p>必要に応じて現地調査や打ち合わせを行います。</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h4>ご提案・お見積もり</h4>
            <p>お客様のニーズに合わせた最適なプランをご提案します。</p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <h2>お問い合わせフォーム</h2>
        <p className={styles.formDescription}>
          以下のフォームに必要事項をご記入ください。
          <br />
          送信後、2営業日以内に担当者よりご連絡いたします。
        </p>
        {submitted ? (
          <p className={styles.complete}>
            送信が完了しました。ご連絡ありがとうございました！
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              お名前 <span className={styles.required}>*</span>
              <input type="text" name="name" required />
            </label>

            <label>
              会社名（法人の場合）
              <input type="text" name="company" />
            </label>

            <label>
              電話番号 <span className={styles.required}>*</span>
              <input type="tel" name="phone" required />
            </label>

            <label>
              メールアドレス <span className={styles.required}>*</span>
              <input type="email" name="email" required />
            </label>

            <label>
              お問い合わせ種別 <span className={styles.required}>*</span>
              <select name="type" required>
                <option value="">選択してください</option>
                <option value="estimate">見積もり依頼</option>
                <option value="survey">現場調査依頼</option>
                <option value="service">サービス相談</option>
                <option value="other">その他</option>
              </select>
            </label>

            <label>
              お問い合わせ内容 <span className={styles.required}>*</span>
              <textarea name="message" rows={5} required />
            </label>

            <label>
              添付資料（任意）
              <input type="file" name="attachment" accept=".pdf,.jpg,.jpeg,.png" />
              <p className={styles.fileDescription}>
                現場の写真、資料PDFなどを添付可能です。
              </p>
            </label>

            <button type="submit">送信する</button>
          </form>
        )}
      </section>

      <section className={styles.contactInfo}>
        <h2>その他の連絡先</h2>
        <div className={styles.infoContent}>
          <p>お電話：043-258-6852（平日 8:00〜17:00／第1・第3土曜・日曜定休）</p>
          <p>メール：info@m-willnet.com</p>
        </div>
      </section>
    </main>
  );
}
