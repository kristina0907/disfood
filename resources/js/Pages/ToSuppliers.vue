<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderCatalog></HeaderCatalog>
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
