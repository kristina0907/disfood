<template>
    <div class="select_container select_countries">
        <multiselect
            v-model="countriesVal"
            :options="countries"
            label="title_ru"
            track-by="title_ru"
            placeholder="Страна"
            selectLabel="Выберите страну"
            selectedLabel="Выбрано"
            deselectLabel="Нажмите еще раз чтобы удалить"
            :required="true"
            :multiple="false"
            :searchable="true"
            :internal-search="true"
            :class="'select'"
            :clear-on-select="false"
            :close-on-select="true"
            :options-limit="300"
            :limit="3"
            :show-no-results="false"
            :hide-selected="true"
            @select="changeCode"

        ></multiselect>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Multiselect from 'vue-multiselect'
    export default
    {
        name:"searchcountries",
        components: {
            Multiselect
        },
        data()
        {
            return {
                countries: [],
                countriesVal:'',
            }
        },
        methods:{
            getCountries(){
                axios.get('/get/countries', {
                }).then(response => {
                    if(response.status == 200){
                        this.countries = response.data;
                    }
                });
            },
        },
        mounted() {
            this.getCountries();
        },
    }
</script>
