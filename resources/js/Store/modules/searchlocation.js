
export default {
    namespaced:true,
    state: {
        locationDeliveryInput:[],
        locationsTips:[]
    },
    getters: {

        /**
         *
         * @param state
         * @returns {[]|*}
         */

        getLocation: (state) => {
            return state.locationDeliveryInput.value;
        },

    },
    mutations: {

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_LOCATION(state, data) {
            state.locationDeliveryInput = data;
        },

        /**
         *
         * @param state
         * @param data
         */

        updateLocationTips(state,data)
        {
            state.locationsTips = data;
        },

    },
    actions: {

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        updateDeliveryInput({commit,dispatch,state},value)
        {
           commit('SET_LOCATION', value)
           dispatch('catalog/getRailwayStation',value.value,{root:true})
           dispatch('catalogpage/getAutoDistanceDelivery',[],{root:true});

        },

        /**
         *
         * @param commit
         * @param state
         * @param data
         * @returns {Promise<void>}
         */

        async searchLocation({commit,state},data)
        {
            if(data.length >= 4)
            {
                await axios.get('/get/location/from/text/'+ data)
                    .then(response => {
                        if (response.data !== 'undefined' && response.data !== null) {
                            commit('updateLocationTips', response.data.suggestions)
                        }
                    });
            }
        },

    }
}

