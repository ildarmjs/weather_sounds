const { merge } = require('webpack-merge')
const common = require('./webpack.config.common.js')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 3000,
		hot: true,
		open: true
	},
	plugins: [new ESLintPlugin()]
})
