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
                                            <div class="number_step">{{step}}/{{col}}</div>
                                        </div>
                                        <div class="container_profile_accreditation_block">
                                            <div class="row">
                                               <div class="item_step_block col" :class="{active_half_step : step == 1, completed_item_step: step <= col && step > 1 }">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block col" :class="{active_half_step : step == 2, completed_item_step: step <= col && step > 2}">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block col" :class="{active_half_step : step == 3, completed_item_step: step <= col && step > 3}">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                                <div class="item_step_block col" :class="{active_half_step : step == 4, completed_item_step: step <= col && step > 4}">
                                                    <div class="half_step"></div>
                                                    <div class="half_step"></div>
                                                </div>
                                                <div class="item_step_block col" :class="{active_half_step : step == 5}">
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
                                    <div class="row">
                                        <div class="col-xs-12 col-md-12">
                                            <div class="container_value_range">
                                                <div>0%</div>
                                                <div>100%</div>
                                        </div>
                                        <div>
                                            <vue-range-slider class="custom_range" ref="slider" tooltip="false" v-model="value"></vue-range-slider>
                                        </div>
                                        <div class="value_question_range">
                                            Вы готовы поделиться <span>{{value}} %</span>
                                        </div>
                                            </div>
                                        </div>
                            
                                </div>
                                 <div class="accreditation_question_item" v-if="step == 4">
                                    <div class="title_question_item mr_0">4. Выберите категорию</div>
                                    <div class="description_question_item">Для успешного прохождения аккредитации, необходимо выбрать категорию и параметр</div>
                                    <div class="row">
                                        <div class="col-xs-12 col-md-6">
                                          <div class="select_container select_question_checkbox">
                                            <div class="placeholder_select">Категория</div>
                                            <multiselect 
                                                    placeholder="Категория"
                                                    selectLabel="Выберите категория"
                                                    selectedLabel="Выбрано"
                                                    deselectLabel="Нажмите еще раз чтобы удалить"
                                                    v-model="valuesel" 
                                                    :options="options"
                                                    :multiple="true"
                                                    :searchable="false"
                                                    :allow-empty="false"
                                                    track-by="value"
                                                    :custom-label="customLabel"
                                                    :close-on-select="false"
                                                    @select=onSelect($event)
                                                    @remove=onRemove($event)
                                                    >
                                                    <div class="select_question_checkbox_item" slot="option" slot-scope="scope" @click.self="select(scope.option)">
                                                        <div class="checkbox accreditation_company_checkbox">
                                                            <input type="checkbox" :id="scope.option.id" name="country" class="custom-checkbox" v-model="scope.option.checked" @focus.prevent>
                                                            <label :for="scope.option.id">{{ scope.option.value }}</label>
                                                        </div>
                                                    </div>
                                                </multiselect>
                                            </div>
                                        </div>
                                         <div class="col-xs-12 col-md-6">
                                            <div class="select_container select_question_checkbox">
                                                <div class="placeholder_select">Параметр</div>
                                                 <multiselect 
                                                    placeholder="Параметр"
                                                    selectLabel="Выберите параметр"
                                                    selectedLabel="Выбрано"
                                                    deselectLabel="Нажмите еще раз чтобы удалить"
                                                    v-model="valuesel" 
                                                    :options="options1"
                                                    :multiple="true"
                                                    :searchable="false"
                                                    :allow-empty="false"
                                                    track-by="value"
                                                    :custom-label="customLabel"
                                                    :close-on-select="false"
                                                    @select=onSelect($event)
                                                    @remove=onRemove($event)
                                                    >
                                                     <div class="select_question_checkbox_item" slot="option" slot-scope="scope" @click.self="select(scope.option)">
                                                        <div class="checkbox accreditation_company_checkbox">
                                                            <input type="checkbox" :id="scope.option.id" name="country" class="custom-checkbox" v-model="scope.option.checked" @focus.prevent>
                                                            <label :for="scope.option.id">{{ scope.option.value }}</label>
                                                        </div>
                                                    </div>
                                                </multiselect>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn_transparent">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 3V21" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M3 12L21 12" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </span>
                                        Добавить категорию
                                    </button>
                            
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
import 'vue-range-component/dist/vue-range-slider.css';
import VueRangeSlider from 'vue-range-component';
import Multiselect from 'vue-multiselect';
export default {
    props: ['id'],
    components: {Leftsidebar, UserLKHeader,VueRangeSlider,Multiselect},
    data(){
        return {
            loadingDoc:false,
            step:1,
            value: 50,
            col:5,
            valuesel: [],
            options: [
            { id:1, value: 'Категория А', checked: false },
            { id:2, value: 'Категория В', checked: false },
            { id:3, value: 'Категория С', checked: false }
            ],
            valuesel1: [],
            options1: [
            { id:4, value: 'Значение1', checked: false },
            { id:5, value: 'Значение2', checked: false },
            { id:6, value: 'Значение3', checked: false }
            ]
        }
    },
    methods:{
        changeStep(){
            this.step ++;
        },
        customLabel (option) {
      return `${option.value}`
    },
    onSelect (option) {
      let index = this.options.findIndex(item => item.value==option.value);
      this.options[index].checked = true;
    },
    
    onRemove (option) {
      let index = this.options.findIndex(item => item.value==option.value);
      this.options[index].checked = false;
    }
    },
    computed: {
    },
}
</script>
