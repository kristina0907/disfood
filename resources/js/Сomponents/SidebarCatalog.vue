<template>
    <div class="sidebar_catalog">
        <div class="container_filter_catalog">
            <div class="item_filter_catalog">
                <div class="title_filter_catalog">Тип фасовки</div>
                <div class="radio">
                    <input class="custom-radio" type="radio" id="packaging-1" name="packaging" value="indigo">
                    <label for="packaging-1">Весовой</label>
                </div>

                <div class="radio">
                    <input class="custom-radio" type="radio" id="packaging-2" name="packaging" value="red">
                    <label for="packaging-2">Фасованнный</label>
                </div>
            </div>
            <div class="item_filter_catalog">
                <div class="title_filter_catalog">Страна производителя</div>
                <input type="checkbox" class="read-more-state" id="countries" />
                <div class="read-more-wrap">
                    <div class="checkbox filter_checkbox">
                        <input class="custom-checkbox" type="checkbox" id="country-1" name="country"
                               value="indigo">
                        <label for="country-1">Россия</label>
                    </div>
                    <div class="checkbox filter_checkbox">
                        <input class="custom-checkbox" type="checkbox" id="country-2" name="country"
                               value="indigo">
                        <label for="country-2">Украина</label>
                    </div>
                    <div class="checkbox filter_checkbox">
                        <input class="custom-checkbox" type="checkbox" id="country-3" name="country"
                               value="indigo">
                        <label for="country-3">Азербайджан</label>
                    </div>
                    <div class="checkbox filter_checkbox read-more-target">
                        <input class="custom-checkbox" type="checkbox" id="country-5" name="country"
                               value="indigo">
                        <label for="country-5">Белоруссия</label>
                    </div>
                    <div class="checkbox filter_checkbox read-more-target">
                        <input class="custom-checkbox" type="checkbox" id="country-6" name="country"
                               value="indigo">
                        <label for="country-6">Казахстан</label>
                    </div>
                </div>
                <label for="countries" class="read-more-trigger"></label>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"sidebar-catalog",
    data(){
        return {
           /* categories:[],
            types:[],
            packages:[],*/
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
           /* axios.get('/get/categories/')
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
                })*/
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
