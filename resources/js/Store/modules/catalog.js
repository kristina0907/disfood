import router from "../../Router";

export default {
    namespaced:true,
    state: {
        categoryValue: '',
        categories:[],
        typeValue:'',
        types:[],
        packings:[],
        filteredTypes:[],
        products:[],
        location:{},
        locationInput:'',
        locationsTips:[],
        offers:[],
        priceWithNDS:false,
        currency:'RUB',
        capacity:20000,
        isLoading:false,
        selectedFilters:[],

    },
    getters: {

        /**
         *
         * @param state
         * @returns {string}
         */

        typeValue: (state) => {
            return state.typeValue;
        },

        /**
         *
         * @param state
         * @returns {string}
         */

        categoryValue: (state) => {
            return state.categoryValue;
        },

        /**
         *
         * @param state
         * @returns {{}}
         */

        location:(state) =>
        {
            return state.location;
        }
    },
    mutations: {

        /**
         *
         * @param state
         * @param value
         */

        async updateCategory (state, value)
        {

            state.categoryValue = value
            let data = await this.dispatch('catalog/getFilteredTypes');
            state.filteredTypes = data;
            state.typeValue = '';
            let data1 = {
                'type':state.typeValue.id,
                'cat':state.categoryValue.id
            }
            this.dispatch('catalog/getFilteredData',data1)
            router.replace({'path':'/catalog/category/'+state.categoryValue.id})
        },

        /**
         *
         * @param state
         * @param value
         * @constructor
         */

        SET_CATEGORY_VALUE(state,value)
        {
            state.categoryValue = value
        },

        /**
         *
         * @param state
         * @param value
         * @constructor
         */

        SET_TYPE_VALUE(state,value)
        {
            state.typeValue = value
        },

        /**
         *
         * @param state
         * @param value
         */

        updateType(state,value)
        {
          state.typeValue = value;
          let data = {
              'type':state.typeValue.id,
              'cat':state.categoryValue.id
          }

          router.replace({'path':'/catalog/category/'+state.categoryValue.id+'/'+state.typeValue.id})

          this.dispatch('catalog/getFilteredData',data)
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CATEGORIES(state,data)
        {
            state.categories = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CATALOG_TYPES(state,data)
        {
            state.types = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_PACKINGS(state,data)
        {
            state.packings = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_USER_LOCATION(state,data)
        {
          state.location = data;
          if(state.locationInput.length == 0)
          {
              state.locationInput = data.location.value;
          }
        },

        /**
         *
         * @param state
         * @param cat
         * @param type
         * @constructor
         */

        SELECT_CATEGORY(state,{cat,type})
        {

            state.categoryValue = cat;
            let data = null;
            if(type !== null && type !==undefined )
            {
                state.typeValue = type;

                data = {
                    'type':state.typeValue.id,
                    'cat':state.categoryValue.id
                }
            }
            else
            {
                data = {
                    'cat':state.categoryValue.id
                }
            }


            this.dispatch('catalog/getFilteredData',data)
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CATALOG(state,data)
        {
            state.products = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_OFFERS(state,data)
        {
            state.offers = data
        },

        /**
         *
         * @param state
         * @param data
         */

        updateLocationInput(state,data)
        {
            state.locationInput = data;
        },

        /**
         *
         * @param state
         * @param data
         */

        updateLocationTips(state,data)
        {
            state.locationsTips = data;
        },

        /**
         *
         * @param state
         * @param value
         */

        changePrice(state,value)
        {
            state.priceWithNDS = !state.priceWithNDS;
        },

        /**
         *
         * @param state
         * @param value
         */

        changeCurrency(state,value)
        {
            state.currency = value;
        },

        /**
         *
         * @param state
         */

        changeCapacityPlus(state,type)
        {
            let range = 20000;
            switch (type) {
                case 'auto':
                    range = 20000;
                    break;
                case 'train':
                    range = 67000;
                    break;
                case 'pickup':
                    range = 10000;
                    break;
            }
            state.capacity = parseInt(state.capacity) + parseInt(range);
        },

        /**
         *
         * @param state
         */

        changeCapacityMinus(state,type)
        {
            let range = 20000;
            switch (type) {
                case 'auto':
                    range = 20000;
                    break;
                case 'train':
                    range = 67000;
                    break;
                case 'pickup':
                    range = 10000;
                    break;
            }
            if(parseInt(state.capacity) > range)
            {
                state.capacity = parseInt(state.capacity) - parseInt(range);
            }
            else
            {
                state.capacity = range;
            }
        },

        /**
         *
         * @param state
         * @param value
         */

        updateCapacity(state,value)
        {
            let range = 20000;
            switch (value) {
                case 'auto':
                    range = 20000;
                    break;
                case 'train':
                    range = 67000;
                    break;
                case 'pickup':
                    range = 10000;
                    break;
            }
            state.capacity = range;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateSelectedFilters(state,value)
        {
            let exist = false;
            let output = [];

            if(state.selectedFilters.length > 0)
            {
                exist = state.selectedFilters.filter(function (item)
                {
                    return item === value;
                })
                if(exist.length >0)
                {
                    output = state.selectedFilters.filter(function(item)
                    {
                        return item !== value;
                    })
                    state.selectedFilters = output;
                }
                else
                {
                    state.selectedFilters.push(value);
                }
            }
            else
            {
                state.selectedFilters.push(value);
            }

        },



        /**
         *
         * @param state
         * @param value
         * @constructor
         */

        SET_FILTERED_TYPES(state,value)
        {
            state.filteredTypes = value;
        }



    },
    actions: {

        /**
         *
         * @param state
         * @returns {*[]}
         */

        getFilteredTypes({state})
        {
            let output = state.types.filter( item =>{
                return item.category_id === state.categoryValue.id;
            })
            return output;
        },


        /**
         *
         * @param commit
         */

        setFilteredTypesRefresh({commit,state})
        {
            let output = state.types.filter( item =>{
                return item.category_id === state.categoryValue.id;
            })

            commit('SET_FILTERED_TYPES',output)
        },

        /**
         *
         * @param commit
         * @param value
         */

        updateValueAction({commit}, value) {
            commit('updateCategory', value);
        },

        /**
         *
         * @param commit
         * @param value
         */

        updateTypeAction({commit}, value) {
            commit('updateType', value);
        },

        /**
         *
         * @param commit
         * @param state
         * @param value
         */

        updateTypeActionFromFrontPage({commit, state}, value) {
            commit('SELECT_CATEGORY', {'cat': value})
        },

        /**
         *
         * @param commit
         * @param state
         * @param category
         * @param type
         */

        updateFromSearch({commit, state}, {category, type}) {
            commit('updateCategory', category);
            commit('updateType', type);
            let data1 = {
                'type': state.typeValue.id,
                'cat': state.categoryValue.id
            }
            this.dispatch('catalog/getFilteredData', data1)
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getCatalogData({commit}) {
            await axios.get('/get/categories')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATEGORIES', response.data.cats)
                    }
                });
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getCatalogTypes({commit}) {
            await axios.get('/get/types')
                .then(response => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATALOG_TYPES', response.data.types)
                    }
                })
        },

        /**
         *
         * @param commit
         * @param data
         * @returns {Promise<void>}
         */

        async getFilteredData({commit,state}, data) {

            await axios.get('/get/catalog?category=' + data.cat + '&type=' + data.type)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATALOG', response.data)
                        commit('SET_OFFERS',response.data);
                    }
                });


            if(data.cat !== null && data.cat !== undefined && data.cat)
            {
                let category = state.categories.find(item=>parseInt(item.id) === parseInt(data.cat))
                commit('SET_CATEGORY_VALUE',category);
            }


            if(data.type !== null && data.type !== undefined && data.type)
            {
                let typeVal = state.types.find(item=>parseInt(item.id) === parseInt(data.type))
                commit('SET_TYPE_VALUE',typeVal);
            }

        },

        /**
         *
         * @param commit
         * @param state
         * @param filter
         * @param value
         */

        filterOfferValue({commit, state}, {filter, value,name})
        {
            let exist =[];
            state.offers.filter(function (item){
                if(item.values.length)
                {
                    item.values.map(function (val){
                        if(val.id === value)
                        {
                            exist.push(item);
                        }
                    })
                }
            })
            commit('SET_CATALOG',exist);
            commit('updateSelectedFilters',name)
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getPackings({commit})
        {
            await axios.get('/get/newproduct/data').then(response => {
                if(response.status == 200)
                {
                    if(response.data !== null)
                    {
                        commit('SET_PACKINGS',response.data.packings)
                    }
                }
            });
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getUserIP({commit})
        {
            await axios.get('/get/location')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_USER_LOCATION', response.data)
                    }
                });
        },

        /**
         *
         * @param commit
         * @param data
         */

        redirectToCatalog({commit}, data)
        {
            commit('SELECT_CATEGORY',data);
        },

        /**
         *
         * @param commit
         * @param state
         * @returns {Promise<void>}
         */

        async searchLocation({commit,state},data)
        {

            if(data.length >= 4)
            {
                    state.isLoading = true;
                    await axios.get('/get/location/from/text/'+ data)
                        .then(response => {
                            if (response.data !== 'undefined' && response.data !== null) {
                                commit('updateLocationTips', response.data.suggestions)
                            }
                        });
            }
            state.isLoading = false;
        },

        /**
         *
         * @param state
         * @param commit
         */

        sendDataNewProduct({state,commit})
        {
            axios.post('/set/new/offer', {
                product_id:this.selectedProduct,
                organization_inn:this.companyName,
                inn:this.inn,
                userName:this.userName,
                userSurname:this.userSurname,
                userPhone:this.userPhone,
                userEmail:this.userEmail,
                userPassword:this.userPassword,

            }).then(response => {
                if(response.status == 200)
                {
                    console.log(response.status)
                    // this.$router.push({ name: 'authorization-success', query: { redirect: '/successauth' } });
                }
            });
        },


        /**
         *
         * @param commit
         */

        changePrice({commit})
        {
            commit('changePrice');
        },

        /**
         *
         * @param commit
         * @param value
         */

        changeCurrency({commit},value)
        {
            //TODO ???????????? ?? ?????????????????? ????????????
            commit('changeCurrency',value);
        },

        /**
         *
         * @param commit
         */

        minusCapacity({commit},type)
        {
            commit('changeCapacityMinus',type);
        },

        /**
         *
         * @param commit
         */

        plusCapacity({commit},type)
        {
            commit('changeCapacityPlus',type);
        },

        /**
         *
         * @param commit
         * @param value
         */

        setCapacity({commit},value)
        {
            commit('updateCapacity',value);
        },

        /**
         *
         * @param commit
         * @param state
         * @param value
         */

        deleteFilter({commit,state},value)
        {
            let exist =[];
            state.offers.filter(function (item)
            {
                if(item.values.length)
                {
                    item.values.map(function (val){
                        if(val.value === value)
                        {
                            exist.push(item);
                        }
                    })
                }
            })
            commit('SET_CATALOG',exist);
            commit('updateSelectedFilters',value)
           // commit('updateSelectedFilters',value);
        },

        /**
         *
         * @param commit
         * @param state
         * @returns {Promise<void>}
         */

        async getRailwayStation({commit,state,rootState})
        {
            if(rootState.searchlocation.locationDeliveryInput && rootState.searchlocation.locationDeliveryInput.data)
            {
                await  axios.get('/get/railway/station?type=fst&index='+ rootState.searchlocation.locationDeliveryInput.data.city)
                    .then(response => {
                        if(response.status == 200 && response.data && response.data.error !== 'error')
                        {
                            commit('updateRailwayStations',response.data.search,{root:true})
                        }
                    });
            }
        }
    }
}

