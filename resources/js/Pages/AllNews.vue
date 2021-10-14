<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
        </div>
        <div class="container_main">
            <div class="news_company_block">
                <div class="title_news">Новости</div>
                <div class="tab_news">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#all"
                               role="tab" aria-controls="all" aria-selected="true">Все</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="vegetables-tab" data-toggle="tab" href="#vegetables" role="tab"
                               aria-controls="vegetables" aria-selected="false">Овощи</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="fruits-tab" data-toggle="tab" href="#fruits" role="tab"
                               aria-controls="fruits" aria-selected="false">Фрукты</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="IP-tab" data-toggle="tab" href="#IP" role="tab"
                               aria-controls="IP" aria-selected="false">Зелень</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="all" role="tabpanel"
                             aria-labelledby="company-tab">
                            <div class="row">
                                <div v-if="news.length" v-for="n in news" class="col-xs-12 col-md-4">
                                    <div class="item_list_news">
                                        <div class="img_item_list_news" v-bind:style="{ backgroundImage: 'url(' + n.image + ')' }">
                                        </div>
                                        <router-link :to="{'name':'news-page',params:{id:n.id}}">
                                            <div class="title_item_list_news_company">{{n.title}}</div>
                                        </router-link>
                                        <div class="category_news_item_list_news_company">
                                            Новости • Индустрия
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="news_pagination">
                                <nav>
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" href="#">
                                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 1L1.03683 7.96317L8 14.9263" stroke="#22262A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </a></li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                                        <li class="page-item"><a class="page-link" href="#">...</a></li>
                                        <li class="page-item"><a class="page-link" href="#">20</a></li>
                                        <li class="page-item"><a class="page-link" href="#">
                                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L7.96317 7.96317L1 14.9263" stroke="#22262A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="vegetables" role="tabpanel" aria-labelledby="vegetables-tab">
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HeaderCatalog from "../Сomponents/HeaderCatalog";
import {mapActions, mapState} from "vuex";
export default {
    components:{
        HeaderCatalog
    },
    data(){
        return {
        }
    },
    methods:{
        ...mapActions['allnews',['getNews']]
    },
    mounted() {
        this.$store.dispatch('allnews/getNews');
    },
    computed: {
        ...mapState('allnews',['news'])
    },
}
</script>
