<template>
    <header class="header_registration">
        <navbar></navbar>
        <navbar-catalog></navbar-catalog>
    </header>
</template>

<script>

export default {
    components:{
        Navbar: () => import('./Navbar'),
        NavbarCatalog : () => import('./NavbarCatalog')
    }
}
</script>
