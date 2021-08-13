<template>
    <div class="left_container_info">
        <div class="title_profile_settings">Настройки<br />аккаунта</div>
        <div class="sidebar_profile_block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 21.5L3.16547 20.4362C3.37405 19.0954 4.24842 17.9469 5.54504 17.5466C7.13654 17.0553 9.49052 16.5 12 16.5C14.5095 16.5 16.8635 17.0553 18.455 17.5466C19.7516 17.9469 20.6259 19.0954 20.8345 20.4362L21 21.5"
                    stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <router-link :to="{path:'/settings/profile'}">
                <span style="color:#000">Профиль</span>
            </router-link>

        </div>
        <router-link :to="{path:'/settings/addcompany'}">
            <div class="sidebar_btn_add_company" data-toggle="modal" data-target="#modal_add_company">
                Добавить компанию
            </div>
        </router-link>

        <div class="sidebar_company_list" v-if="user && user.user && user.user.organizations">
            <div class="sidebar_company_item" v-for="org in user.user.organizations">
                <router-link :to="{path:'/settings/editcompany/' + org.id}">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9 0H11C12.5977 0 13.9037 1.24892 13.9949 2.82373L14 3V4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V7C0 5.34315 1.34315 4 3 4H6V3C6 1.40232 7.24892 0.0963391 8.82373 0.00509269L9 0H11H9ZM18 14H2V17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V14ZM17 6H3C2.44772 6 2 6.44772 2 7V12H18V7C18 6.44772 17.5523 6 17 6ZM11 2H9C8.48716 2 8.06449 2.38604 8.00673 2.88338L8 3V4H12V3C12 2.48716 11.614 2.06449 11.1166 2.00673L11 2Z"
                              fill="#8898A8" />
                    </svg>
                    <span>{{org.name}}</span>
                </router-link>

            </div>
        </div>
    </div>
</template>
<script>


import {mapActions, mapState} from "vuex";

export default {
    name:'leftsidebar',
    data(){
        return {

        }
    },
    methods:{
        ...mapActions('profile',['getCompanies'])
    },
    computed: {
        ...mapState('profile',['companies']),
        ...mapState(['user'])
    },
    mounted() {

    }
}
</script>

