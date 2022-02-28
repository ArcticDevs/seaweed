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
        <v-btn outlined tile dark class="mr-2 mr-md-8">
           <v-dialog
      v-model="dialog"
      width="500"
    >
    <template v-slot:activator="{ on, attrs }">
     <v-btn style="background:transparent;width:100%;box-shadow:none" v-bind="attrs"
          v-on="on">
       
       Connect Wallet
       </v-btn> 
    </template>
    
   

        <v-list outlined class="rounded-lg py-0">
           <template v-for="(wallet,index) in wallets">
             <div :key="index"></div>
             <v-list-item
               :key="wallet.title"
               two-line
               class="px-6 py-1"
               @click="onConnectWallet(wallet.connect)"
             >
               <!-- Image -->
               <v-list-item-avatar size="50">
                 <img :src="wallet.image" />
               </v-list-item-avatar>
                     </v-list-item-avatar>
                    

               <!-- Text -->
               <v-list-item-content>
                 <v-list-item-title v-text="wallet.title"></v-list-item-title>
                 <v-list-item-subtitle
                   v-text="wallet.subtitle"
                 ></v-list-item-subtitle>
               </v-list-item-content>
                  
                 
               </v-form>
               

               <!-- Button -->
               <v-list-item-action>
                 <v-btn icon disabled>
                   <v-icon>mdi-chevron-right</v-icon>
                 </v-btn>
               </v-list-item-action>
               
            </v-list-item>          
               <!-- <b-card class="mt-3" header="Form Data Result">
                 <pre class="m-0">{{ form }}</pre>
               </b-card> -->
                
             </template>
           </v-col>
           <v-col cols="12" sm="12" md="6" lg="5" class="bgImg">
             <!-- Card -->
             <div class="pb-3 pt-1" flat rounded="lg">
             <div class="text-center mt-5">
                     <a href="#">I forgot my password</a>
                   </div> 


             <v-divider
               v-if="index < wallets.length - 1"
               :key="index"
             ></v-divider>
             </div>
               </v-col>
         
         </v-list>
         </v-dialog>
         </v-btn>


      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>

  </v-app>
</template>

<script>
import { connectWallet } from '~/plugins/connect'
export default {
  name: 'DefaultLayout',
  components: {},
   methods: {
    onConnectWallet(wallet) {
      console.log(wallet);
      connectWallet(wallet)
    },
  },
  data() {
    return {
      dialog: false,
       wallets: [
         {
           image:
             'https://wallet.polygon.technology/_nuxt/img/metamask.e3ee4ed.svg',
           subtitle: 'Connect using browser wallet',
           title: 'MetaMask',
           connect: 'MetaMask',
         },
         {
           image:
             'https://wallet.polygon.technology/_nuxt/img/walletconnect.ab1cb30.svg',
           subtitle: 'Connect using mobile/desktop wallet',
           title: 'WalletConnect',
           connect: 'WalletConnect',
         },
         {
           image:
             'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9Ijc1IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzUgMEMzMy41NDczIDAgMCAzMy40MzYyIDAgNzQuNzUxN0MwIDExNi4wNjcgMzMuNTQ3MyAxNDkuNTAzIDc1IDE0OS41MDNDMTE2LjQ1MyAxNDkuNTAzIDE1MCAxMTYuMDY3IDE1MCA3NC43NTE3QzE1MCAzMy40MzYyIDExNi40NTMgMCA3NSAwWk03NSAxMTguNDkxQzUwLjc3NyAxMTguNDkxIDMxLjExNDkgOTguODk0NCAzMS4xMTQ5IDc0Ljc1MTdDMzEuMTE0OSA1MC42MDg5IDUwLjc3NyAzMS4wMTE4IDc1IDMxLjAxMThDOTkuMjIzIDMxLjAxMTggMTE4Ljg4NSA1MC42MDg5IDExOC44ODUgNzQuNzUxN0MxMTguODg1IDk4Ljg5NDQgOTkuMjIzIDExOC40OTEgNzUgMTE4LjQ5MVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTg1LjY0MjEgODguNzkyOEg2NC4zNTgzQzYyLjUzMzkgODguNzkyOCA2MS4wMTM3IDg3LjI3NzUgNjEuMDEzNyA4NS40NTkyVjY0LjE0NDlDNjEuMDEzNyA2Mi4zMjY2IDYyLjUzMzkgNjAuODExNCA2NC4zNTgzIDYwLjgxMTRIODUuNzQzNEM4Ny41Njc3IDYwLjgxMTQgODkuMDg4IDYyLjMyNjYgODkuMDg4IDY0LjE0NDlWODUuNDU5MkM4OS4wODggODcuMjc3NSA4Ny41Njc3IDg4Ljc5MjggODUuNjQyMSA4OC43OTI4WiIgZmlsbD0iIzIwNTlFQiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNzUiIHkxPSIxNDkuNTAzIiB4Mj0iNzUiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNDQ3RUEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkI2NUZCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==',
           subtitle: 'Connect using Coinbase wallet',
           title: 'Coinbase Wallet',
           connect: 'WalletLink',
         },
       ],
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
