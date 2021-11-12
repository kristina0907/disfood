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
                                        <div class="number_step"><svg width="25" height="24" viewBox="0 0 25 24"
                                                                      fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 12.3135L10.1569 17.9703L21.4706 6.65662" stroke="#71BF45"
                                                  stroke-width="2" stroke-linecap="round" />
                                        </svg></div>
                                    </div>
                                    <div class="container_profile_accreditation_block">
                                        <div class="row">
                                            <div class="item_step_block completed_item_step col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block completed_item_step col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block completed_item_step col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6 active_step">
                                    <div class="head_step_profile_accreditation_block">
                                        <div class="title_step">Поставщик</div>
                                        <div class="number_step">1/3</div>
                                    </div>
                                    <div class="container_profile_accreditation_block">
                                        <div class="row">
                                            <div class="item_step_block active_half_step col-md-4">
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
                        <div class="step_profile_information_block">
                            <div class="step_name_profile_information">1. Опросник</div>
                            <div class="step_description_profile_information">
                                Для успешного прохождения аккредитации, необходимо ответить на следущие вопросы
                            </div>
                            <div class="step_profile_accreditation_question">
                                <div class="row">
                                    <div class="col-xs-12 col-md-12 active_step">
                                        <div class="head_step_profile_accreditation_block">
                                            <div class="title_step">Отвечено</div>
                                            <div class="number_step">{{step}}/5</div>
                                        </div>
                                        <div class="container_profile_accreditation_block">
                                            <div class="row">
                                                <div class="item_step_block active_half_step col">
                                                    <div class="half_step"></div>
                                                    <div class="half_step"></div>
                                                </div>
                                                <div class="item_step_block col">
                                                    <div class="half_step"></div>
                                                    <div class="half_step"></div>
                                                </div>
                                                <div class="item_step_block col">
                                                    <div class="half_step"></div>
                                                    <div class="half_step"></div>
                                                </div>
                                                <div class="item_step_block col">
                                                    <div class="half_step"></div>
                                                    <div class="half_step"></div>
                                                </div>
                                                <div class="item_step_block col">
                                                    <div class="half_step"></div>
                                                    <div class="half_step"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accreditation_question_list">
                                <div class="accreditation_question_item" v-if="step == 1">
                                    <div class="title_question_item">1. В Интернете почти по любому запросу можно найти тысячи или даже миллионы страниц с полезной информацией. Чтобы вы видели действительно самые полезные результаты.</div>
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <div class="checkbox question_company_checkbox">
                                                <input type="checkbox" id="country-1" name="country" value="indigo" class="custom-checkbox">
                                                <label for="country-1">Значение</label>
                                            </div>
                                            <div class="checkbox question_company_checkbox">
                                                <input type="checkbox" id="country-2" name="country" value="indigo" class="custom-checkbox">
                                                <label for="country-1">Значение</label>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <div class="checkbox question_company_checkbox">
                                                <input type="checkbox" id="country-3" name="country" value="indigo" class="custom-checkbox" checked>
                                                <label for="country-1">Значение</label>
                                            </div>
                                            <div class="checkbox question_company_checkbox">
                                                <input type="checkbox" id="country-4" name="country" value="indigo" class="custom-checkbox" checked>
                                                <label for="country-1">Значение</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accreditation_question_item" v-if="step == 2">
                                    <div class="title_question_item">2. Вопрос номер два. В Интернете почти по любому запросу можно найти тысячи или даже миллионы страниц с полезной информацией.</div>
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                            <div class="radio">
                                                <input id="filter-1" type="checkbox" name="scales" class="custom-radio" value="28" style="height: auto;">
                                                <label for="filter-1">Значение</label>
                                            </div>
                                            <div class="radio">
                                                <input id="filter-2" type="checkbox" name="scales" class="custom-radio" value="28" style="height: auto;">
                                                <label for="filter-2">Значение</label>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6">
                                            <div class="radio">
                                                <input id="filter-3" type="checkbox" name="scales" class="custom-radio" value="28" style="height: auto;">
                                                <label for="filter-3">Значение</label>
                                            </div>
                                            <div class="radio">
                                                <input id="filter-4" type="checkbox" name="scales" class="custom-radio" value="28" style="height: auto;">
                                                <label for="filter-4">Значение</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accreditation_question_item" v-if="step == 3">
                                    <div class="title_question_item">3. Вопрос номер шесть. Сколько процентов.</div>
                                </div>
                            </div>
                        </div>
                        <button class="btn_next_question" @click="changeStep">Следующий вопрос</button>
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
