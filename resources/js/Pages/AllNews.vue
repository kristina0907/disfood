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
