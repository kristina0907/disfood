import Rootstore from "../index";

export default {
    namespaced:true,
    state: {
        companyName:'',
        inn:'',
        ogrn:'',
        kpp:'',
        userSurname:'',
        userDolgnost:'',
        type:'company',
        userPhone:'',
        userEmail:'',
        urAdress:'',
        postAdress:'',
        bankName:'',
        bik:'',
        korr_account:'',
        r_account:'',
        logo:''

    },
    getters: {

    },
    mutations: {
        /**
         *
         * @param state
         * @param value
         */

        updateCompanyName(state,value)
        {
            state.companyName = value
        },

        /**
         *
         * @param state
         * @param value
         */

        updateInn(state,value)
        {
            state.inn = value
        },

        /**
         *
         * @param state
         * @param value
         */

        updateOgrn(state,value)
        {
            state.ogrn = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateKpp(state,value)
        {
            state.kpp = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateUserSurname(state,value)
        {
            state.userSurname = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateUserDolgnost(state,value)
        {
            state.userDolgnost = value;
        }

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

