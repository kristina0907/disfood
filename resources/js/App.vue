<template>
    <div class="app">
        <Head></Head>
        <router-view></router-view>
    </div>
</template>


<script>
    import './Styles/app.scss'
    import "./bootstrap"
    export default {
        name:"app",
        components:{
            Head: () => import('./Сomponents/Header')
        }
    }



</script>
