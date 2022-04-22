const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

const path = require("path");

const env = process.env.NODE_ENV;
// const process.env.NODE_ENV = '';
console.log(env);

module.exports = {
  mode: 'development',
  entry: {
    main: "./_src/js/main.js",
    map: "./_src/js/map.js",
    configurator: './_src/js/configurator.js'
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "./js/",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery",
    //   "window.$": "jquery",
    // }),
  ],

  resolve: {
    alias: {
      "%components%": path.resolve(__dirname, "_src/js"),
    },
  },
};
