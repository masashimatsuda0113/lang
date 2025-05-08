import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message, phone, experience, preferredWork, token } = body;

  // ✅ Step 1: reCAPTCHAトークン検証
  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const verifyData = await verifyRes.json();

  if (!verifyData.success || verifyData.score < 0.5) {
    console.warn('スパム検知:', verifyData);
    return NextResponse.json({ ok: false, error: 'スパムと判定されました' }, { status: 400 });
  }

  // ✅ Step 2: メール送信
  try {
    const transporter = nodemailer.createTransport({
      host: 'mstudio-masashis.sakura.ne.jp',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 管理者宛メール
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: `【採用】エントリー from ${name}`,
      text: `
【お問い合わせ区分】: 採用について
【お名前】: ${name}
【メールアドレス】: ${email}
【電話番号】: ${phone}
【経験年数】: ${experience}
【希望する業務】: ${preferredWork}
【内容】:
${message}
      `,
    });
  
    // 🔁 ユーザー宛 自動返信メール
    const userMessage = `
${name} 様

この度は採用エントリーいただき、誠にありがとうございます。
以下の内容でエントリーを承りました。

────────────────────────────
【お名前】: ${name}
【メールアドレス】: ${email}
【電話番号】: ${phone}
【経験年数】: ${experience}
【希望する業務】: ${preferredWork}
【ご質問・ご相談内容】:
${message}
────────────────────────────

採用担当者より2営業日以内にご連絡差し上げますので、
しばらくお待ちくださいませ。

ご不明な点がございましたら、お気軽にご連絡ください。

────────────────────
有限会社ウィルネット
〒263-0001 千葉県千葉市稲毛区長沼原町942-67
TEL: 043-258-6852
────────────────────
    `;

    await transporter.sendMail({
      from: `"Willnet採用窓口" <${process.env.MAIL_USER}>`,
      to: email,
      subject: '【ウィルネット】採用エントリーありがとうございました',
      text: userMessage,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('送信エラー:', err);
    return NextResponse.json({ ok: false, error: '送信失敗' }, { status: 500 });
  }
} 