

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
        path:'/howto',
        component: ()=>import('../Pages/HowTo'),
        name: 'howto'
    },
]

export default routes;
