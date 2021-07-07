<template>
    <div>
        <div v-if="user==null  || user == false">

            <div class="nav-item dropdown">
                <div class="login" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" @click="changeDropdown()"
                     aria-expanded="false">

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
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                    <li>
                        <div class="text-user-login-button" >
                            Войдите, чтобы делать покупки, и отслеживать заказы.
                        </div>
                    </li>
                    <li >
                        <div class="dropdown-item dropdown-item-settings user-login-a"  data-toggle="modal" data-target="#loginModal">
                            Войти
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                <rect y="0.5" width="50" height="50" rx="25" fill="white"/>
                                <rect x="17.6666" y="24" width="14.6667" height="9.66667" rx="2" stroke="#71BF45" stroke-width="2"/>
                                <path d="M20.8334 23.8333V20.5C20.8334 19.3949 21.2724 18.3351 22.0538 17.5537C22.8352 16.7723 23.895 16.3333 25 16.3333C26.1051 16.3333 27.1649 16.7723 27.9463 17.5537C28.7277 18.3351 29.1667 19.3949 29.1667 20.5V23.8333" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <router-link class="dropdown-item dropdown-item-settings user-login-a" :to="{path:'/authorization'}">
                           Регистрация
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                <rect y="0.5" width="50" height="50" rx="25" fill="white"/>
                                <path d="M17.5 33.4167L17.5821 32.8886C17.7907 31.5477 18.6647 30.3964 19.9679 30.0183C21.2773 29.6384 23.0843 29.25 25 29.25C26.9157 29.25 28.7227 29.6384 30.0321 30.0183C31.3353 30.3964 32.2093 31.5477 32.4179 32.8886L32.5 33.4167" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M25 25.5C27.3012 25.5 29.1667 23.6345 29.1667 21.3333C29.1667 19.0321 27.3012 17.1667 25 17.1667C22.6989 17.1667 20.8334 19.0321 20.8334 21.3333C20.8334 23.6345 22.6989 25.5 25 25.5Z" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- Button trigger modal -->
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
<style>
.text-user-login-button
{
    font-family: Montserrat;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    padding: 20px;
}
.dropdown-item.dropdown-item-settings.user-login-a
{
    font-family: Montserrat;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #71BF45;
    cursor: pointer;
}
header .dropdown-menu.show
{
    left:-70px;
}
</style>
