<template>
  <div>
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
          class="hidden-sm-and-down"
          v-for="item in items"
          :key="item.title"
        >
          <v-btn :to="item.link" text active-class="active" class="font-weight-bold">
            <v-icon small left>mdi-{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <span class="hidden-md-and-up">
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </span>
        <v-btn text class="hidden-sm-and-down">
          <v-icon>mdi-login</v-icon>
          Login
        </v-btn>

        <v-menu
          open-on-hover
          offset-y
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text 
              class="hidden-sm-and-down"
            >
              <v-icon>mdi-account-plus</v-icon>
              Sign Up
            </v-btn>
          </template>
    
          <v-list>
            <v-list-item
              v-for="(item, index) in signup_item"
              :key="index"
              link
            >
              <v-list-item-icon>
                <v-icon small>
                  mdi-{{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        left
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
          <v-divider></v-divider>
          <v-list-item
            link
          >
            <v-list-item-icon>
              <v-icon small>
                mdi-login
              </v-icon>
            </v-list-item-icon>
            Login
          </v-list-item>
          <v-list-group
            :value="true"
            prepend-icon="mdi-account-plus"
          >
            <template v-slot:activator>
              <v-list-item-title>Sign Up</v-list-item-title>
            </template>
  
            <v-list-item
              v-for="(item, i) in signup_item"
              :to="item.link"
              :key="i"
              link
            >
              <v-list-item-icon class="ml-10">
                <v-icon>mdi-{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-sheet
        max-height="100vh"
      >
        <div class="violet-gradient"></div>
        <v-container 
          class="mt-16" 
          fill-height
        >
          <v-row class="text-sm-center" align="center" justify="center">
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
      ],
      signup_item: [
        { title: 'Instructor', link:'/signup/instructor', icon: 'teach' },
        { title: 'Student', link:'/signup/student', icon: 'account' },
        { title: 'Parent', link:'/signup/parent', icon: 'account-child' },
      ],
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