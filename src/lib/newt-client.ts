// src/lib/newt-client.ts
import { createClient } from 'newt-client-js';

const client = createClient({
  spaceUid: process.env.NEXT_PUBLIC_NEWT_SPACE_UID!,
  token: process.env.NEXT_PUBLIC_NEWT_API_TOKEN!,
  apiType: 'cdn',
});

// 作品一覧を取得
export async function fetchWorks() {
  const { items } = await client.getContents({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID!,
    modelUid: 'works', // ← Newt側のモデル名を指定
    query: {
      limit: 100,       // 必要なら件数制限（任意）
      order: ['-_sys.createdAt'], // 任意：新しい順
    },
  });
  return items;
}

// _id から1件取得
export async function fetchWorkById(id: string) {
  const work = await client.getContent({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID!,
    modelUid: 'works',
    contentId: id, // ← _id を指定する
  });
  return work;
}

// ニュース一覧取得
export async function fetchNews() {
  const { items } = await client.getContents({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID!,
    modelUid: 'news',
    query: {
      limit: 100,
      order: ['-_sys.createdAt'],
    },
  });
  return items;
}

// ニュース1件取得
export async function fetchNewsById(id: string) {
  const news = await client.getContent({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID!,
    modelUid: 'news',
    contentId: id,
  });
  return news;
}
