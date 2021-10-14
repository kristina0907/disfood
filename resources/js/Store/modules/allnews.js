
export default {
    namespaced:true,
    state: {
        news:[],

    },
    getters: {

        /**
         *
         * @param state
         * @returns {[]|*}
         */

        getNews: (state) => {
            return state.news;
        },

    },
    mutations: {

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_NEWS(state, data) {
            state.news = data;
        },


    },
    actions: {

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getNews({commit})
        {
            await axios.get('/get/news/all')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_NEWS', response.data)
                    }
                });
        },


    }
}

