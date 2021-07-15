<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
        </div>

        <div class="container content">
            <div class="col-md-8">
                <div class="card-header">Все новости</div>
                <div class="card" v-if="news.length" v-for="n in news">

                    <div class="card-body">
                        <div class="col-md-12">
                            <router-link :to="{'name':'news-page',params:{id:n.id}}">
                                <h1 class="col-md-12">{{n.title}}</h1>
                            </router-link>
                            <div class="col-md-12">
                                {{n.body}}
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
            news:[]
        }
    },
    methods:{
        getNews()
        {
            axios.get('/get/news/all')
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
