<template>
    <div class="modal fade modal_consultation" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel"
         style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <form method="post" @submit="sendData">
                        <div class="madal_title">Войти</div>
                        <div class="modal_input"><input type="text" placeholder="E-mail" name="email" v-model="email" required autocomplete="email" autofocus></div>
                        <div class="modal_input"><input type="password" placeholder="Пароль" v-model="password" name="password" required autocomplete="current-password"></div>
                        <div class="checkbox remember_checkbox">
                            <input class="custom-checkbox" type="checkbox" name="remember" id="remember">
                            <label for="remember">Запомнить меня</label>
                        </div>
                        <div v-if="serverError" class="modal_error">Неправильные логин или пароль</div>
                        <div><button class="modal_btn" type="submit">Войти</button></div>
                        <router-link class="modal-link" :to="{path:'/password/reset'}">
                            Забыли пароль?
                        </router-link>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            show:true,
            serverError:false,
            email:'',
            password:''

        }
    },
    methods:{
        sendData(e){
            e.preventDefault();
            axios.post('/auth/loginajax', {
                email:this.email,
                password:this.password,

            }).then(response => {
                if(response.status == 200)
                {
                    document.location.href = '/dashboard';

                }else if(response.status == 205){
                    this.serverError = true;
                }
            });
        }
    }
}
</script>
