<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>
        <div class="row">
            <div class="xs-12 col-md-4 left_container message_left_container">
                <div class="left_container_info message_left_container_info">
                    <div class="search_sidebar">
                        <input type="text" id="search_sidebar" placeholder="Поиск">
                        <div class="icon_search_sidebar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                                        stroke="#8898A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 22L18 18" stroke="#8898A8" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="icon_search_sidebar_clear">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6L18.7742 18.7742" stroke="#22262A" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6 18.7742L18.7742 5.99998" stroke="#22262A" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="deal_sidebar">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab"
                                   aria-controls="all" aria-selected="true">Все</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="deal-tab" data-toggle="tab" href="#deal" role="tab"
                                   aria-controls="deal" aria-selected="false">Сделки</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="alerts-tab" data-toggle="tab" href="#alerts" role="tab"
                                   aria-controls="alerts" aria-selected="false">Оповещения</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab" v-if="messages">
                                <div class="item_deal_sidebar" v-for="(message,index) in messages">
                                    <div class="left_item_deal_sidebar" @click="showMessage(index)">
                                        <div class="tile_item_deal_sidebar">Сделка {{index}}</div>
                                        <div class="text_item_deal_sidebar">
                                            {{message[message.length - 1].message}}
                                        </div>
                                    </div>
                                    <div class="right_item_deal_sidebar">
                                        <div class="time_item_deal_sidebar"> {{message[message.length - 1].created_at | moment("HH:MM D-MM-YYYY")}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="deal" role="tabpanel" aria-labelledby="deal-tab">
                                <div class="item_deal_sidebar">
                                    <div class="left_item_deal_sidebar">
                                        <div class="tile_item_deal_sidebar">Сделка 454 543</div>
                                        <div class="text_item_deal_sidebar">Пока у нас недостаточно данных о товаре,
                                            чтобы давать вам </div>
                                    </div>
                                    <div class="right_item_deal_sidebar">
                                        <div class="time_item_deal_sidebar">19:00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="alerts" role="tabpanel" aria-labelledby="alerts-tab">
                                <div class="item_deal_sidebar">
                                    <div class="left_item_deal_sidebar">
                                        <div class="tile_item_deal_sidebar">Сделка 454 543</div>
                                        <div class="text_item_deal_sidebar">Пока у нас недостаточно данных о товаре,
                                            чтобы давать вам </div>
                                    </div>
                                    <div class="right_item_deal_sidebar">
                                        <div class="time_item_deal_sidebar">19:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="xs-12 col-md-8">
                <div class="right_container">
                    <div class="select_deal_container" v-if="!messagesFromId.length">
                        <div class="image_select_deal">
                            <svg width="87" height="84" viewBox="0 0 87 84" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M22.5033 7.41667C11.1815 7.41667 2.00334 16.7068 2.00334 28.1667V42C2.00334 42.8312 2.05162 43.651 2.14551 44.4567C2.05087 44.7737 2 45.11 2 45.4583V75.9808C2 78.9355 5.4239 80.5294 7.6402 78.6066L25.3527 63.2393C25.7164 62.9238 26.1818 62.75 26.6633 62.75H63.5033C74.8252 62.75 84.0033 53.4599 84.0033 42V28.1667C84.0033 16.7068 74.8252 7.41667 63.5033 7.41667H22.5033Z"
                                        stroke="#71BF45" stroke-width="4" />
                            </svg>
                        </div>
                        <div class="text_select_deal">Выберите сделку</div>
                    </div>
                    <div v-else>
                        <div class="head_deal_message">
                            <div class="left_head_deal_message">
                                <div class="name_head_deal_message">Сделка {{currentOffer}}</div>
                                <div class="go_head_deal_message">
                                    <router-link :to="{path:'order-page/'+currentOffer}">Перейти к сделке</router-link>
                                </div>
                            </div>
<!--                            <div class="right_head_deal_message">
                                <div class="search_head_deal_message">
                                    <div class="icon_head_deal_message">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                                                stroke="#22262A" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M22 22L18 18" stroke="#22262A" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="open_search_head_deal_message">
                                    <div class="arrow_search">
                                        <div class="top_arrow_search">
                                            <svg width="26" height="14" viewBox="0 0 26 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.667 12.6054L13.0617 1.00015L1.45642 12.6054" stroke="#8898A8"
                                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div class="top_botton_search">
                                            <svg width="26" height="14" viewBox="0 0 26 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.33301 1.39456L12.9383 12.9999L24.5436 1.39456" stroke="#71BF45"
                                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="container_input_search">
                                        <div class="text_input">Поиск</div>
                                        <input type="text" value="Договор">
                                        <div class="clear_input_search_head_deal">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 6.00003L18.7742 18.7742" stroke="#22262A" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6 18.7742L18.7742 6.00001" stroke="#22262A" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </div>-->
                        </div>
                        <div class="container_message">
                            <div class="list_message_date">
                                <div class="item_message" v-if="messagesFromId" v-for="message in messagesFromId">
                                    <div class="top_message">
                                        <div class="sender_message">
                                            <div class="photo_sender_message"
                                                 style="background-image: url(./assets/images/photo.png);"></div>
                                            <div class="info_sender_message">
                                                <div class="name_sender_message">{{message.author.name}}</div>
                                                <div class="post_sender_message">{{message.author.dolgnost}}</div>
                                            </div>
                                        </div>
                                        <div class="time_message">{{message.created_at | moment("HH:MM D-MM-YYYY")}}</div>
                                    </div>
                                    <div class="text_message">
                                       {{message.message}}
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


import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
import {mapActions, mapState} from "vuex";
export default {
    components: {UserLKHeader},
    data(){
        return {

        }
    },
    methods:{
        ...mapActions['mymessages',['getMessages','showMessages']],

        /**
         *
         * @param id
         */

        showMessage(id)
        {
            this.$store.dispatch('mymessages/showMessages',id);
        }
    },
    mounted() {
        this.$store.dispatch('mymessages/getMessages');
    },
    computed: {
        ...mapState('mymessages',['messages','messagesFromId','currentOffer'])
    },
}
</script>
