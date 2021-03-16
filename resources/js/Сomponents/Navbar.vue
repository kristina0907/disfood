<template>
   <nav class="navBar">
       <ul class="navBar__link">
           <li>
               <router-link :to="{name:'frontpage'}">
                   Главная
               </router-link>
           </li>
           <li>
               <router-link :to="{name:'about'}">
                   О нас
               </router-link>
           </li>
           <li>
               <router-link :to="{name:'howto'}">
                  Как это работает
               </router-link>
           </li>
       </ul>
   </nav>
</template>

<script>
export default {
    name:"navbar",
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
