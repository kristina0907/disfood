<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
        </div>
        <div class="content container">
            <div class="container_contact">
                <h1 class="contact__info_title">Контакты</h1>
                <div class="row container_contact__info">
                    <div class="col-xs-12 col-md-5 contact__info">
                        <div>
                            <div class="contact__info_item">
                                <p class="contact__info_item_title">Отдел продаж</p>
                                <a href="tel:+7 989 199 91 43" class="contact__info_item_text">+7 989 199 91 43</a>
                            </div>
                            <div class="contact__info_item">
                                <p class="contact__info_item_title">Бесплатно по России</p>
                                <a href="tel:8 800 550 71 90" class="contact__info_item_text">8 800 550 71 90</a>
                            </div>
                            <div class="contact__info_item">
                                <p class="contact__info_item_title">Почта</p>
                                <a href="mailto:info@rosretail.com" class="contact__info_item_text">
                                    info@disfood.ru
                                </a>
                            </div>
                        </div>
                        <div class="contact__info_item">
                            <p class="contact__info_item_title">Главный офис</p>
                            <p class="contact__info_item_text">
                                г. Краснодар,<br/>ул. им Селезнева 204/2, офис 209
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-7">
                        <yandex-map
                            :coords="coords"
                            ref="map1"
                            class="map offer_map"
                        >
                            <ymap-marker
                                :coords="coords"
                                :icon="markerIcon"
                                marker-id="123123"
                            />
                        </yandex-map>
                    </div>
                </div>
            </div>
            <div class="questions_company_block">
                <div class="row">
                    <div class="col-xs-12 col-md-5 padding_item_questions_company">
                        <div class="item_questions_company">
                            <div class="icon_item_questions_company">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 6C1 4.89543 1.89543 4 3 4H23C24.1046 4 25 4.89543 25 6V19C25 20.1046 24.1046 21 23 21H3C1.89543 21 1 20.1046 1 19V6Z"
                                        stroke="#51668F" stroke-width="2" stroke-linejoin="round" />
                                    <path
                                        d="M2.42131 5.30287C1.91709 4.84067 2.24409 4 2.9281 4H23.0719C23.7559 4 24.0829 4.84067 23.5787 5.30287L15.0272 13.1418C13.8802 14.1931 12.1198 14.1931 10.9728 13.1418L2.42131 5.30287Z"
                                        stroke="#51668F" stroke-width="2" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="title_item_questions_company">Есть вопросы и предложения?</div>
                            <div class="text_item_questions_company">Напишите нам на почту и мы рассмотрим ваше обращение
                            </div>
                            <div class="link_item_questions_company"><a href="" data-toggle="modal" data-target="#modal_get_consultation">Задать вопрос</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-7 padding_item_questions_company">
                        <div class="item_questions_company row">
                            <div class="col-xs-12 col-md-8 info_item_questions_company">
                                <div class="icon_item_questions_company">
                                    <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.00098 1C3.68727 1 1.00098 3.68629 1.00098 7V11C1.00098 11.2403 1.01511 11.4774 1.04259 11.7104C1.01489 11.802 1 11.8993 1 12V20.8258C1 21.6801 2.00212 22.141 2.65079 21.585L7.43827 17.4815C7.80075 17.1708 8.26243 17 8.73985 17H19.001C22.3147 17 25.001 14.3137 25.001 11V7C25.001 3.68629 22.3147 1 19.001 1H7.00098Z" stroke="#51668F" stroke-width="2"/>
                                    </svg>
                                </div>
                                <div class="title_item_questions_company">ООО «ДИСФУД»</div>
                                <div class="text_item_questions_company">ОГРН 1182375051088,   ИНН 2312272412, КПП 23120100</div>
                                <div class="text_item_questions_company">350058,  Краснодарский край,  г. Краснодар,<br/>ул. им Селезнева 204/2, офис 209</div>
                            </div>
                            <div class="img_item_questions_company col-xs-12 col-md-4">
                                <svg width="222" height="220" viewBox="0 0 222 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M58.5007 0V51.3725C84.677 51.3725 106.448 51.0336 129.817 51.0941C137.429 51.0941 144.061 53.575 149.797 58.2826C155.437 63.0508 159.83 69.7068 163.025 78.2991C166.123 86.8431 167.732 96.9118 167.793 108.372C167.732 120.051 166.123 130.216 163.025 138.893C159.83 147.57 155.461 154.287 149.797 159.031C144.097 163.835 137.429 166.28 129.817 166.28L108.99 167.212C98.8967 184.033 89.5662 198.531 75.6006 218.451L130.434 217.676C144.376 217.495 157.046 214.978 168.325 209.774C179.628 204.606 189.261 197.103 197.321 187.47C205.369 177.801 211.541 166.243 215.813 152.798C220 139.293 222.07 124.298 221.985 107.755C221.924 91.4902 219.746 76.7743 215.377 63.5833C211.009 50.4164 204.849 39.0407 196.765 29.5891C188.705 20.1133 179.035 12.828 167.829 7.7452C156.647 2.67451 144.182 0.0726128 130.434 0H58.5007Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.675 96.1736C63.0508 96.1736 72.2845 105.407 72.2845 116.747C72.2845 128.11 63.0508 137.344 51.675 137.344C40.3113 137.344 31.0776 128.11 31.0776 116.747C31.0776 105.407 40.3113 96.1736 51.675 96.1736ZM51.2756 63.8011C79.6182 63.8011 102.575 86.7826 102.575 115.101C102.575 143.419 78.045 185.026 51.2756 220C28.4152 188.124 0 143.419 0 115.101C0 86.7826 22.9936 63.8011 51.2756 63.8011Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderCatalog from "../Сomponents/HeaderCatalog";
import {yandexMap, ymapMarker} from "vue-yandex-maps/src";
export default {
    components:{
        HeaderCatalog,
        yandexMap,
        ymapMarker,
    },
    data: () => ({
        coords: [45.017563, 39.052388],
        markerIcon: {
            layout: 'default#imageWithContent',
            imageHref: '',
            imageSize: [52, 58],
            imageOffset: [0, 0],
            contentOffset: [0, 0],
            contentLayout: '<svg width="52" height="58" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<g filter="url(#filter0_d_3561:42565)">\n' +
                '<path d="M42.8687 19.5089C42.8687 27.1046 32.8309 36.7845 28.3233 40.7486C27.0842 41.8382 25.2689 41.8382 24.0298 40.7486C19.5222 36.7845 9.48442 27.1046 9.48442 19.5089C9.48442 9.71393 16.9577 1.77353 26.1765 1.77353C35.3954 1.77353 42.8687 9.71393 42.8687 19.5089Z" fill="#89CA65" stroke="white" stroke-width="3.54708"/>\n' +
                '<ellipse cx="26.1765" cy="19.5089" rx="5.00764" ry="5.32062" stroke="white" stroke-width="3.54708"/>\n' +
                '</g>\n' +
                '<defs>\n' +
                '<filter id="filter0_d_3561:42565" x="-0.948158" y="0" width="54.2494" height="57.5276" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
                '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
                '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
                '<feOffset dy="7.09415"/>\n' +
                '<feGaussianBlur stdDeviation="3.54708"/>\n' +
                '<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>\n' +
                '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3561:42565"/>\n' +
                '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3561:42565" result="shape"/>\n' +
                '</filter>\n' +
                '</defs>\n' +
                '</svg>'
        }
    }),
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
