<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
        </div>
        <div class="container_main">
            <div class="news_company_block">
                <div class="head_detailed_news">
                    <div class="title_detailed_news">{{news.title}}</div>
                    <div class="bread_crumbs">Новости  •  Индустрия</div>
                </div>
                <div class="detailed_news_img" v-bind:style="{ backgroundImage: 'url(/storage' + n.image + ')' }"></div>
                <div  v-html="news.body" class="detailed_news_content"></div>
                <div class="news_company_block">
                    <div class="header_news_company_block">
                        <div class="title_news_company_block">Другие новости</div>
                        <div class="all_news_company_block"><a href="">См. все</a></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-4">
                            <div class="item_list_news">
                                <div class="img_item_list_news" v-bind:style="{ backgroundImage: 'url(/storage' + n.image + ')' }">
                                </div>
                                <div class="title_item_list_news_company">Цены на молочные продукты увеличат в ближайшее время</div>
                                <div class="category_news_item_list_news_company">
                                    Новости • Индустрия
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-4">
                            <div class="item_list_news">
                                <div class="img_item_list_news" v-bind:style="{ backgroundImage: 'url(/storage' + n.image + ')' }">
                                </div>
                                <div class="title_item_list_news_company">Цены на молочные продукты увеличат в ближайшее время</div>
                                <div class="category_news_item_list_news_company">
                                    Новости • Индустрия
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-4">
                            <div class="item_list_news">
                                <div class="img_item_list_news" v-bind:style="{ backgroundImage: 'url(/storage' + n.image + ')' }">
                                </div>
                                <div class="title_item_list_news_company">Цены на молочные продукты увеличат в ближайшее время</div>
                                <div class="category_news_item_list_news_company">
                                    Новости • Индустрия
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

import HeaderCatalog from "../Сomponents/HeaderCatalog";
export default {
    components:{
        HeaderCatalog
    },
    data(){
        return {
            news_id:this.$route.params.id,
            news:{}
        }
    },
    methods:{
        getNews()
        {
            axios.get('/get/news/page/'+this.news_id)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        this.news = response.data
                    }
                })
        }
    },
    mounted() {
        this.getNews();
        console.log('Component mounted.')
    }
}
</script>
