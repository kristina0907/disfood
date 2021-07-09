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

                            <div class="title_create_product">Добавить товар</div>
                            <form>
                                <div class="info_create_product">
                                    <div class="title_info_create_product">Цена</div>
                                    <div class="text_info_create_product">Действительна до 13:00 МСК</div>
                                    <div class="container_price_item row">
                                        <div class="container_input_price col-md-6">
                                            <div class="text_input">Цена</div>
                                            <input type="text"  v-model="price">
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
                                            <input type="text" v-model="priceWithNDS">
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
                                <button class="btn_submit_price" type="button" @click="sendDataNewProduct">Отправить товар на модерацию</button>
                            </form>
                        </div>
                    </div>
                    <div class="xs-12 col-md-8">
                        <div class="right_container">
                            <form>
                                <div class="item_container_product_block">
                                    <div class="title_container_product_block">Информация о товаре</div>
                                    <div class="item_product_input row">
                                        <div class="select_container col-md-4">
                                            <div class="select_text">Категория</div>
                                            <select name="categories" id="categories" v-model="categoryValue" @click="filterTypes">
                                                <option :value="category.id" v-for="category in categories">{{ category.name }}</option>
                                            </select>
                                        </div>
                                        <div class="select_container col-md-4">
                                            <div class="select_text">Тип</div>
                                            <select name="types" id="types" v-model="selectedTypes">
                                                <option :value="type.id" v-for="type in types">{{type.name}}</option>
                                            </select>
                                        </div>
                                        <div class="select_container col-md-4">
                                            <div class="select_text">Вид</div>
                                            <select name="product" id="product" v-model="selectedProduct">
                                                <option :value="product.id" v-for="product in products">{{ product.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="item_container_product_block">
                                    <div class="title_container_product_block">Объем в наличии и тип фасовки</div>
                                    <div class="item_product_input row">
                                        <div class="container_input_price col-md-6">
                                            <div class="text_input">Объем (кг)</div>
                                            <input type="text" name="capacity" id="capacity" v-model="capacity"  value="0"/>
                                        </div>
                                        <div class="select_container col-md-6">
                                            <div class="select_text">Фасовка</div>
                                            <multiselect v-model="selectedPackings"
                                                         :options="packings"
                                                         :multiple="true"
                                                         label="name"
                                                         track-by="name"
                                                         placeholder="Фасовка"
                                                         selectLabel="Выберите фасовку"
                                                         selectedLabel="Выбрано"
                                                         deselectLabel="Нажмите еще раз чтобы удалить"
                                            ></multiselect>
                                        </div>
                                    </div>
                                </div>
                                <div class="item_container_product_block">
                                    <div class="title_container_product_block">Вариант доставки</div>
                                    <div class="item_product_input row">
                                        <div class="container_input_price col-md-12 m-b-30" v-for="(adr, index) in adress" :key="index">
                                            <div class="text_input">Адрес</div>
                                            <input type="text" value="" v-model="adr.adress">
                                            <div class="icon_price_input">
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 1L6 12L1 7" stroke="#71BF45" stroke-width="2"
                                                          stroke-linecap="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="new_adress" @click="addAdress">Добавить адрес</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="item_container_product_block">
                                    <div class="title_container_product_block">
                                        <div>Документы</div>
                                        <div class="help_text">Документы в форма PDF, DOC</div>
                                    </div>

                                    <div class="item_product_document row">
                                        <div class="col">
                                            <div class="container_new_document uploaded">
                                                <div class="form-group">
                                                    <label for="file" class="btn btn-tertiary js-labelFile" >
                                                    <input type="file" name="file" id="file1" class="input-file"  @change="handleFileChange"/>

                                                        <span>Добавить</span>
                                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.4001 1.70001L5.6001 10.5L1.6001 6.50001"
                                                                  stroke="#71BF45" stroke-width="2" stroke-linecap="round" />
                                                        </svg>

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">

                                        </div>

                                    </div>
                                </div>
                                <div class="item_container_product_block">
                                    <div class="title_container_product_block">
                                        <div>Фото товара</div>
                                        <div class="help_text">Фото в форма JPG, PNG. Не более 5 Мб</div>
                                    </div>
                                    <div class="item_product_photo row">
                                        <div class="col">
                                            <div class="container_new_photo uploaded"
                                                 style="background-image: url('/images/product.png');">
                                                <div class="form-group">
                                                    <input type="file" name="file" id="file" class="input-file">
                                                    <label for="file" class="btn btn-tertiary js-labelFile">
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
                                        <div class="col">
                                            <div class="container_new_photo uploaded"
                                                 style="background-image: url('/images/product.png');">
                                                <div class="form-group">
                                                    <input type="file" name="file" id="file" class="input-file">
                                                    <label for="file" class="btn btn-tertiary js-labelFile">
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
                                        <div class="col">
                                            <div class="container_new_photo">
                                                <div class="form-group">
                                                    <input type="file" name="file" id="file" class="input-file">
                                                    <label for="file" class="btn btn-tertiary js-labelFile">
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
                                        <div class="col">
                                            <div class="container_new_photo">
                                                <div class="form-group">
                                                    <input type="file" name="file" id="file" class="input-file">
                                                    <label for="file" class="btn btn-tertiary js-labelFile">
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
                                        <div class="col">
                                            <div class="container_new_photo">
                                                <div class="form-group">
                                                    <input type="file" name="file" id="file" class="input-file">
                                                    <label for="file" class="btn btn-tertiary js-labelFile">
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
//TODO Добить файл селект и написать отправку на бэк данных
import Multiselect from 'vue-multiselect';
import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
import FileSelect from "../../../Сomponents/FileSelect";
import {mapActions, mapState} from "vuex";
export default {
    components: {UserLKHeader,Multiselect,FileSelect},
    data(){
        return {
            capacity:0,
            adress:[
                {adress:''}
            ],
            documents:[],
            photos:[],
            price:0,
            selectedCategory:null,
            selectedTypes:null,
            selectedProduct:null,
            selectedPackings:[],
            priceWithNDS:null,
        }
    },
    methods:{
        ...mapActions('addproduct',['getCatalogData','getCatalogTypes','getPackings','sendDataNewProduct','filterTypes']),

        addAdress()
        {
            this.adress.push({
                adress: '',
            })
        },

        handleFileChange(event)
        {
            console.log(event.target.files);
            this.documents.push({file:event.target.files[0]});
        },

        /*
        getData()
        {
            axios.get('/get/newproduct/data').then(response => {
                if(response.status == 200)
                {
                    if(response.data !== null)
                    {
                        this.categories = response.data.categories;
                        this.types = response.data.types;
                        this.products = response.data.products;
                        this.packings = response.data.packings;
                    }
                    //this.$router.push({ name: 'authorization-success', query: { redirect: '/successauth' } });
                }
            });
        },
        addAdress()
        {
            this.adress.push({
                adress: '',
            })
        },
        handleFileChange(event)
        {
            console.log(event.target.files);
            this.documents.push({file:event.target.files[0]});
        },
        sendData(event)
        {
            event.preventDefault();
            axios.post('/set/new/offer', {
                product_id:this.selectedProduct,
                organization_inn:this.companyName,
                inn:this.inn,
                userName:this.userName,
                userSurname:this.userSurname,
                userPhone:this.userPhone,
                userEmail:this.userEmail,
                userPassword:this.userPassword,

            }).then(response => {
                if(response.status == 200)
                {
                    console.log(response.status)
                   // this.$router.push({ name: 'authorization-success', query: { redirect: '/successauth' } });
                }
            });
        }*/
    },
    mounted() {
        //this.getData();
        this.getCatalogData();
        this.getCatalogTypes();
        this.getPackings();
    },
    computed: {
        ...mapState('addproduct',['categories','types','products','packings','categoryValue'])

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
    padding: 11px 40px 0 8px;
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
    color: #fff;
    line-height: 1;
    background: #41b883;
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
</style>
