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
        getVolume:(state) =>
        {
            return state.volume;
        },
    },
    mutations: {
        updateProduct(state,value)
        {
            state.product = value;
        },
        updateFilterPackages(state,value)
        {
            state.filterPackages = value;
        },
        updateRelatedOffers(state,value)
        {
            state.relatedOffers = value;
        },
        changePrice(state,value)
        {
            state.priceWithNDS = !state.priceWithNDS;
        },
        changeCurrency(state,value)
        {
            state.currency = value;
        },
        changeSumm(state,value)
        {
            state.summ = value;
        },
        changeVolume(state,value)
        {
            state.volume = value;
        },
        deletePackage(state,value)
        {
           state.packages.splice(value,1);
        },
        addFilterPackages(state,value)
        {
            state.filterPackages.push(value);
        },
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
        async getData({commit},productId)
        {
            await axios.get('/get/catalog/page/'+productId).then((response) => {
                if (response.data !== 'undefined' && response.data !== null) {
                    commit('updateProduct',response.data);
                    commit('updateFilterPackages',response.data.category.packages);
                }
            })
        },
        async getRelatedProducts({commit,state})
        {
            await axios.get('/get/catalog/?category='+state.product.category_id+'&type='+ state.product.type_id)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('updateRelatedOffers',response.data);
                    }
                })
        },
        changePrice({commit})
        {
           commit('changePrice');
        },
        changeCurrency({commit},value)
        {
            //TODO решить с парсингом валюты
            commit('changeCurrency',value);
        },
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
        recalc({commit,dispatch})
        {
            dispatch('calcVolume');
            dispatch('calcSumm');
        },
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
        calcSumm({commit,state})
        {
            let summ   = 0;
            summ = parseInt(state.volume) * parseInt(state.product.price);
            commit('changeSumm',summ);
        },
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
        addPackingToOrder({commit,state},pack)
        {
            commit('addPackingToOrder',pack);
        },
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
                        'from_id':state.product.city_id
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

