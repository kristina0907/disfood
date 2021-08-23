<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>
            <div class="row">
                <div class="xs-12 col-md-4 left_container">
                   <leftsidebar></leftsidebar>
                </div>
                <div class="xs-12 col-md-8">
                    <div class="right_container">
                        <div class="title_settings">Новая компания</div>
                        <div class="reg_form settings_new_add_company">
                            <form action="">
                                <div class="item_add_company">
                                    <div class="title_item_add_company">
                                        Реквизиты компании
                                    </div>
                                    <div class="tab_reg">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#company"
                                                   role="tab" aria-controls="company" aria-selected="true">ООО</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="IP-tab" data-toggle="tab" href="#IP" role="tab"
                                                   aria-controls="IP" aria-selected="false">ИП</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="company" role="tabpanel"
                                                 aria-labelledby="company-tab">
                                                <div class="row item_company_field">
                                                    <div class="col-md-12 item_company_ots">
                                                        <input type="text" placeholder="Название компании">
                                                    </div>
                                                    <div class="col-md-4"><input type="text" placeholder="ИНН"></div>
                                                    <div class="col-md-4"><input type="text" placeholder="ОГРН"></div>
                                                    <div class="col-md-4"><input type="text" placeholder="КПП"></div>

                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="IP" role="tabpanel" aria-labelledby="IP-tab">
                                                <div class="row item_company_field">
                                                    <div class="col-md-12 item_company_ots"><input type="text"
                                                                                                   placeholder="Название компании"></div>
                                                    <div class="col-md-4"><input type="text" placeholder="ИНН" @input="getInnFromBackend($event.target.value)"></div>
                                                    <div class="col-md-4"><input type="text" placeholder="ОГРН"></div>
                                                    <div class="col-md-4"><input type="text" placeholder="КПП"></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item_add_company">
                                    <div class="title_item_add_company">
                                        Ответственное лицо
                                    </div>
                                    <div class="row item_company_field">
                                        <div class="col-md-6"><input type="text" placeholder="Фамилия"></div>
                                        <div class="col-md-6"><input type="text" placeholder="Должность"></div>
                                    </div>
                                </div>
                                <div class="item_add_company">
                                    <div class="title_item_add_company">
                                        Основание
                                    </div>
                                    <div class="tab_delivery">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link" id="home-tab" data-toggle="tab" href="#JD" role="tab"
                                                   aria-controls="JD" aria-selected="false">
                                                    Устав</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="avto-tab" data-toggle="tab" href="#avto" role="tab"
                                                   aria-controls="avto" aria-selected="true">
                                                    Приказ</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pickUp-tab" data-toggle="tab" href="#pickUp "
                                                   role="tab" aria-controls="pickUp" aria-selected="false">
                                                    Доверенность</a>
                                            </li>
                                        </ul>

                                        <div class="tab-content tab-content_offer_page" id="myTabContent">
                                            <div class="tab-pane fade" id="JD" role="tabpanel" aria-labelledby="JD-tab">
                                                <div class="row item_company_field">
                                                    <div class="col-md-4">
                                                        <div class="container_new_document uploaded">
                                                            <div class="form-group">
                                                                <input type="file" name="file" id="file" class="input-file">
                                                                <label for="file" class="btn btn-tertiary js-labelFile">
                                                                    <span>Прикрепить документ</span>
                                                                    <svg width="24" height="25" viewBox="0 0 24 25"
                                                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.42105 2.5C11.0779 2.5 12.4211 3.84315 12.4211 5.5L12.4211 8C12.4211 9.38071 13.5403 10.5 14.9211 10.5H17C18.6569 10.5 20 11.8431 20 13.5V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                                            stroke="#22262A" stroke-width="2"></path>
                                                                        <path
                                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.23393 2.5C11.5937 2.5 13.8332 3.54186 15.3532 5.34691L18.1193 8.63163C19.3339 10.074 20 11.899 20 13.7847V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                                            stroke="#22262A" stroke-width="2"></path>
                                                                    </svg>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="tab-pane fade" id="avto" role="tabpanel" aria-labelledby="avto-tab">

                                            </div>
                                            <div class="tab-pane fade show active" id="pickUp" role="tabpanel"
                                                 aria-labelledby="pickUp-tab">
                                                <div class="row item_company_field">
                                                    <div class="col-md-4"><input type="text"
                                                                                 placeholder="Номер доверенности"></div>
                                                    <div class="col-md-4"><input type="text" placeholder="Дата"></div>
                                                    <div class="col-md-4">
                                                        <div class="container_new_document uploaded">
                                                            <div class="form-group">
                                                                <input type="file" name="file" id="file" class="input-file">
                                                                <label for="file" class="btn btn-tertiary js-labelFile">
                                                                    <span>Прикрепить документ</span>
                                                                    <svg width="24" height="25" viewBox="0 0 24 25"
                                                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.42105 2.5C11.0779 2.5 12.4211 3.84315 12.4211 5.5L12.4211 8C12.4211 9.38071 13.5403 10.5 14.9211 10.5H17C18.6569 10.5 20 11.8431 20 13.5V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                                            stroke="#22262A" stroke-width="2"></path>
                                                                        <path
                                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.23393 2.5C11.5937 2.5 13.8332 3.54186 15.3532 5.34691L18.1193 8.63163C19.3339 10.074 20 11.899 20 13.7847V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                                            stroke="#22262A" stroke-width="2"></path>
                                                                    </svg>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div class="item_add_company">
                                    <div class="title_item_add_company">
                                        Контакты
                                    </div>
                                    <div class="row item_company_field">
                                        <div class="col-md-6 item_company_ots"><input type="text" placeholder="Телефон"></div>
                                        <div class="col-md-12 item_company_ots"><input type="text" placeholder="Юридический адрес"></div>
                                        <div class="col-md-12">
                                            <div class="checkbox add_company_checkbox">
                                                <input class="custom-checkbox" type="checkbox" id="country-1" name="country"
                                                       value="indigo">
                                                <label for="country-1">Почтовый адрес совпадает с юридическим</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12"><input type="text" placeholder="Почтовый адрес"></div>
                                    </div>
                                </div>
                                <div class="item_add_company">
                                    <div class="title_item_add_company">
                                        Банковские Реквизиты
                                    </div>
                                    <div class="row item_company_field">
                                        <div class="col-md-6 item_company_ots"><input type="text" placeholder="Наименование банка"></div>
                                        <div class="col-md-6 item_company_ots"><input type="text" placeholder="БИК"></div>
                                        <div class="col-md-6"><input type="text" placeholder="КОРР. Счет"></div>
                                        <div class="col-md-6"><input type="text" placeholder="РАСЧ. Счет"></div>
                                    </div>
                                </div>
                                <div class="item_add_company item_add_company_document">
                                    <div class="title_item_add_company">
                                        Документы
                                        <div class="help_text">Документы в форма PDF, DOC</div>
                                    </div>
                                    <div class="setting_document_list profile_information_list">

                                        <div class="container_new_document uploaded">
                                            <div class="form-group">
                                                <input type="file" name="file" id="file" class="input-file">
                                                <label for="file" class="btn btn-tertiary js-labelFile">
                                                    <span>Сертификат.PDF</span>
                                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.4001 1.70001L5.6001 10.5L1.6001 6.50001"
                                                              stroke="#71BF45" stroke-width="2" stroke-linecap="round"></path>
                                                    </svg>

                                                </label>
                                            </div>
                                        </div>

                                        <div class="container_new_document uploaded">
                                            <div class="form-group">
                                                <input type="file" name="file" id="file" class="input-file">
                                                <label for="file" class="btn btn-tertiary js-labelFile">
                                                    <span>Сертификат.PDF</span>
                                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.4001 1.70001L5.6001 10.5L1.6001 6.50001"
                                                              stroke="#71BF45" stroke-width="2" stroke-linecap="round"></path>
                                                    </svg>

                                                </label>
                                            </div>
                                        </div>

                                        <div class="container_new_document uploaded">
                                            <div class="form-group">
                                                <input type="file" name="file" id="file" class="input-file">
                                                <label for="file" class="btn btn-tertiary js-labelFile">
                                                    <span>Добавить</span>
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.42105 2.5C11.0779 2.5 12.4211 3.84315 12.4211 5.5L12.4211 8C12.4211 9.38071 13.5403 10.5 14.9211 10.5H17C18.6569 10.5 20 11.8431 20 13.5V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                            stroke="#22262A" stroke-width="2"></path>
                                                        <path
                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.23393 2.5C11.5937 2.5 13.8332 3.54186 15.3532 5.34691L18.1193 8.63163C19.3339 10.074 20 11.899 20 13.7847V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                            stroke="#22262A" stroke-width="2"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="container_new_document uploaded">
                                            <div class="form-group">
                                                <input type="file" name="file" id="file" class="input-file">
                                                <label for="file" class="btn btn-tertiary js-labelFile">
                                                    <span>Добавить</span>
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.42105 2.5C11.0779 2.5 12.4211 3.84315 12.4211 5.5L12.4211 8C12.4211 9.38071 13.5403 10.5 14.9211 10.5H17C18.6569 10.5 20 11.8431 20 13.5V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                            stroke="#22262A" stroke-width="2"></path>
                                                        <path
                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.23393 2.5C11.5937 2.5 13.8332 3.54186 15.3532 5.34691L18.1193 8.63163C19.3339 10.074 20 11.899 20 13.7847V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                            stroke="#22262A" stroke-width="2"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="container_new_document uploaded">
                                            <div class="form-group">
                                                <input type="file" name="file" id="file" class="input-file">
                                                <label for="file" class="btn btn-tertiary js-labelFile">
                                                    <span>Добавить</span>
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.42105 2.5C11.0779 2.5 12.4211 3.84315 12.4211 5.5L12.4211 8C12.4211 9.38071 13.5403 10.5 14.9211 10.5H17C18.6569 10.5 20 11.8431 20 13.5V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                            stroke="#22262A" stroke-width="2"></path>
                                                        <path
                                                            d="M4 4.5C4 3.39543 4.89543 2.5 6 2.5L9.23393 2.5C11.5937 2.5 13.8332 3.54186 15.3532 5.34691L18.1193 8.63163C19.3339 10.074 20 11.899 20 13.7847V20.5C20 21.6046 19.1046 22.5 18 22.5L6 22.5C4.89543 22.5 4 21.6046 4 20.5L4 4.5Z"
                                                            stroke="#22262A" stroke-width="2"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="item_add_company">
                                    <div class="title_item_add_company">
                                        <div>Логотип</div>
                                        <div class="help_text">Изображение в формате PNG, JPG. Не более 2мб, 200х200px
                                        </div>
                                    </div>
                                    <div class="item_product_photo">

                                        <div class="container_new_photo">
                                            <div class="form-group">
                                                <input type="file" name="file" id="file" class="input-file">
                                                <label for="file" class="btn btn-tertiary js-labelFile">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M1 6C1 4.89543 1.89543 4 3 4L21 4C22.1046 4 23 4.89543 23 6L23 18C23 19.1046 22.1046 20 21 20L3 20C1.89543 20 1 19.1046 1 18L1 6Z"
                                                            stroke="#22262A" stroke-width="2" stroke-linejoin="round" />
                                                        <path
                                                            d="M1 19L14.7351 9.68806C15.3578 9.26587 16.1648 9.22887 16.8236 9.59232L23 13"
                                                            stroke="#22262A" stroke-width="2" />
                                                        <circle cx="6" cy="9" r="1" stroke="#22262A" stroke-width="2" />
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="send_moderation_block">
                                    <button class="btn_send_moderation" type="submit">Отправить на модерацию</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    </div>

</template>

<script>


import UserLKHeader from "../../../../Сomponents/LK/UserLKHeader";
import Leftsidebar from "./Leftsidebar";
import {mapActions, mapState} from "vuex";
export default {
    components: {Leftsidebar, UserLKHeader},
    data(){
        return {

        }
    },
    methods:{
        ...mapActions('addcompany',['getInnFromBackend'])
    },
    computed: {
        ...mapState('addcompany',['companyName'])
    },
}
</script>
