// app/[locale]/contact/page.tsx
'use client';
import { useEffect, useState } from 'react';
import styles from './contact.module.scss';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const scriptId = 'recaptcha-script';
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const getRecaptchaToken = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: 'submit' })
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
  
    const form = e.currentTarget;
    const data = {
      type: form.type.value,
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const token = await getRecaptchaToken();
  
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, token }),
      });
  
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('送信に失敗しました');
      }
    } catch (err) {
      console.error('reCAPTCHAエラー:', err);
      alert('reCAPTCHAの実行に失敗しました');
    }
  };
  
  
  


  return (
    <main className={styles.main}>
      <h1>お問い合わせ</h1>

      {submitted ? (
        <p className={styles.complete}>送信が完了しました。ご連絡ありがとうございました！</p>
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

      <section className={styles.info}>
        <h2>お電話でのお問い合わせ</h2>
        <p>TEL: <a href="tel:043-258-6852">043-258-6852</a><br />（平日 8:00〜17:00）</p>

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
