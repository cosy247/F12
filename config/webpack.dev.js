const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    entry: './src/index.js',
    resolveLoader: {
        modules: ['node_modules', 'setor'],
    },
    resolve: {
        extensions: ['.js', '.setor', '.json'],
        alias: {
            setor: resolve('./setor'),
        },
    },
    module: {
        rules: [
            {
                test: /\.setor$/,
                use: ['setor-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                use: ['raw-loader'],
            },
            {
                test: /\.less$/,
                use: ['raw-loader', 'less-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['raw-loader', 'less-loader'],
            },
            {
                test: /\.styl$/,
                use: ['raw-loader', 'stylus-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|webp|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    },
                },
                generator: {
                    filename: 'media/[hash:10][ext][query]',
                },
            },
            {
                test: /\.(ttf|woff2|mp3|mp4|avi)$/,
                type: 'asset/resourse',
                generator: {
                    filename: 'media/[hash:10][ext][query]',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        host: 'localhost',
        port: '7000',
        open: true,
        watchFiles: ['./src', './public'],
    },
    mode: 'development',
};
