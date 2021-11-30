<template>
    <div>
        <div class="select_container select_code">
                    <multiselect
                        v-model="stationsVal"
                        :options="railwayStations"
                        label="name"
                        track-by="name"
                        placeholder="Выберите станцию"
                        selectLabel="Выберите станцию"
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

                    ></multiselect>
                </div>
        <!-- <input type="text" name="railway_station" :value="railwayStation" > -->
        <div v-if="railwayStations">
            <div v-for="(station,key) in railwayStations">
                <a href="#" @click.prevent="updateStation(station)">
                    {{station.index[0]}} {{ station.name[0] }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Multiselect from 'vue-multiselect'

export default {
    name: "railway-station",
    components: {
        Multiselect
    },
    data() {
        return {
            stationsVal:''
        }
    },
    methods: {
        updateStation(station)
        {
            this.$store.dispatch('setRailwayStation',station)
        },
        ...mapActions['setRailwayStation']

    },
    computed: {
        ...mapState(['railwayStations','railwayStation']),
        railwayStation: {
            get () {
                return this.$store.state.railwayStation
            },
            set (value) {
                this.$store.dispatch('setRailwayStation',value)
            }
        }
    },
}

</script>
