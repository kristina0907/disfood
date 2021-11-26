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
                <div class="title_description_settings">
                Заполните данные профиля организации чтобы проводить сделки
                </div>
                <div class="step_profile_accreditation_block">
                <div class="row">
                    <div class="col-xs-12 col-md-6 active_step">
                    <div class="head_step_profile_accreditation_block">
                        <div class="title_step">Покупатель</div>
                        <div class="number_step">
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M4.5 12.3135L10.1569 17.9703L21.4706 6.65662"
                            stroke="#71BF45"
                            stroke-width="2"
                            stroke-linecap="round"
                            />
                        </svg>
                        </div>
                    </div>
                    <div class="container_profile_accreditation_block">
                        <div class="row">
                        <div class="item_step_block completed_item_step col-md-12">
                            <div class="half_step"></div>
                            <div class="half_step"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xs-12 col-md-6 active_step">
                    <div class="head_step_profile_accreditation_block">
                        <div class="title_step">Поставщик</div>
                        <div class="number_step">{{step}}/3</div>
                    </div>
                    <div class="container_profile_accreditation_block">
                       <div class="row">
                            <div class="item_step_block col-md-4" :class="{active_half_step : step == 1, completed_item_step: step == 2 || 3}">
                                <div class="half_step"></div>
                                <div class="half_step"></div>
                            </div>
                            <div class="item_step_block col-md-4" :class="{active_half_step : step == 2, completed_item_step: step == 3}">
                                <div class="half_step"></div>
                                <div class="half_step"></div>
                            </div>
                            <div class="item_step_block col-md-4" :class="{active_half_step : step == 3}">
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
                    <div class="step_name_profile_information">1. Опросник</div>
                    <div class="step_description_profile_information">
                        Для успешного прохождения аккредитации, необходимо ответить на
                        следущие вопросы
                    </div>
                    <div class="step_profile_accreditation_question">
                        <div class="row">
                        <div class="col-xs-12 col-md-12 active_step">
                            <div class="head_step_profile_accreditation_block">
                            <div class="title_step">Отвечено</div>
                            <div class="number_step">{{ stepQuestion }}/4</div>
                            </div>
                            <div class="container_profile_accreditation_block">
                            <div class="row">
                                <div
                                class="item_step_block col"
                                :class="{
                                    active_half_step: stepQuestion == 1,
                                    completed_item_step: stepQuestion <= col && stepQuestion > 1,
                                }"
                                >
                                <div class="half_step"></div>
                                <div class="half_step"></div>
                                </div>
                                <div
                                class="item_step_block col"
                                :class="{
                                    active_half_step: stepQuestion == 2,
                                    completed_item_step: stepQuestion <= col && stepQuestion > 2,
                                }"
                                >
                                <div class="half_step"></div>
                                <div class="half_step"></div>
                                </div>
                                <div
                                class="item_step_block col"
                                :class="{
                                    active_half_step: stepQuestion == 3,
                                    completed_item_step: stepQuestion <= col && stepQuestion > 3,
                                }"
                                >
                                <div class="half_step"></div>
                                <div class="half_step"></div>
                                </div>
                                <div
                                class="item_step_block col"
                                :class="{
                                    active_half_step: stepQuestion == 4,
                                    completed_item_step: stepQuestion <= col && stepQuestion > 4,
                                }"
                                >
                                <div class="half_step"></div>
                                <div class="half_step"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accreditation_question_list">
                        <div v-for="(question, index) in questions">
                        <div class="accreditation_question_item" v-if="question.id == stepQuestion">
                            <div class="title_question_item">
                            {{ question.id }}. {{ question.question_title }}
                            </div>
                            <div class="row" v-if="question.type == 'select'">
                            <div class="col-xs-12 col-md-6">
                                <div class="select_container select_question_checkbox">
                                <multiselect
                                    placeholder="Выбрать"
                                    selectLabel=""
                                    selectedLabel="Выбрано"
                                    deselectLabel="Нажмите еще раз чтобы удалить"
                                    v-model="userResponses[index]"
                                    :options="question.values"
                                    :multiple="false"
                                    :searchable="false"
                                    :allow-empty="false"
                                    label="value_name"
                                    track-by="value_name"
                                    :close-on-select="false"
                                >
                                </multiselect>
                                </div>
                            </div>
                            </div>
                            <div class="row" v-if="question.type == 'slider'">
                            <div class="col-xs-12 col-md-12">
                                <div class="container_value_range">
                                <div>0%</div>
                                <div>100%</div>
                                </div>
                                <div>
                                <vue-range-slider
                                    class="custom_range"
                                    ref="slider"
                                    name = "slider"
                                    @input="setSlider(index,question.id,$event)"
                                ></vue-range-slider>
                                </div>
                                <div class="value_question_range">
                                {{ question.question_title }} <span>{{ sliderVal}} %</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="accreditation_question_item" v-if="stepQuestion == 4">
                        <div class="title_question_item mr_0">
                            4. Выберите категорию
                        </div>
                        <div class="description_question_item">
                            Для успешного прохождения аккредитации, необходимо выбрать
                            категорию и параметр
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                            <div class="select_container select_question_checkbox pd_select">
                                <div class="placeholder_select">Категория</div>
                                <multiselect
                                    placeholder="Категория"
                                    selectLabel="Выберите категория"
                                    selectedLabel="Выбрано"
                                    deselectLabel="Нажмите еще раз чтобы удалить"
                                    :value="categoryValue"
                                    :options="categories"
                                    label="name"
                                    track-by="name"
                                    :multiple="false"
                                    :searchable="false"
                                    :allow-empty="false"
                                    :close-on-select="false"
                                    @input = filterTypes
                                >
                                </multiselect>
                            </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                            <div class="select_container select_question_checkbox pd_select">
                                <div class="placeholder_select">Параметр</div>
                                <multiselect
                                placeholder="Параметр"
                                selectLabel="Выберите параметр"
                                selectedLabel="Выбрано"
                                deselectLabel="Нажмите еще раз чтобы удалить"
                                :value="typeValue"
                                :options="filteredTypes"
                                label="name"
                                track-by="name"
                                :multiple="false"
                                :searchable="false"
                                :allow-empty="false"
                                :close-on-select="false"
                                @input = filterProducts
                                >
                                </multiselect>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="error_answer" v-if="error">Выберите ответ</div>
                    </div>
                </div>
                 <div v-if="step == 2">
                    <div class="step_profile_information_block">
                        <div class="step_name_profile_information">2. Документация</div>
                        <div class="step_description_profile_document">
                            Для успешного прохождения аккредитации, необходимо приложить следущие документы
                        </div>
                        <div class="download_contract">
                            <div class="download_contract_block">
                                <div class="container_download_contract_block">
                                    <div class="form-group" v-for="(document,key) in documents">
                                        <input 
                                            type="file" 
                                            :name="document.code" 
                                            :id="document.code" 
                                            multiple
                                            @change="onFileChange($event.target.files,key)"
                                            class="input-file"
                                        >
                                        <label :for="document.code" class="btn btn-tertiary js-labelFile">
                                            <div class="container_info_download_contract">
                                                <div class="name_download_contract">{{document.id}}. {{document.name}}</div>
                                                <div class="info_download_contract" v-if="!document.document">Нажмите на ссылку “Загрузить”
                                                    или перетащите файл в эту область </div>
                                                <div class="btn_download_contract" v-if="!document.document">Загрузить</div>
                                                <div class="btn_download_contract" v-if="document.document">{{document.document[0].name}}</div>
                                            </div>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.42105 2.5C11.0779 2.5 12.4211 3.84315 12.4211 5.5L12.4211 8C12.4211 9.38071 13.5403 10.5 14.9211 10.5H17C18.6569 10.5 20 11.8431 20 13.5V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                    stroke="#22262A" stroke-width="2"></path>
                                                <path
                                                    d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.23393 2.5C11.5937 2.5 13.8332 3.54186 15.3532 5.34691L18.1193 8.63163C19.3339 10.074 20 11.899 20 13.7847V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                    stroke="#22262A" stroke-width="2"></path>
                                            </svg>

                                        </label>
                                    </div>
                                </div>
                            </div>
