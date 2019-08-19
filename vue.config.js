module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
	outputDir: 'dist',
	assetsDir: 'static',
	productionSourceMap: false,
	devServer: {
		open: true,
		host: 'localhost',
		port: 8090,
		https: false,
		proxy: null, // string | Object
	}
}
