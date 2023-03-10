import { resolve } from 'path';

const resolvePath = (p: string) => resolve(__dirname, p);

export const webpack = {
  alias: {
    '@utils': resolvePath('src/utils'),
    '@components': resolvePath('src/components'),
    '@pages': resolvePath( 'src/pages'),
  },
};
