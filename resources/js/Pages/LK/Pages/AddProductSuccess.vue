<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>

        <div class="row">
            <div class="xs-12 col-md-4 left_container">
                <leftsidebar></leftsidebar>
            </div>
            <div class="col-md-8" style="min-height: 600px;">
                Вы успешно добавили предложение о продаже!
            </div>
        </div>

    </div>

</template>

<script>


import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
export default {
    components: {UserLKHeader},
    data(){
        return {

        }
    }
}
</script>
