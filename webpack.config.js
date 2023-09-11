const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        port: 9000,
        static: {
            serveIndex: true,
            directory: __dirname
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'assets/images', to: "assets/images" }],
        }),
        // Make an index.html from the template
        new HtmlWebpackPlugin({
            template: './index.html',
            hash: true,
            minify: false
        })
    ]
}