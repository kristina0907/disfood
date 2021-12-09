<template>
    <div class="modal fade modal_consultation" id="cityModal" tabindex="-1" aria-labelledby="cityModalLabel"
         style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                        <div class="madal_title">Укажите город </div>
                         <form ref="form" @submit.stop.prevent="handleSubmit">
                                    <b-form-group
                                        label-for="name-input"
                                        invalid-feedback="Название города обязательно"
                                        :state="changeModal"
                                    >
                                        <b-form-input
                                            id="name-input"
                                            v-model="locationInput"
                                            :state="changeModal"
                                            required
                                            v-on:keyup="searchLocation"
                                            list="my-list-id"
                                            class="select"
                                        ></b-form-input>
                                        <datalist id="my-list-id">
                                            <option v-for="location in locationsTips">{{ location.value }}</option>
                                        </datalist>
                                    </b-form-group>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="item_city">Краснодар</div>
                                            <div class="item_city">Москва</div>
                                            <div class="item_city">Екатеринбург</div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="item_city">Нижний новгород</div>
                                            <div class="item_city">Новосибирск</div>
                                            <div class="item_city">Ростов-на-Дону</div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="item_city">Самара</div>
                                            <div class="item_city">Санкт-Петербург</div>
                                            <div class="item_city">Уфа</div>
                                        </div>
                                    </div>
                                </form>
                        <div class="cityModl_btn">
                            <button class="btn_border" data-dismiss="modal" aria-label="Close">Отмена</button>
                            <button class="btn_green" type="submit" @click="handleOk">Сохранить</button>
                        </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

import vuescroll from 'vuescroll'
import {mapActions, mapState} from 'vuex'
import UserLoginAuthButton from "./UserLoginAuthButton";
import Searchlocation from "./SearchLocation";
import SearchBar from "./SearchBar";


export default {
    name:"navbar-catalog",
    components:{
        SearchBar,
        Searchlocation,
        UserLoginAuthButton,
        vuescroll,

    },
    data(){
        return {
            sidebarExpand:false,
            isExpand:false,
            searchBar:'',
            searchResults:[],
            scrollPosition:null,
            changeModal:'',
            ops: {
                scrollPanel: {
                    initialScrollY: false,
                    initialScrollX: false,
                    scrollingX: true,
                    scrollingY: true,
                    speed: 400,
                    easing: undefined,
                    verticalNativeBarPos: 'right'
                }

            }
        }
    },
    methods: {
        ...mapActions('catalog',[
            'searchLocation'
        ]),

        /**
         *
         * @returns {boolean}
         */

        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.changeModal = valid
            return valid
        },

        /**
         *
         */

        resetModal() {
            this.changeModal = ''
        },

        /**
         *
         * @param bvModalEvt
         */

        handleOk(bvModalEvt) {
            this.handleSubmit()
        },

        /**
         *
         */

        handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return
            }
            this.$nextTick(() => {
                this.$bvModal.hide('modal-prevent-closing')
            })
        },

        /**
         *
         * @returns {Promise<void>}
         */

        async searchText()
        {
            if(this.searchBar.length >= 3)
            {
                await axios.get('/get/search/all?search='+this.searchBar)
                    .then(response => {
                        if (response.data !== 'undefined' && response.data !== null) {
                            this.searchResults = response.data
                        }
                    });
            }else
            {
                this.searchResults = []
            }
        },

        /**
         *
         * @param cat
         * @param type
         */

        searchClickProduct(cat,type)
        {
             axios.post('/get/cat/type',{
                 'category_id':cat,
                 'type_id':type
             }).then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        this.updateFromSearch({'category':response.data.cat,'type':response.data.type});
                        if(this.$router.currentRoute.name !== 'catalog')
                        {
                            this.$router.push({'name':'catalog'})
                        }
                        this.searchBar = '';
                        this.searchResults = []
                    }
                });
        },

        /**
         *
         * @param cat
         * @param type
         */

        redirectToCatalog(cat, type)
        {
            //console.log(cat)
            this.$store.dispatch('catalog/redirectToCatalog', {
                cat:cat,
                type:type
            }).then(
                ()=>{
                    let path = '/catalog/category/'+cat.id;
                    if(this.$route.path !== path)
                    {
                        this.$router.replace({'path':'/catalog/category/'+cat.id+'/'+type.id,params:cat})
                    }
                   this.sidebarExpand = false;
                }
            )
        },

        /**
         *
         */

        changeDropdown()
        {
            this.isExpand = !this.isExpand
        },
        ...mapActions('catalog',['updateValueAction','getCatalogData','getCatalogTypes','updateTypeAction','getUserIP','updateFromSearch']),
        ...mapActions(['getUserData']),
    },
    mounted() {
        this.$store.dispatch('catalog/getUserIP');
        this.$store.dispatch('catalog/getCatalogData');
        this.$store.dispatch('catalog/getCatalogTypes');
    },
    computed: {
        ...mapState('catalog',['location','categories','types','categoryValue','typeValue']),
        ...mapState(['user']),
        ...mapState('catalog',['location','locationInput','locationsTips']),
        locationInput: {
            get () {
                return this.$store.state.catalog.locationInput
            },
            set (value) {
                this.$store.commit('catalog/updateLocationInput',value)
            }
        }
    },
}
</script>

