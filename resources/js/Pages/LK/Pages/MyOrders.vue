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
                        <div class="item_sort" :class="{'active':flags[0]['allFlag']}" @click="changeFlags('all')">Все <span>&#183;</span>
                            <span v-if="orders">
                            {{ orders.length }}
                            </span>
                        </div>
                        <div class="item_sort" :class="{'active':flags[1]['newFlag']}" @click="changeFlags('new')">Новые <span>&#183;</span>{{getCountOrders('new')}}</div>
                        <div class="item_sort" :class="{'active':flags[2]['payingFlag']}" @click="changeFlags('paying')">Оплата <span>&#183;</span> {{getCountOrders('paying')}}</div>
                        <div class="item_sort" :class="{'active':flags[3]['acceptedFlag']}" @click="changeFlags('accepted')">Подтвержден <span>&#183;</span>{{getCountOrders('accepted')}}</div>
                        <div class="item_sort" :class="{'active':flags[4]['pogruzkaFlag']}" @click="changeFlags('pogruzka')">Погрузка <span>&#183;</span>{{getCountOrders('pogruzka')}}</div>
                        <div class="item_sort" :class="{'active':flags[5]['deliveryFlag']}" @click="changeFlags('delivery')">Доставляется <span>&#183;</span>{{getCountOrders('delivery')}}</div>
                        <div class="item_sort" :class="{'active':flags[6]['completeFlag']}" @click="changeFlags('complete')">Завершена <span>&#183;</span>{{getCountOrders('complete')}}</div>
                        <div class="item_sort" :class="{'active':flags[7]['cancelledFlag']}" @click="changeFlags('cancelled')">Не состоялась <span>&#183;</span>{{getCountOrders('cancelled')}} </div>
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
                    <table class="table default_table">
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
                        <tbody>
                        <tr v-for="order in ordersFilter" @click="goToOrder(order.id)">
                                <td>
                                    {{order.id}}
                                </td>
                                <td>{{order.created_at}}</td>
                                <td class="bold">{{order.offer.product.name}}</td>
                                <td>10000 кг</td>
                                <td>50кг</td>
                                <td>20 734 349 р</td>
                                <td>Самовывоз</td>
                                <td>{{order.organization.name}}</td>
                                <td>{{ order.delivery.region_be }}</td>
                                <td class="status_table">
                                    <span class="status_completed">{{ order.status.name }}</span>
                                </td>
                        </tr>
                        </tbody>
                    </table>
<!--                    <div class="navigation_table">
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
                                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M8 1L1.03683 7.96317L8 14.9263" stroke="#22262A" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
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
                                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1 1L7.96317 7.96317L1 14.9263" stroke="#22262A" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
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
</template>

<script>


import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
import {mapActions, mapState} from "vuex";
export default {
    components: {UserLKHeader},
    data(){
        return {
            flags:[
                {allFlag:true},
                {newFlag:false},
                {payingFlag:false},
                {acceptedFlag:false},
                {pogruzkaFlag:false},
                {deliveryFlag:false},
                {completeFlag:false},
                {cancelledFlag:false},
            ],
        }
    },
    methods: {

        allFilter(type) {
            this.ordersFilter = this.orders;
            this.changeFlags(type);

        },
        goToOrder(id){
            var path = '/order-page/'+id;
            this.$router.push({ path: path,params:{id:id} });
        },
       changeFlags(type)
        {
            var str = type + 'Flag';
            this.flags.map(function (flag){
                if(str == Object.keys(flag).[0])
                {
                    flag[str] = true;
                }
                else
                {
                    flag[Object.keys(flag).[0]] = false;
                }
            })
            this.valFilter(type)
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
        ...mapState('myorders',['orders','ordersFilter','countOrders']),
    },
    mounted() {
        this.$store.dispatch('myorders/getMyOrders');

    }
}
</script>
