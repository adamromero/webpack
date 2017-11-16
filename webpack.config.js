var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/index.js'],
        output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
    	rules: [{
    		test: /\.scss$/, 
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader','sass-loader'],
                publicPath: '/dist'
            })
    	},
    	{ 
    		test: /\.js$/,
    		loader: 'babel-loader',
    		query: {presets:['es2015']}
    	}]
    },
    devServer: {
        //contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
      	new ExtractTextPlugin({
      		filename: 'bundle.css',
      		allChunks: true,
      	}),
    ]
};
