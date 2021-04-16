<template>
    <div class="catalog_container">
        <router-link :to="{name:'catalog'}">
            <div class="prev_product_catalog">
            <span>
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1.03683 7.96317L8 14.9263" stroke="#61A73A" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" />
                </svg>
            </span>
                Назад к товарам
            </div>
        </router-link>

        <div class="container_title_product_catalog">
            <div class="title_product_catalog">{{product.name}}</div>
            <div class="favorites_product"><span>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.1408 14.5858L16.2148 18.8039C16.5464 19.0341 17 18.7968 17 18.3932V5C17 2.79086 15.2091 1 13 1H5C2.79086 1 1 2.79086 1 5V18.3932C1 18.7968 1.45364 19.0341 1.7852 18.8039L7.85921 14.5858C8.54515 14.1094 9.45485 14.1094 10.1408 14.5858Z"
                            stroke="#8898A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>В избранное</div>
        </div>
        <div class="container_description_product">
            <div class="container_lefr_right_block">
                <div class="container_left_block_description_product">
                    <div class="container_img_price_block">
                        <div class="container_left_img_block">
                            <div class="galery_product">
                                <div class="services-slider">
                                    <div class="nav-container">
                                        <div class="slider-nav">
                                            <div>
                                                <img :src="product.image">
                                            </div>
                                            <div>
                                                <img :src="product.image">
                                            </div>
                                            <div>
                                                <img :src="product.image">
                                            </div>
                                            <div>
                                                <img :src="product.image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-container">
                                        <div class="slider slider-main">
                                            <div class="main_galery_img">
                                                <img :src="product.image">
                                            </div>
                                            <div class="main_galery_img">
                                                <img :src="product.image">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="container_right_price_block">
                            <div class="catalog_info_product">
                                <div class="price_catalog_info_product">от 46, 34 ₽/ кг</div>
                                <div class="price_nds_catalog_info_product">
                                    <label for="toggle-button" class="text">Цена с НДС</label>
                                    <input type="checkbox" name="toggle" id="toggle-button" class="toggle-button">
                                </div>
                                <div class="count_offers_product">356 предложений</div>
                                <div class="name_info_catalog_product">Стандарт <span>ГОСТ 6292-93</span></div>
                                <div class="name_info_catalog_product">Сорт <span>1</span></div>
                                <div class="name_info_catalog_product">Содержание дроби <span>5%</span></div>
                                <div class="name_info_catalog_product">Страна производства <span>Россия</span></div>
                                <div class="name_info_catalog_product">Типы фасовки <span>50 кг, 100 кг</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="description_text_product">
                        <div class="title_description_text_product">Описание</div>

                        <input type="checkbox" class="read-more-state" id="description" />
                        <div class="read-more-wrap text_description_text_product">
                            {{product.description}}
                            <div class="radio read-more-target">
                                <div>
                                    Продукт положительно влияет на сердечно-сосудистую систему. Он очищает кровь,
                                    укрепляет
                                    капилляры. Позволяет
                                    выводить из организма излишки соли. Эти свойства особенно полезно при заболевании
                                    почек
                                    и
                                    сердца. В составе риса нет глютена, который часто вызывает аллергическую реакцию.
                                </div>
                            </div>
                        </div>
                        <label for="description" class="read-more-trigger text-read"></label>

                    </div>
                </div>
                <div class="container_right_block_description_product">
                    <div class="container_catalog_info_delivery">

                        <div class="item_catalog_info_delivery">
                            <div class="title_item_catalog_info_delivery">
                                Данные о доставке
                            </div>
                            <div class="tab_delivery">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link" id="home-tab" data-toggle="tab" href="#JD" role="tab"
                                           aria-controls="JD" aria-selected="false"><span> &#183;</span>
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
                                <div class="deadlines_delivery">
                                        <span class="icon_deadlines">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="11" stroke="#71BF45"
                                                        stroke-width="2" />
                                                <path d="M12 7V13L14.5 15.5" stroke="#71BF45" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                    Доставка
                                    <span>от 5 дней</span>
                                </div>
                            </div>

                        </div>
                        <div class="item_catalog_info_delivery">
                            <div class="title_item_catalog_info_delivery">
                                Объем закупки
                            </div>
                            <div class="container_purchase_volume">
                                <div class="item_purchase_volume">
                                    <div class="title_packaging">Фасовка <span class="count_packaging">50 кг</span>
                                    </div>
                                    <div>
                                        <div class="quantity-block">
                                            <button class="quantity-arrow-minus" data-id="m2">
                                                <svg width="20" height="2" viewBox="0 0 20 2" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L19 1" stroke="#C8CCD1" stroke-width="2"
                                                          stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                            <input data-id="m2" class="quantity-num" type="number" value="1" />
                                            <button data-id="m2" class="quantity-arrow-plus">
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
                                <div class="close_purchase_volume">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6L18.7742 18.7742" stroke="#8898A8" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 18.7742L18.7742 5.99998" stroke="#8898A8" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </div>
                            <div class="container_purchase_volume">
                                <div class="item_purchase_volume">
                                    <div class="title_packaging">Фасовка <span class="count_packaging">50 кг</span>
                                    </div>
                                    <div>
                                        <div class="quantity-block">
                                            <button type="button" class="quantity-arrow-minus" data-id="m1">
                                                <svg width="20" height="2" viewBox="0 0 20 2" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L19 1" stroke="#C8CCD1" stroke-width="2"
                                                          stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                            <input data-id="m1" class="quantity-num" type="number" value="1" />
                                            <button type="button" data-id="m1" class="quantity-arrow-plus">
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
                                <div class="close_purchase_volume">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6L18.7742 18.7742" stroke="#8898A8" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 18.7742L18.7742 5.99998" stroke="#8898A8" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </div>
                            <div class="add_packaging">
                                Добавить фасовку
                                <span>150 кг</span>
                            </div>
                        </div>
                        <div class="total_item_catalog_info_delivery">
                            <div class="total_price_item_catalog_info_delivery">
                                <div class="title_total_item_catalog_info_delivery">Итого:</div>
                                <div class="volume_total_item_catalog_info_delivery">
                                    <div class="count_volume">40 000 кг</div>
                                    <div class="dop_count_volume">Объем сделки</div>
                                </div>
                                <div class="volume_total_item_catalog_info_delivery">
                                    <div class="count_volume">от 1 340 004 ₽</div>
                                    <div class="dop_count_volume">Сумма сделки</div>
                                </div>
                            </div>
                            <div class="totlal_btn_item_catalog_info_delivery">
                                <button type="submit">Перейти к предложениям • 323</button>
                            </div>
                            <div class="total_dopinfo_item_catalog_info_delivery">
                                <div class="total_icon_dopinfo_item_catalog_info_delivery">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="11" stroke="#71BF45" stroke-width="2" />
                                        <path d="M12 7V12" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M12 16V16.5" stroke="#71BF45" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    Укажите вид доставки и объем закупки, чтобы перейти к предложениям поставщиков
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="container_similar_products">
            <div class="title_similar_products">Похожие товары</div>
            <div class="container_item_similar_products">
                <div class="item_similar_products">
                    <div class="info_item_similar_products">
                        <div class="image_info_item_similar_products"
                             style="background-image: url(/images/similar.png);"></div>
                        <div>
                            <div class="name_info_item_similar_products">Рис круглый шлифованный</div>
                            <div class="description_info_item_similar_products">ГОСТ 6292-93 • 1 сорт • 5% дроби </div>
                            <div class="place_count_info_item_similar_products">
                                <span>Россия</span>
                                <span>50кг</span>
                            </div>
                        </div>
                    </div>
                    <div class="delivery_item_similar_products">
                        <div class="icon_delivery">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12" r="11" stroke="#71BF45" stroke-width="2" />
                                <path d="M12.5 7V13L15 15.5" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <div class="title_time_delivery">Доставка</div>
                            <div class="time_delivery">от 5 дней</div>
                        </div>
                    </div>
                    <div class="price_item_similar_products">
                        <div class="price_similar_products">от 46, 34 ₽/ кг</div>
                        <div class="offer_similar_products">356 предложений</div>
                    </div>
                </div>
                <div class="item_similar_products">
                    <div class="info_item_similar_products">
                        <div class="image_info_item_similar_products"
                             style="background-image: url(/images/similar.png);"></div>
                        <div>
                            <div class="name_info_item_similar_products">Рис круглый шлифованный</div>
                            <div class="description_info_item_similar_products">ГОСТ 6292-93 • 1 сорт • 5% дроби </div>
                            <div class="place_count_info_item_similar_products">
                                <span>Россия</span>
                                <span>50кг</span>
                            </div>
                        </div>
                    </div>
                    <div class="delivery_item_similar_products">
                        <div class="icon_delivery">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12" r="11" stroke="#71BF45" stroke-width="2" />
                                <path d="M12.5 7V13L15 15.5" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <div class="title_time_delivery">Доставка</div>
                            <div class="time_delivery">от 5 дней</div>
                        </div>
                    </div>
                    <div class="price_item_similar_products">
                        <div class="price_similar_products">от 46, 34 ₽/ кг</div>
                        <div class="offer_similar_products">356 предложений</div>
                    </div>
                </div>
                <div class="item_similar_products">
                    <div class="info_item_similar_products">
                        <div class="image_info_item_similar_products"
                             style="background-image: url(/images/similar.png);"></div>
                        <div>
                            <div class="name_info_item_similar_products">Рис круглый шлифованный</div>
                            <div class="description_info_item_similar_products">ГОСТ 6292-93 • 1 сорт • 5% дроби </div>
                            <div class="place_count_info_item_similar_products">
                                <span>Россия</span>
                                <span>50кг</span>
                            </div>
                        </div>
                    </div>
                    <div class="delivery_item_similar_products">
                        <div class="icon_delivery">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12" r="11" stroke="#71BF45" stroke-width="2" />
                                <path d="M12.5 7V13L15 15.5" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <div class="title_time_delivery">Доставка</div>
                            <div class="time_delivery">от 5 дней</div>
                        </div>
                    </div>
                    <div class="price_item_similar_products">
                        <div class="price_similar_products">от 46, 34 ₽/ кг</div>
                        <div class="offer_similar_products">356 предложений</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
    name:'catalog-page',
    components: { VueSlickCarousel },
    data(){
        return {
            product_id:this.$route.params.id,
            product:{}
        }
    },
    methods:{
        getData()
        {
            let self = this;
            axios.get('/get/catalog/page/'+self.product_id).then((response) => {
                console.log(response.data)
                if (response.data !== 'undefined' && response.data !== null) {
                    this.product = response.data;
                }
            })
        }
    },
    mounted(){
        this.getData();
    }
}
</script>
