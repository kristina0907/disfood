
export default {
    namespaced:true,
    state: {
        companies:[],
    },
    getters: {
        getMyCompany:(state) =>
        {
            return state.companies;
        },
    },
    mutations: {
        updateMyCompanies(state,value)
        {
            state.companies = value
        },
    },
    actions: {
        async getCompanies({commit}) {
            console.log('getCompanies')
            await axios.get('/get/my-companies')
                .then((response) => {
                    if (response.data !== 'undefined' && response.data !== null) {
                        commit('updateMyCompanies',response.data);
                    }
                })

        },

    }
}

