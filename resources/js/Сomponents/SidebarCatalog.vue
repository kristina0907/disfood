<template>
    <div class="sidebar_catalog">
        <div class="container_filter_catalog">
            <div class="item_filter_catalog">
                <div class="title_filter_catalog">Категория</div>
                <input type="checkbox" class="read-more-state" id="category" />
                <div class="read-more-wrap">
                    <div class="radio" v-for="cat in categories.cats" v-if="cat.id !== 8">
                        <input class="custom-radio" type="radio" :id="'cat-'+cat.id" name="color" :value="cat.id"
                               checked v-model="catChecked" @change="sendFilter">
                        <label :for="'cat-'+cat.id">{{cat.name}}</label>
                    </div>
                </div>
                <label for="category" class="read-more-trigger"></label>

            </div>
            <div class="item_filter_catalog">
                <div class="title_filter_catalog">Вид</div>
                <input type="checkbox" class="read-more-state" id="type" />
                <div class="read-more-wrap">
                    <div class="radio" v-for="typ in types.types" v-if="catChecked && typ.category_id == catChecked">
                        <input class="custom-radio" type="radio"  :id="'type-'+typ.id" name="type" :value="typ.id" v-model="typeChecked" @change="sendFilter">
                        <label :for="'type-'+typ.id">{{typ.name}}</label>
                    </div>

                </div>
                <label for="type" class="read-more-trigger"></label>

            </div>

            <div class="item_filter_catalog" v-if="catChecked > 0 ">
                <div class="title_filter_catalog">Размер фасовки</div>
                <div class="checkbox filter_checkbox" v-for="pack in packages.packages" v-if="pack.category_id == catChecked"  @change="sendFilter">
                    <input class="custom-checkbox" type="checkbox" :id="'size-'+pack.id" name="size" :value="pack.id" v-model="packagesChecked">
                    <label :for="'size-'+pack.id">{{pack.name}}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"sidebar-catalog",
    data(){
        return {
            categories:[],
            types:[],
            packages:[],
            catChecked:{},
            typeChecked:{},
            packagesChecked:[],
        }
    },
    mounted() {
        this.getData();
        this.$parent.$on('update-package', this.changePackages);
        this.$parent.$on('update-types', this.changeTypes);
        this.$parent.$on('update-category', this.changeCats);
    },
    methods:{
        getData()
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
        },
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
        }
    }
}
</script>
