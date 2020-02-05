<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click.stop="drawer = !drawer"
        >
          <v-list-item-action >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="rgba(255, 255, 255, 1)"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
      </v-btn>
    </v-app-bar>
    <transition name="page">
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
    </transition>
    
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Top',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'About',
          to: '/about/'
        },
        {
          icon: 'mdi-apps',
          title: 'Works',
          to: '/works/'
        },
        {
          icon: 'mdi-apps',
          title: 'Contact',
          to: '/contact/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'COFFEE R'
    }
  }
}
</script>

<style>
 .page-leave-active {
   opacity: 0;
   transition: opacity 0.3s;
 }
 .page-enter-active {
   opacity: 1;
   transition: opacity 0.5s;
 }
 .page-enter {
   opacity: 0;
 }

</style>