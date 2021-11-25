<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>
        <div class="row">
            <div class="container-fluid">
                <div class="row">
                    <div class="xs-12 col-md-4 left_container">
                        <div class="left_container_info">
                            <router-link :to="{name:'my-products'}">
                                <div class="prev_page">Назад</div>
                            </router-link>

                            <div class="title_create_product">Редактировать товар</div>
                            <form>
                                <div class="info_create_product">
                                    <div class="title_info_create_product">Цена</div>
                                    <div class="text_info_create_product">Действительна до 13:00 МСК</div>
                                    <div class="container_price_item row">
                                        <div class="container_input_price col-md-6">
                                            <div class="text_input">Цена</div>
                                            <input type="text"  :value="currentProduct.price" @input="setPriceValue($event.target.value)">
                                            <div class="icon_price_input">
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 1L6 12L1 7" stroke="#71BF45" stroke-width="2"
                                                          stroke-linecap="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="container_input_price col-md-6">
                                            <div class="text_input">Цена с НДС</div>
                                            <input type="text" :value="currentProduct.price_with_nds" name="price_with_nds" @input="setPriceWithNdsValue($event.target.value)" required>
                                            <div class="icon_price_input">
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 1L6 12L1 7" stroke="#71BF45" stroke-width="2"
                                                          stroke-linecap="round" />
                                                </svg>
                                            </div>
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
                            </form>
                        </div>
                    </div>
                    <div class="xs-12 col-md-8">
                        <div class="right_container">
                            <form>
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">Информация о товаре</div>
                                        <div class="item_product_input row">
                                            <div class="col-xs-12 col-md-6">
                                                <div class="select_container">
                                                <multiselect :value="currentProduct.category"
                                                         :options="categories"
                                                         :multiple="false"
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
                                            </div>
                                            </div>
                                            <div class="col-xs-12 col-md-6">
                                                <div class="select_container">
                                                    <multiselect :value="currentProduct.type"
                                                             :options="filteredTypes"
                                                             :multiple="false"
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item_container_product_block">
                                         <div class="item_product_input row" v-if="currentProduct.filters.length">
                                                <div class="col-xs-12 col-md-4" v-for="(filter,index) in currentProduct.filters">
                                                    <div class="select_container">
                                                        <multiselect
                                                                :options="filter.values"
                                                                    :multiple="false"
                                                                    :value="filterVal[index]"
                                                                    label="value"
                                                                    track-by="value"
                                                                    :placeholder="filter.name"
                                                                    selectLabel="Выбрать"
                                                                    selectedLabel="Выбрано"
                                                                    deselectLabel="Нажмите еще раз чтобы удалить"
                                                                    :class="'select select_type select_filter'"
                                                                    :aria-required="true"
                                                                    @select = changeFilterValue($event,index)
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
                                            <input type="number" name="capacity" id="capacity" :value="currentProduct.capacity" @input="setCapacity($event.target.value)"/>
                                        </div>
                                        <div class="select_container col-md-6">
                                            <div class="select_text">Фасовка</div>
                                            <multiselect :value ="currentProduct.packings"
                                                         :options="packings"
                                                         :multiple="true"
                                                         label="name"
                                                         track-by="name"
                                                         placeholder="Фасовка"
                                                         selectLabel="Выберите фасовку"
                                                         selectedLabel="Выбрано"
                                                         deselectLabel="Нажмите еще раз чтобы удалить"
                                                         @input="setPackingsValue"
                                                         :required="true"
                                                         class="select_packings"
                                            ></multiselect>
                                        </div>
                                    </div>
                                </div>
                                <div class="item_container_product_block">
                                        <div class="title_container_product_block">Адрес производства</div>
                                        <div class="adress_options_item row">
                                            <div class="col-md-6 container_input_price">
                                               <div class="text_input">Страна</div>
                                                <input type="text" name="countryOrigin" v-model="countryOrigin" @input="setCountryOrigin($event.target.value)" />
                                            </div>
                                            <div class="col-md-6 container_input_price">
                                               <div class="text_input">Город</div>
                                                <input type="text" name="countryOrigin" v-model="cityOrigin" @input="setCityOrigin($event.target.value)" />
                                            </div>
                                        </div>
                                        <div class="item_product_input row">
                                            <div class="container_input_price col-md-12" v-for="(adr, index) in adress" :key="index">
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
                                            </div>

                                        </div>
                                    </div>
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">Адрес склада</div>
                                        <div class="adress_options_item row">
                                            <div class="col-md-6 container_input_price" :class="{container_input_disabled: coincidence}">
                                               <div class="text_input">Страна</div>
                                                <input type="text" name="countryWarehouse" v-model="countryWarehouse" @input="setCountryWarehouse($event.target.value)" :disabled="coincidence"/>
                                            </div>
                                            <div class="col-md-6 container_input_price">
                                               <div class="text_input">Город</div>
                                                <input type="text" name="countryOrigin" v-model="cityWarehouse" @input="setCityWarehouse($event.target.value)" />
                                            </div>
                                        </div>
                                        <div class="item_product_input row">
                                            <div class="container_input_price col-md-12" :class="{container_input_disabled: coincidence}" v-for="(adr, index) in adress" :key="index">
                                                <div class="text_input">Адрес</div>
                                                <input list="city" type="text" v-model="adr.Warehouse" @input="searchLocation(adr.Warehouse)" :disabled="coincidence">
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
                                                <div class="checkbox default_checkbox mr-t-20">
                                                    <input type="checkbox" id="coincidence" v-model="coincidence" class="custom-checkbox">
                                                    <label for="coincidence">Совпадает с адресом производства</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="item_container_product_block">
                                        <div class="title_container_product_block">Варианты доставки</div>
                                        <div class="delivery_options_item row">
                                            <div class="col-md-6">
                                                <div class="checkbox default_checkbox">
                                                    <input type="checkbox" id="train" v-model="train" class="custom-checkbox">
                                                    <label for="train">ЖД</label>
                                                </div>
                                            </div>
                                             <div class="container_input col-md-6" :class="{container_input_disabled: !train}">
                                                <input type="number" v-model="codeStation" @input="setCodestation($event.target.value)" placeholder="Введите код станции" :disabled="!train"/>
                                            </div>
                                        </div>
                                        <div class="delivery_options_item row">
                                            <div class="col-md-6">
                                                <div class="checkbox default_checkbox">
                                                    <input type="checkbox" id="avto" v-model="avto" class="custom-checkbox">
                                                    <label for="avto">Авто</label>
                                                </div>
                                            </div>
                                             <div class="container_input col-md-6" :class="{container_input_disabled: !avto}">
                                                <input type="text" v-model="avtoAdress" @input="setAvtoAdress($event.target.value)" placeholder="Введите адрес" :disabled="!avto"/>
                                            </div>
                                        </div>
                                        <div class="delivery_options_item row">
                                            <div class="col-md-6">
                                                <div class="checkbox default_checkbox">
                                                    <input type="checkbox" id="pickup" v-model="pickup" class="custom-checkbox">
                                                    <label for="pickup">Самовывоз</label>
                                                </div>
                                            </div>
                                             <div class="container_input col-md-6" :class="{container_input_disabled: !pickup}">
                                                <input type="text" v-model="pickupAdress" @input="setPickupAdress($event.target.value)" placeholder="Введите адрес" :disabled="!pickup"/>
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
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

