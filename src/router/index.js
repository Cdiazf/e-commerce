import { createRouter, createWebHistory } from 'vue-router';
import DashboardLayout from '@/layout/DashboardLayout.vue';

import Dashboard from '@/pages/Dashboard.vue';
import SignInRegister from "@/pages/SignInRegister.vue";
import NotFound from "@/pages/NotFound.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import ProductDescription from "@/pages/ProductDescription.vue";
import LandingLayout from "@/layout/LandingLayout.vue";
import ShopPage from "@/pages/ShopPage.vue";
import Checkout from "@/components/Checkout.vue";

const routes = [

    {   path: "/landing",
        component: LandingLayout,
        children: [
            {   path: '', name: 'shopPage', component: ShopPage },
            {   path: '/product_description', name: 'productDescription', component: ProductDescription },
            {   path: '/check_out', name: 'checkOut', component: Checkout },
            {   path: ":pathMatch(.*)*", name: "NotFound", component: NotFound },
        ] ,
    },
    {
        path: '/',
        component: DashboardLayout,
        children: [
            {   path: '', name: 'dashboard', component: Dashboard },
            {   path: '/register', name: 'register', component:SignInRegister },
            {   path: '/product-detail', name: 'product-detail', component:ProductDetail},
            {   path: '/product-description', name: 'product-description', component: ProductDescription },
            {   path: ":pathMatch(.*)*", name: "NotFound", component: NotFound },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
