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


    },
    mutations: {


        SET_CATEGORY_VALUE(state,data)
        {
            this.state.categoryValue = data;
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

        FILTER_TYPES(state,data)
        {
            state.filteredTypes = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_PRODUCTS(state,data)
        {
            state.products = data;
        },

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
                        commit('SET_PRODUCTS',response.data.products)
                    }
                }
            });
        },

        filterTypes({commit,state},data)
        {
            commit('SET_CATEGORY_VALUE',data)
           let filtered = state.types.filter(function (item) {
               return item.category_id == state.categoryValue.id;
           });
            console.log(data);
          commit('FILTER_TYPES',filtered)
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

