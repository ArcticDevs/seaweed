<template>
  <v-app dark>
    <v-app-bar :elevation="0" color="transparent" fixed app>
      <v-toolbar-title>
        <v-img
          src="logo.png"
          contain
          class="nav_logo d-none d-sm-block"
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-flex justify-content-center align-items-center">
        <a href="#" class="mr-4 mr-md-8 text-white">How it works?</a>
        <a href="#" class="mr-4 mr-md-8 text-white">Our mission</a>
        <a href="#" class="mr-4 mr-md-8 text-white">Contact</a>
        <v-btn outlined tile dark class="mr-2 mr-md-8">Join Us</v-btn>
      </div>
    </v-app-bar>
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
  /* background: transparent !important; */
  background: rgb(6, 167, 202);
  background: linear-gradient(
    360deg,
    rgba(6, 167, 202, 0) 35%,
    rgba(8, 167, 203, 1) 100%
  );
  /* opacity: 0.7 !important; */
  padding: 0 10%;
  z-index: 9999 !important;
  height:150px !important;
}

.nav_logo {
  height: 40px;
}
</style>
