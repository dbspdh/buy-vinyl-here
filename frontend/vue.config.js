const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
const path = require('path');

module.exports = defineConfig({
  // transpileDependencies: true
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      })
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    },
  },
})
