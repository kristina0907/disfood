<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>
        <div class="row">
            <div class="content col padding-0">
                <div class="main_container">
                    <div class="title_page">Мои товары</div>
                    <div class="table_container table-responsive">
                        <div class="sort_taable">
                            <div class="item_sort" :class="{'active':allFlag}" @click="allFilter">Все <span>&#183;</span>
                                {{ products.length }}
                            </div>
                            <div class="item_sort" :class="{'active':activeflag}" @click="activeFilter">Активные <span>&#183;</span> {{ countActive }}</div>
                            <div class="item_sort" :class="{'active':noactiveFlag}" @click="noactiveFilter">Неактивные <span>&#183;</span> {{ countNoActive }}</div>
                        </div>
                        <div class="search_table_btn">
                            <div class="container_search_select">
                                <div class="container_search_table">
                                    <div class="icon_search">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11 20.5C15.9706 20.5 20 16.4706 20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5Z"
                                                stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22 22.5L18 18.5" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Найти товар по наименованию">
                                </div>
                                <div v-if="selected.length > 0" class="col_select_table">Выбранo {{selected.length}}
                                    <span @click.prevent="cancelChangePrices">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6L18.7742 18.7742" stroke="#8898A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6 18.7744L18.7742 6.00022" stroke="#8898A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="container_btn_table">
                                <router-link :to="{name:'productadd'}" class="btn-table" active-class="active">
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3V21" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M3 12L21 12" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                    </svg>
                                </span> Добавить товар
                                </router-link>

                                <button v-show="!changePriceStatus && productsFilter.length" @click.prevent="changePrices">Изменить цены</button>
                                <button v-show="!changePriceStatus && productsFilter.length" @click.prevent="acceptedPrice">Утвердить цену</button>
                                <button v-if="!changePriceStatus && productsFilter.length" @click.prevent="acceptedPriceAll">Утвердить все</button>
                                <button v-if="changePriceStatus && productsFilter.length" v-else @click.prevent="acceptedPricesAll">Утвердить все</button>
                                <button class="btn_cancel_change_prices" v-show="changePriceStatus && productsFilter.length" @click.prevent="cancelChangePrices">Отменить</button>

                            </div>
                        </div>
                     <table class="table default_table table_product">
                            <thead>
                            <tr>
                                <th scope="col">
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" id="color-all" name="color-all"
                                               value="indigo" v-model="selectAll">
                                        <label for="color-all"></label>
                                    </div>
                                </th>
                                <th scope="col">Фото</th>
                                <th scope="col" @click="sortName">Наименование
                                    <span class="sort_col">
                                <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A"
                                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                                    </th>
                                    <th scope="col"  @click="sortStatus" >Статус
                                        <span class="sort_col">
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A"
                                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                </th>
                                <th scope="col">Категория
                                </th>
                                <th scope="col">Тип</th>
                                <th scope="col">Регион погрузки</th>
                                <th scope="col">Фасовка</th>
                                <th scope="col">Текущий объём</th>
                                <th scope="col"  @click="sortPrice('price')">Цена, кг / Цена, кг с НДС
                                    <span class="sort_col">
                                        <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A"
                                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </th>
                                <th class="price-term" scope="col">Срок цены</th>
                            </tr>
                            </thead>
                            <tbody :class="{table_change_price : changePriceStatus}">
                            <tr v-for="(product,index) in productsFilter" :class="{active: selected.indexOf(product.id) != -1}">
                                <td>
                                    <div class="checkbox">
                                        <input class="custom-checkbox" type="checkbox" :id="'color-'+product.id" :name="'color-'+product.id"
                                               value="indigo" v-model="selected" :value="product.id" number>
                                        <label :for="'color-'+product.id"></label>
                                    </div>
                                </td>
                                <td @click.prevent="redirectToEdit(product.id)">
                                    <div class="image_product_table"
                                         :style="'background-image: url('+product.type.image+');'"></div>
                                </td>
                                <td class="bold" @click.prevent="redirectToEdit(product.id)">{{ product.type.name }}</td>
                                <td v-if="product.active" @click.prevent="redirectToEdit(product.id)">Активно</td>
                                <td v-else>Не активно</td>
                                <td @click.prevent="redirectToEdit(product.id)">{{ product.category.name }}</td>
                                <td @click.prevent="redirectToEdit(product.id)">{{ product.type.name }}</td>
                                <td @click.prevent="redirectToEdit(product.id)">
                                    <div v-if="product.adresses.length" v-for="adress in product.adresses">
                                       {{adress.region_name}}
                                    </div>
                                </td>
                                <td @click.prevent="redirectToEdit(product.id)">50 кг</td>
                                <td @click.prevent="redirectToEdit(product.id)">{{product.capacity}}</td>
                                <td v-if="!changePriceStatus || (selected.indexOf(product.id) == -1)" class="modal_price" data-bs-toggle="modal" data-bs-target="#changePrice" @click="currentProduct = product">
                                    <span class="price">
                                        {{ product.price }} ₽
                                    </span>
                                    <span class="price_nds">
                                        {{product.price_with_nds}} ₽ НДС
                                    </span>
                                </td>
                                <td v-if="changePriceStatus && (selected.indexOf(product.id) != -1)" class="td_change_price">
                                    <div class="container_change_price">
                                        <input type="text" :value="product.price"  @change.prevent="changeInputPrices(index,$event.target.value)"> <span>₽</span>
                                    </div>
                                    <div>
                                        <input type="text" :value="product.price_with_nds" @change.prevent="changeInputPricesNds(index,$event.target.value)"> <span>НДС ₽</span>
                                    </div>
                                </td>
                                <td class="price-term">{{product.updated_at | moment("D-MM-YYYY") }} МСК<span class="status_time_good">8ч</span></td>
                            </tr>


                            </tbody>
                        </table>

                        <!-- Modal -->
                        <div class="modal fade modal_change_price" id="changePrice" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <form action="">
                                            <div class="title_madal_price">Изменение цены</div>
                                            <div class="modal_name_product" v-if="currentProduct.type">{{currentProduct.type.name}}</div>
                                            <div class="container_modal_old_price">
                                                <div class="title_modal_old_price">Старая цена</div>
                                                <div class="modal_old_price">
                                                    <span v-if="currentProduct">{{currentProduct.price}} Р</span>
                                                    <span class="modal_old_price_nds" v-if="currentProduct">{{currentProduct.price_with_nds}} Р НДС</span>
                                                </div>
                                            </div>
                                            <div class="modal_input">
                                                <input type="text" v-if="currentProduct" :value="currentProduct.price" @input="currentProduct.price = $event.target.value">
                                            </div>
                                            <div class="modal_input">
                                                <div class="model_price_percent">13%</div>
                                                <input type="text"  v-if="currentProduct" :value="currentProduct.price_with_nds" @input="currentProduct.price_with_nds = $event.target.value">
                                            </div>
                                            <div>
                                                <button class="modal_btn_change_price"
                                                        type="submit"
                                                        v-if="currentProduct && currentProduct.price > 0 && currentProduct.price_with_nds > 0"
                                                        @click.prevent="sendPrice(currentProduct.id,currentProduct)">Применить</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
