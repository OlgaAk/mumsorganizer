<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
        
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon >{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="" :to="item.link" >
            <v-list-tile-action >
              <v-icon medium color="green" >{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="subheading">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="light-green darken-1"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Baby Tracker</span>
      </v-toolbar-title>
      <!-- <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field> -->
      <v-spacer></v-spacer>
 
       <v-btn icon to="profile">
            <v-icon >account_circle</v-icon>
      </v-btn>
     
    </v-toolbar>
    <v-content>
             <router-view></router-view>
       </v-content>

    <!-- <dialog-contact :dialog="dialog"></dialog-contact> -->
 
  </v-app>
</template>

<script>
import DialogContact from './components/DialogContact.vue'

  export default {
    data: () => ({
      dialog: false,
      drawer: null,
    }),
     computed: {
      items () {
        let items = [
          {icon: 'person', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          items = [
            {icon: 'person', text: 'Profile', link: '/profile'},
            { icon: 'local_hospital', text: 'Health', link: '/medicine' },
            { icon: 'history', text: 'Plans', link: '/plans'  },
            { icon: 'directions_walk', text: 'Walking', link: '/walking'  },
            { icon: 'local_drink', text: 'Feeding', link: '/feeding'  },
          ]
        }
        return items
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    props: {
      source: String
    },
    components: {
      DialogContact
    }
  }
</script>