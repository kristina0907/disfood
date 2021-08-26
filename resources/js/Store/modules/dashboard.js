
export default {
    namespaced:true,
    state: {
        orders:[],
        offers:[]
    },
    getters: {

        /**
         *
         * @param state
         * @returns {[]|*}
         */

        getOrders: (state) => {
            return state.orders;
        },

        /**
         *
         * @param state
         * @returns {[]|*}
         */

        getOffers : (state) => {
            return state.offers;
        },

    },
    mutations: {

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_ORDERS(state, data) {
            state.orders = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_OFFERS(state, data) {
            state.offers = data;
        },


    },
    actions: {

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getOrders({commit})
        {
            await axios.get('/get/orders')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_ORDERS', response.data)
                    }
                });
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

       async getOffers({commit})
       {
           await axios.get('/get/my-products')
               .then(response => {
                   if (response.data !== 'undefined' && response.data !== null) {
                       commit('SET_OFFERS', response.data)
                   }
               })
       }


    }
}

