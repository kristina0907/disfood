
import router from "../../Router";
export default {
    namespaced:true,
    state: {
        questions: [],
        categoryValue: '',
        categories:[],
        typeValue:'',
        types:[],
        filteredTypes:[],
        filteredProducts:[],
        products:[],
        productValue:'',
        selectValue:'',
        filterSelect:[],
        answer:[]
    },
    getters: {

        /**
         *
         * @param state
         * @returns {string}
         */

        typeValue: (state) => {
            return state.typeValue;
        },

        /**
         *
         * @param state
         * @returns {string}
         */

        categoryValue: (state) => {
            return state.categoryValue;
        },

         /**
         *
         * @param state
         * @returns {string}
         */

        selectValue: (state) => {
            return state.selectValue;
        },


    },
    mutations: {

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_QUESTIONS(state, data) {
            state.questions = data;
        },
         /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_SELECT_VALUE(state, data) {
            state.selectValue = data;
        },

        SET_CATEGORY_VALUE(state, data) {
            state.categoryValue = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CATEGORIES(state, data) {
            state.categories = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_CATALOG_TYPES(state, data) {
            state.types = data;
        },

         /**
         *
         * @param state
         * @param data
         * @constructor
         */

        FILTER_TYPES(state, data) {
            state.filteredTypes = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_PRODUCTS(state, data) {
            state.products = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_FILTERED_PRODUCTS(state, data) {
            state.filteredProducts = data;
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_TYPE_VALUE(state, data)
        {
            state.typeValue = data;
            state.filterValue = [];
        },

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_PRODUCT_VALUE(state,data)
        {
            state.productValue = data;
        },


    },
    actions: {
        updateValueAction({commit}, value) {
            commit('updateCategory', value);
        },

        /**
         *
         * @param commit
         * @param value
         */

        updateTypeAction({commit}, value) {
            commit('updateType', value);
        },

        async getCatalogData({commit}) {
            await axios.get('/get/categories')
                .then(response => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATEGORIES', response.data.cats)
                    }
                });
        },

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */
        async getQuestion({commit}) {
            await axios.get('/get/accreditation/quiz')
                .then(response => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_QUESTIONS', response.data.questions)
                    }
                })
        },

        /**
         *
         * @param commit
         * @param state
         * @param data
         */

         filterSelect({commit, state}, data) {
            commit('SET_SELECT_VALUE', data);
            let val = [];
            console.log(data);
            val.question_id = data.question_id;
            // state.answer.push(val);
           
        },


        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

        async getCatalogTypes({commit}) {
            await axios.get('/get/types')
                .then(response => {

                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('SET_CATALOG_TYPES', response.data.types)
                    }
                })
        },


        /**
         *
         * @param commit
         * @param state
         * @param data
         */

        filterTypes({commit, state}, data) {
            commit('SET_CATEGORY_VALUE', data)
            let filtered = state.types.filter(function (item) {
                return item.category_id == data.id;
            });
            commit('FILTER_TYPES', filtered)
        },

        /**
         *
         * @param commit
         * @param state
         * @param data
         */

        filterProducts({commit, state}, data) {
            commit('SET_TYPE_VALUE', data);
        },

        addFilterValue({commit, state}, data)
        {
           commit('SET_FILTER_VALUE',data);
        },

    
        /**
         *
         * @param commit
         * @param data
         */

        setProductValue({commit},data)
        {
            commit('SET_PRODUCT_VALUE',data)
        },

        /**
         *
         * @param state
         * @param commit
         */

        sendDataNewProduct({state,commit,rootState})
        {
            let formData = new FormData();

            formData.append('organization_id', rootState.user.user.current_organization_id);
            formData.append('category_id',JSON.stringify(state.categoryValue));
            formData.append('type_id',JSON.stringify(state.typeValue));
            formData.append('filters',JSON.stringify(state.filterValue));
            console.log(formData)
            axios.post('/set/new/offer', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if(response.status == 200)
                {
                    console.log(response.status)
                    router.push({ name: 'addnewproductsuccess', query: { redirect: '/addnewproduct/success' } });
                }
            });
        }
    }
}

