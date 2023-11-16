const path = require('path');
const tailwindcss = require('tailwindcss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'development',
  context: path.join(__dirname, '../src'),
	entry: {
    main: './index.js'
  },
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
    publicPath: '/',
	},
	module: {
		rules: [
			{
        test: /\.js$/i,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }
      },
      {
      	test: /\.(html|svelte)$/,
        include: path.resolve(__dirname, '../src'),
        use: 'svelte-loader'
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, '../src'),
        use: [
          'style-loader', 
          'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    tailwindcss
                  ],
                  [
                    "postcss-preset-env",
                    {
                    
                    }
                  ],
                ],
              }
            }
          }
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte/src/runtime')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    conditionNames: ['svelte', 'browser', 'import']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new Dotenv(),
  ],
	devServer: {
    port: 3000,
    open: false,
    hot: true,
    compress: true,
    historyApiFallback: true,
  }
};