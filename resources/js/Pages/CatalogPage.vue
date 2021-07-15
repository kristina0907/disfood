<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
        </div>
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
                <div class="title_product_catalog" v-if="product.name">{{ product.name }}</div>
                <div class="offer_price_filter">
                    <div>
                        <label for="toggle-button" class="text">Показать цены с НДС</label>
                        <input type="checkbox" name="toggle" id="toggle-button" class="toggle-button" @click="changePrice">
                    </div>
                    <div class="dop_filter_currency">
                        <a :class="{'active': currency == 'RUB'}" @click="changeCurrency('RUB')">RUB (₽)</a>
                        <a :class="{'active': currency == 'USD'}" @click="changeCurrency('USD')">USD ($)</a>
                    </div>
                </div>
            </div>
            <div class="container_description_product">
                <div class="container_lefr_right_block">
                    <div class="container_left_block_description_product">
                        <div class="about_company_product">
                            <div class="info_item_offer_catalog">
                                <div class="image_info_item_offer_catalog"
                                     style="background-image: url(/images/offer.png);"></div>
                                <div>
                                    <div class="name_info_item_offer_catalog" v-if="product.organization">{{product.organization.name}}
                                        <span class="icon_star">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.54894 0.927052C5.8483 0.0057416 7.1517 0.00574088 7.45106 0.927052L8.29611 3.52786C8.42999 3.93989 8.81394 4.21885 9.24717 4.21885H11.9818C12.9505 4.21885 13.3533 5.45846 12.5696 6.02786L10.3572 7.63525C10.0067 7.8899 9.86008 8.34127 9.99396 8.75329L10.839 11.3541C11.1384 12.2754 10.0839 13.0415 9.30017 12.4721L7.08779 10.8647C6.7373 10.6101 6.2627 10.6101 5.91222 10.8647L3.69983 12.4721C2.91612 13.0415 1.86164 12.2754 2.16099 11.3541L3.00604 8.75329C3.13992 8.34127 2.99326 7.8899 2.64277 7.63525L0.430391 6.02787C-0.353323 5.45846 0.0494523 4.21885 1.01818 4.21885H3.75283C4.18606 4.21885 4.57001 3.93989 4.70389 3.52786L5.54894 0.927052Z"
                                                fill="#FFD789" />
                                        </svg>

                                    </span>
                                        <span class="text_star">4,5</span>
                                    </div>
                                    <div class="place_count_info_item_offer_catalog" v-if="product.category && product.category.packages">
                                        <span v-for="pack in  product.category.packages">{{pack.name}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container_img_price_block">
                            <div class="container_left_img_block">
                                <div class="galery_product">
                                    <div class="services-slider">
                                        <div class="nav-container">
                                            <div class="slider-nav">
                                                <div v-if="product.type">
                                                    <img :src="product.type.image" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main-container">
                                            <div class="slider slider-main">
                                                <div class="main_galery_img" v-if="product.type">
                                                    <img :src="product.type.image" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container_right_price_block">
                                <div class="catalog_info_product">
                                    <div class="price_catalog_info_product" v-if="product.price && product.type && !priceWithNDS">от {{product.price}} ₽ / {{product.type.unit}} </div>
                                    <div class="price_catalog_info_product" v-if="product.price && product.type && priceWithNDS">от {{product.price_with_nds}} ₽ / {{product.type.unit}} </div>
                                    <div class="count_offers_product" v-if="relatedOffers.length">Количество похожих предложений {{relatedOffers.length}} </div>
                                    <div class="name_info_catalog_product">Стандарт <span>ГОСТ 6292-93</span></div>
                                    <div class="name_info_catalog_product">Сорт <span>1</span></div>
                                    <div class="name_info_catalog_product">Содержание дроби <span>5%</span></div>
                                    <div class="name_info_catalog_product">Страна производства <span>Россия</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="description_text_product">
                            <div class="title_description_text_product">Описание</div>

                            <input type="checkbox" class="read-more-state" id="description" />
                            <div class="read-more-wrap text_description_text_product" v-if="product.product">
                                {{product.product.description}}
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
                                            <a class="nav-link" id="pickUp-tab" data-toggle="tab" href="#pickUp " role="tab"
                                               aria-controls="pickUp" aria-selected="false"><span>
                                                &#183;</span>
                                                Самовывоз</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade" id="JD" role="tabpanel" aria-labelledby="JD-tab">
                                            <div class="item_product_input row">
                                                <div class="container_input_price jd_tab_input col-md-7">
                                                   <searchlocation></searchlocation>
                                                </div>
                                                <div class="container_input_price col-md-5">
                                                    <div class="text_input">Код станции</div>
                                                    <input type="text" value="543 498">
                                                    <div class="icon_price_input">
                                                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M1 11.9711C1 11.0175 1.45332 10.1207 2.22115 9.55533L13.5 1.25L24.7788 9.55533C25.5467 10.1207 26 11.0175 26 11.9711L26 26.25C26 27.6307 24.8807 28.75 23.5 28.75H18.25C17.6977 28.75 17.25 28.3023 17.25 27.75V19.875C17.25 19.5989 17.0261 19.375 16.75 19.375L10.25 19.375C9.97386 19.375 9.75 19.5989 9.75 19.875V27.75C9.75 28.3023 9.30228 28.75 8.75 28.75H3.5C2.11929 28.75 1 27.6307 1 26.25L1 11.9711Z"
                                                                stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade show active" id="avto" role="tabpanel"
                                             aria-labelledby="avto-tab">
                                            <div class="item_product_input row">
                                                <div class="container_input_price col-md-12">
                                                    <searchlocation></searchlocation>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pickUp" role="tabpanel" aria-labelledby="pickUp-tab">
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="item_catalog_info_delivery">
                                <div class="title_item_catalog_info_delivery">
                                    Объем закупки
                                </div>
                                <div class="container_purchase_volume" v-for="(pack, index) in packages" :key="index">
                                    <div class="item_purchase_volume">
                                        <div class="title_packaging">
                                            Фасовка
                                            <span class="count_packaging">
                                                {{pack.package.name}}
                                            </span>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <div class="quantity-block">
                                                            <button class="quantity-arrow-minus" data-id="m2" @click="changeCount({'val':'decrement','pack':pack})">
                                                                <svg width="20" height="2" viewBox="0 0 20 2" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1 1L19 1" stroke="#C8CCD1" stroke-width="2"
                                                                          stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <input data-id="m2"  class="quantity-num" type="number" v-model="pack.value" v-on:input="recalc" placeholder="штук"/>
                                                            <button data-id="m2" class="quantity-arrow-plus" @click="changeCount({'val':'increment','pack':pack})">
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
                                                    <div class="col-md-2">
                                                        штук
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <div class="quantity-block">
                                                            <button class="quantity-arrow-minus" data-id="m2" @click="changeCount({'val':'decrement','pack':pack})">
                                                                <svg width="20" height="2" viewBox="0 0 20 2" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1 1L19 1" stroke="#C8CCD1" stroke-width="2"
                                                                          stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <input data-id="m2"  class="quantity-num" type="number" v-model="volume" v-on:input="recalc" placeholder="кг"/>
                                                            <button data-id="m2" class="quantity-arrow-plus" @click="changeCount({'val':'increment','pack':pack})">
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
                                                    <div class="col-md-2">
                                                        кг
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="close_purchase_volume" @click="eraseCounter(pack)">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6L18.7742 18.7742" stroke="#8898A8" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6 18.7742L18.7742 5.99998" stroke="#8898A8" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                                <div class="add_packaging" v-if="product.category && product.category.packages">
                                    Добавить фасовку
                                    <span v-for="pack in filterPackages" @click="addPackingToOrder(pack)" >{{pack.name}}</span>
                                </div>
                            </div>
                            <div class="total_item_catalog_info_delivery">
                                <div class="total_price_item_catalog_info_delivery">
                                    <div class="title_total_item_catalog_info_delivery">Итого:</div>
                                    <div class="volume_total_item_catalog_info_delivery">
                                        <div class="count_volume">{{volume}} кг</div>
                                        <div class="dop_count_volume">Объем сделки</div>
                                    </div>
                                    <div class="volume_total_item_catalog_info_delivery">
                                        <div class="count_volume">от {{summ}} ₽</div>
                                        <div class="dop_count_volume">Сумма сделки</div>
                                    </div>
                                </div>
                                <div class="totlal_btn_item_catalog_info_delivery" v-if="summ > 0">
                                    <button type="submit" @click="sendOffer(product_id)">Оформить заказ</button>
                                </div>
                                <div class="total_dopinfo_item_catalog_info_delivery">
                                    <div class="total_icon_dopinfo_item_catalog_info_delivery">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="11" stroke="#71BF45" stroke-width="2" />
                                            <path d="M12 7V12" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round" />
                                            <path d="M12 16V16.5" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round" />
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
            <div class="container_supplier_information">
                <div class="title_supplier_information">Информация о поставщике</div>
                <div class="info_supplier_information">
                    <div class="container_left_block_description_product">
                        <div class="info_item_offer_catalog">
                            <div class="image_info_item_offer_catalog"
                                 style="background-image: url(/images/offer.png);"></div>
                            <div>
                                <div class="name_info_item_offer_catalog" v-if="product.organization">{{product.organization.name}}
                                    <span class="icon_star">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.54894 0.927052C5.8483 0.0057416 7.1517 0.00574088 7.45106 0.927052L8.29611 3.52786C8.42999 3.93989 8.81394 4.21885 9.24717 4.21885H11.9818C12.9505 4.21885 13.3533 5.45846 12.5696 6.02786L10.3572 7.63525C10.0067 7.8899 9.86008 8.34127 9.99396 8.75329L10.839 11.3541C11.1384 12.2754 10.0839 13.0415 9.30017 12.4721L7.08779 10.8647C6.7373 10.6101 6.2627 10.6101 5.91222 10.8647L3.69983 12.4721C2.91612 13.0415 1.86164 12.2754 2.16099 11.3541L3.00604 8.75329C3.13992 8.34127 2.99326 7.8899 2.64277 7.63525L0.430391 6.02787C-0.353323 5.45846 0.0494523 4.21885 1.01818 4.21885H3.75283C4.18606 4.21885 4.57001 3.93989 4.70389 3.52786L5.54894 0.927052Z"
                                            fill="#FFD789" />
                                    </svg>

                                </span>
                                    <span class="text_star">4,5</span>
                                </div>
                                <div class="place_count_info_item_offer_catalog">
                                    <span>50кг</span>
                                    <span>25кг</span>
                                    <span>10кг</span>
                                </div>
                            </div>
                        </div>
                        <div class="description_text_supplier">
                            <input type="checkbox" class="read-more-state" id="descriptionSupplier" />
                            <div class="read-more-wrap text_description_text_product">
                                <div>
                                   {{product.description}}
                                </div>
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
                            <label for="descriptionSupplier" class="read-more-trigger text-read"></label>

                        </div>
                    </div>

                </div>
            </div>
            <div class="container_similar_products">
                <div class="title_similar_products">Похожие предложения</div>
                <div class="container_item_offer_catalog" v-if="relatedOffers.length">
                    <div v-for="offer in relatedOffers" class="item_product_category">
                        <div class="info_item_offer_catalog">
                            <div class="image_info_item_offer_catalog"
                                 style="background-image: url(/images/offer.png);"></div>
                            <div>
                                <div class="name_info_item_offer_catalog" v-if="offer.organization">{{offer.organization.name}}
                                    <span class="icon_star">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.54894 0.927052C5.8483 0.0057416 7.1517 0.00574088 7.45106 0.927052L8.29611 3.52786C8.42999 3.93989 8.81394 4.21885 9.24717 4.21885H11.9818C12.9505 4.21885 13.3533 5.45846 12.5696 6.02786L10.3572 7.63525C10.0067 7.8899 9.86008 8.34127 9.99396 8.75329L10.839 11.3541C11.1384 12.2754 10.0839 13.0415 9.30017 12.4721L7.08779 10.8647C6.7373 10.6101 6.2627 10.6101 5.91222 10.8647L3.69983 12.4721C2.91612 13.0415 1.86164 12.2754 2.16099 11.3541L3.00604 8.75329C3.13992 8.34127 2.99326 7.8899 2.64277 7.63525L0.430391 6.02787C-0.353323 5.45846 0.0494523 4.21885 1.01818 4.21885H3.75283C4.18606 4.21885 4.57001 3.93989 4.70389 3.52786L5.54894 0.927052Z"
                                            fill="#FFD789" />
                                    </svg>

                                </span>
                                    <span class="text_star">4,5</span>
                                </div>
                                <div class="place_count_info_item_offer_catalog">
                                    <span>50кг</span>
                                    <span>25кг</span>
                                    <span>10кг</span>
                                </div>
                            </div>
                        </div>
                        <div class="container_item_offer_btn">
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
                            <div class="price_item_product_category">
                                <div class="start_price_category_products" v-if="!priceWithNDS">{{offer.price}} ₽/ кг</div>
                                <div class="start_price_category_products" v-if="priceWithNDS">{{offer.price_with_nds}} ₽/ кг</div>
                            </div>
                            <a :href="'/catalog-page/' + offer.id">
                                <div class="make_deal">Подробнее</div>
                            </a>
                            <div class="doc_item_offer">
                                <button class="bay_item_offer_catalog" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z"
                                            stroke="#71BF45" stroke-width="2" stroke-linecap="round" />
                                        <circle cx="9" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                        <circle cx="21" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                    </svg>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Документ <span>PDF</span></a>
                                    <a class="dropdown-item" href="#">Документ <span>PDF</span></a>
                                    <a class="dropdown-item" href="#">Документ <span>PDF</span></a>
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
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import HeaderCatalog from "../Сomponents/HeaderCatalog";
import {mapActions, mapState} from "vuex";
import Searchlocation from "../Сomponents/SearchLocation";
export default {
    name:'catalog-page',
    components: {Searchlocation, VueSlickCarousel,HeaderCatalog },
    data(){
        return {
            product_id:this.$route.params.id,
        }
    },
    methods:{
        ...mapActions('catalogpage',[
            'getData',
            'getRelatedProducts',
            'changePrice',
            'changeCurrency',
            'changeCount',
            'recalc',
            'eraseCounter',
            'addPackingToOrder',
            'sendOffer'
        ]),
    },
   async mounted(){
        await this.$store.dispatch('catalogpage/getData',this.product_id);
        await this.$store.dispatch('catalogpage/getRelatedProducts');
    },
    computed: {
        ...mapState('catalog',['location','currentUserOrganization']),
        ...mapState('catalogpage',['product','filterPackages','relatedOffers','priceWithNDS','currency','packages','summ','volume'])
    },
}
</script>
