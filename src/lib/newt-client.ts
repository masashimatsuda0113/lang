const spaceUid = process.env.NEXT_PUBLIC_NEWT_SPACE_UID!;
const apiToken = process.env.NEXT_PUBLIC_NEWT_API_TOKEN!;
const appUid = process.env.NEXT_PUBLIC_NEWT_APP_UID!;

// 作品一覧を取得
export async function fetchWorks() {
    const res = await fetch(`https://${spaceUid}.cdn.newt.so/v1/${appUid}/works`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  const data = await res.json();
  return data.items;
}

// スラッグから作品を取得
export async function fetchWorkById(id: string) {
  const res = await fetch(`https://${spaceUid}.cdn.newt.so/v1/${appUid}/works?id=${id}`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  const data = await res.json();
  return data.items[0];  // ← スラッグは1件しか返らないので最初の要素だけ
}



export async function fetchNews() {
  const res = await fetch(`https://${spaceUid}.cdn.newt.so/v1/${appUid}/news`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  const data = await res.json();
  return data.items;
}
