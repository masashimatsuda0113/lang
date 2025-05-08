'use client';

import { useEffect } from 'react';

export const useScrollAnimation = () => {
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

        // animate-で始まるクラスを持つ要素を検索
        const animatedElements = document.querySelectorAll('[class*="animate-"]');
        
        // 各要素を監視
        animatedElements.forEach((el) => {
            observer.observe(el);
        });

        // クリーンアップ関数
        return () => {
            animatedElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
}; 