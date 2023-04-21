import { resolve } from 'path';

const resolvePath = (p: string) => resolve(__dirname, p);

export const webpack = {
  alias: {
    '@utils': resolvePath('src/utils/'),
    '@components': resolvePath('src/components/'),
    '@pages': resolvePath('src/pages/'),
    '@hooks': resolvePath('src/hooks/'),
    '@customTypes': resolvePath('src/types/'),
    '@img': resolvePath('src/img/'),
  },
};
