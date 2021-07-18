<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
        </div>
        <div class="catalog_container">
            <div class="row">
                <div class="xs-12 col-md-4 cart_left_container">
                    <div class="left_container_info">
                        <div class="prev_page">Назад</div>
                        <div class="transaction_name">Сделка № 3234</div>
                        <div class="info_transaction">
                            <div class="status_transaction">{{packages.length}} товар(ов)</div>
                        </div>
                        <div class="total_transaction_cart">
                            <div class="item_total_transaction_cart">
                                <div class="main_value_item_total_transaction_cart">Итого</div>
                                <div class="main_value_item_total_transaction_cart">1 380 000 ₽</div>
                            </div>
                            <div class="item_total_transaction_cart">
                                <div class="value_item_total_transaction_cart">Товар</div>
                                <div class="value_item_total_transaction_cart">1 340 004 ₽</div>
                            </div>
                            <div class="item_total_transaction_cart">
                                <div class="value_item_total_transaction_cart">Документы</div>
                                <div class="value_item_total_transaction_cart">1 500 ₽</div>
                            </div>
                            <div class="item_total_transaction_cart">
                                <div class="value_item_total_transaction_cart">Доставка</div>
                                <div class="value_item_total_transaction_cart">40 000 ₽</div>
                            </div>
                        </div>
                        <div class="total_transaction_cart">
                            <div class="item_total_transaction_cart">
                                <div class="title_item_total_transaction_cart">Срок доставки</div>
                                <div class="value_item_total_transaction_cart">от 5 дней</div>
                            </div>
                            <div class="item_total_transaction_cart">
                                <div class="title_item_total_transaction_cart">Объем сделки</div>
                                <div class="value_item_total_transaction_cart">40 000 кг</div>
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
                            <div>Текущие цены действительны<br /> до 13:00 МСК</div>
                        </div>
                        <button class="btn_submit_price" type="submit">Подтвердить сделку</button>
                    </div>
                </div>
                <div class="xs-12 col-md-8 cart_right_container">
                    <div class="right_container">
                        <div class="title_cart_block">Товар</div>
                        <div class="item_cart_product" v-if="product">
                            <div class="number_item_cart_product">1</div>
                            <div class="main_info_item_cart_product">
                                <div class="description_main_info_item_cart_product">
                                    <div class="left_description_main_info_item_cart_product" v-if="product.type">
                                        <div class="img_main_info_item_cart_product"
                                             :style="'background-image: url('+product.type.image+');background-size:cover;'"></div>
                                        <div>
                                            <div class="title_main_info_item_cart_product">{{product.type.name}}</div>
                                            <div class="company_reting_main_info_item_cart_product">
                                                <span class="name_company_main_info_item_cart_product">{{product.organization.name}}</span>
                                                <span>
                                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
                                                        fill="#FFD789" />
                                                </svg>
                                            </span>
                                                <span class="reting_main_info_item_cart_product">4,5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="delite_item_cart_product">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.80874 20.1498L3.05125 5H20.9487L20.1913 20.1498C20.1114 21.7464 18.7936 23 17.195 23H6.805C5.20637 23 3.88857 21.7464 3.80874 20.1498Z"
                                                stroke="#8898A8" stroke-width="2" />
                                            <path d="M8 5H16V3C16 1.89543 15.1046 1 14 1H10C8.89543 1 8 1.89543 8 3V5Z"
                                                  stroke="#8898A8" stroke-width="2" />
                                            <path d="M1 5H23" stroke="#8898A8" stroke-width="2" stroke-linecap="round" />
                                            <path d="M15 11V16" stroke="#8898A8" stroke-width="2" stroke-linecap="round" />
                                            <path d="M9 11V16" stroke="#8898A8" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="delivery_main_info_item_cart_product">
                                    <div class="left_delivery_main_info_item_cart_product">
                                        <div class="title_delivery_main_info_item_cart_product">ЖД Доставка</div>
                                        <div>
                                            <span class="pointA">A</span>
                                            <span class="point_title_A" v-if="product.adresses" v-for="adress in product.adresses">{{adress.country_name}}, {{adress.city_name}}</span>
                                            <span class="point_line">–</span>
                                            <span class="pointB">B</span>
                                            <span class="point_title_B" v-if="location.location">{{location.location.value}}</span>
                                        </div>
                                    </div>
                                    <div class="rigth_delivery_main_info_item_cart_product">
                                        <div>
                                            <div class="title_delivery_main_info_item_cart_product">Доставка</div>
                                            <div class="description_delivery_main_info_item_cart_product">от 5 дней</div>
                                        </div>
                                        <div>
                                            <div class="title_delivery_main_info_item_cart_product">Объем</div>
                                            <div class="description_delivery_main_info_item_cart_product">40 000 кг</div>
                                        </div>
                                        <div>
                                            <div class="title_delivery_main_info_item_cart_product">Сумма сделки</div>
                                            <div class="description_delivery_main_info_item_cart_product">1 340 004 ₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table default_table cart_table_product">
                                        <thead>
                                        <tr>
                                            <th scope="col">Фасовка</th>
                                            <th scope="col">Объём
                                                <span class="sort_col">
                                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751"
                                                              stroke="#22262A" stroke-width="2" stroke-linecap="round"
                                                              stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </th>
                                            <th scope="col">Цена за кг
                                            </th>
                                            <th scope="col">Стоимость закупки
                                                <span class="sort_col">
                                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751"
                                                              stroke="#22262A" stroke-width="2" stroke-linecap="round"
                                                              stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </th>
                                            <th scope="col">Стоимость доставки</th>
                                            <th scope="col">Итог</th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-if="packages.length" v-for="pack in packages">
                                            <td>{{ pack.package.name }}</td>
                                            <td>{{parseInt(pack.package.value) * parseInt(pack.value)}} кг</td>
                                            <td>{{product.price}} ₽</td>
                                            <td>{{parseInt(product.price) * (parseInt(pack.package.value) * parseInt(pack.value))}} ₽</td>
                                            <td>20 000 ₽</td>
                                            <td>{{parseInt(product.price) * (parseInt(pack.package.value) * parseInt(pack.value)) + parseInt(20000)}}  ₽</td>
                                            <td>
                                                <div class="settings_table_product">
                                                    <button type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4 7H20" stroke="#22262A" stroke-width="2"
                                                                  stroke-linecap="round" />
                                                            <path d="M8 17H20" stroke="#22262A" stroke-width="2"
                                                                  stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">Изменить</a>
                                                        <a class="dropdown-item" href="#">Удалить</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="title_cart_block">Дополнительные услуги</div>
                        <div class="container_dop_services">
                            <div class="header_dop_services">
                                <div class="title_header_dop_services">ЖД Доставка</div>
                                <div class="container_info_header_dop_services">
                                    <div class="info_header_dop_services">
                                        <div class="title_info_header_dop_services">Доставка</div>
                                        <div class="value_info_header_dop_services">от 5 дней</div>
                                    </div>
                                    <div class="info_header_dop_services">
                                        <div class="title_info_header_dop_services">Стоимость</div>
                                        <div class="value_info_header_dop_services">40 000 Р</div>
                                    </div>
                                </div>
                            </div>
                            <div class="body_dop_services">
                                <div>
                                    <div class="item_point">
                                        <div class="pointA_dop_services">A</div>
                                        <div class="point_title_A_dop_services"v-if="product.adresses" v-for="adress in product.adresses">{{adress.country_name}}, {{adress.city_name}}</div>
                                    </div>
                                    <div class="point_line_verticale"></div>
                                    <div class="item_point">
                                        <div class="pointB_dop_services">B</div>
                                        <div class="point_title_B_dop_services" v-if="location.location">{{location.location.value}}</div>
                                    </div>
                                </div>
                                <div>
                                    <button data-toggle="modal" data-target="#modal_change_delivery"
                                            class="btn_change_delivery" type="submit">Изменить</button>
                                </div>
                            </div>
                        </div>
                        <div class="container_export_documentation">
                            <div class="title_export_documentation">Экспортная документация</div>
                            <div class="info_export_documentation">Добавьте к сделке необходимые вам документы</div>
                            <div class="container_item_export_documentation row">
                                <div class="col-md-4">
                                    <div class="item_export_documentation">
                                        <div class="checkbox documentation_checkbox">
                                            <input class="custom-checkbox doc_check" type="checkbox" id="doc-1" name="doc"
                                                   value="indigo">
                                            <label for="doc-1">Документ <span>+ 1 500 ₽</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="item_export_documentation active">
                                        <div class="checkbox documentation_checkbox">
                                            <input class="custom-checkbox doc_check" checked type="checkbox" id="doc-2" name="doc"
                                                   value="indigo">
                                            <label for="doc-2">Документ <span>+ 1 500 ₽</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="item_export_documentation">
                                        <div class="checkbox documentation_checkbox">
                                            <input class="custom-checkbox doc_check" type="checkbox" id="doc-3" name="doc"
                                                   value="indigo">
                                            <label for="doc-3">Документ <span>+ 1 500 ₽</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="item_export_documentation">
                                        <div class="checkbox documentation_checkbox">
                                            <input class="custom-checkbox doc_check" type="checkbox" id="doc-4" name="doc"
                                                   value="indigo">
                                            <label for="doc-4">Документ <span>+ 1 500 ₽</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="item_export_documentation">
                                        <div class="checkbox documentation_checkbox">
                                            <input class="custom-checkbox doc_check" type="checkbox" id="doc-5" name="doc"
                                                   value="indigo">
                                            <label for="doc-5">Документ <span>+ 1 500 ₽</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="item_export_documentation">
                                        <div class="checkbox documentation_checkbox">
                                            <input class="custom-checkbox doc_check" type="checkbox" id="doc-6" name="doc"
                                                   value="indigo">
                                            <label for="doc-6">Документ <span>+ 1 500 ₽</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- Modal -->
        <div class="modal fade" id="modal_change_delivery" tabindex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">

                        <div class="title_modal_delivery">
                            Доставка
                        </div>
                        <div class="tab_delivery modal_tab_delivery">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#JD" role="tab"
                                       aria-controls="JD" aria-selected="false">
                                        ЖД</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="avto-tab" data-toggle="tab" href="#avto"
                                       role="tab" aria-controls="avto" aria-selected="true">
                                        Авто</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pickUp-tab" data-toggle="tab" href="#pickUp "
                                       role="tab" aria-controls="pickUp" aria-selected="false">
                                        Самовывоз</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="JD" role="tabpanel" aria-labelledby="JD-tab">
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
                                    <div class="item_product_input row">
                                        <div class="container_input_price col-md-12">
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
                                <div class="tab-pane fade" id="avto" role="tabpanel"
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
                            <div class="modal_info_delivery">
                                <div>
                                    <div class="title_modal_info_delivery">Срок доставки</div>
                                    <div class="value_modal_info_delivery">от 5 дней</div>
                                </div>
                                <div>
                                    <div class="title_modal_info_delivery">Стоимость доставки</div>
                                    <div class="value_modal_info_delivery">1 340 004 ₽</div>
                                </div>
                            </div>
                            <button type="submit" class="btn_modal">Изменить условие доставки</button>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderCatalog from "../Сomponents/HeaderCatalog";
import {mapState} from "vuex";
export default {
    components:{
        HeaderCatalog
    },
    mounted() {
        console.log('Component mounted.')
    },
    computed: {
        ...mapState('catalog',['location','currentUserOrganization']),
        ...mapState('catalogpage',['product','filterPackages','relatedOffers','priceWithNDS','currency','packages','summ','volume'])
    },
}
</script>
