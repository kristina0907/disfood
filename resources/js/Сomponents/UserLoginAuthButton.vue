<template>
    <div>
        <div v-if="user==null  || user == false">
            <!-- Button trigger modal -->
            <div class="login" data-toggle="modal" data-target="#loginModal">
                <div class="login_img">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 17.9167L2.58214 17.3886C2.79072 16.0477 3.66466 14.8964 4.9679 14.5183C6.27729 14.1384 8.08427 13.75 10 13.75C11.9157 13.75 13.7227 14.1384 15.0321 14.5183C16.3353 14.8964 17.2093 16.0477 17.4179 17.3886L17.5 17.9167"
                            stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M9.99992 10.0001C12.3011 10.0001 14.1666 8.1346 14.1666 5.83341C14.1666 3.53223 12.3011 1.66675 9.99992 1.66675C7.69873 1.66675 5.83325 3.53223 5.83325 5.83341C5.83325 8.1346 7.69873 10.0001 9.99992 10.0001Z"
                            stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
        <div v-if="user && user.user.id" class="nav-item dropdown">
            <div class="login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" @click="changeDropdown()"
                 aria-expanded="false">
                <div v-if="currentUserOrganization" >
                    <div class="name_company" >{{currentUserOrganization[0].name}}</div>
                    <div class="accredited_company" v-if="user.user.roles" v-for="role in user.user.roles">{{ role.name }}
                        &#183; {{currentUserOrganization[0].status.name}}
                    </div>
                </div>
                <div class="login_img">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 17.9167L2.58214 17.3886C2.79072 16.0477 3.66466 14.8964 4.9679 14.5183C6.27729 14.1384 8.08427 13.75 10 13.75C11.9157 13.75 13.7227 14.1384 15.0321 14.5183C16.3353 14.8964 17.2093 16.0477 17.4179 17.3886L17.5 17.9167"
                            stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M9.99992 10.0001C12.3011 10.0001 14.1666 8.1346 14.1666 5.83341C14.1666 3.53223 12.3011 1.66675 9.99992 1.66675C7.69873 1.66675 5.83325 3.53223 5.83325 5.83341C5.83325 8.1346 7.69873 10.0001 9.99992 10.0001Z"
                            stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="dropdown-item-login">
                    <div class="login">
                        <div v-if="user.user.organizations" v-for="(org,index) in user.user.organizations">
                            <div class="name_company" v-if="user.user.organizations && index == 0" v-for="org in user.user.organizations">{{org.name}}</div>
                            <div class="accredited_company" v-if="user.user.roles && index == 0" v-for="role in user.user.roles">{{ role.name }}
                                &#183; {{org.status.name}}
                            </div>
                        </div>
                        <div class="login_img">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 17.9167L2.58214 17.3886C2.79072 16.0477 3.66466 14.8964 4.9679 14.5183C6.27729 14.1384 8.08427 13.75 10 13.75C11.9157 13.75 13.7227 14.1384 15.0321 14.5183C16.3353 14.8964 17.2093 16.0477 17.4179 17.3886L17.5 17.9167" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.99992 10.0001C12.3011 10.0001 14.1666 8.1346 14.1666 5.83341C14.1666 3.53223 12.3011 1.66675 9.99992 1.66675C7.69873 1.66675 5.83325 3.53223 5.83325 5.83341C5.83325 8.1346 7.69873 10.0001 9.99992 10.0001Z" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link class="dropdown-item dropdown-item-settings" :to="{path:'/dashboard'}">
                        Личный кабинет
                    </router-link>
                </li>
                <li>
                    <a class="dropdown-item dropdown-item-settings" href="#">Настройки</a>
                </li>
                <li class="dropdown_info_text dropdown-item-border">Переключиться на организацию</li>
                <li  v-for="(org,index) in user.user.organizations" v-if="currentUserOrganization[0].id !== org.id">
                    <div class="dropdown-item dropdown-item-border">
                    <div class="item_company_list">
                        <div class="name_company_list" @click="changeCurrentOrganization(org.id)">
                            {{org.name}}
                        </div>
                    </div>
                    <div class="icon_company_list">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.5 17.9167L2.58214 17.3886C2.79072 16.0477 3.66466 14.8964 4.9679 14.5183C6.27729 14.1384 8.08427 13.75 10 13.75C11.9157 13.75 13.7227 14.1384 15.0321 14.5183C16.3353 14.8964 17.2093 16.0477 17.4179 17.3886L17.5 17.9167"
                                stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M9.99992 10.0001C12.3011 10.0001 14.1666 8.1346 14.1666 5.83341C14.1666 3.53223 12.3011 1.66675 9.99992 1.66675C7.69873 1.66675 5.83325 3.53223 5.83325 5.83341C5.83325 8.1346 7.69873 10.0001 9.99992 10.0001Z"
                                stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div></li>
                <li>
                    <a class="dropdown-item dropdown-item-exit"
                       href="/logout"
                       onclick="event.preventDefault();
                               document.getElementById('logout-form').submit();"
                    >Выйти</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name:'user-login-auth-button',
    data(){
        return {

        }
    },
    methods:{
        ...mapActions(['changeCurrentOrganization']),
    },
    mounted(){
        this.$store.dispatch('getUserData');
    },
    computed: {
        ...mapState(['user','currentUserOrganization'])
    },
}
</script>
