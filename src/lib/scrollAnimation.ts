'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useScrollAnimation = () => {
    const pathname = usePathname();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50px 0px',  // 要素が少し画面に入ってからアニメーション開始
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // 既存のアニメーション要素をクリーンアップ
        const cleanup = () => {
            const animatedElements = document.querySelectorAll('[data-animate]');
            animatedElements.forEach((el) => {
                el.classList.remove('visible');
                observer.unobserve(el);
            });
        };

        // 新しいアニメーション要素を監視
        const setup = () => {
            const animatedElements = document.querySelectorAll('[data-animate]');
            animatedElements.forEach((el) => {
                observer.observe(el);
            });
        };

        // 初期セットアップ
        cleanup();
        setup();

        // クリーンアップ関数
        return () => {
            cleanup();
        };
    }, [pathname]); // pathnameが変更されるたびに再実行
}; 