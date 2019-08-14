const merge = require('webpack-merge');
const base = require('./webpack-config-base');
module.exports = merge(base, {
    devServer: {
        port: 8000,
        host: 'localhost',
        overlay: {
            errors: true // 运行dev时错误都展示出来，以便开发
        },
        open: true,
        hot: true
    }
});
