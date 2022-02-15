<template>
  <v-app dark>
    <div></div>

    <v-app-bar :elevation="0" fixed app> </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style scoped>
.v-main {
  padding: 0 !important;
  width: 100%;
}
.v-app-bar {
  background: transparent linear-gradient(360deg, #06a7ca00 0%, #08a7cb 100%) 0%
    0% no-repeat padding-box;
  opacity: 0.7;
 
}
</style>