import Multiselect from 'vue-multiselect';
import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
import FileSelect from "../../../Сomponents/FileSelect";
import {mapActions, mapState} from "vuex";
import vue2Dropzone from 'vue2-dropzone';
import SearchCountries from "../../../Сomponents/SearchCountries";
import SearchLocation from "../../../Сomponents/SearchLocation";
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
export default {
    components: {UserLKHeader,Multiselect,FileSelect,SearchCountries,SearchLocation,vueDropzone: vue2Dropzone},
    props: ['id'],
    data(){
        return {
            //images:[],
            locationTips:[],
            selectedFilters:[],
            capacityVal:0,
            packingsVal:'',
            filterVal:'',
            train:false,
            avto:false,
            pickup:false,
            coincidence:false,
        }
    },
    methods:{
        ...mapActions('editproduct',[
            'getCatalogData',
            'getCatalogTypes',
            'getPackings',
            'sendDataUpdateProduct',
            'filterTypes',
            'filterProducts',
            'setProductValue',
            'addFilterValue',
            'setPackingsValue',
            'setCapacity',
            'setPriceValue',
            'setPriceWithNdsValue',
            'addFileToDocuments',
            'addFileToImages',
            'getProductById',
            'setCodestation',
            'setAvtoAdress',
            'setPickupAdress',
            'setCountryOrigin',
            'setCountryWarehouse',
            'setCityOrigin',
            'setCityWarehouse',
        ]),
        sendData(){
            this.sendDataUpdateProduct();
        },
        /**
         *
         * @param e
         */

        onFileChange(e)
        {
            let vm = this;
            var selectedFiles = e.target.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                console.log(selectedFiles[i]);
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
         */

        changeFilterValue(filter)
        {
           this.filterVal[index] = filter;
           this.$store.dispatch('editproduct/addFilterValue',{'filter':filter.id,'value':filter.value});
        },

        /**
         *
         * @param data
         */

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



    },

    /**
     *
     */

    mounted() {
        this.getCatalogData();
        this.getCatalogTypes();
        this.getPackings();
        this.getProductById(this.id)
        this.filterVal = Array(this.filters.length).fill(false);
    },
    computed: {
        ...mapState('editproduct',[
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
            'images',
            'codeStation',
            'avtoAdress',
            'pickupAdress',
            'currentProduct',
            'countryOrigin',
            'countryWarehouse',
            'cityOrigin',
            'cityWarehouse',
        ])
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
    height: 62px;
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
    margin-bottom: 0px;
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
