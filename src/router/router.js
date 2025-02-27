import {createWebHashHistory, createRouter} from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
    {
        name: 'HomeView',
        path: '/',
        component: HomeView
    },
    {
        name: 'AboutView',
        path: '/about',
        component: AboutView
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
