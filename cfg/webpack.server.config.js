const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const IS_dev = NODE_ENV === 'development';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              //включит настройки модуля лоадера
              modules: {
                //включит локальные селекторы
                mode: 'local',
                //как будет называться новый селектор
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true,
              },
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader'],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  devtool: IS_dev ? 'eval' : false,
  plugins: [
    new DefinePlugin({
      'process.env.CLIENT_ID': `"${process.env.CLIENT_ID}"`,
      'process.env.REDIRECT_NAME': `'${process.env.REDIRECT_NAME}'`,
      'process.env.SECRET_NAME': `'${process.env.SECRET_NAME}'`,
    }),
  ],
};
