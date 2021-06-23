import Rootstore from "../index";
export default {
    namespaced:true,
    state: {
        products:[],
        productsFilter:[],
        activeflag:false,
        noactiveFlag:false,
        allFlag:true,
        countActive:0,
        countNoActive:0,


    },
    getters: {
        getMyProducts:(state) =>
        {
            return state.products;
        },
        getCountActive:(state) =>
        {
            return state.countActive;
        },
        getCountNoActive:(state) =>
        {
            return state.countNoActive;
        }
    },
    mutations: {
        updateMyProducts(state,value)
        {
            state.products = value
            state.productsFilter = value
        },
        updateCountActive(state,value)
        {
            var positiveArr = value.filter(function(product) {
                return product.active == true;
            });
            state.countActive = positiveArr.length;
        },
        updateCountNoActive(state,value)
        {
            var positiveArr = value.filter(function(product) {
                return product.active == false;
            });
            state.countNoActive = positiveArr.length;
        }
    },
    actions: {
        async getProducts({commit}) {
            console.log('getProducts')

                await axios.get('/get/my-products/')
                    .then((response) => {

                        if (response.data !== 'undefined' && response.data !== null) {
                            commit('updateMyProducts',response.data);
                            commit('updateCountActive',response.data);
                            commit('updateCountNoActive',response.data);
                        }
                    })

        },
        allFilter({commit,state})
        {
            state.productsFilter = state.products;
            state.activeflag =false;
            state.allFlag = true;
            state.noactiveFlag =false;
        },
        activeFilter({commit,state})
        {
            var positiveArr = state.products.filter(function(product) {
                return product.active == true;
            });
            state.productsFilter = positiveArr;
            state.activeflag =true;
            state.allFlag = false;
            state.noactiveFlag =false;
        },
        noactiveFilter({commit,state})
        {
            var positiveArr = state.products.filter(function(product) {
                return product.active == false;
            });
            state.productsFilter = positiveArr;
            state.activeflag =false;
            state.allFlag = false;
            state.noactiveFlag =true;
        },

    }
}

