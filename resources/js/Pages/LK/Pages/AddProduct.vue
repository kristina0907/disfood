<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>
        <div class="row">
            <div class="container-fluid">
                <form @submit="sendData"
                      method="post"
                      novalidate="true">
                    <div class="row">
                        <div class="xs-12 col-md-4 left_container">
                            <div class="left_container_info">
                                <router-link :to="{name:'my-products'}">
                                    <div class="prev_page">Назад</div>
                                </router-link>

                                <div class="title_create_product">Добавить товар</div>

                                    <div class="info_create_product">
                                        <div class="title_info_create_product">Цена</div>
                                        <div class="text_info_create_product">Действительна до 13:00 МСК</div>
                                        <div class="container_price_item row">
                                            <div class="container_input_price col-md-6">
                                                <div class="text_input">Цена</div>
                                                <input type="text"  v-model="price" @input="setPriceValue($event.target.value)">
                                                <div class="icon_price_input">
                                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 1L6 12L1 7" stroke="#71BF45" stroke-width="2"
                                                              stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <div class="error_input" v-if="errors.price">{{errors.price}}</div>
                                            </div>
                                            <div class="container_input_price col-md-6">
                                                <div class="text_input">Цена с НДС</div>
                                                <input type="text" v-model="priceWithNds" name="price_with_nds" @input="setPriceWithNdsValue($event.target.value)" required>
                                                <div class="icon_price_input">
                                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 1L6 12L1 7" stroke="#71BF45" stroke-width="2"
                                                              stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <div class="error_input" v-if="errors.priceWithNds">{{errors.priceWithNds}}</div>
                                            </div>
                                        </div>
                                        <div class="info_block_product">
                                            <div class="icon_info">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="11" stroke="#71BF45" stroke-width="2" />
                                                    <path d="M12 7V12" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                                          stroke-linejoin="round" />
                                                    <path d="M12 16V16.5" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                                          stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div>Товар будет отправлен на модерацию, после успешного прохождения модерации, товар
                                                можно разместить в каталоге</div>
                                        </div>
                                    </div>
                                    <button class="btn_submit_price" type="button" @click="sendData">Отправить товар на модерацию</button>
                            </div>
                        </div>
                        <div class="xs-12 col-md-8">
                            <div class="right_container">
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">Информация о товаре</div>
                                        <div class="item_product_input row">
                                            <div class="col-xs-12 col-md-6">
                                                <div class="select_container">
                                                <multiselect :value="categoryValue"
                                                             :options="categories"
                                                             :multiple="false"
                                                             v-model="categoryId"
                                                             label="name"
                                                             track-by="name"
                                                             placeholder="Категория"
                                                             selectLabel="Выберите категорию"
                                                             selectedLabel="Выбрано"
                                                             deselectLabel="Нажмите еще раз чтобы удалить"
                                                             :class="'select select_category'"
                                                             :aria-required="true"
                                                             @input = filterTypes
                                                ></multiselect>
                                                <div class="error_input" v-if="errors.categoryId">{{errors.categoryId}}</div>
                                            </div>
                                            </div>
                                            <div class="col-xs-12 col-md-6" v-if="filteredTypes && categoryId">
                                                <div class="select_container">
                                                    <multiselect :value="typeValue"
                                                                 :options="filteredTypes"
                                                                 :multiple="false"
                                                                 v-model="typeId"
                                                                 label="name"
                                                                 track-by="name"
                                                                 placeholder="Тип"
                                                                 selectLabel="Выберите тип товара"
                                                                 selectedLabel="Выбрано"
                                                                 deselectLabel="Нажмите еще раз чтобы удалить"
                                                                 :class="'select select_type'"
                                                                 :aria-required="true"
                                                                 @input = filterProducts
                                                    ></multiselect>
                                                    <div class="error_input" v-if="errors.typeId">{{errors.typeId}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item_container_product_block">
                                         <div class="item_product_input row" v-if="typeValue && filters.length && typeId">
                                                <div class="col-xs-12 col-md-4" v-for="(filter) in typeValue.filters">
                                                    <div class="select_container">
                                                        <multiselect
                                                                :options="filter.values"
                                                                :multiple="false"
                                                                label="value"
                                                                track-by="value"
                                                                placeholder="Выбрать"
                                                                selectLabel="Выбрать"
                                                                selectedLabel="Выбрано"
                                                                deselectLabel="Нажмите еще раз чтобы удалить"
                                                                :class="'select select_type'"
                                                                :aria-required="true"
                                                        ></multiselect>
                                                </div>                                
                                                </div>
                                            </div>
                                    </div>
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">Объем в наличии и тип фасовки</div>
                                        <div class="item_product_input row">
                                            <div class="container_input_price col-md-6">
                                                <div class="text_input">Объем (кг)</div>
                                                <input type="number" name="capacity" id="capacity" v-model="capacityVal" @input="setCapacity($event.target.value)"/>
                                                <div class="error_input" v-if="errors.capacityVal">{{errors.capacityVal}}</div>
                                            </div>
                                            <div class="select_container col-md-6">
                                                <div class="select_text">Фасовка</div>
                                                <multiselect :value ="selectedPackings"
                                                             :options="packings"
                                                             v-model="packingsVal"
                                                             :multiple="true"
                                                             label="name"
                                                             track-by="name"
                                                             placeholder="Фасовка"
                                                             selectLabel="Выберите фасовку"
                                                             selectedLabel="Выбрано"
                                                             deselectLabel="Нажмите еще раз чтобы удалить"
                                                             @input="setPackingsValue"
                                                             :required="true"
                                                ></multiselect>
                                                <div class="error_input" v-if="errors.packingsVal">{{errors.packingsVal}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">Адрес производства</div>
                                        <div class="delivery_options_item row">
                                            <div class="col-md-6">
                                               <search-countries/>
                                            </div>
                                            <div class="select_container col-md-6">
                                                <search-location/>
                                            </div>
                                        </div>
                                        <div class="item_product_input row">
                                            <div class="container_input_price col-md-12 m-b-30" v-for="(adr, index) in adress" :key="index">
                                                <div class="text_input">Адрес</div>
                                                <input list="city" type="text" value="" v-model="adr.adress" @input="searchLocation(adr.adress)" required>
                                                <datalist id="city">
                                                    <option :value="tip.value" v-for="tip in locationTips">{{tip.value}}</option>
                                                </datalist>
                                                <div class="icon_price_input">
                                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 1L6 12L1 7" stroke="#71BF45" stroke-width="2"
                                                              stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <div class="error_input" v-if="errors.adress">{{errors.adress}}</div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">Адрес склада</div>
                                        <div class="delivery_options_item row">
                                            <div class="col-md-6">
                                               <search-countries/>
                                            </div>
                                            <div class="select_container col-md-6">
                                                <search-location/>
                                            </div>
                                        </div>
                                        <div class="item_product_input row">
                                            <div class="container_input_price col-md-12 m-b-30" v-for="(adr, index) in adress" :key="index">
                                                <div class="text_input">Адрес</div>
                                                <input list="city" type="text" value="" v-model="adr.adress" @input="searchLocation(adr.adress)" required>
                                                <datalist id="city">
                                                    <option :value="tip.value" v-for="tip in locationTips">{{tip.value}}</option>
                                                </datalist>
                                                <div class="icon_price_input">
                                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 1L6 12L1 7" stroke="#71BF45" stroke-width="2"
                                                              stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <div class="error_input" v-if="errors.adress">{{errors.adress}}</div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">Варианты доставки</div>
                                        <div class="delivery_options_item row">
                                            <div class="col-md-6">
                                                <div class="checkbox accreditation_company_checkbox">
                                                    <input type="checkbox" id="country-1" name="country" value="indigo" class="custom-checkbox" checked>
                                                    <label for="country-1">ЖД</label>
                                                </div>
                                            </div>
                                             <div class="container_input col-md-6">
                                                <input type="number" name="capacity" placeholder="Введите код станции"/>
                                                <div class="error_input" v-if="errors.capacityVal">{{errors.capacityVal}}</div>
                                            </div>
                                        </div>
                                        <div class="delivery_options_item row">
                                            <div class="col-md-6">
                                                <div class="checkbox accreditation_company_checkbox">
                                                    <input type="checkbox" id="country-1" name="country" value="indigo" class="custom-checkbox">
                                                    <label for="country-1">Авто</label>
                                                </div>
                                            </div>
                                             <div class="container_input container_input_disabled col-md-6">
                                                <input type="number" name="capacity" placeholder="Введите адрес" disabled/>
                                                <div class="error_input" v-if="errors.capacityVal">{{errors.capacityVal}}</div>
                                            </div>
                                        </div>
                                        <div class="delivery_options_item row">
                                            <div class="col-md-6">
                                                <div class="checkbox accreditation_company_checkbox">
                                                    <input type="checkbox" id="country-1" name="country" value="indigo" class="custom-checkbox">
                                                    <label for="country-1">Самовывоз</label>
                                                </div>
                                            </div>
                                             <div class="container_input container_input_disabled col-md-6">
                                                <input type="number" name="capacity" placeholder="Введите адрес" disabled/>
                                                <div class="error_input" v-if="errors.capacityVal">{{errors.capacityVal}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">
                                            <div>Документы</div>
                                            <div class="help_text">Документы в форма PDF, DOC</div>
                                        </div>

                                        <div class="item_product_document row">
                                            <div class="col col-md-4" v-if="documents.length" v-for="(image, key) in documents" :key="key">
                                                <div class="container_new_document uploaded">
                                                    <div class="form-group">
                                                        <input
                                                            type="file"
                                                            id="document"
                                                            multiple
                                                            accept="image/jpeg"
                                                            v-on:change="onFileChange"
                                                            class="input-file"
                                                        />
                                                        <label for="document" class="btn btn-tertiary js-labelFile" >
                                                            <span>{{image.name}}</span>
                                                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M14.4001 1.70001L5.6001 10.5L1.6001 6.50001" stroke="#71BF45" stroke-width="2" stroke-linecap="round"></path>
                                                            </svg>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col col-md-4">
                                                <div class="container_new_document">
                                                    <div class="form-group">
                                                        <input
                                                            type="file"
                                                            id="document"
                                                            multiple
                                                            accept="application/pdf,application/docx"
                                                            v-on:change="onFileChange"
                                                            class="input-file"
                                                        />
                                                        <label for="document" class="btn btn-tertiary js-labelFile" >
                                                            <span>Добавить</span>
                                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.42105 2.5C11.0779 2.5 12.4211 3.84315 12.4211 5.5L12.4211 8C12.4211 9.38071 13.5403 10.5 14.9211 10.5H17C18.6569 10.5 20 11.8431 20 13.5V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z" stroke="#22262A" stroke-width="2"></path>
                                                                <path d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.23393 2.5C11.5937 2.5 13.8332 3.54186 15.3532 5.34691L18.1193 8.63163C19.3339 10.074 20 11.899 20 13.7847V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z" stroke="#22262A" stroke-width="2"></path>
                                                            </svg>
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">
                                            <div>Фото товара</div>
                                            <div class="help_text">Фото в форма JPG, PNG. Не более 5 Мб</div>
                                        </div>
                                        <div class="item_product_photo row" v-if="images.length">
                                            <div class="col col-md-3" v-for="(file, key) in images" :key="key">
                                                <div class="container_new_photo uploaded image-result"   v-bind:style="{ backgroundImage: 'url(' + file.preview + ')' }">
                                                    <div class="form-group">
                                                        <input type="file" name="file[]" id="image" class="input-file" accept="image/jpeg,png">
                                                        <label for="image" class="btn btn-tertiary js-labelFile">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 6C1 4.89543 1.89543 4 3 4L21 4C22.1046 4 23 4.89543 23 6L23 18C23 19.1046 22.1046 20 21 20L3 20C1.89543 20 1 19.1046 1 18L1 6Z" stroke="#22262A" stroke-width="2" stroke-linejoin="round"></path>
                                                                <path d="M1 19L14.7351 9.68806C15.3578 9.26587 16.1648 9.22887 16.8236 9.59232L23 13" stroke="#22262A" stroke-width="2"></path>
                                                                <circle cx="6" cy="9" r="1" stroke="#22262A" stroke-width="2"></circle>
                                                            </svg>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col col-md-3">
                                                <div class="container_new_photo">
                                                    <div class="form-group">
                                                        <input type="file" name="file[]" id="image-new" class="input-file" accept="image/jpeg,image/png"  v-on:change="onPhotoChange">
                                                        <label for="image-new" class="btn btn-tertiary js-labelFile">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M1 6C1 4.89543 1.89543 4 3 4L21 4C22.1046 4 23 4.89543 23 6L23 18C23 19.1046 22.1046 20 21 20L3 20C1.89543 20 1 19.1046 1 18L1 6Z"
                                                                    stroke="#22262A" stroke-width="2" stroke-linejoin="round" />
                                                                <path
                                                                    d="M1 19L14.7351 9.68806C15.3578 9.26587 16.1648 9.22887 16.8236 9.59232L23 13"
                                                                    stroke="#22262A" stroke-width="2" />
                                                                <circle cx="6" cy="9" r="1" stroke="#22262A" stroke-width="2" />
                                                            </svg>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item_product_photo" v-else>
                                            <div class="col col-md-4">
                                                <div class="container_new_photo">
                                                    <div class="form-group">
                                                        <input type="file" name="file[]" :id="'image'" class="input-file"  accept="image/jpeg,image/png" v-on:change="onPhotoChange">
                                                        <label :for="'image'" class="btn btn-tertiary js-labelFile">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M1 6C1 4.89543 1.89543 4 3 4L21 4C22.1046 4 23 4.89543 23 6L23 18C23 19.1046 22.1046 20 21 20L3 20C1.89543 20 1 19.1046 1 18L1 6Z"
                                                                    stroke="#22262A" stroke-width="2" stroke-linejoin="round" />
                                                                <path
                                                                    d="M1 19L14.7351 9.68806C15.3578 9.26587 16.1648 9.22887 16.8236 9.59232L23 13"
                                                                    stroke="#22262A" stroke-width="2" />
                                                                <circle cx="6" cy="9" r="1" stroke="#22262A" stroke-width="2" />
                                                            </svg>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>

import Multiselect from 'vue-multiselect';
import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
import FileSelect from "../../../Сomponents/FileSelect";
import SearchCountries from "../../../Сomponents/SearchCountries";
import SearchLocation from "../../../Сomponents/SearchLocation";
import {mapActions, mapState} from "vuex";
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
    components: {UserLKHeader,Multiselect,FileSelect, SearchCountries,SearchLocation, vueDropzone: vue2Dropzone},
    data(){
        return {
            //images:[],
            locationTips:[],
            selectedFilters:[],
            errors:[],
            price:0,
            priceWithNds:0,
            categoryId:'',
            typeId:'',
            capacityVal:0,
            packingsVal:'',

        }
    },
    methods:{
        ...mapActions('addproduct',[
            'getCatalogData',
            'getCatalogTypes',
            'getPackings',
            'sendDataNewProduct',
            'filterTypes',
            'filterProducts',
            'setProductValue',
            'addFilterValue',
            'setPackingsValue',
            'setCapacity',
            'setPriceValue',
            'setPriceWithNdsValue',
            'addFileToDocuments',
            'addFileToImages'
        ]),

        /**
         *
         * @param e
         */

        onFileChange(e)
        {
            let vm = this;
            var selectedFiles = e.target.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                //console.log(selectedFiles[i]);
                vm.documents.push(selectedFiles[i]);
            }

        },

        /**
         *
         * @param e
         */

        onPhotoChange(e)
        {

            let vm = this;
            let selectedFiles = e.target.files;

            for (var i = 0; i < selectedFiles.length; i++) {

                let img = {
                    file: selectedFiles[i],
                    preview: null
                };
                let reader = new FileReader();
                reader.addEventListener('load', () => {

                    img.preview = reader.result;
                    this.images.push(img);
                });
                console.log(this.images)
                reader.readAsDataURL(selectedFiles[i]);
            }

        },

        /**
         *
         * @param filter
         * @param val
         */

        changeFilterValue(filter,val)
        {
            this.$store.dispatch('addproduct/addFilterValue',{'filter':filter,'value':val});
        },


        searchLocation(data)
        {
            axios.get('/get/location/from/text/'+ data)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        this.locationTips = response.data.suggestions
                    }
                });
        },

        /**
         *
         */
        addAdress()
        {
            this.adress.push({
                adress: '',
            })
        },

        /**
         *
         * @returns {boolean}
         */

        validations:function() {
            this.errors = [];
            if(this.price <= 0) this.errors.price = "Цена обязательна для заполнения";
            if(this.priceWithNds <= 0) this.errors.priceWithNds = "Цена с НДС обязательна для заполнения";
            if(!this.categoryId) this.errors.categoryId = "Категория обязательна для заполнения";
            if(this.categoryId && !this.typeId) this.errors.typeId = "Тип обязательн для заполнения";
            if(this.capacityVal <= 0) this.errors.capacityVal = "Объём обязателен для заполнения";
            if(!this.packingsVal) this.errors.packingsVal = "Фасовка обязательна для заполнения";
            for (var key in this.adress) {
              if(this.adress[key].adress == ''){
                  this.errors.adress = "Адрес обязателен для заполнения";
                  break;
              }
            }

            if(Object.keys(this.errors).length > 0) return false;
            else return true;

        },

        /**
         *
         * @param e
         */

        sendData(e){
            e.preventDefault();
            if(this.validations()){
                this.sendDataNewProduct();
            }
        }

    },

    /**
     *
     */
    mounted() {
        //this.getData();
        this.getCatalogData();
        this.getCatalogTypes();
        this.getPackings();
    },
    computed: {
        ...mapState('addproduct',[
            'categories',
            'types',
            'products',
            'packings',
            'categoryValue',
            'filteredTypes',
            'typeValue',
            'filteredProducts',
            'productValue',
            'filters',
            'filterValue',
            'price',
            'priceWithNds',
            'capacity',
            'selectedPackings',
            'adress',
            'documents',
            'images'
        ]),
    },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.multiselect__select
{
    height: 42px;
}
.multiselect__select:before
{
    top: 91%;
}
.multiselect__tags
{
    min-height: 62px;
    display: block;
    padding: 20px 40px 0 8px;
    border-radius: 10px;
    border: 1px solid #c8ccd1;
    background: #fff;
    font-size: 14px;
}
.multiselect__tag
{
    position: relative;
    display: inline-block;
    padding: 12px 26px 12px 10px;
    border-radius: 10px;
    margin-right: 10px;
    line-height: 1;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
}
.multiselect__tag-icon
{
    line-height: 40px;
}
.mar-0-10{
    margin: 0 10px;
    min-width:27%;
}
.image-result {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
