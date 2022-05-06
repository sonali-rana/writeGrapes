const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'bundle.js',
    },
    module : {
        rules : [
            {
        test: /\.js|.(ts|tsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
            {
                test:/\.(webp|jpg|png|jpeg)$/,
                use:['img-loader','file-loader'],
            },
            {
                test:/\.css$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use:['style-loader','css-loader']
            },
             { test: /\.html$/, use: 'html-loader' }
        ]},
       
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({template: './public/index.html' , filename: 'index.html'})
    ],
    devtool:'inline-source-map',
    devServer:{
        historyApiFallback:true,
        port:2222,
    },
};