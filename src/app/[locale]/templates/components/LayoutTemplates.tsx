'use client';

import { useState } from 'react';
import styles from './TemplateBlock.module.scss';

export default function LayoutTemplates() {
    const [copiedText, setCopiedText] = useState('');

    const layouts = [
        {
            className: 'layoutImageLeft',
            label: '画像左・テキスト右',
            html: `
<div class="layoutImageLeft" data-animate>
    <div class="imageArea">
        <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="ダミー画像" />
    </div>
    <div class="textArea">
        <h3 class="title">タイトルが入ります</h3>
        <p class="subtitle">サブタイトルがここに入ります</p>
        <p class="content">コンテンツ本文。ここには詳しい説明や紹介文が入ります。</p>
    </div>
</div>`
        },
        {
            className: 'layoutImageRight',
            label: '画像右・テキスト左',
            html: `
<div class="layoutImageRight" data-animate>
    <div class="textArea">
        <h3 class="title">タイトルが入ります</h3>
        <p class="subtitle">サブタイトルがここに入ります</p>
        <p class="content">画像右・テキスト左のレイアウト。</p>
    </div>
    <div class="imageArea">
        <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="ダミー画像" />
    </div>
</div>`
        }
    ];

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopiedText(code);
            setTimeout(() => setCopiedText(''), 2000);
        });
    };

    return (
        <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>レイアウトテンプレート</h2>

            {layouts.map((layout) => (
                <section key={layout.className} className={styles.templateBlock}>
                    <div
                        className={`${layout.className} ${styles.previewBlock}`}
                        data-animate
                        dangerouslySetInnerHTML={{ __html: layout.html }}
                    />

                    <pre className={styles.codeBlock}>{layout.html}</pre>
                    <button className={styles.copyButton} onClick={() => handleCopy(layout.html)}>
                        コードをコピー
                    </button>
                    {copiedText === layout.html && (
                        <span className={styles.copiedMessage}>✅ コピーしました！</span>
                    )}
                </section>
            ))}
        </section>
    );
}
