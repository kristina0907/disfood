<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
        </div>
        <div class="row">
            <div class="container container_register content">
                <div class="row">
                    <div class="col xs-12 col-md-6">
                        <div class="title_reg">
                            Создайте аккаунт<br/>
                            в Disfood Market
                        </div>
                        <div class="reg_form">
                            <form  id="app"
                                   @submit="sendData"
                                   method="post"
                                   novalidate="true">
                                <div class="select_container select_countries">
                                    <multiselect
                                        v-model="countriesVal"
                                        :options="countries"
                                        label="title_ru"
                                        track-by="title_ru"
                                        placeholder="Страна"
                                        selectLabel="Выберите страну"
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
                                    <div class="error_input" v-show="errors.countries">{{errors.countries}}</div>
                                </div>
                                <div class="item_reg_block">
                                    <div class="title_item_reg_block">
                                        Реквизиты
                                    </div>
                                    <div class="tab_reg">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#company"
                                                   role="tab" aria-controls="company"  aria-selected="true" @click="changeType('company')" ><span> &#183;</span>
                                                    Компания </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="IP-tab" data-toggle="tab" href="#IP" role="tab"
                                                   aria-controls="IP" aria-selected="false" @click="changeType('ip')"><span> &#183;</span> ИП</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="company" role="tabpanel" aria-labelledby="company-tab">
                                                <div class="container_item_reg_input">
                                                    <div>
                                                        <input type="text" placeholder="Название компании" v-model="companyName" @keyup="getCompanyName()" autocomplete="off"  />
                                                        <div class="search_name_company" v-if="search_data.length">
                                                            <ul class="list-group">
                                                                <a href="#" class="list-group-item" v-for="data1 in search_data"  @click="getName(data1.data.name.full_with_opf,data1.data.inn)">
                                                                    {{ data1.value}} <br/>
                                                                    <span class="color_success">ИНН {{data1.data.inn}}</span></a>
                                                            </ul>
                                                        </div>
                                                        <div class="error_input" v-show="errors.companyName">{{errors.companyName}}</div>
                                                    </div>
                                                    <div>
                                                        <masked-input  type="text" placeholder="ИНН" v-model="inn" mask="1111111111" v-on:input="getInn()" required />
                                                        <div class="error_input" v-show="errorsInn">{{errorsInn}}</div>
                                                        <div class="error_input" v-show="errors.inn">{{errors.inn}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="IP" role="tabpanel" aria-labelledby="IP-tab">
                                                 <div class="container_item_reg_input">
                                                    <div>
                                                        <input type="text" placeholder="ФИО" v-model="companyName" @keyup="getCompanyName()" autocomplete="off"  />
                                                        <div class="search_name_company" v-if="search_data.length">
                                                            <ul class="list-group">
                                                                <a href="#" class="list-group-item" v-for="data1 in search_data"  @click="getName(data1.data.name.full_with_opf,data1.data.inn)">
                                                                    {{ data1.value}} <br/>
                                                                    <span class="color_success">ИНН {{data1.data.inn}}</span></a>
                                                            </ul>
                                                        </div>
                                                        <div class="error_input" v-show="errors.companyName">{{errors.companyName}}</div>
                                                    </div>
                                                    <div>
                                                        <masked-input  type="text" placeholder="ИНН" v-model="inn" mask="1111111111" v-on:input="getInn()" required />
                                                        <div class="error_input" v-show="errorsInn">{{errorsInn}}</div>
                                                        <div class="error_input" v-show="errors.inn">{{errors.inn}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item_reg_block">
                                    <div class="title_item_reg_block">
                                        Контакты
                                    </div>
                                    <div class="container_item_reg_input">
                                        <div>
                                            <input type="text" placeholder="Имя" v-model="userName" required v-on:keypress="noNumber($event)" />
                                            <div class="error_input" v-show="errors.userName">{{errors.userName}}</div>
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Фамилия" v-model="userSurname" required v-on:keypress="noNumber($event)"/>
                                            <div class="error_input" v-show="errors.userSurname">{{errors.userSurname}}</div>
                                        </div>
                                    </div>
                                    <div class="container_item_reg_input">
                                        <div class="select_container select_countries select_code-phone">
                                             <multiselect
                                                v-model="codeTel"
                                                :options="countries"
                                                label="code"
                                                track-by="code"
                                                placeholder="Код"
                                                selectLabel="Выберите код"
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
                                                @select="changeCode"

                                        ></multiselect>
                                        <div class="error_input" v-show="errors.code">{{errors.code}}</div>
                                        </div>
                                        <div class="phone_reg_input">
                                            <masked-input type="text" placeholder="Телефон" v-model="userPhone"  :mask="'(111) 111-1111'" />
                                            <div class="error_input" v-show="errors.userPhone">{{errors.userPhone}}</div>
                                        </div>

                                    </div>
                                </div>
                               <div class="email_reg_input">
                                    <input type="email" placeholder="E-mail" v-model="userEmail" required v-on:keypress="noCyrillic($event)"/>
                                    <div class="error_input" v-show="errors.userEmail">{{errors.userEmail}}</div>
                                </div>
                                <div class="item_reg_block">
                                    <div class="title_item_reg_block">
                                        <div>Создайте пароль</div>
                                        <div class="description_title_reg_block">Минимум 8 символов, используйте заглавные буквы
                                            и цифры</div>
                                    </div>
                                    <div class="container_item_reg_input">
                                        <div>
                                            <input :type="passwordType" placeholder="Введите пароль" v-model="userPassword">
                                            <div class="error_input" v-show="errors.userPassword">{{errors.userPassword}}</div>
                                            <div class="icon_password" @click="changeOpenPassword">
                                                <svg v-if="passwordType == 'password'" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.5">
                                                        <path d="M5.67969 3L21.6797 19" stroke="#22262A" stroke-width="2"
                                                              stroke-linecap="round" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M14.0546 4.79046C14.2347 4.26835 14.8039 3.99106 15.326 4.17112C18.4478 5.24771 21.0835 7.65289 22.8918 10.8025C23.3668 11.6299 23.4799 12.6015 23.2316 13.4975C23.084 14.0297 22.5329 14.3416 22.0007 14.194C21.4685 14.0465 21.1567 13.4954 21.3042 12.9632C21.4117 12.5757 21.3626 12.1559 21.1573 11.7984C19.5394 8.98037 17.2514 6.95069 14.674 6.06185C14.1519 5.88179 13.8746 5.31257 14.0546 4.79046ZM8.7503 4.94125C8.95814 5.45293 8.71183 6.03622 8.20014 6.24406C5.82167 7.21018 3.71737 9.15939 2.2022 11.7984C1.9326 12.268 1.9326 12.845 2.2022 13.3146C4.42466 17.1855 7.89339 19.5565 11.6798 19.5565C14.367 19.5565 16.8801 18.369 18.9146 16.2991C19.3017 15.9052 19.9349 15.8998 20.3288 16.2869C20.7226 16.674 20.7281 17.3072 20.341 17.7011C17.9956 20.0872 14.9897 21.5565 11.6798 21.5565C6.99415 21.5565 2.94527 18.6256 0.467746 14.3104C-0.155911 13.2242 -0.155916 11.8889 0.467735 10.8026C2.16221 7.85128 4.58162 5.55518 7.44748 4.39109C7.95917 4.18325 8.54246 4.42956 8.7503 4.94125Z"
                                                              fill="#22262A" />
                                                        <path
                                                            d="M14.5892 11.8251C14.748 12.457 14.6968 13.1233 14.4434 13.7235C14.1899 14.3236 13.748 14.825 13.1844 15.1517C12.6208 15.4785 11.9662 15.6129 11.3194 15.5347C10.6726 15.4564 10.0689 15.1698 9.59949 14.7181C9.13007 14.2663 8.82045 13.6741 8.71743 13.0308C8.61441 12.3875 8.7236 11.7282 9.02848 11.1524C9.33337 10.5767 9.81738 10.1159 10.4074 9.83956C10.9973 9.56327 11.6612 9.48653 12.2987 9.62095"
                                                            stroke="#22262A" stroke-width="2" />
                                                    </g>
                                                </svg>
                                                <svg v-if="passwordType == 'text'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.33497 13.2561C0.888345 12.4782 0.888342 11.522 1.33497 10.7441C3.68496 6.65097 7.44378 4 11.6798 4C15.9158 4 19.6746 6.65094 22.0246 10.744C22.4712 11.5219 22.4712 12.4781 22.0246 13.256C19.6746 17.3491 15.9158 20 11.6798 20C7.44377 20 3.68497 17.3491 1.33497 13.2561Z" stroke="#22262A" stroke-width="2"/>
                                                    <circle cx="11.6797" cy="12" r="3" stroke="#22262A" stroke-width="2"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <input :type="passwordConfirmType" placeholder="Повторите пароль" v-model="userPasswordConfirmation">
                                            <div class="error_input" v-show="errors.userPasswordConfirmation">Пароли должны совпадать.</div>
                                            <div class="icon_password" @click="changeOpenConfirmPassword">
                                                <svg v-if="passwordConfirmType == 'password'" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.5">
                                                        <path d="M5.67969 3L21.6797 19" stroke="#22262A" stroke-width="2"
                                                              stroke-linecap="round" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M14.0546 4.79046C14.2347 4.26835 14.8039 3.99106 15.326 4.17112C18.4478 5.24771 21.0835 7.65289 22.8918 10.8025C23.3668 11.6299 23.4799 12.6015 23.2316 13.4975C23.084 14.0297 22.5329 14.3416 22.0007 14.194C21.4685 14.0465 21.1567 13.4954 21.3042 12.9632C21.4117 12.5757 21.3626 12.1559 21.1573 11.7984C19.5394 8.98037 17.2514 6.95069 14.674 6.06185C14.1519 5.88179 13.8746 5.31257 14.0546 4.79046ZM8.7503 4.94125C8.95814 5.45293 8.71183 6.03622 8.20014 6.24406C5.82167 7.21018 3.71737 9.15939 2.2022 11.7984C1.9326 12.268 1.9326 12.845 2.2022 13.3146C4.42466 17.1855 7.89339 19.5565 11.6798 19.5565C14.367 19.5565 16.8801 18.369 18.9146 16.2991C19.3017 15.9052 19.9349 15.8998 20.3288 16.2869C20.7226 16.674 20.7281 17.3072 20.341 17.7011C17.9956 20.0872 14.9897 21.5565 11.6798 21.5565C6.99415 21.5565 2.94527 18.6256 0.467746 14.3104C-0.155911 13.2242 -0.155916 11.8889 0.467735 10.8026C2.16221 7.85128 4.58162 5.55518 7.44748 4.39109C7.95917 4.18325 8.54246 4.42956 8.7503 4.94125Z"
                                                              fill="#22262A" />
                                                        <path
                                                            d="M14.5892 11.8251C14.748 12.457 14.6968 13.1233 14.4434 13.7235C14.1899 14.3236 13.748 14.825 13.1844 15.1517C12.6208 15.4785 11.9662 15.6129 11.3194 15.5347C10.6726 15.4564 10.0689 15.1698 9.59949 14.7181C9.13007 14.2663 8.82045 13.6741 8.71743 13.0308C8.61441 12.3875 8.7236 11.7282 9.02848 11.1524C9.33337 10.5767 9.81738 10.1159 10.4074 9.83956C10.9973 9.56327 11.6612 9.48653 12.2987 9.62095"
                                                            stroke="#22262A" stroke-width="2" />
                                                    </g>
                                                </svg>
                                                <svg v-if="passwordConfirmType == 'text'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.33497 13.2561C0.888345 12.4782 0.888342 11.522 1.33497 10.7441C3.68496 6.65097 7.44378 4 11.6798 4C15.9158 4 19.6746 6.65094 22.0246 10.744C22.4712 11.5219 22.4712 12.4781 22.0246 13.256C19.6746 17.3491 15.9158 20 11.6798 20C7.44377 20 3.68497 17.3491 1.33497 13.2561Z" stroke="#22262A" stroke-width="2"/>
                                                    <circle cx="11.6797" cy="12" r="3" stroke="#22262A" stroke-width="2"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox">
                                        <input class="custom-checkbox" checked type="checkbox" id="color-2" name="color-2"
                                               value="indigo" v-model="userCheckPersonalData">
                                        <label for="color-2">Даю согласие на обработку персональных данных</label>
                                    </div>
                                    <div class="error_input" v-show="serverError" style="text-align: center">{{serverError}}</div>
                                    <div class="btn_summit">
                                        <button type="submit">Зарегистрироваться</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col xs-12 col-md-6">
                        <div class="reg_img">
                            <svg width="555" height="465" viewBox="0 0 555 465" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M25.788 443.096C33.4864 457.425 49.8252 463.576 49.8252 463.576C49.8252 463.576 53.6824 446.496 45.984 432.166C38.2856 417.837 21.9468 411.686 21.9468 411.686C21.9468 411.686 18.0896 428.767 25.788 443.096Z"
                                        fill="#51668F" />
                                    <path
                                        d="M31.0803 438.382C44.9791 446.774 50.332 463.444 50.332 463.444C50.332 463.444 33.1504 466.507 19.2517 458.114C5.35287 449.722 0 433.052 0 433.052C0 433.052 17.1815 429.989 31.0803 438.382Z"
                                        fill="#71BF45" />
                                    <path d="M342.693 22.3235H255.975V23.5668H342.693V22.3235Z" fill="#F2F2F2" />
                                    <path d="M319.155 23.2556H317.916V34.7567H319.155V23.2556Z" fill="#F2F2F2" />
                                    <path d="M281.37 23.2556H280.131V34.7567H281.37V23.2556Z" fill="#F2F2F2" />
                                    <path d="M386.672 82.0046H299.953V83.248H386.672V82.0046Z" fill="#F2F2F2" />
                                    <path d="M324.731 70.8145H323.492V82.3156H324.731V70.8145Z" fill="#F2F2F2" />
                                    <path d="M362.514 70.8145H361.275V82.3156H362.514V70.8145Z" fill="#F2F2F2" />
                                    <path d="M501.885 109.98H415.166V111.224H501.885V109.98Z" fill="#F2F2F2" />
                                    <path d="M439.942 98.79H438.703V110.291H439.942V98.79Z" fill="#F2F2F2" />
                                    <path d="M477.727 98.79H476.488V110.291H477.727V98.79Z" fill="#F2F2F2" />
                                    <path d="M493.213 398.441H406.494V399.684H493.213V398.441Z" fill="#F2F2F2" />
                                    <path d="M431.27 387.25H430.031V398.752H431.27V387.25Z" fill="#F2F2F2" />
                                    <path d="M469.055 387.25H467.816V398.752H469.055V387.25Z" fill="#F2F2F2" />
                                    <path d="M345.17 198.881H258.451V200.124H345.17V198.881Z" fill="#F2F2F2" />
                                    <path d="M283.229 187.69H281.99V199.192H283.229V187.69Z" fill="#F2F2F2" />
                                    <path d="M321.014 187.69H319.775V199.192H321.014V187.69Z" fill="#F2F2F2" />
                                    <path d="M372.424 348.706H285.705V349.949H372.424V348.706Z" fill="#F2F2F2" />
                                    <path d="M310.483 337.516H309.244V349.017H310.483V337.516Z" fill="#F2F2F2" />
                                    <path d="M348.268 337.516H347.029V349.017H348.268V337.516Z" fill="#F2F2F2" />
                                    <path d="M511.176 303.323H424.457V304.567H511.176V303.323Z" fill="#F2F2F2" />
                                    <path d="M449.233 292.133H447.994V303.634H449.233V292.133Z" fill="#F2F2F2" />
                                    <path d="M487.018 292.133H485.779V303.634H487.018V292.133Z" fill="#F2F2F2" />
                                    <path
                                        d="M224.268 436.535H77.5977V435.476H223.212V384.113H89.9278L83.453 370.574L84.4045 370.116L90.5918 383.053H224.268V436.535Z"
                                        fill="#51668F" />
                                    <path
                                        d="M97.1185 462.481C103.237 462.481 108.198 457.503 108.198 451.361C108.198 445.22 103.237 440.241 97.1185 440.241C90.9995 440.241 86.0391 445.22 86.0391 451.361C86.0391 457.503 90.9995 462.481 97.1185 462.481Z"
                                        fill="#22262A" />
                                    <path
                                        d="M206.329 462.481C212.448 462.481 217.409 457.503 217.409 451.361C217.409 445.22 212.448 440.241 206.329 440.241C200.21 440.241 195.25 445.22 195.25 451.361C195.25 457.503 200.21 462.481 206.329 462.481Z"
                                        fill="#22262A" />
                                    <path
                                        d="M335.062 222.081C338.85 222.081 341.92 218.999 341.92 215.197C341.92 211.395 338.85 208.313 335.062 208.313C331.274 208.313 328.203 211.395 328.203 215.197C328.203 218.999 331.274 222.081 335.062 222.081Z"
                                        fill="#22262A" />
                                    <path
                                        d="M239.955 366.639H75.0971L39.4258 249.616H276.691L276.475 250.304L239.955 366.639ZM75.8777 365.58H239.181L275.252 250.675H40.8519L75.8777 365.58Z"
                                        fill="#51668F" />
                                    <path d="M227.085 360.549H82.2846L50.9531 256.764H259.351L259.162 257.375L227.085 360.549Z"
                                          fill="#F2F2F2" />
                                    <path
                                        d="M279.645 239.161L278.625 238.889L285.588 212.549H326.091V213.609H286.4L279.645 239.161Z"
                                        fill="#51668F" />
                                    <path d="M264.834 285.093H50.9531V286.152H264.834V285.093Z" fill="#51668F" />
                                    <path d="M252.585 324.11H62.8457V325.169H252.585V324.11Z" fill="#51668F" />
                                    <path d="M158.582 250.145H157.527V366.109H158.582V250.145Z" fill="#51668F" />
                                    <path d="M205.824 250.112L198.25 366.073L199.303 366.142L206.878 250.181L205.824 250.112Z"
                                          fill="#51668F" />
                                    <path d="M110.307 250.111L109.254 250.179L116.784 366.144L117.838 366.075L110.307 250.111Z"
                                          fill="#51668F" />
                                    <path d="M555 463.153H0V464.396H555V463.153Z" fill="#51668F" />
                                    <path
                                        d="M368.809 38.4671C368.809 38.4671 377.864 64.333 372.291 68.3123C366.719 72.2917 391.098 104.79 391.098 104.79L420.352 96.8311L404.332 69.6388C404.332 69.6388 402.242 42.4465 402.242 38.4671C402.242 34.4877 368.809 38.4671 368.809 38.4671Z"
                                        fill="#EFC4A5" />
                                    <path opacity="0.1"
                                          d="M368.809 38.4671C368.809 38.4671 377.864 64.333 372.291 68.3123C366.719 72.2917 391.098 104.79 391.098 104.79L420.352 96.8311L404.332 69.6388C404.332 69.6388 402.242 42.4465 402.242 38.4671C402.242 34.4877 368.809 38.4671 368.809 38.4671Z"
                                          fill="#0E0F11" />
                                    <path
                                        d="M353.61 222.844C353.61 222.844 350.967 256.005 353.61 273.249C356.254 290.493 360.218 338.246 360.218 338.246C360.218 338.246 360.218 428.444 374.756 429.771C389.294 431.097 399.867 432.424 401.189 427.118C402.511 421.812 394.581 419.159 398.546 416.506C402.511 413.853 403.832 404.568 398.546 393.957C393.259 383.345 398.546 275.902 398.546 275.902L423.657 343.551C423.657 343.551 426.3 399.262 428.943 407.221C431.586 415.18 426.3 429.771 435.551 431.097C444.803 432.424 455.376 424.465 460.662 421.812C465.949 419.159 452.732 419.159 455.376 417.833C458.019 416.506 465.949 412.527 463.305 411.201C460.662 409.874 458.019 346.204 458.019 346.204C458.019 346.204 450.75 210.243 441.499 204.937C432.247 199.631 426.3 208.77 426.3 208.77L353.61 222.844Z"
                                        fill="#51668F" />
                                    <path
                                        d="M377.4 424.465V435.077C377.4 435.077 365.505 463.923 377.4 463.923C389.294 463.923 398.546 466.912 398.546 462.932V427.118L377.4 424.465Z"
                                        fill="#51668F" />
                                    <path
                                        d="M455.377 424.447V435.058C455.377 435.058 467.271 463.904 455.377 463.904C443.482 463.904 434.23 466.893 434.23 462.914V427.099L455.377 424.447Z"
                                        fill="#51668F" />
                                    <path
                                        d="M387.311 57.7008C400.449 57.7008 411.1 47.0111 411.1 33.8247C411.1 20.6382 400.449 9.94849 387.311 9.94849C374.172 9.94849 363.521 20.6382 363.521 33.8247C363.521 47.0111 374.172 57.7008 387.311 57.7008Z"
                                        fill="#EFC4A5" />
                                    <path
                                        d="M380.044 78.2607C380.044 78.2607 386.652 98.1575 397.225 94.1782L407.798 90.1988L426.301 217.538C426.301 217.538 411.763 238.762 390.617 225.497C369.471 212.233 380.044 78.2607 380.044 78.2607Z"
                                        fill="#71BF45" />
                                    <path
                                        d="M398.547 74.2812L404.494 61.6799C404.494 61.6799 439.517 78.2606 444.804 83.5664C450.09 88.8722 450.09 96.831 450.09 96.831L440.839 129.992C440.839 129.992 443.482 202.947 443.482 205.6C443.482 208.253 452.734 222.844 446.125 217.538C439.517 212.232 438.196 206.927 432.909 214.885C427.623 222.844 415.728 232.129 415.728 232.129L398.547 74.2812Z"
                                        fill="#22262A" />
                                    <path
                                        d="M444.803 169.786L440.838 206.927C440.838 206.927 417.048 228.15 422.335 229.477C427.621 230.803 430.265 225.497 430.265 225.497C430.265 225.497 439.516 234.782 444.803 229.477C450.089 224.171 463.305 173.765 463.305 173.765L444.803 169.786Z"
                                        fill="#EFC4A5" />
                                    <path
                                        d="M387.818 0.0807384C382.544 -0.108483 376.901 -0.202084 372.454 2.65028C370.408 4.08176 368.614 5.84476 367.144 7.86714C362.814 13.3618 359.072 20.2754 360.68 27.0929L362.549 26.3615C362.549 28.1813 362.146 29.9783 361.369 31.6226C361.632 30.8547 362.513 32.096 362.277 32.8727L360.219 39.6494C363.602 38.4046 367.811 40.925 368.326 44.5046C368.561 36.6333 369.375 27.6075 375.737 22.9985C378.945 20.6743 383.005 19.9647 386.912 19.3347C390.516 18.7534 394.294 18.1991 397.746 19.3899C401.198 20.5807 404.138 24.124 403.355 27.7024C404.947 27.1521 406.727 28.2654 407.514 29.7592C408.3 31.2531 408.341 33.0153 408.365 34.7048C410.062 35.9082 411.993 33.5185 412.684 31.5521C414.307 26.9366 415.75 22.0234 414.876 17.2081C414.001 12.3928 410.092 7.79101 405.215 7.77468C405.807 7.12212 406.123 6.26406 406.096 5.38199L402.076 5.04112C403.096 4.8961 404.035 4.39951 404.731 3.6364C403.117 5.41872 390.428 0.17437 387.818 0.0807384Z"
                                        fill="#51668F" />
                                    <path
                                        d="M386.651 70.3021C386.651 70.3021 375.892 59.7205 372.02 60.3687C368.148 61.0169 362.861 70.3021 362.861 70.3021C362.861 70.3021 331.142 80.9137 332.464 91.5253C333.786 102.137 348.323 153.869 348.323 153.869C348.323 153.869 360.218 216.212 349.645 222.844C339.072 229.477 399.867 246.72 401.189 238.762C402.51 230.803 405.153 151.216 401.189 139.278C397.224 127.34 386.651 70.3021 386.651 70.3021Z"
                                        fill="#22262A" />
                                    <path
                                        d="M432.908 91.5254H449.25C449.25 91.5254 460.662 141.931 461.984 147.236C463.306 152.542 465.949 177.745 464.627 177.745C463.306 177.745 436.873 172.439 436.873 176.418L432.908 91.5254Z"
                                        fill="#22262A" />
                                    <path
                                        d="M432.355 216.345H369.793C363.688 188.158 363.178 160.925 369.793 134.905H432.355C422.259 160.457 421.628 187.504 432.355 216.345Z"
                                        fill="#F2F2F2" />
                                    <path
                                        d="M344.357 181.724L362.86 189.683C362.86 189.683 398.544 194.989 398.544 180.398C398.544 165.807 362.86 173.766 362.86 173.766L350.965 169.948L344.357 181.724Z"
                                        fill="#EFC4A5" />
                                    <path
                                        d="M348.324 83.5667L332.465 87.546L320.57 157.848C320.57 157.848 316.605 176.418 323.214 177.745C329.822 179.071 348.324 189.683 348.324 189.683C348.324 189.683 350.968 169.786 356.254 169.786L343.038 159.175L350.968 112.749L348.324 83.5667Z"
                                        fill="#22262A" />
                                    <path d="M124.037 219.396H37.3184V220.64H124.037V219.396Z" fill="#F2F2F2" />
                                    <path d="M62.0963 208.206H60.8574V219.707H62.0963V208.206Z" fill="#F2F2F2" />
                                    <path d="M99.8795 208.206H98.6406V219.707H99.8795V208.206Z" fill="#F2F2F2" />
                                    <path d="M154.389 35.3784H67.6699V36.6218H154.389V35.3784Z" fill="#F2F2F2" />
                                    <path d="M130.85 36.311H129.611V47.8121H130.85V36.311Z" fill="#F2F2F2" />
                                    <path d="M93.067 36.311H91.8281V47.8121H93.067V36.311Z" fill="#F2F2F2" />
                                    <path d="M241.727 157.85H155.008V159.093H241.727V157.85Z" fill="#F2F2F2" />
                                    <path d="M218.19 158.782H216.951V170.283H218.19V158.782Z" fill="#F2F2F2" />
                                    <path d="M180.405 158.782H179.166V170.283H180.405V158.782Z" fill="#F2F2F2" />
                                    <path d="M94.3047 157.228H7.58594V158.472H94.3047V157.228Z" fill="#F2F2F2" />
                                    <path d="M70.7681 158.161H69.5293V169.662H70.7681V158.161Z" fill="#F2F2F2" />
                                    <path d="M32.983 158.161H31.7441V169.662H32.983V158.161Z" fill="#F2F2F2" />
                                    <path d="M198.367 95.0601H111.648V96.3034H198.367V95.0601Z" fill="#F2F2F2" />
                                    <path d="M136.426 83.8696H135.188V95.3707H136.426V83.8696Z" fill="#F2F2F2" />
                                    <path d="M174.21 83.8696H172.971V95.3707H174.21V83.8696Z" fill="#F2F2F2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="555" height="465" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
import { required, minLength, between,requiredIf,maxLength,sameAs} from 'vuelidate/lib/validators';
import MaskedInput from 'vue-masked-input';
import HeaderCatalog from "../Сomponents/HeaderCatalog";
import Multiselect from 'vue-multiselect';

export default {
    data() {
       return{
           errors:[],
           phone:'',
           type:'company',
           companyName:'',
           inn:'',
           userName:'',
           userSurname:'',
           userPhone:'',
           userEmail:'',
           userPassword:'',
           userPasswordConfirmation:'',
           userCheckPersonalData:true,
           search_data:[],
           serverError:'',
           countries: [],
           countriesVal:'',
           codeTel:[
               { id: 51, country_id: 1, title_ru: "Россия", code: "+7" }
           ],
           errorsInn:'',
           passwordType:'password',
           passwordConfirmType:'password'
       }
    },
    components:{
        HeaderCatalog,
        MaskedInput,
        Multiselect,
    },
    methods:{
        changeOpenPassword(){

            if(this.passwordType == 'password'){
               this.passwordType = 'text' ;
            }else if(this.passwordType == 'text'){
               this.passwordType = 'password' ;
            }
        },
        changeOpenConfirmPassword(){
            if(this.passwordConfirmType == 'password'){
               this.passwordConfirmType = 'text' ;
            }else if(this.passwordConfirmType == 'text'){
               this.passwordConfirmType = 'password' ;
            }
        },
       changeType(type) {
            let self = this;
            self.type = type;
       },
       getInn() {
            let self = this;
            let str = self.inn.replace('_','')

            if(str.length >= 10)
            {
                this.getInnFromBackend(str)
                /*console.log(self.inn);*/
            }else{
                this.errorsInn = "";
            }
        },
        noNumber: function(evt) {
            var regex = new RegExp("^[a-zA-Zа-яёА-ЯЁ]+$");
            var key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },
        noCyrillic: function(evt) {
            var regex = new RegExp("^[a-zA-Zа-яёА-ЯЁ-0-9.-_@]");
            var regerus= new RegExp("^[а-яёА-ЯЁ]");
            var key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },
       getInnFromBackend(inn) {
            axios.post('/get/inn/from/api',{inn: inn})
                .then((response)=>{

                   if(response.data !== 'undefined' && response.data !== null && response.data.suggestions !== 'undefined' && response.data.suggestions !== null)
                   {
                       if(response.data.suggestions.length){
                        this.companyName = response.data.suggestions['0'].data.name.short_with_opf;
                        this.errorsInn = "";
                       }else{
                        this.errorsInn = "ИНН не существует";
                       }
                   }

                })
        },
        getCompanyName() {
            let self = this;
            let str = self.companyName.replace('_','');
            if(str.length >= 5)
            {
                this.getData(str)
            }
        },
        getData:function(str){
            this.search_data = [];
            axios.post('/get/companyname/from/api', {
                name:str
            }).then(response => {
                this.search_data = response.data.suggestions;
            });
        },
        getCountries(){
            axios.get('/get/countries', {
            }).then(response => {
                if(response.status == 200){
                    this.countries = response.data;
                }
            });
        },
        getName:function(name,inn) {
           this.companyName = name;
           this.inn = inn;
           this.search_data = [];
       },
        validations:function() {
            this.errors = [];
            if(this.type == 'company' && !this.companyName) this.errors.userName = "Название обязательно для заполнения";
            if(!this.userName) this.errors.userName = "Имя обязательно для заполнения";
            if(!this.userSurname) this.errors.userSurname = "Фамилия обязательно для заполнения";
            if(!this.userPhone) this.errors.userPhone = "Телефон обязателен для заполнения";
            if(!this.codeTel) this.errors.code = "Код обязателен для заполнения";
            if(!this.countriesVal) this.errors.countries = "Страна обязательна для заполнения";
            if(this.errorsInn){
               this.errors.inn = "ИНН не существует";
            }
            console.log("this.inn",this.inn);
            if(!this.inn){
                this.errors.inn = "ИНН обязателен для заполнения";
            }else if(this.inn && (this.inn).indexOf('_') > -1){
                this.errors.inn = "ИНН должен содержать минимум 10 знаков"
            }
            if(!this.userEmail) {
                this.errors.userEmail = "Email обязателен для заполнения.";
            } else if(!this.validEmail(this.userEmail)) {
                this.errors.userEmail = "Неправильный Email";
            }
            if(!this.userPassword){
                this.errors.userPassword = "Пароль обязателен для заполнения";
            }else if(!this.validPassword(this.userPassword)){
                this.errors.userPassword = "Пароль слишком простой"
            }
            if(this.userPassword !== this.userPasswordConfirmation) this.errors.userPasswordConfirmation = "Пароли не совпадают";

            if(Object.keys(this.errors).length > 0) return false;
            else return true;

        },
        validEmail:function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validPassword:function (password){
           var re =  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;
           return re.test(password);
        },
        sendData(e){
           e.preventDefault();
           if(this.validations()){
               axios.post('/set/company/and/register', {
                   type:this.type,
                   companyName:this.companyName,
                   inn:this.inn,
                   userName:this.userName,
                   userSurname:this.userSurname,
                   userPhone:this.codeTel+this.userPhone,
                   userEmail:this.userEmail,
                   userPassword:this.userPassword,

               }).then(response => {
                   if(response.status == 200)
                   {
                       console.log(response.status)
                       this.$router.push({ name: 'authorization-success', query: { redirect: '/successauth' },params:{email:this.userEmail} });
                   }else if(response.status == 204){
                      this.serverError = 'Пользователь уже существует';
                   }
               });
           }
       }
    },
    mounted() {
        this.getCountries();
    }
}
</script>
