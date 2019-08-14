const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* const PreBuildWebpackPlugin = require('pre-build-webpack');
const preProcess = require('./pre-process.js'); */
// const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: '[name].[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre', // 预执行eslint-loader,在vue文件中，如果校验不过，则不需要执行vue-loader
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)/,
                use: [
                    {
                        loader: 'file-loader', // url-loader包括file-loader，可以设置1024以下大小的图片打包成base64，减少请求
                        options: {
                            limit: 1024,
                            name: 'fonts/[name].[hash:8].[ext]' // ext即图片扩展名
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|png)$/,
                use: [
                    {
                        loader: 'url-loader', // url-loader包括file-loader，可以设置1024以下大小的图片打包成base64，减少请求
                        options: {
                            limit: 1024,
                            name: '[name].[ext]' // ext即图片扩展名
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        /* new PreBuildWebpackPlugin(function() {
            preBuild.preBuildOfProduct();
        }), */
        // after build,delete style link in index.html
        /* new WebpackOnBuildPlugin(function() {
            var replace = require('replace-in-file');
            var options = {
                //Single file
                files: './dist/index.html',

                //Replacement to make (string or regex)
                from: /\<link href="\/static\/bundle\.(white|black).css[\w\W]*rel="stylesheet"\>/g,
                to: ''
            };
            replace.sync(options);
        }),
        new ExtractTextPlugin(
            process.env.theme === 'black' ? 'bundle.black.css' : 'bundle.white.css',
            {
                allChunks: true,
            }
        ), */
        /*  new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }), */
        new VueLoaderPlugin(),
        // 生成Html文件的插件 // 打包输出的html
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            minify: {
                // 是否移除属性的引号 默认false
                removeAttributeQuotes: true
            },
            // 添加hash
            hash: true
        })
    ]
};
