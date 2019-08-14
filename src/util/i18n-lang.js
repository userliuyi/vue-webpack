import eleEnLocale from 'element-ui/lib/locale/lang/en';
import eleZhLocale from 'element-ui/lib/locale/lang/zh-CN';
import en from './i18n-lang-en.js';
import zh from './i18n-lang-zh.js';

let langs = {
    'en': Object.assign(en, eleEnLocale),
    'zh': Object.assign(zh, eleZhLocale)
};

export default {
    currentLang: 'en',
    langs: langs
};
