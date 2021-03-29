

const routes = [
    {
        path:'/',
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
    },
    {
        path:'/successauth',
        component:()=>import('../Pages/AuthorizationSuccess'),
        name:'authorization-success'
    },
    {
        path:'/user-cabinet',
        component:()=> import('../Pages/LK/Pages/UserCabinet'),
        name:'cabinet',
    },
    {
        path: '/my-products',
        component: () => import('../Pages/LK/Pages/MyProducts'),
        name: 'my-roducts',
    },
    {
        path:'/my-offers',
        component:()=> import('../Pages/LK/Pages/MyOffers'),
        name:'my-offers',
    },
    {
        path:'/my-messages',
        component:()=> import('../Pages/LK/Pages/MyMessages'),
        name:'my-messages',
    },
    {
        path:'/dashboard',
        component:()=> import('../Pages/LK/Pages/Dashboard'),
        name:'dashboard',
    }
]

export default routes;
