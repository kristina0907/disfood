<template>
    <div class="container-fluid">
        <div class="row">
            <Head></Head>
        </div>
        <div class="content container">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Поставщикам</div>

                    <div class="card-body">
                        I'm an Поставщикам component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
        Head: () => import('../Сomponents/Header'),
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
