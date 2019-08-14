/* eslint-disable */
module.exports.preBuildOfProduct = function () {
    var sourceFileName = '';
    if (process.env.theme === 'black') {
        sourceFileName = '_variables-black.scss';
    } else {
        sourceFileName = '_variables-white.scss';
    }
    // 用sourceFileName覆盖./src/scss/variables.scss的内容
    var fs = require('fs');
    var contents = fs.readFileSync('./src/scss/' + sourceFileName);
    fs.writeFileSync('./src/scss/variables.scss', contents);
} 

