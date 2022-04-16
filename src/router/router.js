import Vue from 'vue';
import Router from 'vue-router';
import RoutePath from './RoutePath';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: RoutePath.HOME,
            name: 'Home',
            redirect: RoutePath.DASHBOARD
        },

        {
            path: RoutePath.DASHBOARD,
            name: 'DashboardView',
            component: () => import('@/views/DashboardView/DashboardView.vue')
        },

        {
            path: RoutePath.CLIENTS,
            name: 'ClientsView',
            component: () => import('@/views/ClientsView/ClientsView.vue')
        },

        {
            path: RoutePath.CARS,
            name: 'CarsView',
            component: () => import('@/views/CarsView/CarsView.vue')
        },

        {
            path: RoutePath.BRANDS,
            name: 'BrandsView',
            component: () => import('@/views/BrandsView/BrandsView.vue')
        },

        {
            path: RoutePath.RENTS,
            name: 'RentsView',
            component: () => import('@/views/RentsView/RentsView.vue')
        }
    ],

    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});
