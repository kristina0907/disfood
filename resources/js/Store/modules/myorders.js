import Rootstore from "../index";

export default {
    namespaced:true,
    state: {
        orders:[],
    },
    getters: {
        getOrders:(state) =>
        {
            return state.orders;
        },
    },
    mutations: {
        updateMyOrders(state,value)
        {
            state.orders = value
        }
    },
    actions: {
        async  getMyOrders({commit}) {
            if (Rootstore.state.user) {
                await axios.get('/get/my-orders/'+ Rootstore.state.user.user.id)
                    .then((response) => {
                        if (response.data !== 'undefined' && response.data !== null) {
                            commit('updateMyOrders',response.data);
                        }
                    })
            }
        },



    }
}

