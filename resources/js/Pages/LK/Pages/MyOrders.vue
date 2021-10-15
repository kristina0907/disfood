<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>
        <div class="row">
            <div class="main_container col">
                <div class="title_page">Мои сделки</div>

                <div class="table_container table-responsive">
                    <div class="sort_taable">
                        <div class="item_sort" :class="{'active':activeTab === 'all'}" @click="changeFlags('all')">Все <span>&#183;</span>
                            <span v-if="orders">
                            {{ orders.length }}
                            </span>
                        </div>
                        <div class="item_sort" :class="{'active':activeTab === 'new'}" @click="changeFlags('new')">Новые <span>&#183;</span>{{getCountOrders('new')}}</div>
                        <div class="item_sort" :class="{'active':activeTab === 'paying'}" @click="changeFlags('paying')">Оплата <span>&#183;</span> {{getCountOrders('paying')}}</div>
                        <div class="item_sort" :class="{'active':activeTab === 'accepted'}"  @click="changeFlags('accepted')">Подтвержден <span>&#183;</span>{{getCountOrders('accepted')}}</div>
                        <div class="item_sort" :class="{'active':activeTab === 'pogruzka'}" @click="changeFlags('pogruzka')">Погрузка <span>&#183;</span>{{getCountOrders('pogruzka')}}</div>
                        <div class="item_sort" :class="{'active':activeTab === 'delivery'}" @click="changeFlags('delivery')">Доставляется <span>&#183;</span>{{getCountOrders('delivery')}}</div>
                        <div class="item_sort" :class="{'active':activeTab === 'complete'}" @click="changeFlags('complete')">Завершена <span>&#183;</span>{{getCountOrders('complete')}}</div>
                        <div class="item_sort" :class="{'active':activeTab === 'cancelled'}" @click="changeFlags('cancelled')">Не состоялась <span>&#183;</span>{{getCountOrders('cancelled')}} </div>
                    </div>
                    <div class="search_table">
                        <div class="icon_search">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 20.5C15.9706 20.5 20 16.4706 20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5Z"
                                    stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 22.5L18 18.5" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Найти сделку по дате или номеру договора">
                    </div>
                    <table   class="table default_table">
                        <thead>
                        <tr>
                            <th scope="col">№
                                <span class="sort_col">
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </th>
                            <th scope="col">Создана
                                <span class="sort_col">
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </th>
                            <th scope="col">Товар</th>
                            <th scope="col">Объём
                                <span class="sort_col">
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </th>
                            <th scope="col">Фасовка</th>
                            <th scope="col">Сумма
                                <span class="sort_col">
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </th>
                            <th scope="col">Тип доставки</th>
                            <th scope="col">Контрагент</th>
                            <th scope="col">Доставка</th>
                            <th class="status_table" scope="col">Статус
                                <span class="sort_col">
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </th>
                        </tr>
                        </thead>
                        <tbody id="my-table">
                        <tr v-for="order in paginateOrders" @click="goToOrder(order.id)" v-bind:key="order.id">
                                <td>
                                    {{order.id}}
                                </td>
                                <td>{{order.created_at}}</td>
                                <td class="bold">
                                   <span v-if="order.offer">
                                        {{order.offer.type.name}}
                                   </span>
                                </td>
                                <td>{{order.capacity}} кг</td>
                                <td>
                                    <span v-if="order.packages" v-for="pack in order.packages">
                                        {{pack.name}}
                                    </span>
                                </td>
                                <td>{{order.summ}} р</td>
                                <td>Самовывоз</td>
                                <td>
                                    <span v-if="order.organization">
                                        {{order.organization.name}}
                                    </span>
                                </td>
                                <td>{{  }}</td>
                                <td class="status_table">
                                    <span class="status_completed" v-if="order.status">
                                        {{ order.status.name }}
                                    </span>
                                </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="navigation_table">
                    <div class="num_rows">
                              <span>
                                  Количество строк
                              </span>
                        <div class="container_select_table_page">
                            <div class="select_table_page" v-on:click='showDropdown'>
                                <span>{{ quantityPage }}</span>
                                <span>
                                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.66675 1L6.66675 6L11.6667 1" stroke="#22262A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="option_table_page" v-if="isShowDropdown">
                                <template>
                                    <div v-for="col in colPage" @click="changeCountPage(col)">{{ col }}</div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        first-number
                        last-number
                        align="center"
                        class="pagination"
                    >
                    </b-pagination>
                    <div class="page_count">
                        {{perPage}} из {{rows}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
import Multiselect from 'vue-multiselect'

import {mapActions, mapState} from "vuex";
export default {
    components: {UserLKHeader,Multiselect},
    data(){
        return {
            perPage: 5,
            currentPage: 1,
            colPage:['5','10'],
            options: [
                { name: '5' },
                { name: '10' }
            ],
            quantityPage:5,
            value:[],
            isShowDropdown: false,
        }
    },
    methods: {

        /**
         *
         * @param type
         */

        allFilter(type) {
            this.ordersFilter = this.orders;
            this.changeFlags(type);

        },

        /**
         *
         * @param id
         */

        goToOrder(id){
            var path = '/order-page/'+id;
            this.$router.push({ path: path,params:{id:id} });
        },

        /**
         *
         * @param type
         */

       changeFlags(type)
        {

            this.activeTab = type;
            this.valFilter(type)
        },

        /**
         *
         * @param type
         * @returns {number}
         */
        showDropdown() {
            this.isShowDropdown=!this.isShowDropdown
        },
        changeCountPage(count){
            this.quantityPage = count;
            this.isShowDropdown=!this.isShowDropdown;
        },
        getCountOrders(type)
        {
            var positiveArr = this.orders.filter(function(order) {
                return order.status.slug == type;
            });
           return positiveArr.length;
        },
        ...mapActions('myorders',['valFilter'])

    },
    computed: {


        ...mapState('myorders',['orders','ordersFilter','countOrders','activeTab']),

        /**
         *
         * @returns {number}
         */

        rows() {
            return this.ordersFilter.length
        },

        /**
         *
         * @returns {*[]}
         */

        paginateOrders () {
            return this.ordersFilter.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage
            )
        },
    },

    mounted() {
        this.$store.dispatch('myorders/getMyOrders');

    }
}
</script>
