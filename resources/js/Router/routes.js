

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
        path:'/allnews',
        component: ()=>import('../Pages/AllNews'),
        name: 'allnews'
    },
    {
        path:'/news-page/:id',
        component:()=> import('../Pages/NewsPage'),
        name:'news-page',
        props:true,

    },
    {
        path:'/basket',
        component:()=>import('../Pages/Basket'),
        name:'basket-page',
    },
    {
        path:'/for-providers',
        component: ()=>import('../Pages/ForProviders'),
        name: 'forproviders'
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
        path:'/catalog-page/:id',
        component: ()=>import('../Pages/CatalogPage'),
        name: 'catalog-page',
        props:true,
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
        name: 'my-products',
    },
    {
        path:'/my-orders',
        component:()=> import('../Pages/LK/Pages/MyOrders'),
        name:'my-orders',
    },
    {
        path:'/order-page/:id',
        component:()=> import('../Pages/LK/Pages/OrderPage'),
        name:'order-page',
        props:true,

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
    },
    {
        path:'/product-add',
        component:()=> import('../Pages/LK/Pages/AddProduct'),
        name:'productadd',
    },
    {
        path:'/offers',
        component:()=> import('../Pages/Offers'),
        name:'offers',
    },

]

export default routes;
