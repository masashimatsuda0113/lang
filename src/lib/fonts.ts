// lib/fonts.ts
import localFont from 'next/font/local'

// Serif系
export const notoSerifJP = localFont({
    src: [
        { path: '../fonts/NotoSerifJP-Regular.woff2', weight: '400', style: 'normal' },
        { path: '../fonts/NotoSerifJP-Medium.woff2', weight: '500', style: 'normal' },
        { path: '../fonts/NotoSerifJP-Bold.woff2', weight: '700', style: 'normal' },
    ],
    display: 'swap',
    variable: '--font-noto-serif',
})

/* 游ゴシック体 */
export const yuGothic = localFont({
    src: [
        { path: '../fonts/Yu-Gothic-bold.woff2', weight: '700', style: 'normal' },
        { path: '../fonts/Yu-Gothic.woff2', weight: '400', style: 'normal' },
    ],
    display: 'swap',
    variable: '--font-yu-gothic',
})

/* MinionPro */
export const minionPro = localFont({
    src: [
        {path: '../fonts/MinionPro-Regular.woff2', weight: '400', style: 'normal'},
        {path: '../fonts/MinionPro-Medium.woff2', weight: '500', style: 'normal'},
        {path: '../fonts/MinionPro-Semibold.woff2', weight: '600', style: 'normal'},
        {path: '../fonts/MinionPro-Bold.woff2', weight: '700', style: 'normal'},
    ],
    display: 'swap',
    variable: '--font-minion-pro',
})
