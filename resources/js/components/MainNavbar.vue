<template>
  <div style="height: 1500px;">
    <v-app id="inspire">
      <v-progress-linear
        indeterminate
        fixed
        color="white"
        style="z-index:6"
      ></v-progress-linear>
      <v-app-bar
        color="#f64c72"
        elevate-on-scroll 
        fixed 
        dark
      >
        <v-toolbar-title class="font-weight-medium display-1">School</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items 
          class="hidden-xs-only"
          v-for="item in items"
          :key="item.title"
        >
          <v-btn :to="item.link" text active-class="active" class="font-weight-bold">
            <v-icon small left>mdi-{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <span class="hidden-sm-and-up">
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </span>
        <v-btn icon class="hidden-xs-only">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon class="hidden-xs-only">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon class="hidden-xs-only">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        bottom
      >
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
          >
            <v-list-item-icon>
              <v-icon small>
                mdi-{{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            {{ item.title }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-sheet
        max-height="100vh"
      >
        <div class="violet-gradient"></div>
        <v-container 
          class="mt-16" 
        >
          <v-row>
            <v-col
              cols="6"
              sm="12"
              md="6"
              class="align-self-center white--text"
              style="z-index:2"
            >
              <h1 class="display-3">E-Learning</h1>
              <h1 class="grey--text text--lighten-1">For a better education </h1>
              <p class="white--text mt-5">A best and cheapest way of getting know learning to make a better tomorrow.</p>
            </v-col>
            <v-col
              cols="6"
              sm="12"
              md="6"
              style="z-index:2"
            >
              <img 
                src="../../../public/img/svg/study.svg"
                style="height: 500px; width: 600px;"
              >
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedItem: 1,
      drawer: false,
      items: [
        { title: 'Home', link:'/', icon: 'home' },
        { title: 'About', link:'/about', icon: 'information-variant' },
        { title: 'Contact Us', link:'/contact-us', icon: 'contacts' },
        { title: 'Blog', link:'/blog', icon: 'post' },
      ]
    }
  },
  // mounted: function() {
  //   let elHtml = document.getElementsByTagName('html')[0]
  //   elHtml.style.overflowY = 'hidden'
  // },
  // destroyed: function() {
  //   let elHtml = document.getElementsByTagName('html')[0]
  //   elHtml.style.overflowY = null
  // }
}
</script>

<style>
</style>