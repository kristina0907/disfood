import Rootstore from "../index";

export default {
    namespaced:true,
    state: {
        orders:[],
        ordersFilter:[],
    },
    getters: {
        getOrders:(state) =>
        {
            return state.orders;
        },
        getOrdersFilter:(state) =>
        {
            return state.ordersFilter;
        },
        getCountOrders:(state) =>
        {
          return state.countOrders;
        }
    },
    mutations: {
        updateMyOrders(state,value)
        {
            state.orders = value
        },
        updateFilterData(state,value)
        {
            state.ordersFilter = value;
        },
    },
    actions: {
        getMyOrders({commit}) {
            axios.get('/get/my-orders/')
                    .then((response) => {
                        if (response.data !== 'undefined' && response.data !== null) {
                            commit('updateMyOrders',response.data);
                            commit('updateFilterData',response.data);
                        }
                     })
        },
        valFilter({commit,state},type) {
            var positiveArr = state.orders.filter(function (order) {
                return order.status.slug == type;
            });
            commit('updateFilterData',positiveArr);
        },

    }
}

