import router from "../../Router";
export default {
    namespaced:true,
    state: {
        orderDocuments:[],
        selectedDocuments:[],
        totalVolume:0,
        totalSumm:0.00,
        itogoSumm:0,
        totalDocsSumm:0,
    },
    getters: {

        /**
         *
         * @param state
         * @returns {string}
         */

        orderDocuments: (state) => {
            return state.orderDocuments;
        },

        /**
         *
         * @param state
         * @returns {*}
         */

        totalVolume : (state) => {
            return state.totalVolume;
        },

        /**
         *
         * @param state
         * @returns {number}
         */

        totalSumm: (state) => {
            return state.totalSumm;
        },

        /**
         *
         * @param state
         * @returns {number}
         */

        itogoSumm: (state) => {
            return state.itogoSumm;
        },

        /**
         *
         * @param state
         * @returns {number}
         */

        totalDocsSumm:(state) =>
        {
            return state.totalDocsSumm;
        }
    },
    mutations: {

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_ORDER_DOCUMENTS(state, data) {
            state.orderDocuments = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_SELECTED_DOCUMENTS(state, data) {
            state.selectedDocuments = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_TOTAL_VOLUME(state, data) {
            state.totalVolume = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_TOTAL_SUMM(state, data) {
            state.totalSumm = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_ITOGO_SUMM(state, data)
        {
            state.itogoSumm = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_TOTAL_DOCUMENTS_SUMM(state,data)
        {
            state.totalDocsSumm = data;
        }

    },
    actions: {
        async getOrderDocuments({commit})
        {
            await axios.get('/get/orderdocuments')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_ORDER_DOCUMENTS', response.data)
                    }
                });
        },

        /**
         *
         * @param commit
         * @param state
         * @param data
         */

        addDocumentToCalc({commit,state},data)
        {
                let output = state.selectedDocuments;
                let newArr = [];
                if(output.length)
                {
                    let exist = output.filter(item => item.id === data.id)

                    if(exist.length)
                    {
                        newArr = output.filter(item => item.id !== exist[0].id)
                    }
                    else
                    {
                        newArr = output;
                        newArr.push(data)
                    }

                }
                else
                {
                    newArr.push(data);
                }

            commit('SET_SELECTED_DOCUMENTS', newArr);
            this.dispatch('basket/calcTotalDocumentsSumm')
            this.dispatch('basket/calcItogo')
        },

        /**
         *
         * @param commit
         * @param state
         * @param data
         */

        calcTotalVolume({commit,state},data)
        {

            let summ = 0;
            if(data.length)
            {
                for(let i = 0; i< data.length;i++)
                {
                    summ = parseInt(summ) +  (parseInt(data[i].package.value) * parseInt(data[i].value));
                }
            }
            commit('SET_TOTAL_VOLUME',summ);
        },

        /**
         *
         * @param commit
         * @param state
         * @param data
         */

        calcTotalSumm({commit,state},data)
        {
            let total = parseFloat(data.price) * parseFloat(state.totalVolume);
            commit('SET_TOTAL_SUMM',total)
        },

        /**
         *
         * @param commit
         * @param state
         */

        calcItogo({commit,state})
        {

            //TODO сюда подтянуть стоимость доставки
            let total = parseFloat(state.totalSumm) + parseFloat(20000);
            if(state.selectedDocuments.length) {
                total = parseFloat(total) + parseFloat(state.totalDocsSumm)
            }

            commit('SET_ITOGO_SUMM',total)
        },

        /**
         *
         * @param commit
         * @param state
         */

        calcTotalDocumentsSumm({commit,state})
        {
            let total = 0;
            if(state.selectedDocuments.length) {
                for (let i=0; i < state.selectedDocuments.length; i++)
                {
                    total = parseFloat(total) + parseFloat(state.selectedDocuments[i].price)
                }
            }

            commit('SET_TOTAL_DOCUMENTS_SUMM',total)
        },

        sendOrder({state,rootState})
        {

            if(rootState.user.user.current_organization_id){
                let data = {
                    organization_id:rootState.user.user.current_organization_id,
                    user_id:rootState.user.user.id,
                    offer_id:rootState.catalogpage.product.id,
                    status_id:5,
                    price:rootState.catalogpage.product.price,
                    currency:rootState.catalogpage.currency,
                    price_with_nds:rootState.catalogpage.priceWithNDS,
                    volume:state.totalVolume,
                    summ:state.itogoSumm,
                    from_id:rootState.catalogpage.product.adresses.adress,
                    to_id:rootState.catalog.location.location,
                    packings:rootState.catalogpage.packages,
                    documents:state.selectedDocuments,

                }
                //console.log(data)
                 axios.post('/set/order/new', data).then(response => {
                        if(response.status == 200)
                        {
                            console.log(response.status)
                            // this.$router.push({ name: 'authorization-success', query: { redirect: '/successauth' } });
                                //router.push({ name: 'authorization', query: { redirect: '/successauth' } });
                        }
                 });
            }
            else
            {
                router.push({ name: 'authorization', query: { redirect: '/authorization' } });
            }


           /* axios.post('/set/new/offer', data).then(response => {
                if(response.status == 200)
                {
                    console.log(response.status)
                    // this.$router.push({ name: 'authorization-success', query: { redirect: '/successauth' } });
                }
            });*/
        }


    }
}

