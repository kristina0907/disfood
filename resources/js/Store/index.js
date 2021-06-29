import Vue from 'vue';
import Vuex from 'vuex';
import catalog from "./modules/catalog";
import myproducts from "./modules/myproducts";
import myorders from "./modules/myorders";
import catalogpage from "./modules/catalogpage";
Vue.use(Vuex);

const store = new Vuex.Store({
    namespaced:true,
    modules:{
        catalog,
        myproducts,
        myorders,
        catalogpage
    },
    state:{
      user:null,
      currentUserOrganization:null,
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
        updateUser(state, value) {
            state.user = value;
        },
        updateCurrentOrganization(state,value)
        {
            if(value &&  value.user && value.user.current_organization_id && value.user.organizations)
            {
                let org = value.user.organizations.filter(function(organization) {
                    return organization.id == value.user.current_organization_id;
                });
                state.currentUserOrganization = org
            }
        }
    },
    actions: {
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
        async changeCurrentOrganization({commit},data)
        {
            await axios.get('/change/currentOrganization/'+data)
                .then(response=>{
                    if(response.data !== 'undefined' && response.data !== null)
                    {
                        commit('updateCurrentOrganization',response.data);
                    }
            });
        }
    }
})

export default store;
