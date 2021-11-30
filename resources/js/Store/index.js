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
import dashboard from "./modules/dashboard";
import editproduct from "./modules/editproduct";
import allnews from "./modules/allnews";
import searchlocation from "./modules/searchlocation";
import mymessages from "./modules/mymessages";
import accreditationprovider from "./modules/accreditationprovider";


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
        addcompany,
        dashboard,
        editproduct,
        allnews,
        searchlocation,
        mymessages,
        accreditationprovider
    },
    state:{
        user:null,
        currentUserOrganization:null,
        courseUSD:null,
        currentCourse:'RUB',
        railwayStations:[],
        railwayStation:'',
        deliveryDistance:'',
        autoDistance:'',
        autoCoords:''
    },
    getters: {
        /**
         *
         * @param state
         * @returns {null}
         */

        getUser:(state) =>
        {
            return state.user;
        },

        /**
         *
         * @param state
         * @returns {null}
         */

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
         * @constructor
         */

        SET_AUTO_DISTANCE(state,value)
        {
            state.autoDistance = value;
        },

        /**
         *
         * @param state
         * @param value
         * @constructor
         */

        SET_AUTO_COORDS(state,value)
        {
           state.autoCoords = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateUser(state, value)
        {
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
                let org = value.user.organizations.filter(function(organization)
                {
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
        },

        /**
         *
         * @param state
         * @param value
         */

        updateRailwayStations(state,value)
        {
            state.railwayStations = value;
        },

        /**
         *
         * @param state
         * @param value
         * @constructor
         */

        SET_RAILWAY_STATION(state,value)
        {
            state.railwayStation = value.index[0];
        },

        /**
         *
         * @param state
         * @param value
         * @constructor
         */

        SET_DELIVERY_DISTANCE(state,value)
        {
            state.deliveryDistance = value.search;
        }
    },
    actions: {

        /**
         *
         * @param commit
         */

        getUserData({commit}) {
            axios.get('/get/currentuser')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('updateUser', response.data)
                        commit('updateCurrentOrganization', response.data);
                    }
                });
        },

        /**
         *
         * @param commit
         * @param data
         * @returns {Promise<void>}
         */

        async changeCurrentOrganization({commit}, data) {
            await axios.get('/change/currentOrganization/' + data)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('updateCurrentOrganization', response.data);
                    }
                });
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getCurrentCourse({commit}) {
            await axios.get('/get/current/courseusd')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        //console.log(response.data)
                        commit('updateCurrentCourse', response.data);
                    }
                });
        },

        /**
         *
         * @param commit
         * @param data
         */

        changeCourse({commit}, data) {
            if (data) {
                commit('changeCurrentCurrency', data)
            }
        },

        /**
         *
         * @param commit
         * @param data
         */

        setRailwayStation({commit,dispatch}, data)
        {
            commit('SET_RAILWAY_STATION', data);
            dispatch('getDistanceDelivery');
            dispatch('getAutoDistanceDelivery');
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getDistanceDelivery({commit,state})
        {
            await axios.get('/get/railway/station/distance?type=calc&tst='+state.railwayStation+'&fst='+state.catalogpage.product.railway_station+'&fre='+state.catalogpage.product.type.etsn)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        console.log(response.data)
                        commit('SET_DELIVERY_DISTANCE', response.data);
                    }
                });
        },

        /**
         *
         * @param commit
         * @param state
         * @returns {Promise<void>}
         */

        async getAutoDistanceDelivery({commit,state})
        {
            let fromLat = '';
            let fromLon = '';
            let toLat = '';
            let toLon = '';


            if(state.catalogpage.product && state.catalogpage.product.adresses)
            {
                for(let i=0;i<state.catalogpage.product.adresses.length;i++)
                {
                    if(state.catalogpage.product.adresses[i].type == 'storage')
                    {
                        fromLat = state.catalogpage.product.adresses[i].geo_lat;
                        fromLon = state.catalogpage.product.adresses[i].geo_lon;
                    }
                }
            }

            if(state.searchlocation.locationDeliveryInput && state.searchlocation.locationDeliveryInput.data)
            {
                toLat = state.searchlocation.locationDeliveryInput.data.geo_lat;
                toLon = state.searchlocation.locationDeliveryInput.data.geo_lon;
            }

            //console.log('fromLat= '+fromLat+' fromLon= ' + fromLon + ' toLat= ' + toLat + ' toLon= ' + toLon )
            if(fromLat  && fromLon && toLat && toLon)
            {
                await axios.get('/get/autodelivery/distance?latitude_from='+fromLat+'&latitude_to='+toLat+'&longitude_from='+fromLon+'&longitude_to='+toLon)
                    .then(response => {
                        if (response.data !== 'undefined' && response.data !== null) {
                            console.log(response.data)
                            commit('SET_AUTO_DISTANCE', response.data);
                        }
                    });
            }


        }

    }
})

export default store;
