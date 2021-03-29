<template>
    <div class="app">
        <router-view></router-view>
        <foot></foot>
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
        }
    }



</script>
