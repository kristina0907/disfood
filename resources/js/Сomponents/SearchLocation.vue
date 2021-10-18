<template>
    <div>
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
