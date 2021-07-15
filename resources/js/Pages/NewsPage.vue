<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
        </div>

        <div class="container content">
            <div class="col-md-8">
                <div class="card-header">Все новости</div>
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-12">
                            <h1 class="col-md-12">{{news.title}}</h1>
                            <div class="col-md-12">
                                {{news.body}}
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
