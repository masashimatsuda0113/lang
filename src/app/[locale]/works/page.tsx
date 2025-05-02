//app/[locale]/works/page.tsx
import { fetchWorks } from "@/lib/newt-client";
import Image from "next/image";
import Link from "next/link";
import styles from "./works.module.scss";

export default async function WorksPage() {
  const works = await fetchWorks();
  console.log(works);

  return (
    <main className={styles.main}>
      <h1>施工実績一覧</h1>
      <ul className={styles.cardList}>
        {works.map((work: any) => (
          <li key={work._id} className={styles.card}>
            <Link href={`/ja/works/${work._id}`}>
              <Image
                src={work.mainImage?.src || "/images/no-image.jpg"}
                alt={work.mainImage?.altText || work.title}
                width={600}
                height={400}
              />
              <div className={styles.text}>
                <h2>{work.title}</h2>
                <p>{work.techPoint.replace(/<[^>]+>/g, "").slice(0, 60)}...</p>
                <p className={styles.meta}>
                  {new Date(work._sys.raw.publishedAt).toLocaleDateString(
                    "ja-JP"
                  )}
                  {" ／ "}
                  {work.area}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
