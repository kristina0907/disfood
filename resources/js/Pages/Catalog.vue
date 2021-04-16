<template>
    <div class="container-fluid">
        <div class="row">
            <navbar-catalog></navbar-catalog>
        </div>
        <div class="container_catalog_products">
            <div class="content_catalog">
               <sidebar-catalog @changefilter="changeFilter"></sidebar-catalog>
                <div class="content_catalog_block">
                    <div class="container_products_catalog">
                        <div class="container_filter_result">
                            <div class="item_filter_result" v-if="category" >
                                {{catname}}
                                <span @click="removeCat(catname)"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L15.6452 15.6452" stroke="#8898A8" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 15.6451L15.6452 4.99998" stroke="#8898A8" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            </div>
                            <div class="item_filter_result" v-if="typename" >
                                {{typename}}
                                <span @click="removeType(typename)"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L15.6452 15.6452" stroke="#8898A8" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 15.6451L15.6452 4.99998" stroke="#8898A8" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            </div>
                            <div class="item_filter_result" v-if="packnames" v-for="pack in packnames">
                                {{pack}}
                                <span @click="removePack(pack)"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L15.6452 15.6452" stroke="#8898A8" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 15.6451L15.6452 4.99998" stroke="#8898A8" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            </div>
                        </div>
                        <div class="contaoner_dop_filter">
                            <div class="title_search_filter" v-if="products">Найдено товаров {{products.length}}</div>
                            <div class="dop_filter_product">
                                <div>
                                    <label for="toggle-button" class="text">Показать цены с НДС</label>
                                    <input type="checkbox" name="toggle" id="toggle-button" class="toggle-button">
                                </div>
                                <div class="select_dop_filter">
                                    <select name="" id="">
                                        <option value="">Сортировать по цене</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="item_product_catalog" v-for="product in products">
                            <div class="header_item_product_catalog">
                                <div class="tab_delivery">
                                    <div class="container_row_head_product">
                                        <div class="tab_product_nav">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link" id="home-tab" data-toggle="tab" href="#JD"
                                                       role="tab" aria-controls="JD" aria-selected="false"><span>
                                                        &#183;</span>
                                                        ЖД</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="avto-tab" data-toggle="tab" href="#avto"
                                                       role="tab" aria-controls="avto" aria-selected="true"><span>
                                                        &#183;</span>
                                                        Авто</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="pickUp-tab" data-toggle="tab" href="#pickUp "
                                                       role="tab" aria-controls="pickUp" aria-selected="false"><span>
                                                        &#183;</span>
                                                        Самовывоз</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="delevery_tab_product">
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade" id="JD" role="tabpanel" aria-labelledby="JD-tab">
                                                    <div class="item_product_input row">
                                                        <div class="container_input_price jd_tab_input col-md-7">
                                                            <div class="text_input">Куда доставить?</div>
                                                            <input type="text" value="Россия, Екатеринбург">
                                                            <div class="icon_price_input">
                                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M27.5 13.75C27.5 19.3471 19.2834 26.55 16.1735 29.0758C15.4852 29.6348 14.5148 29.6348 13.8265 29.0758C10.7166 26.55 2.5 19.3471 2.5 13.75C2.5 6.84644 8.09644 1.25 15 1.25C21.9036 1.25 27.5 6.84644 27.5 13.75Z"
                                                                        stroke="#71BF45" stroke-width="2" />
                                                                    <circle cx="15" cy="13.75" r="3.75" stroke="#71BF45"
                                                                            stroke-width="2" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="container_input_price col-md-5">
                                                            <div class="text_input">Код станции</div>
                                                            <input type="text" value="543 498">
                                                            <div class="icon_price_input">
                                                                <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1 11.9711C1 11.0175 1.45332 10.1207 2.22115 9.55533L13.5 1.25L24.7788 9.55533C25.5467 10.1207 26 11.0175 26 11.9711L26 26.25C26 27.6307 24.8807 28.75 23.5 28.75H18.25C17.6977 28.75 17.25 28.3023 17.25 27.75V19.875C17.25 19.5989 17.0261 19.375 16.75 19.375L10.25 19.375C9.97386 19.375 9.75 19.5989 9.75 19.875V27.75C9.75 28.3023 9.30228 28.75 8.75 28.75H3.5C2.11929 28.75 1 27.6307 1 26.25L1 11.9711Z" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade show active" id="avto" role="tabpanel"
                                                     aria-labelledby="avto-tab">
                                                    <div class="item_product_input row">
                                                        <div class="container_input_price col-md-12">
                                                            <div class="text_input">Куда доставить?</div>
                                                            <input type="text" value="Россия, Екатеринбург">
                                                            <div class="icon_price_input">
                                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M27.5 13.75C27.5 19.3471 19.2834 26.55 16.1735 29.0758C15.4852 29.6348 14.5148 29.6348 13.8265 29.0758C10.7166 26.55 2.5 19.3471 2.5 13.75C2.5 6.84644 8.09644 1.25 15 1.25C21.9036 1.25 27.5 6.84644 27.5 13.75Z"
                                                                        stroke="#71BF45" stroke-width="2" />
                                                                    <circle cx="15" cy="13.75" r="3.75" stroke="#71BF45"
                                                                            stroke-width="2" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="pickUp" role="tabpanel"
                                                     aria-labelledby="pickUp-tab">
                                                    <div class="item_product_input row">
                                                        <div class="container_input_price col-md-12">
                                                            <div class="text_input">Куда доставить?</div>
                                                            <input type="text" value="Россия, Екатеринбург">
                                                            <div class="icon_price_input">
                                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M27.5 13.75C27.5 19.3471 19.2834 26.55 16.1735 29.0758C15.4852 29.6348 14.5148 29.6348 13.8265 29.0758C10.7166 26.55 2.5 19.3471 2.5 13.75C2.5 6.84644 8.09644 1.25 15 1.25C21.9036 1.25 27.5 6.84644 27.5 13.75Z"
                                                                        stroke="#71BF45" stroke-width="2" />
                                                                    <circle cx="15" cy="13.75" r="3.75" stroke="#71BF45"
                                                                            stroke-width="2" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="quantity_block_product">
                                                <div class="quantity-block">
                                                    <button class="quantity-arrow-minus" data-id="m1">
                                                        <svg width="20" height="2" viewBox="0 0 20 2" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 1L19 1" stroke="#C8CCD1" stroke-width="2"
                                                                  stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button>
                                                    <input data-id="m1" class="quantity-num" type="number" value="1" />
                                                    <button data-id="m1" class="quantity-arrow-plus">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 3V21" stroke="#C8CCD1" stroke-width="2"
                                                                  stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M3 12L21 12" stroke="#C8CCD1" stroke-width="2"
                                                                  stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="body_item_product_category">
                                <div class="item_product_category">
                                    <div class="info_item_product_category">
                                        <div class="image_info_item_product_category"
                                             :style="'background-image: url('+product.image+');'"></div>
                                        <div>
                                            <div class="name_info_item_product_category">{{product.name}}</div>
                                            <div class="description_info_item_product_category">ГОСТ 3222-93 1 сорт</div>
                                            <div class="place_count_info_item_product_category">
                                                <span>Россия</span>
                                                <span>50кг</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price_item_product_category">
                                        <div class="start_price_category_products">от 46, 34 ₽/ кг</div>
                                        <div class="price_category_products">1 340 004 ₽</div>
                                    </div>

                                    <div>
                                        <div class="offer_item_product_category">Предложений <span>&#183;</span> 365 </div>
                                        <div class="more_item_product_category"><router-link :to="{name:'catalog-page',params: { id: product.id }}">Подробнее о товаре</router-link></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NavbarCatalog from "../Сomponents/HeaderCatalog";
