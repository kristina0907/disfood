<template>
    <!-- Modal -->
    <div v-show="show" class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Войти</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form method="post" @submit="sendData">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" v-model="email" required autocomplete="email" autofocus>


                                    <span class="invalid-feedback" role="alert">
                                        <strong>message</strong>
                                    </span>

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Пароль</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control"  v-model="password" name="password" required autocomplete="current-password">


                                    <span class="invalid-feedback" role="alert">
                                        <strong>$message</strong>
                                    </span>

                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            Запомнить меня
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-green">
                                        Войти
                                    </button>

                                    <router-link class="dropdown-item dropdown-item-settings" :to="{path:'/dashboard'}">
                                        Забыли пароль?
                                    </router-link>
                                    <!--                                    <a class="btn btn-secondary" href="{{ route('password.request') }}">-->
                                    <!--                                        -->
                                    <!--                                    </a>-->

                                </div>
                            </div>
                        </form>
                    </div>
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
            serverError:'',
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
                    // this.$router.push({ name: 'dashboard'});
                    // this.show = false;

                }else{
                    this.serverError = response;
                }
            });
        }
    }
}
</script>
