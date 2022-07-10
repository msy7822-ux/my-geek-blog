// 参考になった記事
// storybookにtsconfigで用意したパスエイリアスを反映する設定について
// => https://tamalog.szmd.jp/storybook-absolute-imports/
// storybookでscssを使えるようにする
// => https://obel.hatenablog.jp/entry/20211011/1633894200#f-358e0044

const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    return config;
  },
  stories: ['../components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
