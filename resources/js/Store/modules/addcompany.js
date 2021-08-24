import Rootstore from "../index";
import router from "../../Router";

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
        logo:'',
        documents:[],

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
        },

        /**
         *
         * @param state
         * @param value
         */

        updateUserPhone(state,value)
        {
            state.userPhone = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateUserEmail(state,value)
        {
            state.userEmail = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateUrAdress(state,value)
        {
            state.urAdress = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updatePostAdress(state,value)
        {
            state.postAdress = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateBankName(state,value)
        {
            state.bankName = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateBik(state,value)
        {
            state.bik = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateKorrAccount(state,value)
        {
            state.korr_account = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateRAccount(state,value)
        {
            state.r_account = value;
        },

        /**
         *
         * @param state
         * @param value
         */

        updateLogo(state,value)
        {
            state.logo = value;
        }



    },
    actions: {

        /**
         *
         * @param commit
         * @param inn
         */

        getInnFromBackend({commit},inn) {
            axios.post('/get/inn/from/api',{inn: inn})
                .then((response)=>{

                    if(response.data !== 'undefined' && response.data !== null && response.data.suggestions !== 'undefined' && response.data.suggestions !== null)
                    {
                        console.log(response.data)
                        commit('updateCompanyName',response.data.suggestions['0'].value);
                        commit('updateInn',inn);
                        commit('updateOgrn',response.data.suggestions['0'].data.ogrn);
                        commit('updateKpp',response.data.suggestions['0'].data.kpp);
                        commit('updateUrAdress',response.data.suggestions['0'].data.address.unrestricted_value);
                    }

                })
        },

        /**
         *
         * @param commit
         * @param bik
         */

        getBankAccountFromBackend({commit},bik)
        {
            axios.post('/get/bank/from/bik',{bik:bik})
                .then((response)=>{

                    if(response.data !== 'undefined' && response.data !== null)
                    {
                        //console.log(response)
                        commit('updateBankName',response.data.name);
                        commit('updateBik',bik);
                        commit('updateKorrAccount',response.data.ks);

                    }
                })
        },

        /**
         *
         * @param commit
         * @param logo
         */

        uploadLogo({commit},logo)
        {
            commit('updateLogo',logo)
        },

        /**
         *
         * @param commit
         * @param data
         */

        setUserSurname({commit},data)
        {
          commit('updateUserSurname',data);
        },

        /**
         *
         * @param commit
         * @param data
         */

        setUserDolgnost({commit},data)
        {
            commit('updateUserDolgnost',data);
        },

        /**
         *
         * @param commit
         * @param data
         */

        setUserPhone({commit},data)
        {
            commit('updateUserPhone',data);
        },

        /**
         *
         * @param commit
         * @param data
         */

        setPostAdress({commit},data)
        {
            commit('updatePostAdress',data);
        },

        /**
         *
         * @param commit
         * @param data
         */

        setRAccount({commit},data)
        {
            commit('updateRAccount',data);
        },

        /**
         *
         * @param commit
         * @param state
         */

        sendForm({commit,state})
        {
            let formData = new FormData();

            for( var i = 0; i < state.documents.length; i++ ){
                let file = state.documents[i];
                console.log(file)
                formData.append('files[' + i + ']', file);
            }

            formData.append('name',state.companyName);
            formData.append('inn',state.inn);
            formData.append('bik',state.bik);
            formData.append('kpp',state.kpp);
            formData.append('ogrn', state.ogrn);
            formData.append('adress',state.urAdress);
            formData.append('phone',state.userPhone);
            formData.append('bank_name',state.bankName);
            formData.append('r_account',state.r_account);
            formData.append('kor_account',state.korr_account);
            formData.append('fio_ceo',state.userSurname);
            formData.append('logo',state.logo);

            axios.post('/set/new/organization', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if(response.status == 200)
                {
                    console.log(response.status)
                    router.push({ name: 'settingsprofile', query: { redirect: '/settings/profile' } });
                }
            });
        }

    }
}

