<template>
    <div class="container-fluid">
        <div class="row">
            <Header></Header>
        </div>
        <div class="container content">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Каталог</div>

                    <div class="card-body">
                        I'm an Каталог component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../Сomponents/Header";
export default {
    components: {Header},
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
