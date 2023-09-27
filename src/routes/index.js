import { createRouter, createWebHistory } from 'vue-router'

// Vue Router Lazy Loading
const routes = [
    { path: '/', component: () => import('../views/Home.vue') },
    { path: '/intro', component: () => import('../views/Intro.vue')},
    { path: '/config', component: () => import('../views/Config.vue')},
    { path: '/annotations', component: () => import('../views/Annotations.vue')},
    { path: '/parameterized', component: () => import('../views/Parameterized.vue')},
    { path: '/exception', component: () => import('../views/Exception.vue')},
    { path: '/integration', component: () => import('../views/Integration.vue')},
    { path: '/coverage', component: () => import('../views/Coverage.vue')},
    { path: '/goodpractices', component: () => import('../views/Good.vue')},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;