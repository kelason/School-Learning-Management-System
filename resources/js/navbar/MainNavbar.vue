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
        class="deep-purple"
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
        <v-btn text class="hidden-sm-and-down" to="/login">
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
              :to="item.link"
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
      <router-view />
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
  computed: {
    currentRouteName() {
      return this.$route.name;
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