
export default {
    namespaced:true,
    state: {
        messages:[],
        messagesFromId:[],
        currentOffer:null,
    },
    getters: {

        /**
         *
         * @param state
         * @returns {[]|*}
         */

        getNews: (state) => {
            return state.messages;
        },

    },
    mutations: {

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_MESSAGES(state, data) {
            state.messages = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_MESSAGES_FROM_ID(state,data)
        {
            state.messagesFromId = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CURRENT_OFFER(state,data)
        {
            state.currentOffer = data;
        }
    },
    actions: {

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getMessages({commit})
        {
            await axios.get('/get/my/messages/all')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_MESSAGES', response.data)
                    }
                });
        },

        /**
         *
         * @param commit
         * @param data
         * @returns {Promise<void>}
         */

        async showMessages({commit},data)
        {
            await axios.get('/get/messages/' + data)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_MESSAGES_FROM_ID', response.data);
                        commit('SET_CURRENT_OFFER',data);
                    }
                });
        }


    }
}

