<template>
  <v-sheet
      max-height="100vh"
    >
    <div class="violet-gradient"></div>
    <v-container 
      class="mt-16" 
      fill-height
    >
      <v-row 
        class="text-sm-center" 
        align="center" 
        justify="center"
      >
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="white--text"
          style="z-index:2"
        >
          <h1 class="display-3">E-Learning</h1>
          <h1 class="grey--text text--lighten-1">For a better education </h1>
          <p class="white--text mt-3">A best and cheapest way of getting know learning to make a better tomorrow.</p>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          style="z-index:2"
        >
          <div class="home-svg"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout')
  }
}
</script>

<style>

</style>