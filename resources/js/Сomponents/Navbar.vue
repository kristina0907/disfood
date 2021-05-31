<template>
   <div class="navigation">
           <ul>
               <li class="nav-item">
                   <router-link :to="{name:'frontpage'}" class="nav-link">
                       Как мы работаем
                   </router-link>
               </li>
               <li class="nav-item">
                   <router-link :to="{name:'about'}" class="nav-link">
                       О компании
                   </router-link>
               </li>
               <li class="nav-item">
                   <router-link :to="{name:'delivery'}" class="nav-link">
                       Доставка
                   </router-link>
               </li>
               <li class="nav-item">
                   <router-link :to="{name:'tosuppliers'}" class="nav-link">
                       Поставщикам
                   </router-link>
               </li>
               <li class="nav-item">
                   <router-link :to="{name:'contacts'}" class="nav-link">
                       Контакты
                   </router-link>
               </li>
               <li><a href="">
                   <div class="place">
                            <span>
                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.5 13.75C27.5 19.3471 19.2834 26.55 16.1735 29.0758C15.4852 29.6348 14.5148 29.6348 13.8265 29.0758C10.7166 26.55 2.5 19.3471 2.5 13.75C2.5 6.84644 8.09644 1.25 15 1.25C21.9036 1.25 27.5 6.84644 27.5 13.75Z"
                                        stroke="#71BF45" stroke-width="2" />
                                    <circle cx="15" cy="13.75" r="3.75" stroke="#71BF45" stroke-width="2" />
                                </svg>
                            </span>
                       Екатеринбург
                   </div>
               </a></li>
           </ul>
   </div>
</template>

<script>
export default {
    name:"navbar",
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
