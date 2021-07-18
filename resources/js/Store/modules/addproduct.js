export default {
    namespaced:true,
    state: {
        categoryValue: '',
        categories:[],
        typeValue:'',
        types:[],
        packings:[],
        filteredTypes:[],
        filteredProducts:[],
        products:[],
        productValue:'',
        filters:[],
        filterValue:[],
        price:0,
        priceWithNds:0,
        capacity:0,
        selectedPackings:[],
        adress:[
            {adress:''}
        ],
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

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CATEGORY_VALUE(state, data) {
            state.categoryValue = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CATEGORIES(state, data) {
            state.categories = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CATALOG_TYPES(state, data) {
            state.types = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_PACKINGS(state, data) {
            state.packings = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_SELECTED_PACKINGS(state,data)
        {
            state.selectedPackings = data
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        FILTER_TYPES(state, data) {
            state.filteredTypes = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_PRODUCTS(state, data) {
            state.products = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_FILTERED_PRODUCTS(state, data) {
            state.filteredProducts = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_TYPE_VALUE(state, data)
        {
            state.typeValue = data;
            state.filterValue = [];
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_PRODUCT_VALUE(state,data)
        {
            state.productValue = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_FILTERS(state,data)
        {
            state.filters = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_FILTER_VALUE(state,data)
        {
           if(!state.filterValue.length)
           {
               state.filterValue.push(data)
           }
           else
           {
               let exist = state.filterValue.filter(function(item){
                   return item.filter !== data.filter
               })
               state.filterValue = exist;
               state.filterValue.push(data)
           }

        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CAPACITY(state,data)
        {
          state.capacity = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_PRICE(state,data)
        {
          state.price = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_PRICE_WITH_NDS(state,data)
        {
          state.priceWithNds = data;
        }
    },
    actions: {

        /**
         *
         * @param commit
         * @param data
         */

        setPriceValue({commit},data)
        {
          commit('SET_PRICE',data);
        },

        /**
         *
         * @param commit
         * @param data
         */


        setPriceWithNdsValue({commit},data)
        {
            commit('SET_PRICE_WITH_NDS',data)
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
         * @param data
         */

        setPackingsValue({commit},data)
        {
          commit('SET_SELECTED_PACKINGS',data);
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
         * @returns {Promise<void>}
         */

        async getPackings({commit}) {
            await axios.get('/get/newproduct/data').then(response => {
                if (response.status == 200) {
                    if (response.data !== null) {
                        commit('SET_PACKINGS', response.data.packings)
                        //commit('SET_PRODUCTS',response.data.products)
                    }
                }
            });
        },

        /**
         *
         * @param commit
         * @param state
         * @param data
         */

        filterTypes({commit, state}, data) {
            commit('SET_CATEGORY_VALUE', data)
            let filtered = state.types.filter(function (item) {
                return item.category_id == data.id;
            });
            commit('FILTER_TYPES', filtered)
        },

        /**
         *
         * @param commit
         * @param state
         * @param data
         */

        filterProducts({commit, state}, data) {
            commit('SET_TYPE_VALUE', data);
            axios.get('/get/filters/' + data.id)
                .then(response => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_FILTERS', response.data)
                    }
                })
        },

        addFilterValue({commit, state}, data)
        {
           commit('SET_FILTER_VALUE',data);
        },

        /**
         *
         * @param commit
         * @param data
         */

        setCapacity({commit},data)
        {
            commit('SET_CAPACITY',data)
        },

        /**
         *
         * @param commit
         * @param data
         */

        setProductValue({commit},data)
        {
            commit('SET_PRODUCT_VALUE',data)
        },

        /**
         *
         * @param state
         * @param commit
         */

        sendDataNewProduct({state,commit,rootState})
        {
            //console.log(rootState)
            let data = {
                organization_id:rootState.user.user.current_organization_id,
                price:state.price,
                price_with_nds:state.priceWithNds,
                capacity:state.capacity,
                packings:state.selectedPackings,
                adress:state.adress,
                category_id: state.categoryValue,
                type_id:state.typeValue,
                filters:state.filterValue,
            }

            axios.post('/set/new/offer', data).then(response => {
                if(response.status == 200)
                {
                    console.log(response.status)
                    // this.$router.push({ name: 'authorization-success', query: { redirect: '/successauth' } });
                }
            });
        }
    }
}
