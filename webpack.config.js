const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    index: './src/index.jsx',
    // Add other entry points for additional pages/components if needed
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
  },
  devServer: {
    watchFiles: ['src/*.html', 'src/**/*.html'],
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  watchOptions: {
    poll: 1000,
    ignored: '/node_modules/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@images': path.resolve(__dirname, './src/assets/images/'),
    },
    // fallback: {
    //   path: require.resolve('path-browserify'),
    //   os: require.resolve('os-browserify/browser'),
    //   crypto: require.resolve('crypto-browserify'),
    //   stream: require.resolve('stream-browserify'),
    //   buffer: require.resolve('buffer/'),
    // },
  },
};
