import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/ja.json'
  }
});

const config: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'willnet-site.assets.newt.so'],
  },
};

export default withNextIntl(config);