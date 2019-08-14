import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
/* import './scss/image/login-bg.jpg'; */
/* import './scss/test.scss'; */
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from './router/router.js';
import './scss/common.scss';
import i18nLang from './util/i18n-lang.js';

Vue.use(VueRouter);
Vue.use(elementUI);
Vue.use(VueI18n);

Vue.use(elementUI, {
    i18n: (key, value) => i18n.t(key, value)
});

// 创建一个vue-i18n实例，添加options
const i18n = new VueI18n({
    locale: i18nLang.currentLang,
    messages: i18nLang.langs
});

Vue.use(elementUI, {
    i18n: (key, value) => i18n.t(key, value)
});

// 创建一个vue-router实例，添加options
const router = new VueRouter({
    routes: routes
});

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');

/*
vue-router的使用
import Vue from 'vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter);

 const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: resolve => {
            require(['./app/index/index.vue'], resolve);
        }
    }
];

const router = new vueRouter({
    routes: routes
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
 */

/*
vue-i18n的使用
import vueI18n from 'vue-i18n'

Vue.use(vueI18n);

const messages = {
    en: {
        message: Object.assign({'hello': 'hello'}, enLocale)   //使用的地方：message.hello
    },
    zh: {
        message: Object.assign({'hello': '你好'}, zhLocale)   //message.hello
    },
}
const i18n = new vueI18n({
    locale: 'en',
    messages
})

Vue.use(elementUI, {
    i18n: (key, value) => i18.t(key, value)
})
new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#app');
 */
