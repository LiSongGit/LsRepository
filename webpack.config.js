var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  	entry:  __dirname + "/js/main.js",//已多次提及的唯一入口文件
 	output: {
    	path: __dirname + "/public",//打包后的文件存放的地方
    	filename: "qas.js"//打包后输出文件的文件名
  	},
  	module: {//在配置文件里添加JSON loader
	    loaders: [
	      { test: /\.json$/, loader: "json" },
	      { test:/\.js$/, exclude:/node_modules/, loader:'babel' },
	      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules!postcss') }
	    ]
 	},
 	postcss: [
	    require('autoprefixer')//调用autoprefixer插件
  	],
  	plugins: [
 		//打包生成html文件到指定目录
	 	new HtmlWebpackPlugin({template: __dirname + "/index.html"}),//new 一个这个插件的实例，并传入相关的参数
	 	//热加载插件
	 	new webpack.HotModuleReplacementPlugin(),
		//打包文件头部注释
    	new webpack.BannerPlugin("LiSong 2016.11.22 于华彩"),//在这个数组中new一个就可以了
    	//压缩JS代码
//	    new webpack.optimize.UglifyJsPlugin(),
	    //分离CSS和JS文件
	    new ExtractTextPlugin("style.css")
 	]
}