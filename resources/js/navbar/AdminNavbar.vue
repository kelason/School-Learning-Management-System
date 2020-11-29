<template>
    <v-app id="inspire">
        <v-app-bar
            color="#f64c72"
            elevate-on-scroll 
            fixed 
            dark
        >
            <v-toolbar-title class="font-weight-medium"><v-icon>mdi-vuetify</v-icon></v-toolbar-title>
            <span class="hidden-md-and-up">
                <v-btn icon @click.stop="drawer = !drawer">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </span>
            <v-spacer></v-spacer>
            <v-btn text class="hidden-sm-and-down">
                <v-icon>mdi-bell</v-icon>
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
                        <v-icon>mdi-messenge</v-icon>
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
        <router-view />
    </v-app>
</template>
<script>
export default {
  data() {
    return {
      selectedItem: 1,
      drawer: false,
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