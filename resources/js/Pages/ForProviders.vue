<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
        </div>
        <div class="container content">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Для поставщиков</div>

                    <div class="card-body">
                        I'm an Для поставщиков component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderCatalog from "../Сomponents/HeaderCatalog";
export default {
    components:{
        HeaderCatalog
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
