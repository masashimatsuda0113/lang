'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './TemplateBlock.module.scss';

export default function TemplateBlock({ htmlTag, className, label }) {
    const [copied, setCopied] = useState(false);
    const code = `<${htmlTag} className="${className}" data-animate>${label}</${htmlTag}>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <section className={styles.templateBlock}>
            <div className={styles.preview}>
                {htmlTag === 'h2' && <h2 className={className} data-animate>{label} 実例</h2>}
                {htmlTag === 'Link' && <Link href="#" className={className} data-animate>{label}</Link>}
                {htmlTag === 'div' && <div className={className} data-animate>{label} レイアウト例</div>}
            </div>
            <pre className={styles.codeBlock}>{code}</pre>
            <button className={styles.copyButton} onClick={handleCopy}>コードをコピー</button>
            {copied && <span className={styles.copiedMessage}>✅ コピーしました！</span>}
        </section>
    );
}
