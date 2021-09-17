import Rootstore from "../index";
import router from "../../Router";
export default {
    namespaced:true,
    state: {
        orders:[],
        ordersFilter:[],
        activeTab:'all',
    },
    getters: {

        /**
         *
         * @param state
         * @returns {[]}
         */

        getOrders:(state) =>
        {
            return state.orders;
        },

        /**
         *
         * @param state
         * @returns {[]}
         */

        getOrdersFilter:(state) =>
        {
            return state.ordersFilter;
        },

        /**
         *
         * @param state
         * @returns {*}
         */

        getCountOrders:(state) =>
        {
          return state.countOrders;
        }
    },
    mutations: {

        /**
         *
         * @param state
         * @param value
         */

        updateMyOrders(state,value)
        {
            state.orders = value
        },

        /**
         *
         * @param state
         * @param value
         */

        updateFilterData(state,value)
        {
            state.ordersFilter = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateActiveTab(state,value)
        {
            state.activeTab = value;
        }
    },
    actions: {

        /**
         *
         * @param commit
         */

        getMyOrders({commit}) {
            axios.get('/get/my-orders/')
                    .then((response) => {
                        if (response.data !== 'undefined' && response.data !== null) {
                            commit('updateMyOrders',response.data);
                            commit('updateFilterData',response.data);
                        }
                     })
        },

        /**
         *
         * @param commit
         * @param state
         * @param type
         */

        valFilter({commit,state},type) {
            if(type === 'all')
            {
                positiveArr = state.orders;
            }
            else
            {
                var positiveArr = state.orders.filter(function (order) {
                    return order.status.slug == type;
                });
            }

            commit('updateActiveTab',type);
            commit('updateFilterData',positiveArr);
        },

        /**
         *
         * @param commit
         * @param type
         */

        updateActiveTabAction({commit},type)
        {
            commit('updateActiveTab',type);
            router.push({'name':'my-orders'});

        }

    }
}

