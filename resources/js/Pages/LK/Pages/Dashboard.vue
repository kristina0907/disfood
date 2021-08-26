<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>

        <div class="container_dashboard">
            <div class="row">
                <div class="col-xs-12 col-md-7">
                    <div class="price_dynamics">
                        <div class="header_item_right_dashboard">
                            <div class="titile_header_item_right_dashboard">Динамика цен</div>
                            <div class="transactions_value_block">
                                <div class="transactions_price_dynamics">Сделки</div>
                                <div class="value_price_dynamics">Цены</div>
                            </div>
                        </div>
                        <div class="choose_period_price_dynamics" data-toggle="modal" data-target="#modal_change_period">
                            16-31 Января 2021
                        </div>

                        <div class="select select_product" data-state="">
                            <div class="select__title" data-default="Option 0">Добавьте товар в избранное чтобы отслеживать
                                цену</div>
                            <div class="select__content">
                                <input id="singleSelect0" class="select__input" type="radio" name="singleSelect" checked />
                                <label for="singleSelect0" class="select__label">
                                    <span>Добавьте товар в избранное чтобы отслеживать цену</span>
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6L18.7742 18.7742" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 18.7742L18.7742 5.99998" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                </label>
                                <input id="singleSelect1" class="select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect1" class="select__label">
                                    <span>Агроальянс. Рис круглый шлифованый</span>
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6L18.7742 18.7742" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 18.7742L18.7742 5.99998" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span></label>
                                <input id="singleSelect2" class="select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect2" class="select__label">
                                    <span>Агроальянс. Рис круглый шлифованый</span>
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6L18.7742 18.7742" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 18.7742L18.7742 5.99998" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span></label>
                                <input id="singleSelect3" class="select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect3" class="select__label">
                                    <span>Агроальянс. Рис круглый шлифованый</span>
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6L18.7742 18.7742" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 18.7742L18.7742 5.99998" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span></label>
                                <input id="singleSelect4" class="select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect4" class="select__label">
                                    <span>Агроальянс. Рис круглый шлифованый</span>
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6L18.7742 18.7742" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 18.7742L18.7742 5.99998" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span></label>
                                <input id="singleSelect5" class="select__input" type="radio" name="singleSelect" />
                                <label for="singleSelect5" class="select__label">
                                    <span>Агроальянс. Рис круглый шлифованый</span>
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6L18.7742 18.7742" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 18.7742L18.7742 5.99998" stroke="#22262A" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span></label>
                            </div>
                        </div>

                        <div id="chart">
                            <vue-apex-charts type="line" height="275" :options="options" :series="series"></vue-apex-charts>
                        </div>
                        <div class="more_about_price_prediction">
                            <div class="title_more_about_price_prediction">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#0E0F11" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <rect x="9" y="9" width="6" height="6" rx="0.5" stroke="#0E0F11" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15 1V4" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M23 9H20" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M23 15H20" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M4 9H1" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M4 15H1" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M9 1V4" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M15 20V23" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M9 20V23" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div>Подробнее о прогнозе</br>цен от <span>Disfood</span> </div>
                            </div>
                            <div class="prices_more_about_price_prediction">
                                <div class="item_period_prediction">
                                    <div class="price_period_prediction">
                                        32 ₽/ кг
                                    </div>
                                    <div class="period_prediction">
                                        Вчера
                                    </div>
                                </div>
                                <div class="item_period_prediction">
                                    <div class="price_period_prediction">
                                        32 ₽/ кг
                                    </div>
                                    <div class="period_prediction">
                                        Сегодня
                                        <span class="increase_price">+3,5%</span>
                                    </div>
                                </div>
                                <div class="item_period_prediction">
                                    <div class="price_period_prediction">
                                        32 ₽/ кг
                                    </div>
                                    <div class="period_prediction">
                                        Завтра
                                        <span class="decline_price">-3,5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <div class="help_partners">
                                <div class="header_item_right_dashboard">
                                    <div class="titile_header_item_right_dashboard">
                                        <div>Помощь для партнеров</div>
                                        <div class="description_titile_header_item_dashboard">Все о том как работать с
                                            Disfood Market</div>
                                    </div>
                                </div>
                                <div class="icon_help_partners">
                                    <svg width="88" height="81" viewBox="0 0 88 81" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect x="30.5" width="57" height="57" rx="28.5" fill="#CAE7BA" />
                                        <path
                                            d="M67.5024 23.5H12.5024C11.1217 23.5 10.0024 24.6193 10.0024 26V66C10.0024 67.3807 11.1217 68.5 12.5024 68.5H67.5024C68.8832 68.5 70.0024 67.3807 70.0024 66V26C70.0024 24.6193 68.8832 23.5 67.5024 23.5Z"
                                            stroke="#51668F" stroke-width="6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M52.5 23.5V18.5C52.5 17.1739 51.9732 15.9021 51.0355 14.9645C50.0979 14.0268 48.8261 13.5 47.5 13.5H32.5C31.1739 13.5 29.9021 14.0268 28.9645 14.9645C28.0268 15.9021 27.5 17.1739 27.5 18.5V23.5"
                                            stroke="#51668F" stroke-width="6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M70.0026 40.4717C60.8847 45.7468 50.5339 48.5166 40 48.5001C29.468 48.5166 19.1188 45.7478 10.0021 40.4743"
                                            stroke="#51668F" stroke-width="6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M36.25 38.5H43.75" stroke="#51668F" stroke-width="6" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="contacting_those_support">
                                <div class="header_item_right_dashboard">
                                    <div class="titile_header_item_right_dashboard">
                                        <div>Обращение в тех. поддержку</div>
                                        <div class="description_titile_header_item_dashboard">Среднее время ответа 1 час
                                        </div>
                                    </div>
                                </div>
                                <div class="list_values_dashboard">
                                    <div class="item_values_dashboard">
                                        <div class="title_values_dashboard">Открытые</div>
                                        <div class="quantity_values_dashboard">5</div>
                                    </div>
                                    <div class="item_values_dashboard">
                                        <div class="title_values_dashboard">Закрытые обращения</div>
                                        <div class="quantity_values_dashboard">5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-5">
                    <div class="transactions_current_period">
                        <div class="header_item_right_dashboard">
                            <div class="titile_header_item_right_dashboard">Сделки за текущий период</div>
                            <div class="date_change_block">
                                <div class="date_transactions_current_period">Сделки</div>
                                <div class="change_transactions_current_period">Цены</div>
                            </div>
                        </div>
                        <div class="list_values_dashboard">
                            <div class="item_values_dashboard">
                                <div class="title_values_dashboard">Новые</div>
                                <div class="quantity_values_dashboard">5</div>
                                <div class="price_values_dashboard">300 000 ₽</div>
                            </div>
                            <div class="item_values_dashboard">
                                <div class="title_values_dashboard">Ожидают оплаты</div>
                                <div class="quantity_values_dashboard">5</div>
                                <div class="price_values_dashboard">300 000 ₽</div>
                            </div>
                            <div class="item_values_dashboard">
                                <div class="title_values_dashboard">Отмены</div>
                                <div class="quantity_values_dashboard">5</div>
                                <div class="price_values_dashboard">300 000 ₽</div>
                            </div>
                            <div class="item_values_dashboard">
                                <div class="title_values_dashboard">Завершены</div>
                                <div class="quantity_values_dashboard">5</div>
                                <div class="price_values_dashboard">300 000 ₽</div>
                            </div>
                        </div>
                    </div>
                    <div class="my_items">
                        <div class="header_item_right_dashboard">
                            <div class="titile_header_item_right_dashboard">Мои товары</div>
                            <div class="update_prices_my_items">Обновить цены у 5 позиций</div>
                        </div>
                        <div class="list_values_dashboard">
                            <div class="item_values_dashboard">
                                <div class="title_values_dashboard">Актуальная цена</div>
                                <div class="quantity_values_dashboard" v-if="dashboard.offers">{{dashboard.offers.length}}</div>
                            </div>
                            <div class="item_values_dashboard">
                                <div class="title_values_dashboard">Неактуальная цена</div>
                                <div class="quantity_values_dashboard out_date_price">5</div>
                            </div>
                        </div>
                    </div>
                    <div class="advertising_dashboard"
                         style="background-image: url('./img/advertising_dashboard.jpg');">
                        <div class="title_advertising_dashboard">
                            Снижение коммиссии<br />на сделки
                        </div>
                        <div class="info_advertising_dashboard">
                            <div class="percent_advertising_dashboard">
                                до 0.5 %
                            </div>
                            <div class="description_advertising_dashboard">
                                Для новый пользователей
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="modal_change_period" tabindex="-1" aria-labelledby="exampleModalLabel"
                 style="display: none;" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="title_madal_change_packaging">Период</div>

                            <form action="">
                                <div class="list_period">
                                    <div class="item_period">1 м</div>
                                    <div class="item_period">4 м</div>
                                    <div class="item_period">1 г</div>
                                    <div class="item_period my_item_period">Свой</div>
                                </div>
                                <div class="auto-jsCalendar" data-language="ru" data-day-format="DDD"></div>
                                <div class="btn_summit">
                                    <button type="submit">Применить 18.01 - 31.01</button>
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


