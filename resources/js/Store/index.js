import Vue from 'vue';
import Vuex from 'vuex';
import catalog from "./modules/catalog";
import myproducts from "./modules/myproducts";
import myorders from "./modules/myorders";
import catalogpage from "./modules/catalogpage";
import addproduct from "./modules/addproduct";
import basket from "./modules/basket";
import profile from "./modules/profile";
import addcompany from "./modules/addcompany";

Vue.use(Vuex);

const store = new Vuex.Store({
    namespaced:true,
    modules:{
        catalog,
        myproducts,
        myorders,
        catalogpage,
        addproduct,
        basket,
        profile,
        addcompany
    },
    state:{
        user:null,
        currentUserOrganization:null,
        courseUSD:null,
        currentCourse:'RUB',
    },
    getters: {
        getUser:(state) =>
        {
            return state.user;
        },
        getCurrentOrganization:(state)=>
        {
            return state.currentUserOrganization;
        }
    },
    mutations: {

        /**
         *
         * @param state
         * @param value
         */

        updateUser(state, value) {
            state.user = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateCurrentOrganization(state,value)
        {
            if(value &&  value.user && value.user.current_organization_id && value.user.organizations)
            {
                let org = value.user.organizations.filter(function(organization) {
                    return organization.id == value.user.current_organization_id;
                });
                state.currentUserOrganization = org
            }
        },

        /**
         *
         * @param state
         * @param data
         */

        updateCurrentCourse(state,data)
        {
            state.courseUSD = data;
        },

        /**
         *
         * @param state
         * @param data
         */

        changeCurrentCurrency(state,data)
        {
            state.currentCourse = data;
        }
    },
    actions: {

        /**
         *
         * @param commit
         */

        getUserData({commit})
        {
            axios.get('/get/currentuser')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('updateUser', response.data)
                        commit('updateCurrentOrganization',response.data);
                    }
                });
        },

        /**
         *
         * @param commit
         * @param data
         * @returns {Promise<void>}
         */

        async changeCurrentOrganization({commit},data)
        {
            await axios.get('/change/currentOrganization/'+data)
                .then(response=>{
                    if(response.data !== 'undefined' && response.data !== null)
                    {
                        commit('updateCurrentOrganization',response.data);
                    }
            });
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getCurrentCourse({commit})
        {
            await axios.get('/get/current/courseusd')
                .then(response=>{
                    if(response.data !== 'undefined' && response.data !== null)
                    {
                        console.log(response.data)
                        commit('updateCurrentCourse',response.data);
                    }
                });
        },

        changeCourse({commit},data)
        {
            if(data)
            {
                commit('changeCurrentCurrency',data)
            }
        }
    }
})

export default store;
