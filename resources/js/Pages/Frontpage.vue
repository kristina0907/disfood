<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
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
import NavbarCatalog from "../Сomponents/NavbarCatalog";
import HeaderCatalog from "../Сomponents/HeaderCatalog";
export default {
    components:{
        NavbarCatalog,
        HeaderCatalog
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
