import router from "../../Router";

export default {
    namespaced:true,
    state: {
        product:{},
        filterPackages:[],
        relatedOffers:[],
        priceWithNDS:false,
        currency:'RUB',
        packages:[],
        volume:0,
        summ:0,
    },
    getters: {

        /**
         *
         * @param state
         * @returns {number}
         */

        getVolume:(state) =>
        {
            return state.volume;
        },
    },
    mutations: {

        /**
         *
         * @param state
         * @param value
         */

        updateProduct(state,value)
        {
            state.product = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateFilterPackages(state,value)
        {
            state.filterPackages = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateRelatedOffers(state,value)
        {
            state.relatedOffers = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        changePrice(state,value)
        {
            state.priceWithNDS = !state.priceWithNDS;
        },

        /**
         *
         * @param state
         * @param value
         */

        changeCurrency(state,value)
        {
            state.currency = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        changeSumm(state,value)
        {
            state.summ = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        changeVolume(state,value)
        {
            state.volume = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        deletePackage(state,value)
        {
           state.packages.splice(value,1);
        },

        /**
         *
         * @param state
         * @param value
         */

        addFilterPackages(state,value)
        {
            state.filterPackages.push(value);
        },

        /**
         *
         * @param state
         * @param pack
         */

        addPackingToOrder(state,pack)
        {
            state.packages.push(
                {
                    package:pack,
                    value:0
                }
            )
            state.filterPackages.forEach(function(item, index, array) {
                if (item.id == pack.id)
                {
                    array.splice(index, 1);
                }
            })
        }
    },
    actions: {

        /**
         *
         * @param commit
         * @param productId
         * @returns {Promise<void>}
         */

        async getData({commit},productId)
        {
            await axios.get('/get/catalog/page/'+productId).then((response) => {
                if (response.data !== 'undefined' && response.data !== null) {
                    commit('updateProduct',response.data);
                    commit('updateFilterPackages',response.data.packings);
                }
            })
        },

        /**
         *
         * @param commit
         * @param state
         * @returns {Promise<void>}
         */

        async getRelatedProducts({commit,state})
        {
            await axios.get('/get/catalog/?category='+state.product.category_id+'&type='+ state.product.type_id)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('updateRelatedOffers',response.data);
                    }
                })
        },

        /**
         *
         * @param commit
         */

        changePrice({commit})
        {
           commit('changePrice');
        },

        /**
         *
         * @param commit
         * @param value
         */

        changeCurrency({commit},value)
        {
            //TODO решить с парсингом валюты
            commit('changeCurrency',value);
        },

        /**
         *
         * @param commit
         * @param state
         * @param dispatch
         * @param val
         * @param pack
         */

        changeCount({commit,state,dispatch},{val,pack})
        {
            let changePack = state.packages.find(function(item, index, array) {
                return   item.package.id == pack.package.id
            })
            switch (val){
                case 'increment':
                    changePack.value++
                    dispatch('recalc');
                    break;
                case 'decrement':
                    if( changePack.value >0)
                    {
                        changePack.value--;
                        dispatch('recalc');
                    }
                    break;
            }
        },

        /**
         *
         * @param commit
         * @param dispatch
         */

        recalc({commit,dispatch})
        {
            dispatch('calcVolume');
            dispatch('calcSumm');
        },

        /**
         *
         * @param commit
         * @param state
         */

        calcVolume({commit,state})
        {
            state.packages.forEach(item =>{
                if(item.package.value == 'undefined' || item.package.value == 'null' || item.package.value == '' || item.package.value < 0)
                {
                    item.package.value = 0;
                }
                if(item.value == 'undefined' || item.value == 'null' || item.value == '' || item.value < 0)
                {
                    item.value = 0;
                }
                let s = parseInt(item.package.value) * parseInt(item.value);
                commit('changeVolume',s);
            })
        },

        /**
         *
         * @param commit
         * @param state
         */

        calcSumm({commit,state})
        {
            let summ   = 0;
            summ = parseInt(state.volume) * parseInt(state.product.price);
            commit('changeSumm',summ);
        },

        /**
         *
         * @param commit
         * @param state
         * @param dispatch
         * @param pack
         */

        eraseCounter({commit,state,dispatch},pack)
        {
            let changePack = state.packages.findIndex(function(item, index, array) {
                return   item.package.id == pack.package.id
            })
            pack.value = 0;
            commit('addFilterPackages',pack.package)
            commit('deletePackage',changePack);
            dispatch('calcVolume');
            dispatch('calcSumm');

        },

        /**
         *
         * @param commit
         * @param state
         * @param pack
         */

        addPackingToOrder({commit,state},pack)
        {
            commit('addPackingToOrder',pack);
        },

        /**
         *
         * @param commit
         * @param state
         * @param rootState
         * @param offerId
         * @returns {Promise<void>}
         */

        async sendOffer({commit,state,rootState},offerId)
        {
            if(rootState.currentUserOrganization)
            {
                await axios.post('/set/order/new',
                    {
                        'offer_id':offerId,
                        'priceWithNDS':state.priceWithNDS,
                        'packages':state.packages,
                        'summ':state.summ,
                        'volume':state.volume,
                        'organization_id':rootState.currentUserOrganization[0].inn,
                        'user_id':rootState.user.user.id,
                        'from_id':state.product.city_id,

                    }
                ).then((response) => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        console.log(response.data)
                    }
                })
            }
            else
            {
                router.push('/authorization')
            }
        },
    }
}

