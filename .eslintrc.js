module.exports = {
    "root": true,

	"plugins": [
        "html", 
        "vue"
    ],

    "parserOptions": {
        "parser": "babel-eslint"
    },
    "extends": [  
        "plugin:vue/essential",  // `plugin:vue/strongly-recommended` or `plugin:vue/recommended`.   // npm install --save-dev eslint eslint-plugin-vue
      //  "eslint:recommended",  // npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D
        "standard"      //  npm install standard --save-dev
    ],  
  /*  extends: ['plugin:vue/recommended', 'eslint:recommended'], */
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },

    "rules": {
        "indent": [
            "error", 
            4
        ],
        "linebreak-style": [
            "error", 
            "windows"
        ],
         // 引号类型
        "quotes": [
            "error", 
            "single"
        ],
        // js语句结尾必须使用分号
        "semi": [
            "error", 
            "always"
        ]
    }
};


/* 
eslint的使用: https://juejin.im/post/5ad367695188255c9323bb30
使用小总结：

安装eslint：
npm install eslint -D

安装eslint的配置标准包：其他的插件是eslint-config-standard这个npm包里推荐我们去安装的，因为它的校验规则要依赖于这些plugins进行去验证。
npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D

安装eslint-liugin-html的原因：在Vue项目里，.vue文件写的是类似于html的格式，不是标准的JavaScript文件，
ESLint无法直接识别.vue文件里的JavaScript代码，那么这个时候我们需要去安装一个工具
npm i eslint-plugin-html -D


新建一个.eslintrc.js写配置项
新建一个.eslintignore //eslint校验忽略的文件和路径
新建一个.editorconfig, 配置一些编辑时候的配置。

在package.json中添加
"lint": "eslint --ext .js --ext .jsx --ext .vue src/"
"lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/"
eslint的校验用法如上：

在项目中预处理错误，即就是边写代码边校验
npm i eslint-loader babel-eslint -D
rules: [
  {
    test: /\.(vue|js|jsx)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
    enforce: 'pre'  在.vue文件中，使用了vue-loader处理了，所以这里设置是为了强制先使用eslint-loader检查一下代码格式
  },
]


/* 
module.exports = {
    //此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true, 
    //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint',
    //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    parserOptions: {
        sourceType: 'module'
    },
    //此项指定环境的全局变量，下面的配置指定为浏览器环境
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    extends: 'standard',
    // required to lint *.vue files
    // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
    plugins: [
        'html'
    ],
    // add your custom rules here
    // 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
    // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
    // "off" -> 0 关闭规则
    // "warn" -> 1 开启警告规则
    //"error" -> 2 开启错误规则
    // 了解了上面这些，下面这些代码相信也看的明白了
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // js语句结尾必须使用分号
    'semi': ['off', 'always'],
    // 三等号
    'eqeqeq': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    // 关键字后面使用一致的空格
    'keyword-spacing': 0,
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': 0,
    // 引号类型
    "quotes": [0, "single"],
    // 禁止出现未使用过的变量
    // 'no-unused-vars': 0,
    // 要求或禁止末尾逗号
    'comma-dangle': 0
  }
}
*/