import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
import VueApexCharts from 'vue-apexcharts'
import {mapActions, mapGetters, mapState} from "vuex";
export default {
    components: {UserLKHeader,VueApexCharts},
    data(){
        return {
            options : {
                chart: {
                    height: 275,
                    width: "100%",
                    type: "line"
                },
                grid: {
                    borderColor: '#D4D8DB',
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 20
                    },
                },
                stroke: {
                    curve: 'straight',
                    width: 3,
                },
                markers: {
                    size: 0,
                    colors: '#fff',
                    strokeColor: '#71BF45',
                    strokeWidth: 2,
                    strokeOpacity: 1,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    hover: {
                        size: undefined,
                        sizeOffset: 7
                    }
                },
                tooltip: {
                    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                        return '<div class="info_chart_item">'+
                            '<div class="date_info_chart_item">16 Июня 2021</div><div class="price_info_chart_item">Цена<span>34 ₽/ кг</span></div></div>'
                    }
                },
                xaxis: {
                    labels: {
                        style: {
                            colors: ['#22262A'],
                            fontSize: '12px',
                            lineHeight: '15px',
                        },
                    },
                    categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
                },
                colors: ['#71BF45'],
            },
            series: [
                {
                    labels: {
                        style: {
                            colors: ['#22262A'],
                            fontSize: '12px',
                            lineHeight: '15px',
                        },
                    },
                    name: ["16 Июня 2021","20 июня 2021"],
                    data: [20, 40, 20, 60, 20, 70, 40, 20, 70, 40, 20, 30]
                }
            ],
        }
    },
    methods:{
      ...mapActions('dashboard',['getOffers','getOrders'])
    },
    mounted() {
        this.$store.dispatch('dashboard/getOffers');

    },
    computed:{

        ...mapState(['dashboard',['offers','orders']])
    },
}
</script>
