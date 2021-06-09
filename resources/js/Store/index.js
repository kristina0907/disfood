import Vue from 'vue';
import Vuex from 'vuex';
import catalog from "./modules/catalog";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        catalog
    },
    state:{
      user:null,
    },
    getters: {
        getUser:(state) =>
        {
            return state.user;
        }
    },
    mutations: {
        updateUser(state, value) {
            state.user = value
        },
    },
    actions: {
        async getUserData({commit})
        {
            await axios.get('/get/currentuser')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('updateUser', response.data)
                    }
                });
        },
    }
})

export default store;