<!--                            <div class="add_more_download_contract">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 3V21" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    <path d="M3.5 12L21.5 12" stroke="#71BF45" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Добавить еще</span>
                            </div>-->
                        </div>
                        <div class="error_answer" v-if="error">Загрузите все документы</div>
                    </div>
                </div>
                <div v-if="step == 3">
                    <div class="step_profile_information_block">
                        <div class="step_name_profile_information">3. Договор</div>
                        <div class="step_description_profile_information">
                            Скачайте договор, подпишите и загрузите обратно
                        </div>
                         <a href="https://disfood.atlassian.net/jira/software/projects/DIS/boards/1?selectedIssue=DIS-139" target="_blank">
                            <div class="save_contract">
                                <span>Скачать договор</span>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.5 4.5C4.5 3.39543 5.39543 2.5 6.5 2.5L9.92105 2.5C11.5779 2.5 12.9211 3.84315 12.9211 5.5L12.9211 8C12.9211 9.38071 14.0403 10.5 15.4211 10.5H17.5C19.1569 10.5 20.5 11.8431 20.5 13.5V20.5C20.5 21.6046 19.6046 22.5 18.5 22.5L6.5 22.5C5.39543 22.5 4.5 21.6046 4.5 20.5L4.5 4.5Z"
                                        stroke="#22262A" stroke-width="2" />
                                    <path
                                        d="M4.5 4.5C4.5 3.39543 5.39543 2.5 6.5 2.5L9.73393 2.5C12.0937 2.5 14.3332 3.54186 15.8532 5.34691L18.6193 8.63163C19.8339 10.074 20.5 11.899 20.5 13.7847V20.5C20.5 21.6046 19.6046 22.5 18.5 22.5L6.5 22.5C5.39543 22.5 4.5 21.6046 4.5 20.5L4.5 4.5Z"
                                        stroke="#22262A" stroke-width="2" />
                                </svg>
                            </div>
                         </a>    
                        <div class="download_contract">
                            <div class="title_download_contract">Загрузите подписаный договор</div>
                            <div class="download_contract_block">
                                <div class="container_download_contract_block">
                                    <div class="form-group">
                                        <input 
                                            type="file" 
                                            name="contract" 
                                            id="contract" 
                                            multiple
                                            @change="onFileContract($event.target.files)"
                                            class="input-file"
                                        >
                                        <label for="contract" class="btn btn-tertiary js-labelFile">
                                            <div class="container_info_download_contract">
                                                <div class="name_download_contract"> Договор</div>
                                                <div class="info_download_contract" v-if="!contract.length">Нажмите на ссылку “Загрузить”
                                                    или перетащите файл в эту область </div>
                                                <div class="btn_download_contract" v-if="!contract.length">Загрузить</div>
                                                <div class="btn_download_contract" v-if="contract.length">{{contract[0].name}}</div>
                                            </div>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.42105 2.5C11.0779 2.5 12.4211 3.84315 12.4211 5.5L12.4211 8C12.4211 9.38071 13.5403 10.5 14.9211 10.5H17C18.6569 10.5 20 11.8431 20 13.5V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                    stroke="#22262A" stroke-width="2"></path>
                                                <path
                                                    d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.23393 2.5C11.5937 2.5 13.8332 3.54186 15.3532 5.34691L18.1193 8.63163C19.3339 10.074 20 11.899 20 13.7847V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                    stroke="#22262A" stroke-width="2"></path>
                                            </svg>

                                        </label>
                                    </div>
                                     <div class="error_answer" v-if="error">Загрузите документ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div v-if="stepQuestion > 1 && step == 1" class="btn_next_question" @click="prevStep">
                    Предыдущий вопрос
                </div>
                <div v-if="step == 1 && stepQuestion <= 3" class="btn_next_question" @click="nextStep">
                    Следующий вопрос
                </div>
                 <button v-if="step == 1 && stepQuestion > 3" class="btn_next_step" @click="changeStep">
                    Далее
                </button>
               <button v-if="step == 2" class="btn_next_step" @click="documentStep">
                    Далее • подписание договора
                </button>
                <button v-if="step == 3" class="btn_step_complete" @click="sendData">
                    Завершить
                </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserLKHeader from "../../../../Сomponents/LK/UserLKHeader";
