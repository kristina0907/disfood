<template>
    <div>
        <multiselect
            v-model="locationDeliveryInput"
            name="ajax"
            label="value"
            track-by="value"
            placeholder="Город"
            open-direction="bottom"
            :options="locationsTips"
            :multiple="false"
            :searchable="true"
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
            ...mapActions('searchlocation',['updateDeliveryInput','searchLocation'])
        },
        mounted() {

        },
        computed: {
            ...mapState('searchlocation',[
                'locationDeliveryInput',
                'locationsTips'
            ]),
            locationDeliveryInput: {
                get () {
                    return this.$store.state.searchlocation.locationDeliveryInput
                },
                set (value) {

                    this.$store.dispatch('searchlocation/updateDeliveryInput',value)
                }
            }
        },
    }
</script>
