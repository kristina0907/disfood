<template>
    <div class="container-fluid">
        <div class="row">
            <Head></Head>
        </div>
       <div class="container content">
           <div class="row justify-content-center">
               <div class="col-md-8">
                   <div class="card">
                       <div class="card-header">Frontpage</div>

                       <div class="card-body">
                           I'm an Frontpage component.
                       </div>
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
