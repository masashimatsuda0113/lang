'use client';

import { useState } from 'react';
import styles from './template.module.scss';
import Link from 'next/link';

export default function TemplateShowcasePage() {
    const [copiedText, setCopiedText] = useState('');

    const sections = [
        {
            category: 'タイトルテンプレート',
            items: [
                { className: 'sectionTitle', label: 'sectionTitle' },
                { className: 'sectionTitle02', label: 'sectionTitle02' },
                { className: 'sectionTitle06', label: 'sectionTitle06' },
                { className: 'sectionTitle07', label: 'sectionTitle07' },
                { className: 'sectionTitle08', label: 'sectionTitle08' }
            ],
            htmlTag: 'h2'
        },
        {
            category: 'ボタンテンプレート',
            items: [
                { className: 'btnGradientSlide', label: 'グラデーションスライドボタン' },
                { className: 'btnBorderAnimate', label: 'ボーダーラインアニメーションボタン' },
                { className: 'btnShadowJump', label: 'シャドウジャンプボタン' },
                { className: 'btnGlass', label: 'ガラス風ブラー透明ボタン' },
                { className: 'btnIcon', label: 'アイコンとテキストの二段組ボタン' },
                { className: 'btnUnderline', label: 'アンダーラインスライドボタン' },
                { className: 'btnNeumorph', label: 'ニューモーフィズムボタン' },
                { className: 'btnPulse', label: 'パルスアニメーションボタン' },
                { className: 'btnGradientBorder', label: 'グラデーションボーダーボタン' }
            ],
            htmlTag: 'Link'
        },
        {
            category: 'レイアウトテンプレート',
            items: [
                { className: 'cardLayout', label: 'cardLayout' },
                { className: 'gridLayout', label: 'gridLayout' },
                { className: 'featureSection', label: 'featureSection' }
            ],
            htmlTag: 'div'
        }
    ];

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopiedText(code);
            setTimeout(() => setCopiedText(''), 2000);
        });
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.pageTitle}>デザインテンプレート集</h1>

            {sections.map((section) => (
                <div key={section.category} className={styles.sectionBlock}>
                    <h2 className={styles.sectionHeading}>{section.category}</h2>

                    {section.items.map((item) => {
                        const code = `<${section.htmlTag} className="${item.className}" data-animate>${item.label} 実例</${section.htmlTag}>`;
                        return (
                            <section key={item.className} className={styles.templateBlock}>
                                <div className={styles.preview}>
                                    {section.htmlTag === 'h2' && (
                                        <h2 className={`${item.className}`} data-animate>{item.label} 実例</h2>
                                    )}
                                    {section.htmlTag === 'Link' && (
                                        <Link href="/templates" className={`${item.className}`} data-animate>{item.label}</Link>
                                    )}
                                    {section.htmlTag === 'div' && (
                                        <div className={`${item.className}`} data-animate>{item.label} レイアウト例</div>
                                    )}
                                </div>

                                <pre className={styles.codeBlock}>{code}</pre>
                                <button className={styles.copyButton} onClick={() => handleCopy(code)}>
                                    コードをコピー
                                </button>
                                {copiedText === code && (
                                    <span className={styles.copiedMessage}>✅ コピーしました！</span>
                                )}
                            </section>
                        );
                    })}
                </div>
            ))}
        </main>
    );
}
