import Rootstore from "../index";
export default {
    namespaced:true,
    state: {
        products:[],
        productsFilter:[],
        activeflag:false,
        noactiveFlag:false,
        allFlag:true,
    },
    getters: {
        getMyProducts:(state) =>
        {
            return state.products;
        },
    },
    mutations: {
        updateMyProducts(state,value)
        {
            state.products = value
        }
    },
    actions: {
        async getProducts({commit}) {

            if (Rootstore.state.user) {
                await axios.get('/get/my-products/' + Rootstore.state.user.user.id)
                    .then((response) => {

                        if (response.data !== 'undefined' && response.data !== null) {
                            commit('updateMyProducts',response.data);
                        }
                    })
            }
        }



    }
}

