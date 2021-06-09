export default {
    namespaced:true,
    state: {
        categoryValue: '',
        categories:[],
        typeValue:'',
        types:[],
        filteredTypes:[],
        products:[],
        location:{},
    },
    getters: {
        typeValue: (state) => {
            return state.typeValue;
        },
        categoryValue: (state) => {
            return state.categoryValue;
        },
        location:(state) =>
        {
            return state.location;
        }
    },
    mutations: {
        updateCategory (state, value)
        {
            state.categoryValue = value
            let data = state.types.filter( item =>{
                return item.category_id === state.categoryValue.id;
            })
            state.filteredTypes = data;
            state.typeValue = '';
            let data1 = {
                'type':state.typeValue.id,
                'cat':state.categoryValue.id
            }
            this.dispatch('catalog/getFilteredData',data1)
        },
        updateType(state,value)
        {
          state.typeValue = value;
          let data = {
              'type':state.typeValue.id,
              'cat':state.categoryValue.id
          }
          this.dispatch('catalog/getFilteredData',data)
        },
        SET_CATEGORIES(state,data)
        {
            state.categories = data;
        },
        SET_CATALOG_TYPES(state,data)
        {
            state.types = data;
        },
        SET_USER_LOCATION(state,data)
        {
          state.location = data;
        },
        SELECT_CATEGORY(state,{cat,type})
        {
            state.categoryValue = cat;
            state.typeValue = type;
            let data = {
                'type':state.typeValue.id,
                'cat':state.categoryValue.id
            }
            this.dispatch('catalog/getFilteredData',data)
        },
        SET_CATALOG(state,data)
        {
            state.products = data;
        }
    },
    actions: {
        updateValueAction ({ commit }, value)
        {
            commit('updateCategory', value);
        },
        updateTypeAction({commit},value)
        {
          commit('updateType',value);
        },
        async getCatalogData({commit})
        {
            await axios.get('/get/categories')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATEGORIES', response.data.cats)
                    }
                });
        },
        async getCatalogTypes({commit})
        {
            await axios.get('/get/types')
                .then(response => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATALOG_TYPES', response.data.types)
                    }
                })
        },
        async getFilteredData({commit},data)
        {

            await axios.get('/get/catalog/?category='+data.cat+'&type='+ data.type)
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATALOG', response.data)
                    }
                });
        },
        async getUserIP({commit})
        {
            await axios.get('/get/location')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_USER_LOCATION', response.data)
                    }
                });
        },
        redirectToCatalog({commit}, data)
        {
            commit('SELECT_CATEGORY',data);
        },
    }
}

