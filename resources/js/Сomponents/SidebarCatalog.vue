<template>
    <div class="sidebar_catalog">
        <div class="container_filter_catalog" v-if="typeValue && typeValue.filters.length">
            <div class="item_filter_catalog" v-for="filter in typeValue.filters">
                    <div class="title_filter_catalog">{{filter.name}}</div>
                    <div class="radio" v-if="filter.values" v-for="(value,index) in filter.values">
                        <input class="custom-radio" type="radio" :id="filter.slug+'-'+index" name="packaging" value="indigo">
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
           /* categories:[],
            types:[],
            packages:[],*/
           /* catChecked:{},
            typeChecked:{},
            packagesChecked:[],*/
        }
    },
    mounted() {
       /* this.getData();
        this.$parent.$on('update-package', this.changePackages);
        this.$parent.$on('update-types', this.changeTypes);
        this.$parent.$on('update-category', this.changeCats);*/
    },
    methods:{
        //...mapActions('catalog',[''])
         /* getData()
        {
            axios.get('/get/categories/')
                .then((response) => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        this.categories = response.data;
                    }
                })
            axios.get('/get/types/')
                .then((response) => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        this.types = response.data;
                    }
                })
            axios.get('/get/packages/')
                .then((response) => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        this.packages = response.data;
                    }
                })
        },*/
        /*
        sendFilter()
        {
            let self = this;
            let catname = this.getCatName(this.catChecked);
            let type = this.getTypeName(this.typeChecked);
            let packnames =[];
            this.packagesChecked.map(function (item){
                let name = self.getPackagesNames(item);
                packnames.push(name);
            });
            this.$emit('changefilter', {
                category: self.catChecked,
                catname:catname,
                type: self.typeChecked,
                typename:type,
                packages: self.packagesChecked,
                packnames: packnames,
            })
        },
        getCatName(id)
        {
            const name = this.categories.cats.filter(function (e) {
                return e.id == id;
            });
            return name;
        },
        getTypeName(id)
        {
            const name = this.types.types.filter(function (e) {
                return e.id == id;
            });
            return name;
        },
        getPackagesNames(id)
        {
            const name = this.packages.packages.filter(function (e) {
                return e.id == id;
            });
            return name;
        },
        changePackages(data)
        {
            let self = this;
            let newarr = self.packages.packages.filter(function (item){
               return data.includes(item.name);
            });
           self.packagesChecked = newarr;
           let maparr =[];
           self.packagesChecked.map(function(item){
               maparr.push(item.id);
           })
           self.packagesChecked = maparr;
           this.sendFilter()
        },
        changeTypes(data)
        {
            let self = this;
            self.typeChecked = '';
            this.sendFilter()
        },
        changeCats(data)
        {
            let self = this;
            self.catChecked = '';
            this.sendFilter()
        }*/
    },
    computed: {
        ...mapState('catalog',['typeValue'])
    },
}
</script>
