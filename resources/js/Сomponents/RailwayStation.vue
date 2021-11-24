<template>
    <div>
        <div class="text_input">Код станции</div>
        <input type="text" name="railway_station" :value="railwayStation" >
        <div v-if="railwayStations" class="kod-railway" >
            <div class="railway-kod-title">Выберите станцию</div>
            <div v-for="(station,key) in railwayStations">
                <a href="#" @click.prevent="updateStation(station)">
                    {{station.index[0]}} {{ station.name[0] }}
                </a>
            </div>
        </div>
        <div class="icon_price_input">
            <svg width="27" height="30" viewBox="0 0 27 30" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 11.9711C1 11.0175 1.45332 10.1207 2.22115 9.55533L13.5 1.25L24.7788 9.55533C25.5467 10.1207 26 11.0175 26 11.9711L26 26.25C26 27.6307 24.8807 28.75 23.5 28.75H18.25C17.6977 28.75 17.25 28.3023 17.25 27.75V19.875C17.25 19.5989 17.0261 19.375 16.75 19.375L10.25 19.375C9.97386 19.375 9.75 19.5989 9.75 19.875V27.75C9.75 28.3023 9.30228 28.75 8.75 28.75H3.5C2.11929 28.75 1 27.6307 1 26.25L1 11.9711Z"
                    stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "railway-station",
    data() {
        return {

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