import Leftsidebar from "../Settings/Leftsidebar";
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";
import Multiselect from "vue-multiselect";
import {mapActions, mapState} from "vuex";
export default {
  props: ["id"],
  components: { Leftsidebar, UserLKHeader, VueRangeSlider, Multiselect },
  data() {
    return {
      loadingDoc: false,
      step: 1,
      stepQuestion: 1,
      col: 4,
      selectValue: '',
      btnSubmit: false,
      userResponses:'',
      error:false,
      sliderVal:0
    };
  },
  methods: {
      ...mapActions('accreditationprovider',[
            'getQuestion',
            'getCatalogData',
            'getCatalogTypes',
            'getPackings',
            'filterTypes',
            'filterProducts',
            'setProductValue',
            'filterSelect',
            'setAnswer',
            'sendDataAnswrer',
            'addFileToDocuments',
            'addFileContract'
        ]),
    nextStep() {
        if(!this.userResponses[this.stepQuestion - 1]){
            this.error = true;
        }else{
            this.error = false;
            if(this.stepQuestion == 3){
                this.setAnswer(this.userResponses);
                this.stepQuestion++;
            }else if(this.stepQuestion == 3){
                this.step++;
                this.btnSubmit = true;
            }else{
                this.stepQuestion++;
            }
        }
    },
    prevStep() {
         if(this.stepQuestion !== 1){
            this.step--;
         }
    },
     changeStep(){
         if(this.categoryValue && this.typeValue){
            this.error = false;
            this.step ++;
        }else{
            this.error = true;
        }
    },
    documentStep(){
        var req = false;
        for(var i = 0; i < this.documents.length; i ++){
            if(this.documents[i].document.length == 0){
                this.error = true;
                req = false;
                break;
            }
            else{
                this.error = false;
                req = true;
            }
        }
        if(req){
            this.step ++;
        }
    },
    setSlider(index,id,value){
        let mas = {};
        this.sliderVal = value;
        mas.question_id = id;
        mas.id = value;
        this.userResponses[index] = mas;
    },
    onFileChange(file,key)
    {
        this.documents[key].document = file;
        this.addFileToDocuments(this.documents);
    },
    onFileContract(file){
        this.addFileContract(file);
    },
    sendData(){
        if(this.contract.length){
            this.error = false;
            this.sendDataAnswrer(this.userResponses);
        }else{
            this.error = true;
        }
        
    }
  },
  mounted() {
    this.getQuestion();
    this.getCatalogData();
    this.getCatalogTypes();
    this.userResponses = Array(this.questions.length).fill(false);
  },
   computed: {
        ...mapState('accreditationprovider',[
            'questions',
            'categories',
            'types',
            'products',
            'categoryValue',
            'filteredTypes',
            'typeValue',
            'filteredProducts',
            'productValue',
            'answer',
            'documents',
            'contract'
        ]),
    },
};
</script>
