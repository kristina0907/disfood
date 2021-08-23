import Rootstore from "../index";

export default {
    namespaced:true,
    state: {
        companyName:'',

    },
    getters: {

    },
    mutations: {
        updateCompanyName(state,value)
        {
            state.companyName = value
        },

    },
    actions: {
        getInnFromBackend({commit},inn) {
            axios.post('/get/inn/from/api',{inn: inn})
                .then((response)=>{

                    if(response.data !== 'undefined' && response.data !== null && response.data.suggestions !== 'undefined' && response.data.suggestions !== null)
                    {
                        console.log(response.data)
                        this.commit(response.data.suggestions['0'].data.name.full_with_opf);
                    }

                })
        },

    }
}

