<template>
    <div class="app">
        <router-view></router-view>
        <foot></foot>
        <login-modal/>
    </div>
</template>


<script>
    import './Styles/app.scss';
    import "./bootstrap";
    export default {
        name:"app",
        data(){
          return {

          }
        },
        components:{
            Head: () => import('./Сomponents/Header'),
            Foot: () => import('./Сomponents/Footer'),
            Autocomplete: () => import('./Сomponents/Autocomplete'),
            LoginModal: () => import('./Сomponents/LoginModal'),
        }
    }



</script>
