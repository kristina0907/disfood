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
                                        <div class="number_step"><svg width="25" height="24" viewBox="0 0 25 24"
                                                                      fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 12.3135L10.1569 17.9703L21.4706 6.65662" stroke="#71BF45"
                                                  stroke-width="2" stroke-linecap="round" />
                                        </svg></div>
                                    </div>
                                    <div class="container_profile_accreditation_block">
                                        <div class="row">
                                            <div class="item_step_block completed_item_step col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block completed_item_step col-md-4">
                                                <div class="half_step"></div>
                                                <div class="half_step"></div>
                                            </div>
                                            <div class="item_step_block completed_item_step col-md-4">
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
                            <div class="step_name_profile_information">Вы аккредитованы как покупатель, теперь вы можете проводить сделки</div>
                            <div class="step_description_profile_information supplier_ifo_step">
                                Чтобы стать поставщиком и размещать свои товары, пройдите оставшиеся этапы аккредитации
                            </div>
                        </div>
                        <div class="btn_step_block">
                            <button class="btn_become_supplier">Стать поставщиком</button>
                            <button class="btn_step_complete">Завершить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>


import UserLKHeader from "../../../../Сomponents/LK/UserLKHeader";
import Leftsidebar from "./Leftsidebar";
export default {
    components: {Leftsidebar, UserLKHeader},
    data(){
        return {

        }
    }
}
</script>
