<template>
    <div class="container-fluid">
        <div class="row">
            <navbar-catalog></navbar-catalog>
        </div>
        <div class="container_catalog_products">
            <div class="content_catalog">
                <sidebar-catalog ></sidebar-catalog>
                <div class="content_catalog_block">
                            <div class="container_products_catalog">
                                <div class="offer_item_product_catalog">
                                    <div class="offer_filter_item_product_catalog">
                                       <div class="container_select_offer" v-if="categories">
                                            <multiselect :value="categoryValue"
                                                         :options="categories"
                                                         :multiple="false"
                                                         label="name"
                                                         track-by="name"
                                                         placeholder=""
                                                         selectLabel="Выберите категорию"
                                                         selectedLabel="Выбрано"
                                                         deselectLabel="Нажмите еще раз чтобы удалить"
                                                         :class="'select select_category'"
                                                         @input = updateValueAction
                                            ></multiselect>

                                            <div v-if="filteredTypes && categoryValue">
                                                <multiselect :value="typeValue"
                                                             :options="filteredTypes"
                                                             :multiple="false"
                                                             label="name"
                                                             track-by="name"
                                                             placeholder=""
                                                             selectLabel="Выберите тип товара"
                                                             selectedLabel="Выбрано"
                                                             deselectLabel="Нажмите еще раз чтобы удалить"
                                                             :class="'select select_type'"
                                                             @input = updateTypeAction
                                                ></multiselect>
                                            </div>
                                        </div>

                                        <div class="offer_quantity_block">
                                            <div class="text_prompt">Нужный объем</br> для закупки</div>
                                            <div class="offer_quantity_block_product">
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
                                    <div class="offer_delivery_item_product_catalog">
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
                                                                    <div class="text_input">Код станции</div>
                                                                    <input type="text" value="543 498">
                                                                    <div class="icon_price_input">
                                                                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M1 11.9711C1 11.0175 1.45332 10.1207 2.22115 9.55533L13.5 1.25L24.7788 9.55533C25.5467 10.1207 26 11.0175 26 11.9711L26 26.25C26 27.6307 24.8807 28.75 23.5 28.75H18.25C17.6977 28.75 17.25 28.3023 17.25 27.75V19.875C17.25 19.5989 17.0261 19.375 16.75 19.375L10.25 19.375C9.97386 19.375 9.75 19.5989 9.75 19.875V27.75C9.75 28.3023 9.30228 28.75 8.75 28.75H3.5C2.11929 28.75 1 27.6307 1 26.25L1 11.9711Z"
                                                                                stroke="#71BF45" stroke-width="2"
                                                                                stroke-linecap="round" stroke-linejoin="round" />
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
                                </div>
                                <div class="offer_product_category_block">
                                    <div class="header_offer_product_category_block">
                                        <div>
                                            <div class="title_offer_product_category_block">
                                                <span v-if="typeValue.name">{{ typeValue.name }}</span>
                                                <span v-else>{{categoryValue.name}}</span>
                                                <span>{{products.length}}</span> </div>
                                            <div class="more_offer_product_category_block"><a href="">Показать все</a></div>
                                        </div>
                                        <div>
                                            <div class="icon_list" @click="changeToListView">
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" v-bind:style= "[listView ? {fill:'#71BF45'} : {fill:'black'}]"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M17.5 11C19.1569 11 20.5 12.3431 20.5 14V17C20.5 18.6569 19.1569 20 17.5 20H3.5C1.84315 20 0.5 18.6569 0.5 17V14C0.5 12.3431 1.84315 11 3.5 11H17.5ZM17.5 13H3.5C2.94772 13 2.5 13.4477 2.5 14V17C2.5 17.5523 2.94772 18 3.5 18H17.5C18.0523 18 18.5 17.5523 18.5 17V14C18.5 13.4477 18.0523 13 17.5 13ZM17.5 0C19.1569 0 20.5 1.34315 20.5 3V6C20.5 7.65685 19.1569 9 17.5 9H3.5C1.84315 9 0.5 7.65685 0.5 6V3C0.5 1.34315 1.84315 0 3.5 0H17.5ZM17.5 2H3.5C2.94772 2 2.5 2.44772 2.5 3V6C2.5 6.55228 2.94772 7 3.5 7H17.5C18.0523 7 18.5 6.55228 18.5 6V3C18.5 2.44772 18.0523 2 17.5 2Z"
                                                          />
                                                </svg>

                                            </div>
                                            <div class="icon_tile" @click="changeToTileView">
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" v-bind:style= "[tileView ? {fill:'#71BF45'} : {fill:'black'}]"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M17.5 11C19.1569 11 20.5 12.3431 20.5 14V17C20.5 18.6569 19.1569 20 17.5 20H14.5C12.8431 20 11.5 18.6569 11.5 17V14C11.5 12.3431 12.8431 11 14.5 11H17.5ZM6.5 11C8.15685 11 9.5 12.3431 9.5 14V17C9.5 18.6569 8.15685 20 6.5 20H3.5C1.84315 20 0.5 18.6569 0.5 17V14C0.5 12.3431 1.84315 11 3.5 11H6.5ZM17.5 13H14.5C13.9477 13 13.5 13.4477 13.5 14V17C13.5 17.5523 13.9477 18 14.5 18H17.5C18.0523 18 18.5 17.5523 18.5 17V14C18.5 13.4477 18.0523 13 17.5 13ZM6.5 13H3.5C2.94772 13 2.5 13.4477 2.5 14V17C2.5 17.5523 2.94772 18 3.5 18H6.5C7.05228 18 7.5 17.5523 7.5 17V14C7.5 13.4477 7.05228 13 6.5 13ZM6.5 0C8.15685 0 9.5 1.34315 9.5 3V6C9.5 7.65685 8.15685 9 6.5 9H3.5C1.84315 9 0.5 7.65685 0.5 6V3C0.5 1.34315 1.84315 0 3.5 0H6.5ZM17.5 0C19.1569 0 20.5 1.34315 20.5 3V6C20.5 7.65685 19.1569 9 17.5 9H14.5C12.8431 9 11.5 7.65685 11.5 6V3C11.5 1.34315 12.8431 0 14.5 0H17.5ZM6.5 2H3.5C2.94772 2 2.5 2.44772 2.5 3V6C2.5 6.55228 2.94772 7 3.5 7H6.5C7.05228 7 7.5 6.55228 7.5 6V3C7.5 2.44772 7.05228 2 6.5 2ZM17.5 2H14.5C13.9477 2 13.5 2.44772 13.5 3V6C13.5 6.55228 13.9477 7 14.5 7H17.5C18.0523 7 18.5 6.55228 18.5 6V3C18.5 2.44772 18.0523 2 17.5 2Z"
                                                         />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div :class="{ 'container_item_offer_catalog' : listView,'tile_container_item_offer_catalog row':tileView}">
                                            <div class="item_product_category" v-if="listView && products.length" v-for="product in products" >
                                                <div class="info_item_offer_catalog">
                                                    <div class="image_info_item_offer_catalog"
                                                         style="background-image: url(/images/offer.png);"></div>
                                                    <div>
                                                        <div class="name_info_item_offer_catalog">{{product.organization.name}}
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
                                                <div class="price_item_product_category">
                                                    <div class="start_price_category_products">{{product.price}} ₽/ кг</div>
                                                </div>
                                                <div class="container_item_offer_btn">
                                                    <router-link :to="{'name':'catalog-page',params:{id:product.id}}">
                                                        <div class="make_deal">Подробнее</div>
                                                    </router-link>
                                                    <div class="doc_item_offer">
                                                        <button class="bay_item_offer_catalog" type="button" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z"
                                                                    stroke="#71BF45" stroke-width="2" stroke-linecap="round" />
                                                                <circle cx="9" cy="21" r="1" stroke="#71BF45"
                                                                        stroke-width="2" />
                                                                <circle cx="21" cy="21" r="1" stroke="#71BF45"
                                                                        stroke-width="2" />
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
                                            <div class="tile_item_offer_catalog col" v-if="tileView && products.length" v-for="product in products">
                                                <div class="tile_item_product_category">
                                                    <div class="tile_item_product_category">
                                                        <div class="tile_info_item_offer_catalog">
                                                            <div class="tile_image_info_item_offer_catalog"
                                                                 style="background-image: url(/images/offer.png);"></div>
                                                            <div>
                                                                <div class="star_info_item_offer_catalog">
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
                                                        </div>
                                                        <div class="name_info_item_offer_catalog">{{product.organization.name}} <span>&#183;</span>
                                                            <span v-if="product.country">
                                                                {{product.country.title_ru}}
                                                             </span>
                                                        </div>
                                                        <div
                                                            class="place_count_info_item_offer_catalog tile_place_count_info_item_offer_catalog">
                                                            <span>50кг</span>
                                                            <span>25кг</span>
                                                            <span>10кг</span>
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
                                                                <div class="title_time_delivery">Доставка <span class="time_delivery">от 5 дней</span> </div>
                                                            </div>
                                                        </div>
                                                        <div class="tile_price_document_block">
                                                            <div class="tile_start_price_category_products">{{product.price}} ₽/ кг</div>
                                                            <div class="doc_item_offer">
                                                                <button class="tile_bay_item_offer_catalog" type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M1.5 2H3.89566C4.83305 2 5.64468 2.65106 5.84803 3.56614L6.5 6.5M6.5 6.5L7.60424 12.5733C8.12296 15.4263 10.6077 17.5 13.5075 17.5H16.2106C19.012 17.5 21.4406 15.5615 22.0614 12.8297L23.0835 8.33243C23.2969 7.39379 22.5834 6.5 21.6208 6.5H6.5Z"
                                                                            stroke="#71BF45" stroke-width="2" stroke-linecap="round" />
                                                                        <circle cx="9" cy="21" r="1" stroke="#71BF45"
                                                                                stroke-width="2" />
                                                                        <circle cx="21" cy="21" r="1" stroke="#71BF45"
                                                                                stroke-width="2" />
                                                                    </svg>
                                                                </button>
                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Документ <span>PDF</span></a>
                                                                    <a class="dropdown-item" href="#">Документ <span>PDF</span></a>
                                                                    <a class="dropdown-item" href="#">Документ <span>PDF</span></a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <router-link :to="{'name':'catalog-page',params:{id:product.id}}">
                                                            <div class="tile_make_deal">Подробнее</div>
                                                        </router-link>
                                                    </div>
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
import Multiselect from "vue-multiselect";
import {mapGetters,mapActions,mapState} from 'vuex';
import catalog from "../Store/modules/catalog";
export default {
    components: {SidebarCatalog, NavbarCatalog,Multiselect},

    data(){
        return{
            tileView : false,
            listView : true,
        }
    },
    methods:{
        getData()
        {
            axios.get('/get/categories/')
                .then((response) => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        this.categories = response.data;
                    }
                })

            axios.get('/get/types/')
                .then((response) => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        this.types = response.data;
                    }
                })
            axios.get('/get/packages/')
                .then((response) => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        this.packages = response.data;
                    }
                })
        },
        changeToTileView()
        {
            let self = this;
            self.tileView = true;
            self.listView = false;
        },
        changeToListView()
        {
            let self = this;
            self.tileView = false;
            self.listView = true;
        },
        ...mapActions('catalog',['updateValueAction','getCatalogData','getCatalogTypes','updateTypeAction']),


    },
    mounted() {
        this.$store.dispatch('catalog/getCatalogData');
        this.$store.dispatch('catalog/getCatalogTypes');
    },
    computed: {
        ...mapState('catalog',['categories', 'categoryValue','types','typeValue','filteredTypes','products'])
    },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.select_category .multiselect__select,
