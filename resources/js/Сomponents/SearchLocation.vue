<template>
    <div>
<!--        <div class="text_input">Куда доставить?</div>-->
<!--        <input list="city" type="text"  v-model="locationInput"  v-on:keyup="searchLocation">
        <datalist id="city">
            <option :value="tip.value" v-for="tip in locationsTips">{{tip.value}}</option>
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
        </div>-->
        <multiselect
            v-model="locationDeliveryInput"
            id="ajax"
            label="value"
            track-by="value"
            placeholder="Куда доставить?"
            open-direction="bottom"
            :options="locationsTips"
            :multiple="false"
            :searchable="true"
            :loading="isLoading"
            :internal-search="false"
            :class="'select select_location'"
            :clear-on-select="false"
            :close-on-select="true"
            :options-limit="300"
            :limit="3"
            :show-no-results="false"
            :hide-selected="true"
            @search-change="searchLocation"
        >
        </multiselect>

    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Multiselect from 'vue-multiselect'
    export default
    {
        name:"searchlocation",
        components: {
            Multiselect
        },
        data()
        {
            return {
                //isLoading : false,
               /* location:'',
                locationsTips:[]*/
            }
        },
        methods:{
            ...mapActions('catalog',[
               'searchLocation'
            ]),
           /* async searchLocation(data)
            {
                console.log(data)
                if(data.length >= 4)
                {
                    this.isLoading = true;
                    await axios.get('/get/location/from/text/'+ data)
                        .then(response => {
                            if (response.data !== 'undefined' && response.data !== null) {
                                 this.locationsTips = response.data.suggestions
                            }
                        });
                }
                this.isLoading = false;
            },*/
        },
        mounted() {

        },
        computed: {
            ...mapState('catalog',['location','locationInput','locationsTips','isLoading']),
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
