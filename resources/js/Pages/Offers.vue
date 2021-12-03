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
                        <div class="item_product_catalog offer_item_product_catalog">
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
                                            <div class="tab-content tab-content_offer_page" id="myTabContent">
                                                <div class="tab-pane fade" id="JD" role="tabpanel" aria-labelledby="JD-tab">
                                                    <div class="item_product_input row">
                                                        <div class="container_input_price jd_tab_input col-md-8">
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
                                                        <div class="container_input_price col-md-4">
                                                            <div class="text_input">Код станции11</div>
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
                                        </div>
                                    </div>



                                </div>

                            </div>
                            <div class="body_item_product_category">
                                <div class="item_product_category">
                                    <div class="info_item_product_category">
                                        <div class="offer_image_info_item_product_category"
                                             style="background-image: url(/images/similar.png);"></div>
                                        <div>
                                            <div class="name_info_item_product_category">Рис круглый шлифованный</div>
                                            <div class="description_info_item_product_category">ГОСТ 6292-93 • 1 сорт • 5%
                                                дроби </div>
                                        </div>
                                    </div>

                                    <div class="change_container_product">
                                        <div class="change_item_product_count">
                                            <span class="start_change_count">50кг</span>
                                            <span>20 000 кг</span>
                                        </div>
                                        <div class="change_item_product_category"  data-toggle="modal" data-target="#modal_change_packaging">Изменить</div>
                                    </div>

                                </div>
                            </div>
                        </div>
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
                            <div class="title_search_filter">Найдено предложений {{offers.length}}</div>
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
                        <div class="container_main_offer_catalog">
                            <div class="row">
                                <div class="col-xs-12 col-md-4">
                                    <div class="item_main_offer_catalog">
                                        <div class="block_item_main_offer_catalog">
                                            <div class="info_item_offer_catalog">
                                                <div class="image_item_main_offer_catalog"
                                                     style="background-image: url(/images/offer.png);"></div>
                                                <div class="container_text_main_offer_catalog">
                                                    <div class="main_title_item_offer_catalog">
                                                        <div class="name_item_main_offer_catalog">Агро Альянс</div>
                                                        <div class="main_star">
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
                                                    </div>
                                                    <div class="place_item_main_offer_catalog">
                                                        <span class="fast">Самый быстрый</span>
                                                        <span>Россия</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main_price_info_offer_catalog">
                                            <div class="price_item_product_category">
                                                <div class="start_price_category_products">46, 34 ₽/ кг</div>
                                                <div class="price_category_products">1 340 004 ₽</div>
                                            </div>
                                            <div class="delivery_item_similar_products">
                                                <div class="icon_delivery">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12.5" cy="12" r="11" stroke="#71BF45"
                                                                stroke-width="2" />
                                                        <path d="M12.5 7V13L15 15.5" stroke="#71BF45" stroke-width="2"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div class="title_time_delivery">Доставка</div>
                                                    <div class="time_delivery">от 5 дней</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container_item_offer_btn">
                                            <div class="btn_green">Оформить сделку</div>
                                            <div class="bay_item_offer_catalog">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z"
                                                        stroke="#71BF45" stroke-width="2" stroke-linecap="round" />
                                                    <circle cx="9" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                                    <circle cx="21" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-4">
                                    <div class="item_main_offer_catalog">
                                        <div class="block_item_main_offer_catalog">
                                            <div class="info_item_offer_catalog">
                                                <div class="image_item_main_offer_catalog"
                                                     style="background-image: url(/images/offer.png);"></div>
                                                <div>
                                                    <div class="main_title_item_offer_catalog">
                                                        <div class="name_item_main_offer_catalog">Агро Альянс</div>
                                                        <div class="main_star">
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
                                                    </div>
                                                    <div class="place_item_main_offer_catalog">
                                                        <span class="fast">Самый быстрый</span>
                                                        <span>Россия</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main_price_info_offer_catalog">
                                            <div class="price_item_product_category">
                                                <div class="start_price_category_products">46, 34 ₽/ кг</div>
                                                <div class="price_category_products">1 340 004 ₽</div>
                                            </div>
                                            <div class="delivery_item_similar_products">
                                                <div class="icon_delivery">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12.5" cy="12" r="11" stroke="#71BF45"
                                                                stroke-width="2" />
                                                        <path d="M12.5 7V13L15 15.5" stroke="#71BF45" stroke-width="2"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div class="title_time_delivery">Доставка</div>
                                                    <div class="time_delivery">от 5 дней</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container_item_offer_btn">
                                            <div class="btn_green">Оформить сделку</div>
                                            <div class="bay_item_offer_catalog">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z"
                                                        stroke="#71BF45" stroke-width="2" stroke-linecap="round" />
                                                    <circle cx="9" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                                    <circle cx="21" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-4">
                                    <div class="item_main_offer_catalog">
                                        <div class="block_item_main_offer_catalog">
                                            <div class="info_item_offer_catalog">
                                                <div class="image_item_main_offer_catalog"
                                                     style="background-image: url(/images/offer.png);"></div>
                                                <div>
                                                    <div class="main_title_item_offer_catalog">
                                                        <div class="name_item_main_offer_catalog">Агро Альянс</div>
                                                        <div class="main_star">
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
                                                    </div>
                                                    <div class="place_item_main_offer_catalog">
                                                        <span class="fast">Самый быстрый</span>
                                                        <span>Россия</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main_price_info_offer_catalog">
                                            <div class="price_item_product_category">
                                                <div class="start_price_category_products">46, 34 ₽/ кг</div>
                                                <div class="price_category_products">1 340 004 ₽</div>
                                            </div>
                                            <div class="delivery_item_similar_products">
                                                <div class="icon_delivery">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12.5" cy="12" r="11" stroke="#71BF45"
                                                                stroke-width="2" />
                                                        <path d="M12.5 7V13L15 15.5" stroke="#71BF45" stroke-width="2"
                                                              stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div class="title_time_delivery">Доставка</div>
                                                    <div class="time_delivery">от 5 дней</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container_item_offer_btn">
                                            <div class="btn_green">Оформить сделку</div>
                                            <div class="bay_item_offer_catalog">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z"
                                                        stroke="#71BF45" stroke-width="2" stroke-linecap="round" />
                                                    <circle cx="9" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                                    <circle cx="21" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container_item_offer_catalog">
                            <div class="item_offer_catalog" v-for="offer in offers">
                                <div class="body_item_offer_catalog">
                                    <div class="item_product_category">
                                        <div class="info_item_offer_catalog">
                                            <div class="image_info_item_offer_catalog">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                                    <g><path d="M143.2,478.2h156.7v36.8H143.2V478.2L143.2,478.2z"/>
                                                        <path d="M143.2,579h156.7v36.8H143.2V579L143.2,579z"/>
                                                        <path d="M143.2,682.9h156.7v36.8H143.2V682.9L143.2,682.9z"/>
                                                        <path d="M143.2,786.9h156.7v36.8H143.2V786.9L143.2,786.9z"/>
                                                        <path d="M413.4,278.3h250.5v36.8H413.4V278.3z"/>
                                                        <path d="M413.4,399.2h135.2v36.8H413.4V399.2z"/>
                                                        <path d="M413.4,520H491v36.8h-77.6V520z"/>
                                                        <path d="M799.4,571.8c0-38.8-31.6-70.4-70.4-70.4c-38.8,0-70.3,31.6-70.3,70.4c0,38.8,31.6,70.4,70.3,70.4C767.8,642.2,799.4,610.6,799.4,571.8z M729,605.4c-18.5,0-33.6-15.1-33.6-33.6c0-18.5,15.1-33.6,33.6-33.6c18.6,0,33.6,15.1,33.6,33.6C762.7,590.3,747.6,605.4,729,605.4z"/>
                                                        <path d="M757.6,894.7c17.4-22.1,48-62.3,78.4-107.7c62.9-94,94.8-164.8,94.8-210.5c0-111.3-90.5-201.8-201.8-201.8s-201.8,90.5-201.8,201.8c0,45.7,31.9,116.6,94.8,210.5c30.4,45.3,61,85.6,78.4,107.7H596.3H489.4V785.3h78.1v-36.8H452.7v146.1H374V370.3V178.4h213.6h115.6v161.5h36.8V141.7H587.7V68.6H337.3v73.1v36.8v118.9H117.2v73h-48v524.3H10v36.8h59.1h268.1H374h78.7h143.6h125.4H990v-36.8H757.6z M374,105.3h176.9v36.3H374V105.3z M153.9,334h176.9v36.3H153.9V334z M105.9,894.7V407.1h11.3h220.1v487.6H105.9z M564,576.5c0-91,74-165,165.1-165c91,0,165.1,74,165.1,165c0,71.1-108.5,223.5-165.1,295.3C672.5,799.9,564,647.6,564,576.5z"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div>
                                                <div class="name_info_item_offer_catalog">{{offer.organization.name}}
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
                                                    <span>{{offer.country.title_ru}}</span>
                                                    <span>50кг</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="delivery_item_similar_products">
                                            <div class="icon_delivery">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12.5" cy="12" r="11" stroke="#71BF45" stroke-width="2" />
                                                    <path d="M12.5 7V13L15 15.5" stroke="#71BF45" stroke-width="2"
                                                          stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div class="title_time_delivery">Доставка</div>
                                                <div class="time_delivery">от 5 дней</div>
                                            </div>
                                        </div>
                                        <div class="price_item_product_category">
                                            <div class="start_price_category_products">{{offer.price}} ₽/ кг</div>
                                            <div class="price_category_products">1 340 004 ₽</div>
                                        </div>

                                        <div>
                                            <div class="container_item_offer_btn">
                                                <div class="btn_green">Оформить сделку</div>
                                                <div class="bay_item_offer_catalog">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z"
                                                            stroke="#71BF45" stroke-width="2" stroke-linecap="round" />
                                                        <circle cx="9" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                                        <circle cx="21" cy="21" r="1" stroke="#71BF45" stroke-width="2" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="dropdown open">
                                            </div>
                                            <div class="doc_item_offer">
                                                <button class="doc_dropdown_offer" type="button" id="dropdownMenuButton"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg width="25" height="19" viewBox="0 0 25 19" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M1.5 4C1.5 2.34315 2.84315 1 4.5 1H8.89023C9.60636 1 10.2989 1.25618 10.8426 1.72223L12.6574 3.27777C13.2011 3.74382 13.8936 4 14.6098 4H20.5C22.1569 4 23.5 5.34315 23.5 7V15C23.5 16.6569 22.1569 18 20.5 18H4.5C2.84315 18 1.5 16.6569 1.5 15V4Z"
                                                            stroke="#71BF45" stroke-width="2" />
                                                    </svg>
                                                </button>
                                                <span>Сопроводительная
                                                документация</span>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Документ <span>PDF</span></a>
                                                    <a class="dropdown-item" href="#">Документ <span>PDF</span></a>
                                                    <a class="dropdown-item" href="#">Документ <span>PDF</span></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div v-fo>
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
    components:{
        NavbarCatalog,SidebarCatalog
    },
    data(){
      return {
          category:null,
          catname:'',
          type:null,
          typename:'',
          packages:[],
          packnames:[],
          offers:[],
      }
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
            axios.get('/get/offer/',{
                params:data
            }).then((response) => {
                //console.log(response.data)
                if (response.data !== 'undefined' && response.data !== null) {
                    this.offers = response.data;
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
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
