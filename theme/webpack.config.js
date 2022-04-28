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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true
    })
  ],

  resolve: {
    alias: {
      "%components%": path.resolve(__dirname, "_src/js"),
    },
  },
};
