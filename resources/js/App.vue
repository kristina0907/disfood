<template>
    <div class="app">
        <router-view></router-view>
        <foot></foot>
        <login-modal/>
         <city-modal/>
    </div>
</template>


<script>
    import './Styles/app.scss';
    import './Styles/main.scss';
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
            CityModal: () => import('./Сomponents/CityModal'),
        }
    }



</script>
