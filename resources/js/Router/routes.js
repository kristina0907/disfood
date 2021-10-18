

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
        path:'/catalog/category/:category/:type?',
        component: ()=>import('../Pages/Catalog'),
        name: 'catalog',
        props:true,
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
        name:'authorization-success',
        props: true,
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
        path:'/product-edit/:id',
        component:()=> import('../Pages/LK/Pages/EditProduct'),
        name:'productedit',
        props:true,
    },
    {
        path:'/offers',
        component:()=> import('../Pages/Offers'),
        name:'offers',
    },
    {
        path:'/settings/profile',
        component:()=> import('../Pages/LK/Pages/Settings/SettingsProfile'),
        name:'settingsprofile',
    },
    {
        path:'/settings/addcompany',
        component:()=> import('../Pages/LK/Pages/Settings/AddCompany'),
        name:'settingsaddcompany',
    },
    {
        path:'/settings/editcompany/:id',
        component:()=> import('../Pages/LK/Pages/Settings/CompanyEdit'),
        name:'settingseditcompany',
        props: true,
    },
    {
        path:'/settings/accreditation/:id',
        component:()=> import('../Pages/LK/Pages/Settings/Accreditation'),
        name:'settingsaccreditation',
        props: true,
    },
    {
        path:'/settings/accreditation/:id/success',
        component:()=> import('../Pages/LK/Pages/Settings/AccreditationSuccess'),
        name:'settingsaccreditationsuccess',
        props: true,
    },
    {
        path:'/addnewproduct/success',
        component:()=> import('../Pages/LK/Pages/AddProductSuccess'),
        name:'addnewproductsuccess',
        props: true,
    },
    { path: "*", component:()=> import('../Pages/404'), }

]

export default routes;
