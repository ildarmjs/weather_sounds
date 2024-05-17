const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.ts',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, 'public/index.html')
		}),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')]
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|mp3|jpg|svg)$/i,
				type: 'asset/resource'
			}
		]
	}
}
