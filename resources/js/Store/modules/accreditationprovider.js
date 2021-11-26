
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
        answer:[],
        documents:[
            {'id':1, 'code': 'arenda_doc', 'name':'Договор аренды/собственности на территорию завода/склада','document':''},
            {'id':2, 'code': 'shtat_raspisaniye', 'name':'Штатное расписание (кол-во сотрудников в штате)','document':''},
            {'id':3, 'code': 'certificat', 'name':'Сертификат на товарный знак','document':''},
            {'id':4, 'code': 'declaration', 'name':'Декларация налогов на прибыль','document':''},
            {'id':5, 'code': 'buhbalance', 'name':'Бухгалтерский Баланс','document':''},
        ],
        contract:[]
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

         SET_CONTRACT(state,data)
         {
           state.contract = data;
         },
        /**
         *
         * @param state
         * @param data
         * @constructor
         */

         SET_DOCUMENTS(state,data)
         {
           state.documents = data;
         },
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

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

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

        /**
         *
         * @param state
         * @param data
         * @constructor
         */

        SET_ANSWER(state,data)
        {
            state.answer = data;
        }

    },
    actions: {

        /**
         *
         * @param commit
         * @param value
         */

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

        /**
         *
         * @param commit
         * @returns {Promise<void>}
         */

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

         setAnswer({commit, state}, data) {
            commit('SET_ANSWER',data);
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

        /**
         *
         * @param commit
         * @param state
         * @param data
         */

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
         * @param commit
         * @param data
         */

        addFileToDocuments({commit},data)
        {
            commit('SET_DOCUMENTS',data)
        },
         /**
         *
         * @param commit
         * @param data
         */

          addFileContract({commit},data)
          {
              commit('SET_CONTRACT',data)
          },
        /**
         *
         * @param state
         * @param commit
         *
         */

        sendDataAnswrer({state,commit,rootState})
        {

            // let data = {
            //     'organization_id': rootState.user.user.current_organization_id,
            //     'category_id'    : state.categoryValue,
            //     'type_id'        : state.typeValue,
            //     'answer'         : state.answer,
            //     'documents'      : state.documents,
            // }

            let formData = new FormData();
            formData.append('organization_id', rootState.user.user.current_organization_id);
            formData.append('category_id',JSON.stringify(state.categoryValue));
            formData.append('type_id',JSON.stringify(state.typeValue));
            formData.append('answer',JSON.stringify(state.answer));
            formData.append('documents',JSON.stringify(state.documents));
            formData.append('contract',JSON.stringify(state.contract));
            axios.post('/set/accreditation/quiz', formData).then(response => {
                if(response.status == 200)
                {
                    console.log(response.status)

                    router.push({ name: 'accreditationsuccess', query: { redirect: '/accreditation/success' } });
                }
            });
        }
    }
}

