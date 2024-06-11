import { createRouter, createWebHistory } from 'vue-router'
import vCatalog from '../components/v-catalog'

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: vCatalog,
        props: true
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router;