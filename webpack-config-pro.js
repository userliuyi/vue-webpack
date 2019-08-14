const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const base = require('./webpack-config-base');
module.exports = merge(base, {
    // 生产环境
    plugins: [
        // 自动清除上一次打包构建的目录文件
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*']
        })
    ]
});