.select_category .multiselect__tags,
.select_type .multiselect__select,
.select_type .multiselect__tags
{
    height: 62px;
}
.select_category .multiselect__tags,
.select_type .multiselect__tags
{
    min-height: 40px;
    display: block;
    padding: 8px 40px 0 8px;
    border-radius: 10px;
    border: 1px solid #C8CCD1;
    background: #fff;
    font-size: 14px;
}
.select_category .multiselect__placeholder,
.select_type .multiselect__placeholder
{
    position: absolute;
    top: 10px;
    left: 20px;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #66727E;
    display: block !important;

}
.select_category .multiselect__select:before,
.select_type .multiselect__select:before
{
    top: 55%;
}
.select_category:before
{
    content: 'Категория';
    position: absolute;
    top: 10px;
    left: 20px;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #66727E;
    display: block;
    z-index: 99;
}
.select_type
{
    position: relative;
    width: 230px;
    height: 40px;
    margin: 0 auto;
}
.select_type:before
{
    content: 'Выберите тип товара';
    position: absolute;
    top: 10px;
    left: 20px;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #66727E;
    display: block;
    z-index: 99;
}

.select_category .multiselect__input,
.select_category .multiselect__single,
.select_type .multiselect__input,
.select_type .multiselect__single
{
    padding-top: 20px;
    padding-left: 12px;
}
</style>
