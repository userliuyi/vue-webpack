const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: resolve => {
            require(['../app/index/index.vue'], resolve);
        }
    }
];

export default routes;
