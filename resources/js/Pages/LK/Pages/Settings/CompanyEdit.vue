<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>
        <div class="row">
            <div class="xs-12 col-md-4 left_container">
                <leftsidebar></leftsidebar>
            </div>
            <div class="xs-12 col-md-8" v-if="user && user.user && user.user.organizations">
                <div class="right_container" v-if="org.id == id" v-for="org in user.user.organizations">
                    <div class="setting_info_company">
                        <div class="image_info_item_offer_catalog"
                             :style="'background-image: url('+org.logo+');'"></div>
                        <div>
                            <div class="name_setting_info_company">
                                {{org.name}}
                            </div>
                            <router-link :to="{'name':'settingsaccreditation',params:{id:org.id}}">
                                <div class="setting_accredited_company" data-tooltip="Загрузите документы и заполните информацию.">
                                    Поставщик • {{org.status.name}}
                                </div>
                            </router-link>

                        </div>
                    </div>
                    <div class="setting_company_questions">
                        <div class="title_setting_company_questions">Есть вопросы</div>
                        <div>Один из ваших документов не прошел модерацию. Мы все равно аккредитовали ваш аккаунт. За
                            уточнениями по документу обратитесь к менеджеру. </div>
                    </div>
                    <div class="profile_information_block">
                        <div class="name_profile_information">Реквизиты компании</div>
                        <div class="row profile_information_list_row">
                            <div class="col-xs-12 col-md-5">
                                <table class="profile_information_list">
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">ИНН</td>
                                        <td class="value_profile_information_item">
                                            <div class="row">
                                                <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.inn"></quick-edit>
                                                <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">ОГРН</td>
                                        <td class="value_profile_information_item">
                                            <div class="row">
                                                <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.ogrn"></quick-edit>
                                                <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">КПП</td>
                                        <td class="value_profile_information_item">
                                            <div class="row">
                                                <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.kpp"></quick-edit>
                                                <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col-xs-12 col-md-7">
                                <table class="profile_information_list">
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">Руководитель</td>
                                        <td class="value_profile_information_item">
                                            <div class="row">
                                                <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.fio_ceo"></quick-edit>
                                                <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">Должность</td>
                                        <td class="value_profile_information_item">Директор
                                            <span class="edit_profile_information_item">

                                            </span>
                                        </td>
                                    </tr>
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">Основание</td>
                                        <td class="value_profile_information_item value_profile_information_command">
                                            <div class="row">
                                                <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.reason"></quick-edit>
                                                <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="profile_information_dop_list">
                            <table class="profile_information_list">
                                <tr class="profile_information_item">
                                    <td class="title_profile_information_item">Телефон</td>
                                    <td class="value_profile_information_item">
                                        <div class="row">
                                            <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.phone"></quick-edit>
                                            <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="profile_information_item">
                                    <td class="title_profile_information_item">Юр. адрес</td>
                                    <td class="value_profile_information_item">
                                        <div class="row">
                                            <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.adress"></quick-edit>
                                            <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                        </div>
                                    </td>
                                </tr>
<!--                                <tr class="profile_information_item">
                                    <td class="title_profile_information_item">Почтовый адрес</td>
                                    <td class="value_profile_information_item">Россия, г. Екатеринбург, ул. Пушкина д.
                                        34 офис 321
                                        <span class="edit_profile_information_item">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                    stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                      stroke-width="2" />
                                            </svg>
                                        </span>
                                    </td>
                                </tr>-->
                            </table>
                        </div>
                    </div>
                    <div class="profile_information_block">
                        <div class="name_profile_information">Банковские реквизиты</div>
                        <div class="row profile_information_list_row">
                            <div class="col-xs-12 col-md-5">
                                <table class="profile_information_list">
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">БИК</td>
                                        <td class="value_profile_information_item">
                                            <div class="row">
                                                <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.bik"></quick-edit>
                                                <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">Банк</td>
                                        <td class="value_profile_information_item">
                                            <div class="row">
                                                <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.bank_name"></quick-edit>
                                                <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col-xs-12 col-md-7">
                                <table class="profile_information_list">
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">Корр. счет</td>
                                        <td class="value_profile_information_item">
                                            <div class="row">
                                                <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.kor_account"></quick-edit>
                                                <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr class="profile_information_item">
                                        <td class="title_profile_information_item">Расчет. счет</td>
                                        <td class="value_profile_information_item">
                                            <div class="row">
                                                <quick-edit class="name_profile_information" emptyText="Не указано" buttonCancelText="Отмена" @input="storeChanges(org)" v-model="org.r_account"></quick-edit>
                                                <span class="edit_profile_information_item">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.11805 13.1285L14.7158 1.5307C14.7347 1.52503 14.7553 1.51913 14.7774 1.51314C14.9363 1.47009 15.1656 1.42528 15.4346 1.42157C15.9528 1.41442 16.6403 1.55547 17.3156 2.23076C17.9909 2.90604 18.1319 3.59359 18.1248 4.11176C18.1211 4.38081 18.0763 4.61009 18.0332 4.76901C18.0272 4.79111 18.0213 4.81165 18.0157 4.83053L6.41788 16.4283L2.66807 16.8783L3.11805 13.1285Z"
                                                        stroke="#66727E" stroke-width="2" stroke-linecap="round" />
                                                    <path d="M11.8893 2.94299L16.3788 7.43256" stroke="#66727E"
                                                          stroke-width="2" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="profile_information_block">
                        <div class="name_profile_information">Документы</div>
                        <div class="description_profile_information">Документы в форма PDF, DOC</div>
                        <div class="setting_document_list profile_information_list" v-if="org.documents.length">

                            <div class="container_new_document uploaded" v-for="document in org.documents">
                                <div class="form-group">
                                    <input type="file" name="file" id="file" class="input-file">
                                    <label for="file" class="btn btn-tertiary js-labelFile">
                                        <span>ID {{document.id}}</span>
                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4001 1.70001L5.6001 10.5L1.6001 6.50001" stroke="#71BF45"
                                                  stroke-width="2" stroke-linecap="round"></path>
                                        </svg>

                                    </label>
                                </div>
                            </div>