<!--                        <div class="navigation_table">
                            <div class="num_rows">
                                <span>
                                    Количество сторок
                                </span>
                                <div class="container_select_rows">
                                    <select name="" id="">
                                        <option value="">5</option>
                                        <option value="">10</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 1L1.03683 7.96317L8 14.9263" stroke="#22262A" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">
                                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7.96317 7.96317L1 14.9263" stroke="#22262A" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="page_count">
                                1-5 из 100
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>


import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
import {mapState,mapActions} from "vuex";
export default {
    components: {UserLKHeader},
    data(){
        return {
            selected: [],
            currentProduct:{},
            sortByPrice:false,
            sortByName:false,
            sortByStatus:false,
            changePriceStatus:false,
            changePriceError:false,
            newPrice: []

        }
    },
    methods:{
       ...mapActions('myproducts',['getProducts','allFilter','activeFilter','noactiveFilter']),


        /**
         *  sorting price column
         */

        sortPrice()
        {

            if(!this.sortByPrice)
            {
                this.productsFilter.sort(function(a,b){
                    return a.price - b.price
                });
                this.sortByPrice = true;
            }
            else
            {
                this.productsFilter.sort(function(a,b){
                    return  b.price - a.price
                });
                this.sortByPrice = false;
            }

        },



        /**
         * sorting By name
         */

        sortName()
        {
            if(!this.sortByName)
            {
                this.productsFilter.sort(function(a,b){
                    var nameA=a.type.name.toLowerCase(),
                        nameB=b.type.name.toLowerCase()
                    if (nameA < nameB) //сортируем строки по возрастанию
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0 // Никакой сортировки
                });
                this.sortByName = true;
            }
            else
            {
                this.productsFilter.sort(function(a,b){
                    var nameA=a.type.name.toLowerCase(),
                        nameB=b.type.name.toLowerCase()
                    if (nameA > nameB) //сортируем строки по возрастанию
                        return -1
                    if (nameA < nameB)
                        return 1
                    return 0 // Никакой сортировки
                });
                this.sortByName = false;
            }
        },

        /**
         *  Sorting by status
         */

        sortStatus()
        {
            if(!this.sortByStatus)
            {
                this.productsFilter.sort(function(a,b){
                    return a.active - b.active
                });
                this.sortByStatus = true;
            }
            else
            {
                this.productsFilter.sort(function(a,b){
                    return  b.active - a.active
                });
                this.sortByStatus = false;
            }
        },

        /**
         *  send products to update price
         */
        changeInputPrices(key,value){
            this.products[key].price = value;
        },
        changeInputPricesNds(key,value){
            this.products[key].price_with_nds = value;
        },
        acceptedPricesAll(){
            if((this.products).length > 0)
            {
                axios.post('/set/updateprices',{'output':this.products})
                    .then(response => {
                        if (response.status == 200) {
                            this.$router.go();
                        }
                    });
            }
        },
        changePrices(){
            console.log(this.selected);
            if(this.selected.length > 0){
                this.changePriceStatus = true;
                this.changePriceError = false;
            }else{
                this.changePriceError = true;
            }

        },
        cancelChangePrices(){
            this.changePriceStatus = false;
            this.selected = [];
        },

        /**
         * send selected products to update price
         */
        acceptedPrice()
        {
            let output = [];
            if(this.selected.length > 0)
            {
                for(let i=0;i < this.selected.length;i++)
                {
                   for (let j=0; j< this.products.length;j++)
                   {
                       if(this.selected[i] === this.products[j].id)
                       {
                           output.push(this.products[j]);
                       }
                   }

                }
            }
            if(output.length > 0)
            {
                 axios.post('/set/updateprices',{'output':output})
                    .then(response => {
                        if (response.status == 200) {
                            this.$router.go();
                        }
                    });
            }
        },

        /**
         *  send all products to update price
         */
        acceptedPriceAll()
        {
            if(this.products.length > 0)
            {
                axios.post('/set/updateprices',{'output':this.products})
                    .then(response => {
                        if (response.status == 200) {
                            this.$router.go();
                        }
                    });
            }
        },

        /**
         *
         * @param id
         * @param product
         */

        sendPrice(id,product)
        {
            if(product && id)
            {
                axios.post('/set/updateprice/product',{'product':product,'id':id})
                    .then(response => {
                        if (response.status == 200) {
                            this.$router.go();
                        }
                    });
            }
        },

        /**
         *
         * @param id
         */

        redirectToEdit(id)
        {
            if(id)
            {
                this.$router.push({name:'productedit',params:{'id':id}})
            }
        }
    },
    computed: {
        ...mapState('myproducts', ['products', 'productsFilter', 'activeflag', 'noactiveFlag', 'allFlag', 'countActive', 'countNoActive']),
        ...mapState(['user']),

        selectAll: {
                get: function () {
                    return this.products ? this.selected.length == this.products.length : false;
                },
                set: function (value) {
                    var selected = [];

                    if (value) {
                        this.products.forEach(function (product) {
                            selected.push(product.id);
                        });
                    }

                    this.selected = selected;
                }
        }

    },
    mounted() {
       this.$store.dispatch('myproducts/getProducts')
    }
}
</script>

<style>
.default_table tbody tr:hover
{
    background: #fafafa;
    cursor:pointer;
}
</style>
