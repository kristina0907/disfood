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
                    <div class="step_main_block">
                        <div class="title_profile_accreditation">Аккредитация профиля</div>
                        <div class="title_description_settings">Заполните данные профиля организации чтобы проводить
                            сделки
                        </div>
                        <div class="step_profile_accreditation_block">
                            <div class="row">
                                <div class="col-xs-12 col-md-6 active_step">
                                    <div class="head_step_profile_accreditation_block">
                                        <div class="title_step">Покупатель</div>
                                        <div class="number_step">1/3</div>
                                    </div>
                                    <div class="container_profile_accreditation_block">
                                        <div class="row">
                                            <div class="item_step_block active_half_step col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="head_step_profile_accreditation_block">
                                        <div class="title_step">Поставщик</div>
                                        <div class="number_step">0/3</div>
                                    </div>
                                    <div class="container_profile_accreditation_block">
                                        <div class="row">
                                            <div class="item_step_block col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="step_profile_information_block">
                            <div class="step_name_profile_information">2. Договор</div>
                            <div class="step_description_profile_information">
                                Скачайте договор, подпишите и загрузите обратно
                            </div>
                            <div class="save_contract">
                                <span>Скачать договор</span>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.5 4.5C4.5 3.39543 5.39543 2.5 6.5 2.5L9.92105 2.5C11.5779 2.5 12.9211 3.84315 12.9211 5.5L12.9211 8C12.9211 9.38071 14.0403 10.5 15.4211 10.5H17.5C19.1569 10.5 20.5 11.8431 20.5 13.5V20.5C20.5 21.6046 19.6046 22.5 18.5 22.5L6.5 22.5C5.39543 22.5 4.5 21.6046 4.5 20.5L4.5 4.5Z"
                                        stroke="#22262A" stroke-width="2" />
                                    <path
                                        d="M4.5 4.5C4.5 3.39543 5.39543 2.5 6.5 2.5L9.73393 2.5C12.0937 2.5 14.3332 3.54186 15.8532 5.34691L18.6193 8.63163C19.8339 10.074 20.5 11.899 20.5 13.7847V20.5C20.5 21.6046 19.6046 22.5 18.5 22.5L6.5 22.5C5.39543 22.5 4.5 21.6046 4.5 20.5L4.5 4.5Z"
                                        stroke="#22262A" stroke-width="2" />
                                </svg>

                            </div>
                            <div class="download_contract">
                                <div class="title_download_contract">Загрузите подписаный договор</div>
                                <div class="download_contract_block">
                                    <div class="container_download_contract_block">
                                        <div class="form-group">
                                            <input type="file" name="file" id="file" class="input-file">
                                            <label for="file" class="btn btn-tertiary js-labelFile">
                                                <div class="container_info_download_contract">
                                                    <div class="name_download_contract">1. Название документа</div>
                                                    <div class="info_download_contract">Нажмите на ссылку “Загрузить”
                                                        или перетащите файл в эту область </div>
                                                    <div class="btn_download_contract">Загрузить</div>
                                                </div>
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
                                <div class="add_more_download_contract">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 3V21" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round" />
                                        <path d="M3.5 12L21.5 12" stroke="#71BF45" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Добавить еще</span>
                                </div>
                            </div>
                        </div>
                        <button class="btn_next_step" type="submit">Далее • подписание договора</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>


import UserLKHeader from "../../../../Сomponents/LK/UserLKHeader";
import {mapState} from "vuex";
import Leftsidebar from "./Leftsidebar";
export default {
    props: ['id'],
    components: {Leftsidebar, UserLKHeader},
    data(){
        return {

        }
    },
    computed: {
        ...mapState(['user'])
    },
}
</script>
