<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>

        <div class="row">
            <div class="xs-12 col-md-4 left_container">
                <leftsidebar></leftsidebar>
            </div>
            <div class="xs-12 col-md-8">
                <div class="right_container" v-if="user && user.user">
                    <div class="title_settings">Профиль</div>
                    <div class="profile_information_block">
                        <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(user.user)" v-model="user.user.name"></quick-edit>
                        <table class="profile_information_list">
                            <tr class="profile_information_item">
                                <td class="title_profile_information_item">Должность</td>
                                <td class="value_profile_information_item">
                                    <div class="row">
                                        <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(user.user)" v-model="user.user.dolgnost"></quick-edit>
                                        <span class="edit_profile_information_item">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                    stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                      stroke-width="2" />
                                            </svg>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr class="profile_information_item">
                                <td class="title_profile_information_item">Телефон</td>
                                <td class="value_profile_information_item">
                                    <div class="row">
                                        <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(user.user)" v-model="user.user.phone"></quick-edit>
                                        <span class="edit_profile_information_item">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                    stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                      stroke-width="2" />
                                            </svg>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr class="profile_information_item">
                                <td class="title_profile_information_item">E-mail</td>
                                <td class="value_profile_information_item">
                                    <div class="row">
                                        <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(user.user)" v-model="user.user.email"></quick-edit>
                                        <span class="edit_profile_information_item">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                    stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                      stroke-width="2" />
                                            </svg>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr class="profile_information_item">
                                <td class="title_profile_information_item">Пароль</td>
                                <td class="value_profile_information_item"> <div class="row">
                                    <quick-edit class="name_profile_information" emptyText="Введите новый пароль" buttonCancelText="Отмена" @input="storeChanges(user.user)" v-model="user.user.password"></quick-edit>
                                    <span class="edit_profile_information_item">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                    stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                      stroke-width="2" />
                                            </svg>
                                        </span>
                                </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="profile_information_block">
                        <div class="name_profile_information">Уведомления</div>
                        <div class="description_profile_information">Выберите уведомления которые нужно дублировать из
                            личного кабинета</div>
                        <table class="profile_information_list">
                            <tr class="profile_information_item">
                                <td class="title_profile_information_item">Новые сделки</td>
                                <td class="checkbox_profile_information_item">
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" id="country-1" name="country"
                                               value="indigo" checked>
                                        <label for="country-1">СМС</label>
                                    </div>
                                </td>
                                <td class="checkbox_profile_information_item">
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" id="country-2" name="country"
                                               value="indigo" checked>
                                        <label for="country-2">Почта</label>
                                    </div>
                                </td>
                            </tr>
                            <tr class="profile_information_item">
                                <td class="title_profile_information_item">Этапы сделки</td>
                                <td class="checkbox_profile_information_item">
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" id="country-3" name="country"
                                               value="indigo">
                                        <label for="country-3">СМС</label>
                                    </div>
                                </td>
                                <td class="checkbox_profile_information_item">
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" id="country-4" name="country"
                                               value="indigo" checked>
                                        <label for="country-4">Почта</label>
                                    </div>
                                </td>
                            </tr>
                            <tr class="profile_information_item">
                                <td class="title_profile_information_item">Сообщения</td>
                                <td class="checkbox_profile_information_item">
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" id="country-5" name="country"
                                               value="indigo">
                                        <label for="country-5">СМС</label>
                                    </div>
                                </td>
                                <td class="checkbox_profile_information_item">
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" id="country-6" name="country"
                                               value="indigo" checked>
                                        <label for="country-6">Почта</label>
                                    </div>
                                </td>
                            </tr>
                            <tr class="profile_information_item">
                                <td class="title_profile_information_item">Рассылки</td>
                                <td class="checkbox_profile_information_item">
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" id="country-7" name="country"
                                               value="indigo">
                                        <label for="country-7">СМС</label>
                                    </div>
                                </td>
                                <td class="checkbox_profile_information_item">
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" id="country-8" name="country"
                                               value="indigo" checked>
                                        <label for="country-8">Почта</label>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>


import UserLKHeader from "../../../../Сomponents/LK/UserLKHeader";
import Leftsidebar from "./Leftsidebar";
import {mapActions, mapState} from "vuex";

import QuickEdit from 'vue-quick-edit';

export default {
    components: {Leftsidebar, UserLKHeader,'quick-edit':QuickEdit},
    data(){
        return {
            name:'',
        }
    },
    methods:{

        /**
         *
         * @param org
         */

        storeChanges(org)
        {
            axios.post('/set/update/profile', org)
                .then(response => {
                    if(response.status == 200)
                    {
                        console.log(response.status)
                        //router.push({ name: 'settingsprofile', query: { redirect: '/settings/profile' } });
                    }
                });
        }
    },
    computed: {
        ...mapState(['user'])
    },
}
</script>
