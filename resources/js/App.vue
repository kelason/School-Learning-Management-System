<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import MainNavbar from './navbar/MainNavbar'
import AdminNavbar from './navbar/AdminNavbar'
import NoNavbar from './navbar/NoNavbar'
export default {
    computed: {
        layout () {
            return this.$store.getters.layout
        }
    },
    components: {
        'main-layout': MainNavbar,
        'admin-layout': AdminNavbar,
        'no-layout': NoNavbar
        // define as many layouts you want for the application
    }
}
</script>

<style>

</style>