import Vue from 'vue';
import Vuex from 'vuex';
import catalog from "./modules/catalog";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        catalog
    }
})

export default store;
