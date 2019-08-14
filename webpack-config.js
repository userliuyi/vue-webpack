const merge = require('merge-webpack-plugin');
const base = require('./webpack-config-base');
const dev = require('./webpack-config-dev');
const pro = require('./webpack-config-pro');

const isDev = process.env.NODE_ENV === 'development';
let others = {};
if (isDev) {
    others = merge(base, dev);
} else {
    others = merge(base, pro);
}

module.exports = others;
