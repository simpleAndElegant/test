// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
      },
    },
    devServer: {
      disableHostCheck: true,
      proxy: {
        '/api/community': {
          target: 'https://test.xiaohoucode.com',
          // target: 'http://10.7.84.54',
          changeOrigin: true,
          publicPath: '/',
        },
        '/api/core': {
          target: 'https://test.xiaohoucode.com',
          // target: 'http://10.7.84.54',
          changeOrigin: true,
          publicPath: '/',
        },
        '/python': {
          target: 'https://test.xiaohoucode.com',
          changeOrigin: true,
          publicPath: '/',
        },
        '/scratch': {
          target: 'https://test.xiaohoucode.com',
          changeOrigin: true,
          publicPath: '/',
        },
        '/cpp': {
          target: 'https://test.xiaohoucode.com',
          changeOrigin: true,
          publicPath: '/',
        },
      },
    },
  }),
};
