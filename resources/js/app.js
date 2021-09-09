/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue Сomponents. It will recursively scan this directory for the Vue
 * Сomponents and automatically register them with their "basename".
 *
 * Eg. ./Сomponents/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


var token = document.head.querySelector('meta[name="csrf-token"]');
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;


import Vue from 'vue';
import VueRouter from 'vue-router';
import router from "./Router";
import store from "./Store";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin , DropdownPlugin, TablePlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import YmapPlugin from 'vue-yandex-maps'
import VueApexCharts from 'vue-apexcharts'


const settings = {
    lang: 'ru_RU',
    apiKey: '53005aaf-7abe-48bc-b280-d71526f61690',

    coordorder: 'latlong',
    version: '2.1'
}


import Vuelidate from 'vuelidate';


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.use(YmapPlugin, settings)
Vue.use(VueApexCharts);
Vue.use(require('vue-moment'));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding Сomponents to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{App}
});

