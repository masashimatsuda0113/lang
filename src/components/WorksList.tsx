'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/[locale]/works/works.module.scss";

interface Work {
  _id: string;
  title: string;
  mainImage?: {
    src: string;
    altText?: string;
  };
  techPoint: string;
  area: string;
  cat: string;
  period: string;
  _sys: {
    raw: {
      publishedAt: string;
    };
  };
}

interface WorksListProps {
  works: Work[];
  categories: string[];
  areas: string[];
  translations: {
    category: string;
    area: string;
    all: string;
    viewDetails: string;
  };
}

export default function WorksList({ works, categories, areas, translations }: WorksListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<string>('all');

  // フィルタリングされた作品を取得
  const filteredWorks = works.filter((work) => {
    const categoryMatch = selectedCategory === 'all' || work.cat === selectedCategory;
    const areaMatch = selectedArea === 'all' || work.area === selectedArea;
    return categoryMatch && areaMatch;
  });

  return (
    <>
      {/* フィルターセクション */}
      <section className={styles.filters}>
        <div className={styles.filterGroup}>
          <h3>{translations.category}</h3>
          <div className={styles.filterButtons}>
            <button 
              className={`${styles.filterButton} ${selectedCategory === 'all' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {translations.all}
            </button>
            {categories.map((category) => (
              <button 
                key={category} 
                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.filterGroup}>
          <h3>{translations.area}</h3>
          <div className={styles.filterButtons}>
            <button 
              className={`${styles.filterButton} ${selectedArea === 'all' ? styles.active : ''}`}
              onClick={() => setSelectedArea('all')}
            >
              {translations.all}
            </button>
            {areas.map((area) => (
              <button 
                key={area} 
                className={`${styles.filterButton} ${selectedArea === area ? styles.active : ''}`}
                onClick={() => setSelectedArea(area)}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 施工実績一覧 */}
      <section className={styles.worksList}>
        <div className={styles.grid}>
          {filteredWorks.map((work) => (
            <article key={work._id} className={styles.card}>
              <Link href={`/works/${work._id}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={work.mainImage?.src || "/images/no-image.png"}
                    alt={work.mainImage?.altText || work.title}
                    width={600}
                    height={400}
                    className={styles.image}
                  />
                  <div className={styles.category}>{work.cat}</div>
                </div>
                <div className={styles.content}>
                  <h2>{work.title}</h2>
                  <div className={styles.meta}>
                    <span className={styles.area}>{work.area}</span>
                    <span className={styles.period}>{work.period}</span>
                  </div>
                  <p className={styles.techPoint}>
                    {work.techPoint.replace(/<[^>]+>/g, "").slice(0, 60)}...
                  </p>
                  <div className={styles.button}>
                    {translations.viewDetails}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
} 