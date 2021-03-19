<template>
    <header>
        <navbar></navbar>
    </header>
</template>

<script>

export default {
    components:{
        Navbar: () => import('./Navbar')
    }
}
</script>
