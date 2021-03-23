

const routes = [
    {
        path:'',
        component: ()=>import('../Pages/Frontpage'),
        name: 'frontpage'
    },
    {
        path:'/about',
        component: ()=>import('../Pages/About'),
        name: 'about'
    },
    {
        path:'/delivery',
        component: ()=>import('../Pages/Delivery'),
        name: 'delivery'
    },
    {
        path:'/to-supplier',
        component: ()=>import('../Pages/ToSuppliers'),
        name: 'tosuppliers'
    },
    {
        path:'/contacts',
        component: ()=>import('../Pages/Contacts'),
        name: 'contacts'
    },
    {
        path:'/catalog',
        component: ()=>import('../Pages/Catalog'),
        name: 'catalog'
    },
    {
        path: '/authorization',
        component:()=>import('../Pages/Authorization'),
        name:'authorization'
    }
]

export default routes;
