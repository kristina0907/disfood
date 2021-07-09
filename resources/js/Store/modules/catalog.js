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
            state.typeValue = type;
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

        SET_CATALOG(state,data)
        {
            state.products = data;
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
            state.locationsTips = data.suggestions;
        }
    },
    actions: {

        /**
         *
         * @param commit
         * @param value
         */

        updateValueAction ({ commit }, value)
        {
            commit('updateCategory', value);
        },

        /**
         *
         * @param commit
         * @param value
         */

        updateTypeAction({commit},value)
        {
          commit('updateType',value);
        },

        /**
         *
         * @param commit
         * @param state
         * @param category
         * @param type
         */

        updateFromSearch({commit,state},{category,type})
        {
              commit('updateCategory',category);
              commit('updateType',type);
              let data1 = {
                    'type':state.typeValue.id,
                    'cat':state.categoryValue.id
              }
              this.dispatch('catalog/getFilteredData',data1)
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getCatalogData({commit})
        {
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

        async getCatalogTypes({commit})
        {
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

        async getFilteredData({commit},data)
        {

            await axios.get('/get/catalog/?category='+data.cat+'&type='+ data.type)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATALOG', response.data)
                    }
                });
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

        async searchLocation({commit,state})
        {
            if(state.locationInput.length >= 4)
            {
                    await axios.get('/get/location/from/text/'+state.locationInput)
                        .then(response => {
                            if (response.data !== 'undefined' && response.data !== null) {
                                commit('updateLocationTips', response.data)
                            }
                        });
            }
        },

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
        }
    }
}

