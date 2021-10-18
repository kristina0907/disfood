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
        railwayStations:[],
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

        updateCategory (state, value)
        {
            console.log(value)
            state.categoryValue = value
            let data = state.types.filter( item =>{
                return item.category_id === state.categoryValue.id;
            })
            state.filteredTypes = data;
            state.typeValue = '';
            let data1 = {
                'type':state.typeValue.id,
                'cat':state.categoryValue.id
            }
            this.dispatch('catalog/getFilteredData',data1)
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
         */

        updateType(state,value)
        {
          state.typeValue = value;
          let data = {
              'type':state.typeValue.id,
              'cat':state.categoryValue.id
          }
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

        changeCapacityPlus(state)
        {
            state.capacity = parseInt(state.capacity) + parseInt(20000);
        },

        /**
         *
         * @param state
         */

        changeCapacityMinus(state)
        {
            if(parseInt(state.capacity) > parseInt(20000))
            {
                state.capacity = parseInt(state.capacity) - parseInt(20000);
            }
            else
            {
                state.capacity = 20000;
            }
        },

        /**
         *
         * @param state
         * @param value
         */

        updateCapacity(state,value)
        {
            if(parseInt(value) >= parseInt(20000))
            {
                state.capacity = parseInt(value)
            }
            else
            {
                state.capacity = parseInt(20000);
            }
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
                console.log(exist)
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
         */

        updateRailwayStations(state,value)
        {
            state.railwayStations = value;
        }

    },
    actions: {

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

        async getFilteredData({commit}, data) {

            await axios.get('/get/catalog?category=' + data.cat + '&type=' + data.type)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATALOG', response.data)
                        commit('SET_OFFERS',response.data);
                    }
                });
            console.log(data)
            await commit('SET_CATEGORY_VALUE',data.cat);
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
            //TODO решить с парсингом валюты
            commit('changeCurrency',value);
        },

        /**
         *
         * @param commit
         */

        minusCapacity({commit})
        {
            commit('changeCapacityMinus');
        },

        /**
         *
         * @param commit
         */

        plusCapacity({commit})
        {
            commit('changeCapacityPlus');
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
            state.offers.filter(function (item){
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


        async getRailwayStation({commit,state})
        {
            if(state.locationInput.data)
            {
                await  axios.get('/get/railway/station?type=fst&index='+ state.locationInput.data.city)
                    .then(response => {
                        if(response.status == 200)
                        {
                            console.log(response.data)
                            commit('updateRailwayStations',response.data.search.stations)
                        }
                    });
            }

        }
    }
}

