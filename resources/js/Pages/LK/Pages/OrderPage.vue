<template>

    <div class="container-fluid">
        <div class="row">
            <div class="xs-12 col-md-4 left_container">
                <div class="left_container_info">
                    <router-link :to="{name:'my-orders'}">
                        <div class="prev_page">Назад</div>
                    </router-link>
                    <div>
                        <ul class="nav nav-tabs transaction-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="all-tab" data-toggle="tab" href="#information" role="tab"
                                   aria-controls="information" aria-selected="true">Общая информация</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="deal-tab" data-toggle="tab" href="#documents" role="tab"
                                   aria-controls="documents" aria-selected="false">Документы</a>
                            </li>
                        </ul>
                        <div class="info-transaction_block">
                            <div class="transaction_name">Сделка №{{ order.id }}</div>
                            <div class="info_transaction">
                                <div class="status_transaction">Оплата</div>
                                <div class="create_transaction">Создана {{ order.created_at }}</div>
                            </div>
                        </div>
                        <hr/>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="information" role="tabpanel" aria-labelledby="information-tab">
                                <div>
                                    <div class="total_transaction">
                                        <div class="title_block_transaction">Итого</div>
                                        <div class="sum_transaction">Сумма сделки: <span>{{ summAll() }} ₽</span> <span class="nds">НДС</span>
                                        </div>
                                        <div class="volume_transaction">Объем сделки: <span>{{ capacityAll() }} кг</span></div>
                                    </div>
                                    <div class="delivery_transaction">
                                        <div class="title_block_transaction">Доставка</div>
                                        <div class="where_from_transaction">
                                            <div class="icon_where">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.20825 14.8779L12.4999 21.8749L19.7916 14.8779" stroke="#8898A8"
                                                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <line x1="1" y1="-1" x2="17.4719" y2="-1"
                                                          transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 11.4915 21.5967)"
                                                          stroke="#8898A8" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                            </div>
                                            <div v-if="order.from">{{order.from.region_ru}}, {{order.from.title_ru}}</div>
                                        </div>
                                        <div class="where_transaction">
                                            <div class="icon_where">
                                                <svg width="25" height="26" viewBox="0 0 25 26" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M22.9166 11.4584C22.9166 16.0129 16.3878 21.8434 13.6677 24.0749C12.9822 24.6373 12.0177 24.6373 11.3321 24.0749C8.61203 21.8434 2.08325 16.0129 2.08325 11.4584C2.08325 5.70545 6.74695 1.04175 12.4999 1.04175C18.2529 1.04175 22.9166 5.70545 22.9166 11.4584Z"
                                                        stroke="#8898A8" stroke-width="2" />
                                                    <ellipse cx="12.5" cy="11.4583" rx="3.125" ry="3.125" stroke="#8898A8"
                                                             stroke-width="2" />
                                                </svg>

                                            </div>
                                            <div v-if="order.delivery">{{ order.delivery.region_ru }}, {{order.delivery.title_ru}}</div>
                                        </div>
                                        <div class="type_transaction" v-if="order.type_delivery"  v-for="del in order.type_delivery">Тип доставки: <span>{{del.name}}</span></div>
                                        <div class="partner_transaction">Контрагент: <span v-if="order.organization">{{order.organization.name}}</span></div>
                                    </div>
                                    <div class="history_transaction">
                                        <div class="title_block_transaction">История сделки</div>
                                        <div class="date_active_transaction" v-for="history in order.history">{{history.created_at}}<span>{{ history.status.name }}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                                <div>
                                    <div class="delivery_help_documents">
                                        <div class="title_block_transaction document_title_transaction">Документы</div>
                                        <div class="description_title_block_transaction">Подсказка: какие это документы и для чего они нужны</div>
                                        <div class="document_order_save">
                                            <div class="icon_where">
                                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="25" cy="25" r="25" fill="#F0F2F4"/>
                                                    <path d="M29.6494 23.5613L25.151 28.5861L20.6526 23.5613" stroke="#444C54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <line x1="25.0225" y1="26.6289" x2="25.0225" y2="16.0535" stroke="#444C54" stroke-width="2" stroke-linecap="round"/>
                                                    <path d="M17 24V29C17 31.7614 19.2386 34 22 34H28C30.7614 34 33 31.7614 33 29V24" stroke="#444C54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span>Документ.PDF</span>
                                            </div>
                                            <div v-if="order.from">{{order.from.region_ru}}, {{order.from.title_ru}}</div>
                                        </div>
                                        <div class="document_order_save">
                                            <div class="icon_where">
                                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="25" cy="25" r="25" fill="#F0F2F4"/>
                                                    <path d="M29.6494 23.5613L25.151 28.5861L20.6526 23.5613" stroke="#444C54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <line x1="25.0225" y1="26.6289" x2="25.0225" y2="16.0535" stroke="#444C54" stroke-width="2" stroke-linecap="round"/>
                                                    <path d="M17 24V29C17 31.7614 19.2386 34 22 34H28C30.7614 34 33 31.7614 33 29V24" stroke="#444C54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <span>Документ.PDF</span>
                                            </div>
                                            <div v-if="order.delivery">{{ order.delivery.region_ru }}, {{order.delivery.title_ru}}</div>
                                        </div>
                                        <div class="type_transaction" v-if="order.type_delivery"  v-for="del in order.type_delivery">Тип доставки: <span>{{del.name}}</span></div>
                                    </div>
                                    <div class="history_transaction">
                                        <div class="title_block_transaction document_title_transaction">Выгрузка документов</div>
                                        <div class="description_title_block_transaction">Подсказка: какие это документы</div>
                                        <div class="container_document_order_save">
                                            <div class="document_order_save">
                                                <div class="icon_where">
                                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle opacity="0.4" cx="25" cy="25" r="25" fill="#CAE7BA"/>
                                                        <path d="M17 25.3137L22.6569 30.9706L33.9706 19.6569" stroke="#71BF45" stroke-width="2" stroke-linecap="round"/>
                                                    </svg>
                                                    <span>Документ.PDF</span>
                                                </div>
                                                <div v-if="order.from">{{order.from.region_ru}}, {{order.from.title_ru}}</div>
                                            </div>
                                            <div class="document_order_save">
                                                <div class="icon_where">
                                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle opacity="0.4" cx="25" cy="25" r="25" fill="#CAE7BA"/>
                                                        <path d="M17 25.3137L22.6569 30.9706L33.9706 19.6569" stroke="#71BF45" stroke-width="2" stroke-linecap="round"/>
                                                    </svg>
                                                    <span>Документ.PDF</span>
                                                </div>
                                                <div v-if="order.from">{{order.from.region_ru}}, {{order.from.title_ru}}</div>
                                            </div>
                                        </div>
                                        <div class="container_document_transaction uploaded">
                                            <div class="form-group">
                                                <input type="file" name="file" id="file" class="input-file">
                                                <label for="file" class="btn btn-tertiary js-labelFile">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 3V21" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M3 12L21 12" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <span>Загрузить подписанный договор</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="xs-12 col-md-8">
                <div class="right_container">
                    <!-- Modal -->
                   <chat-room :offerId="orderid" @changeLastMessage="changeLastMessage"></chat-room>
                    <div class="message_content"  data-toggle="modal" data-target="#messageModal">
                        <div class="conatainer_title_message">
                            <div class="title_content_message">Сообщения</div>
                            <div class="count_message">Непрочитано <span>5</span></div>
                        </div>
                        <div class="last_message">
                            <div class="top_last_message">
                                <div class="sender_last_message">
                                    <div class="photo_sender_last_message"
                                         style="background-image: url(/images/photo.png);"></div>
                                    <div class="info_sender_last_message" v-if="lastMessage.author">
                                        <div class="name_sender_last_message">{{lastMessage.author.name}}</div>
                                        <div class="post_sender_last_message" v-if="lastMessage.author && lastMessage.author.roles" v-for="role in lastMessage.author.roles">{{role.name}}</div>
                                    </div>
                                </div>
                                <div class="time_last_message">{{lastMessage.created_at}}</div>
                            </div>
                            <div class="text_last_message">
                                {{lastMessage.message}}
                            </div>

                        </div>
                    </div>
                    <div class="table_container table-responsive">
                        <div class="top_table_info">
                            <div class="transaction_objects" v-if="order.packages">
                                Объектов сделки {{order.packages.length}}
                            </div>
                            <div class="total">Итого <span>{{ summAll()}} ₽</span></div>
                        </div>
                        <table class="table default_table table_product">
                            <thead>
                            <tr>
                                <th scope="col">Товар</th>
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
                                <th scope="col">Цена закупки
                                    <span class="sort_col">
                                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751"
                                                      stroke="#22262A" stroke-width="2" stroke-linecap="round"
                                                      stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                </th>
                                <th class="sum_table" scope="col">Сумма
                                    <span class="sort_col">
                                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751"
                                                      stroke="#22262A" stroke-width="2" stroke-linecap="round"
                                                      stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="pack in order.packages">
                                <td class="bold">
                                    <div class="product_container_table">
                                        <div class="image_product_table"
                                             :style="'background-image: url('+order.offer.type.image+');'"></div>
                                        <div>{{order.offer.type.name}}</div>
                                    </div>
                                </td>
                                <td>{{pack.package.name}}</td>
                                <td>{{parseFloat(pack.capacity) * parseFloat(pack.package.value)}} кг</td>
                                <td>{{pack.price}} Р / кг</td>
                                <td class="sum_table">{{summPackage(pack.price,pack.capacity,pack.package.value)}} Р</td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="navigation_table">
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
                            <div class="page_count">
                                1-5 из 100
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ChatRoom from "../../../Сomponents/LK/ChatRoom";
export default {
    components: {ChatRoom},
    data(){
        return {
            orderid:this.$route.params.id,
            order:{},
            lastMessage:{},
        }
    },
    methods:
    {
        /**
         *
         */
        getData()
        {
            axios.get('/get/order/'+ this.orderid)
                .then((response) => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        this.order = response.data;
                    }
                })
        },

        /**
         *
         */

        getLastMessage()
        {
            axios.get('/get/last/message/'+ this.orderid)
                .then((response) => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        this.lastMessage = response.data;
                    }
                })
        },

        /**
         *
         * @param data
         */

        changeLastMessage(data)
        {
            let self = this;
            self.lastMessage = data.lastMessage;
        },

        /**
         *
         * @param price
         * @param capacity
         * @returns {number}
         */

        summPackage(price,capacity,value)
        {
            return parseFloat(price) * (parseFloat(capacity) * parseFloat(value));
        },

        /**
         *
         * @returns {number}
         */

        summAll()
        {
            let summ = 0;
            if(this.order.packages)
            {
                this.order.packages.map(function (item){
                    summ = parseFloat(summ) + ((parseFloat(item.capacity) * parseFloat(item.package.value)) * parseFloat(item.price));
                });
            }

            return summ;
        },

        /**
         *
         * @returns {number}
         */

        capacityAll()
        {
            let summ = 0;
            if(this.order.packages) {
                this.order.packages.map(function (item) {
                    summ = parseInt(summ, 10) + parseInt(item.capacity, 10);
                });
            }
            return summ;
        }
    },
    mounted()
    {
        this.getData();
        this.getLastMessage();
    }


}

</script>