import SidebarCatalog from "../Сomponents/SidebarCatalog";
export default {
    components: {SidebarCatalog, NavbarCatalog},
    data(){
        return{
            category:null,
            catname:'',
            type:null,
            typename:'',
            packages:[],
            packnames:[],
            products:[],

        }
    },
    mounted() {

    },
    methods:{
        changeFilter (data)
        {
            let self = this;
            this.category = data.category;
            this.type = data.type
            this.packages  = data.packages;
            if(data.catname)
            {
                data.catname.forEach(function (item,i){
                    self.catname = item.name;
                 })
            }
            if(data.typename)
            {
                data.typename.forEach(function (item,i){
                    self.typename = item.name;
                })
            }
            if(data.packnames)
            {
                self.packnames = []
                data.packnames.forEach(function (item,i){
                    self.packnames.push(item[0].name);
                })
            }
            this.getFilterData(data);
        },
        getFilterData(data)
        {
            let self = this;
            axios.get('/get/catalog/',{
                params:data
            }).then((response) => {
                   //console.log(response.data)
                    if (response.data !== 'undefined' && response.data !== null) {
                        this.products = response.data;
                    }
            })
        },
        removePack(pack)
        {
            let self = this;
            let newname = self.packnames.filter(function (item){
                return item !== pack;
            })
            self.packnames = newname;
            self.$emit('update-package',self.packnames);

        },
        removeType(type)
        {
            let self = this;

            self.typename = '';
            self.$emit('update-types',type);
        },
        removeCat(cat)
        {
            let self = this;
            self.catname = '';
            self.$emit('update-category',cat);
        }
    }
}
</script>
