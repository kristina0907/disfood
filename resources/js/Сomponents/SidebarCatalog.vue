<template>
    <div class="sidebar_catalog">
        <div class="container_filter_catalog">
            <div class="item_filter_catalog" v-for="filter in typeValue.filters">
                    <div class="title_filter_catalog">{{filter.name}}</div>
                    <div class="radio" v-if="filter.values" v-for="(value,index) in filter.values">
                        <input
                            class="custom-radio"
                            type="checkbox"
                            :id="filter.slug+'-'+index"
                            :name="filter.slug"
                            :value="value.id"
                            v-on:change="filterOfferValue({'filter':filter.id,'value':value.id,'name':value.value})"
                        >
                        <label :for="filter.slug+'-'+index">{{value.value}}</label>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name:"sidebar-catalog",
    data(){
        return {

        }
    },
    mounted() {

    },
    methods:{
        ...mapActions('catalog',['filterOfferValue'])
    },
    computed: {
        ...mapState('catalog',['typeValue'])
    },
}
</script>
