import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ja', 'en', 'zh', 'th'],
  defaultLocale: 'ja',
  pathnames: {
    '/': '/',
    '/works': {
      en: '/works',
      zh: '/作品',
      th: '/ผลงาน'
    },
    '/services': {
      en: '/services',
      zh: '/服务',
      th: '/บริการ'
    },
    '/company': {
      en: '/company',
      zh: '/公司',
      th: '/บริษัท'
    },
    '/news': {
      en: '/news',
      zh: '/新闻',
      th: '/ข่าว'
    },
    '/contact': {
      en: '/contact',
      zh: '/联系',
      th: '/ติดต่อ'
    },
    '/recruit': {
      en: '/recruit',
      zh: '/招聘',
      th: '/รับสมัคร'
    },
    '/recruit/contact': {
      en: '/recruit/contact',
      zh: '/招聘/联系',
      th: '/รับสมัคร/ติดต่อ'
    }
  }
});
