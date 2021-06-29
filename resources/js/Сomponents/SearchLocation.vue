<template>
    <div>
        <div class="text_input">Куда доставить?</div>
        <input list="city" type="text" v-if="location.location" v-model="locationInput"  v-on:input="searchLocation">
        <datalist id="city">
            <option :value="tip.title_ru + ' - '+tip.id" v-for="tip in locationsTips">{{tip.title_ru}}</option>
        </datalist>
        <div class="icon_price_input">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M27.5 13.75C27.5 19.3471 19.2834 26.55 16.1735 29.0758C15.4852 29.6348 14.5148 29.6348 13.8265 29.0758C10.7166 26.55 2.5 19.3471 2.5 13.75C2.5 6.84644 8.09644 1.25 15 1.25C21.9036 1.25 27.5 6.84644 27.5 13.75Z"
                    stroke="#71BF45" stroke-width="2" />
                <circle cx="15" cy="13.75" r="3.75" stroke="#71BF45"
                        stroke-width="2" />
            </svg>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

    export default
    {
        name:"searchlocation",
        data()
        {
            return {

            }
        },
        methods:{
            ...mapActions('catalog',[
               'searchLocation'
            ]),
        },
        mounted() {
           
        },
        computed: {
            ...mapState('catalog',['location','locationInput','locationsTips']),
            locationInput: {
                get () {
                    return this.$store.state.catalog.locationInput
                },
                set (value) {
                    this.$store.commit('catalog/updateLocationInput',value)
                }
            }
        },
    }
</script>
