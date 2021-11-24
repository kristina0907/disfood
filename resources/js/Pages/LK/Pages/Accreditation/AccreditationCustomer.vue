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
                <div class="right_container">
                    <div class="step_main_block">
                        <div class="title_profile_accreditation">Аккредитация профиля</div>
                        <div class="title_description_settings">Заполните данные профиля организации чтобы проводить
                            сделки
                        </div>
                        <div class="step_profile_accreditation_block">
                            <div class="row">
                                <div class="col-xs-12 col-md-6 active_step">
                                    <div class="head_step_profile_accreditation_block">
                                        <div class="title_step">Покупатель</div>
                                        <div class="number_step">1/1</div>
                                    </div>
                                    <div class="container_profile_accreditation_block">
                                        <div class="row">
                                            <div class="item_step_block col-md-12" :class="{active_half_step : step == 1, completed_item_step: step == 2}">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="head_step_profile_accreditation_block">
                                        <div class="title_step">Поставщик</div>
                                        <div class="number_step">0/3</div>
                                    </div>
                                    <div class="container_profile_accreditation_block">
                                        <div class="row">
                                            <div class="item_step_block col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="step == 1">
                            <div class="step_profile_information_block">
                                <div class="step_name_profile_information">1. Модерация</div>
                                <div class="step_description_profile_information">
                                    Один из ваших документов не прошел модерацию. Мы все равно аккредитовали ваш аккаунт. За
                                    уточнениями по документу обратитесь к менеджеру.
                                </div>
                                <div class="save_contract">
                                    <span>Читать договор</span>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 4.5C4.5 3.39543 5.39543 2.5 6.5 2.5L9.92105 2.5C11.5779 2.5 12.9211 3.84315 12.9211 5.5L12.9211 8C12.9211 9.38071 14.0403 10.5 15.4211 10.5H17.5C19.1569 10.5 20.5 11.8431 20.5 13.5V20.5C20.5 21.6046 19.6046 22.5 18.5 22.5L6.5 22.5C5.39543 22.5 4.5 21.6046 4.5 20.5L4.5 4.5Z" stroke="#22262A" stroke-width="2"/>
                                        <path d="M4.5 4.5C4.5 3.39543 5.39543 2.5 6.5 2.5L9.73393 2.5C12.0937 2.5 14.3332 3.54186 15.8532 5.34691L18.6193 8.63163C19.8339 10.074 20.5 11.899 20.5 13.7847V20.5C20.5 21.6046 19.6046 22.5 18.5 22.5L6.5 22.5C5.39543 22.5 4.5 21.6046 4.5 20.5L4.5 4.5Z" stroke="#22262A" stroke-width="2"/>
                                    </svg>
                                </div>
                                <div class="checkbox accreditation_company_checkbox">
                                    <input type="checkbox" id="country-1" name="country" value="indigo" class="custom-checkbox">
                                    <label for="country-1">Ознакомлен с договором</label>
                                </div>
                            </div>
                            <button class="btn_next_step" @click="changeStep">Далее</button>
                        </div>
                        <div v-if="step == 2">
                            <div class="step_profile_information_block">
                                <div class="step_name_profile_information">Вы аккредитованы как покупатель, теперь вы можете проводить сделки</div>
                                <div class="step_description_profile_information supplier_ifo_step">
                                    Чтобы стать поставщиком и размещать свои товары, пройдите оставшиеся этапы аккредитации
                                </div>
                            </div>
                            <div class="btn_step_block">
                                <router-link :to="{path:'/accreditation/provider'}" class="btn_become_supplier">
                                    Стать поставщиком
                                </router-link>
                                <router-link :to="{path:'/accreditation/success'}" class="btn_step_complete">
                                    Завершить
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>


import UserLKHeader from "../../../../Сomponents/LK/UserLKHeader";
import {mapState} from "vuex";
import Leftsidebar from "../Settings/Leftsidebar";
export default {
    props: ['id'],
    components: {Leftsidebar, UserLKHeader},
    data(){
        return {
            loadingDoc:false,
            step:1
        }
    },
    methods:{
        changeStep(){
            this.step ++;
        }
    },
    computed: {
    },
}
</script>
