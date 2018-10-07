const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const defaultConfig = (isProduction) => {
  return {
    target: 'web',
    entry: {
      index: './game/index.ts'
    },
    devServer: {
      contentBase: './dist',
      port: 8000
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          use: 'html-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
          loader: 'file-loader'
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules'
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin()
    ],
    output: {
      filename: `./[name].js`,
      path: path.resolve(__dirname, 'dist')
    }
  };
};

const getProductionConfig = () => {
  const config = defaultConfig(true);
  config.devtool = 'none';
  config.optimization = {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  };
  return config;
};

const getDevConfig = () => {
  const config = defaultConfig(false);
  config.devtool = 'source-map';
  return config;
};

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = isProduction ? getProductionConfig() : getDevConfig();
  return config;
};