<!--                            <div class="container_new_document uploaded">
                                <div class="form-group">
                                    <input type="file" name="file" id="file" class="input-file">
                                    <label for="file" class="btn btn-tertiary js-labelFile">
                                        <span>Сертификат.PDF</span>
                                        <svg width="27" height="25" viewBox="0 0 27 25" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.73683 10.0193C5.26071 8.19228 6.34953 6.57804 7.84723 5.4079C9.34494 4.23777 11.1746 3.57181 13.0741 3.50548C14.9735 3.43915 16.8452 3.97585 18.4209 5.03866C19.9966 6.10147 21.1954 7.63583 21.8454 9.42182"
                                                stroke="#66727E" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M21.6803 15.9987C21.0032 17.6033 19.8752 18.977 18.433 19.9532C16.9907 20.9294 15.2962 21.4662 13.5549 21.4985C11.8137 21.5307 10.1004 21.0571 8.62301 20.135C7.14559 19.2129 5.96743 17.882 5.23141 16.3036"
                                                stroke="#66727E" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M7.21387 15.4349L4.64692 15.8156L3.41127 18.0975"
                                                  stroke="#66727E" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round" />
                                            <path d="M19.6335 10.2299L22.2005 9.84923L23.4361 7.56728"
                                                  stroke="#66727E" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round" />
                                        </svg>


                                    </label>
                                </div>
                            </div>

                            <div class="container_new_document uploaded error_loading_document" data-tooltip="Документ содержит ошибки и не прошел модерацию">
                                <div class="form-group">
                                    <input type="file" name="file" id="file" class="input-file">
                                    <label for="file" class="btn btn-tertiary js-labelFile">
                                        <span>Сертификат.PDF</span>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12.5" cy="12.5" r="8" fill="#FB1E00"/>
                                            <path d="M9.30005 9.29999L12.5 12.5L15.7 9.29999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.7 15.7L12.5 12.5L9.29995 15.7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                            </div>-->
                        </div>
                    </div>
                    <div class="profile_information_block">
                        <div class="name_profile_information">Логотип</div>
                        <div class="description_profile_information">Изображение в формате PNG, JPG. Не более 2мб, 200х200px</div>
                            <div class="item_add_company item_add_company_logo">
                                <div class="container_new_photo container_edit_logo">
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
                    <div class="send_moderation">
                        <div class="send_moderation_block">
                            <button class="btn_send_moderation" type="submit">Отправить на модерацию</button>
                            <div class="info_text_send_moderation">
                                <div class="icon_send_moderation">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="11" stroke="#71BF45" stroke-width="2"></circle>
                                        <path d="M12 7V12" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M12 16V16.5" stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>

                                </div>
                                <div>При внесении изменений в данные о компании будет<br/>произведена автоматическая повторная модерация</div>
                            </div>
                        </div>
                        <div class="delite_company">Удалить компанию</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import UserLKHeader from "../../../../Сomponents/LK/UserLKHeader";
import Leftsidebar from "./Leftsidebar";
import {mapState} from "vuex";

import QuickEdit from 'vue-quick-edit';
import router from "../../../../Router";

export default {
    props: ['id'],
    components: {Leftsidebar, UserLKHeader,QuickEdit},

    data(){
        return {
            //org_id:this.$route.params.id,
        }
    },
    methods:{

        /**
         *
         * @param org
         */

        storeChanges(org)
        {
            axios.post('/set/update/organization', org)
                .then(response => {
                if(response.status == 200)
                {
                    console.log(response.status)
                    //router.push({ name: 'settingsprofile', query: { redirect: '/settings/profile' } });
                }
            });
        }
    },
    computed: {
        ...mapState(['user'])
    },
}
</script>
