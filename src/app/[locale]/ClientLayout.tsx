'use client';

import {ReactNode} from 'react';
import {useScrollAnimation} from '@/lib/scrollAnimation';

export default function ClientLayout({children}: {children: ReactNode}) {
  useScrollAnimation();// スクロールアニメーションを有効化
  return <>{children}</>;
} 