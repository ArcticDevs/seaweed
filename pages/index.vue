<template>
  <div class="index">
    <div class="section1">
      <div class="imgBoat">
        <lottie :options="defaultOptions.lottieOptions2" />
      </div>
      <div class="imgFoam">
        <lottie :options="defaultOptions.lottieOptions3" />
      </div>

      <div class="section1_heading_container">
        <h1>Let's grow some seaweed!</h1>
        <p>Be part of the newest and more innovative way of farming.</p>
      </div>
    </div>
    <div class="section2">
      <!-- <div class="h-100 w-100"> -->
      <div class="lanternNet1">
        <lottie :options="defaultOptions.lottieOptions4" />
      </div>
      <div class="lanternNet2">
        <lottie :options="defaultOptions.lottieOptions4" />
      </div>
      <div class="seaweed">
        <lottie :options="defaultOptions.lottieOptions" />
      </div>
      <div class="seaweedFoam">
        <lottie :options="defaultOptions.lottieOptions5" />
      </div>
      <div class="section2_heading_container">
        <div class="section2_bg"></div>
        <div class="section2_text">
          <h1>How does it work?!</h1>
          <p>
            Ocean farming is the method of growing seafood and other
            agricultural crops within a body of water as large as the ocean. It
            involves developing a system of 3D farming in the oceans that allows
            farmers to grow multiple types of seafood and traditional
            agricultural produce in the same location.
          </p>
          <p>
            Currently, shellfish is being widely grown in ocean farms around the
            world as their demand is on the higher end of the scale as well. The
            industry, however, is expected to grow and diversify in the near
            future, and will include numerous other types of seafood as well.
          </p>
        </div>
      </div>
      <div class="seaweedBubble">
        <lottie :options="defaultOptions.lottieOptions6" />
      </div>

      <div class="section2_our_mission">
        <h4 class="text-center mb-13">KELPS</h4>
        <div class="section2_text">
          <h1>Our mision</h1>
          <p>
            We start seaweed farms around the world to create jobs, food and
            reduce the amount of carbon in the atmosphere. We invest in people
            starting seaweed farms and track everything with Web3 protocols. We
            target the cryptocurrency industry and operate as a Decentralize
            Autonomous Organizations.
          </p>
        </div>
      </div>
      <div class="seaweedFish">
        <lottie :options="defaultOptions.lottieOptions7" />
      </div>
      <div class="section2_LatestNew_carousel">
        <h1>Latest News</h1>
        <carousel :dots="false" :nav="false" :number="4">
          <template slot="prev">
            <v-icon class="prevBtn" larger> mdi-arrow-left </v-icon>
          </template>
          <template slot="next">
            <v-icon class="nextBtn" larger> mdi-arrow-right </v-icon>
          </template>
          <div class="customCarousel">
            <v-img
              height="150"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <p class="pa-5">
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </p>
          </div>
          <div class="customCarousel">
            <v-img
              height="150"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <p class="pa-5">
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </p>
          </div>
          <div class="customCarousel">
            <v-img
              height="150"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <p class="pa-5">
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </p>
          </div>
          <div class="customCarousel">
            <v-img
              height="150"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <p class="pa-5">
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </p>
          </div>
        </carousel>
      </div>
      <div class="section2_stats_container">
        <v-container>
          <h1 class="text-center">Trust the stats</h1>

          <v-row>
            <v-col cols="4">
              <lottie :options="defaultOptions.lottieOptions8" />
              <div class="section2_stats_text">
                <h3>25%</h3>
                <h4>More Seaweed</h4>
                <p>Produce more with our software.</p>
              </div>
            </v-col>

            <v-col cols="4">
              <lottie :options="defaultOptions.lottieOptions8" />
              <div class="section2_stats_text">
                <h3>50%</h3>
                <h4>More Fish</h4>
                <p>Catch more with our software.</p>
              </div>
            </v-col>
            <v-col cols="4">
              <lottie :options="defaultOptions.lottieOptions8" />
              <div class="section2_stats_text">
                <h3>35%</h3>
                <h4>More Shelfish</h4>
                <p>Catch more with our software.</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div class="cageBgImgBottom">
        <div class="seaweedBubbleBottom">
          <lottie :options="defaultOptions.lottieOptions6" />
        </div>
      </div>
      <div class="bgImg">
        <lottie :options="defaultOptions.lottieOptions1" />
      </div>
    </div>

    <div class="contactForm">
      <v-container class="contactFormContainer">
        <h1>Get in touch!</h1>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              dark
              hide-details
              label="First Name"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Last Name"
              dark
              outlined
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              dark
              label="Phone number"
              hide-details
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              dark
              hide-details
              label="Email address"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-textarea
              outlined
              name="input"
              dark
              label="Enter text"
            ></v-textarea>
          </v-col>
          <v-btn class="mx-auto" outlined dark> Submit Now </v-btn>
        </v-row>
        <v-row>
          <v-col class="footerCustom" cols="12" md="3">
            <v-icon dark size="40"> mdi-map-marker</v-icon> 123, Lorem Ipum
            dolor way, Los Angeles, CA 123456
          </v-col>
          <v-col class="footerCustom" cols="12" md="3">
            <v-icon dark size="40">mdi-phone</v-icon> 925 407 3102
          </v-col>
          <v-col class="footerCustom" cols="12" md="3">
            <v-icon dark size="40"> mdi-email </v-icon> info@seaweeddao.com
          </v-col>
          <v-col class="footerCustom" cols="12" md="3">
            <v-icon dark size="40"> mdi-facebook</v-icon>
            <v-icon dark size="40" class="mr-2 ml-2">mdi-twitter</v-icon>
            <v-icon dark size="40">mdi-instagram</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="Gradient"></div>

    <!-- </div>
    <div class="h-100 w-100"> -->

    <!-- </div> -->
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import lottie from 'vue-lottie'
import * as animationData from '../assets/animation/seaweed_farm_structure_animation.json'
import * as animationData1 from '../assets/animation/main_sea_animation.json'
import * as animationData2 from '../assets/animation/ship_animation.json'
import * as animationData3 from '../assets/animation/sea_foam_animation.json'
import * as animationData4 from '../assets/animation/lanternCuston1.json'
import * as animationData5 from '../assets/animation/sea_light_animation.json'
import * as animationData6 from '../assets/animation/bubbles_animation.json'
import * as animationData7 from '../assets/animation/animation_fish.json'
import * as animationData8 from '../assets/animation/stats_animation.json'

export default {
  name: 'IndexPage',
  components: {
    lottie,
    carousel,
  },
  data() {
    return {
      defaultOptions: {
        lottieOptions: {
          animationData: animationData.default,
        },
        lottieOptions1: {
          animationData: animationData1.default,
        },
        lottieOptions2: {
          animationData: animationData2.default,
        },
        lottieOptions3: {
          animationData: animationData3.default,
        },
        lottieOptions4: {
          animationData: animationData4.default,
        },
        lottieOptions5: {
          animationData: animationData5.default,
        },
        lottieOptions6: {
          animationData: animationData6.default,
        },
        lottieOptions7: {
          animationData: animationData7.default,
        },
        lottieOptions8: {
          animationData: animationData8.default,
        },
      },
    }
  },
}
</script>

<style scoped>
/* import font : Bree */
/* @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Open+Sans:wght@300&family=Poppins:wght@500&family=Raleway:wght@500&display=swap');

/* @font-face {
  font-family: 'Bree';
  src: local('Bree'),
    url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.ttf') format('ttf'),
    url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.eot') format('eot'),
    url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.woff') format('woff'),
    url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.woff2') format('woff2');
} */
@font-face {
  font-family: 'Bree-Bold';
  src: url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.eot'); /* IE9*/
  src: url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */
      url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.woff2')
      format('woff2'),
    /* chrome、firefox */
      url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.woff')
      format('woff'),
    /* chrome、firefox */
      url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.ttf')
      format('truetype'),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.svg#Bree-Bold')
      format('svg'); /* iOS 4.1- */
}
/* background CSS::begin */
h1 {
  font: normal normal bold 96px/86px Bree;
  color: #fff;
}
h4 {
  font: italic normal 300 25px/35px Montserrat;
}
.index {
  position: relative;
  max-height: 720vh;
  overflow: hidden;
}
.Gradient {
  position: absolute;
  height: 530vh;
  width: 100%;
  top: 110vh;
  background: linear-gradient(
    180deg,
    rgba(0, 212, 229, 1) 26%,
    rgba(19, 100, 155, 1) 65%,
    rgba(20, 45, 118, 1) 100%
  );
}
.section1 {
  background-image: url('../assets/images/section1Bg.png');
  background-size: cover;
  height: 115vh;
  width: 100%;
  z-index: 0;
  position: relative;
}
.section2 {
  position: relative;
  height: auto;
  width: 100%;
}
.bgImg {
  top: -22vh;
  width: 100%;
  content-visibility: visible;
  position: absolute;
  z-index: 2;
}
.imgBoat {
  bottom: 35vh;
  width: 80%;
  max-width: 900px;
  content-visibility: visible;
  position: absolute;
  z-index: 200;
  right: 5vw;
}
.imgFoam {
  opacity: 0.1;
  width: 100%;
  content-visibility: visible;
  position: absolute;
  z-index: 100;
  left: 0;
  min-height: 228px;
  bottom: 15vh;
}
.seaweed {
  position: absolute;
  z-index: 99;
  top: -38vh;
  margin: 0;
  padding: 0;
  width: 100% !important;
}
.seaweedFoam {
  position: absolute;
  z-index: 9;
  top: -22vh;
  margin: 0;
  padding: 0;
  width: 100% !important;
  opacity: 0.3;
}
.seaweedBubble {
  position: absolute;
  z-index: 9;
  /* top: -22vh; */
  margin: 0;
  padding: 0;
  width: 100% !important;
  opacity: 0.3;
}
.seaweedBubbleBottom {
  position: absolute;
  z-index: 99;
  top: -100vh;
  margin: 0;
  padding: 0;
  width: 100% !important;
  opacity: 0.3;
}
.seaweedFish {
  position: absolute;
  z-index: 9;
  margin-top: -50vh;
  /* top: 200px; */
  /* margin: 0; */
  padding: 0;
  width: 100% !important;
  opacity: 0.3;
}
.section2_LatestNew_carousel {
  z-index: 99;
  position: relative;
  overflow: hidden;
  height: 80%;
  width: 100%;
  padding-top: 20vh;
  left: 10vw;
}
.customCarousel {
  height: 50%;
  max-width: 300px !important;
  z-index: 999;
  background: #0c6ba0;
  opacity: 0.9;
  font: normal normal 300 15px/20px Montserrat;
  color: #fff;
}
.prevBtn {
  color: #077499;
  font-size: 76px;
  position: absolute;
  top: 28%;
  left: 70%;
}
.nextBtn {
  color: #077499;
  font-size: 76px;
  position: absolute;
  top: 28%;
  left: 80%;
}
/* .next{
  position: relative;
  top: -7vh;
  left: 80vw;
} */
.section2_stats_container {
  position: relative;
  z-index: 99;
  margin-top: 100px;
}
.section2_stats_container >>> h1 {
  font: normal normal bold 96px/86px Bree;
}
.section2_stats_container >>> h4 {
  font: normal normal 600 37px/32px Montserrat;
}
.section2_stats_container >>> p {
  font: normal normal 300 24px/28px Montserrat;
}

.section2_stats_text {
  position: absolute;
  color: #fff;
  /* font-family: Montserrat; */
  bottom: 10px;
  /* padding-left: 15px; */
  text-align: center;
  margin-left: 10px;
}
.section2_stats_text >>> h3 {
  font: normal normal 600 96px/86px Montserrat;
  margin-right: 10px;
}
.section2_stats_text >>> h4 {
  font: normal normal 600 37px/32px Montserrat;
  margin-right: 20px;
  padding-top: 30px;
}
.section2_stats_text >>> p {
  font: normal normal 300 24px/28px Montserrat;
  margin-right: 10px;
}
.lanternNet1 {
  position: absolute;
  z-index: 99;
  /* top: 310px; */
  /* top: 10vh; */
  margin-top: 180px;
  left: 13vw;
}
.lanternNet2 {
  position: absolute;
  z-index: 99;
  /* top: 210px; */
  margin-top: 180px;

  left: 27vw;
}

/* Background CSS::end */

.section1_heading_container {
  color: #fff;
  padding-top: 20vh;
  margin-left: 15vw;
  max-width: 1000px;
  z-index: 999;
}
.section1_heading_container > h1 {
  font: normal normal normal 96px/90px Bree-Bold;
  letter-spacing: 0px;
  width: 65%;
  min-width: 300px;
}

.section1_heading_container > p {
  font: normal normal normal 25px/35px Montserrat;
  width: 50%;
  min-width: 250px;
}
/* SECTION 2 */

.section2_heading_container {
  color: #fff;
  padding-top: 30vh;
  margin-left: 15vw;
  max-width: 1000px;
  z-index: 999;
  position: relative;
  height: 40%;
  width: 30%;

  /* backdrop-filter: blur(40px) !important; */
}
.section2_text {
  position: relative;
}
.section2_bg {
  filter: blur(40px);
  height: 100%;
  background: transparent linear-gradient(180deg, #00d4e5 0%, #01c8dd 100%);
  opacity: 0.95;
  width: 100%;
  position: absolute;
}

.section2_our_mission {
  left: 52%;
  color: #fff;
  padding-top: 70vh;
  margin-right: 0;
  max-width: 1000px;
  z-index: 999;
  position: relative;
  height: 40%;
  width: 40%;
}

.cageBgImgBottom {
  position: absolute;
  bottom: -341vh;
  /* top: 0; */
  background-image: url('../assets/images/botton_1.png');
  object-fit: cover;
  z-index: 9;
  height: 100%;
  overflow: hidden;
  width: 120%;
  left: -160px;
  /* padding-bottom: -150px; */
}

.contactForm {
  background: #192f66;
  justify-content: center;
  position: relative;
  height: 110vh;
  width: 100%;
  z-index: 999;
  margin-top: 130vh;
  justify-items: center;
  text-align: center;
}
.contactFormContainer {
  padding-top: 15vh;
}

.contactFormContainer >>> .textFieldCustom .v-text-field__slot input {
  border: #fff !important;
  color: #fff;
}
.footerCustom {
  color: #fff;
  font: normal normal 300 15px Montserrat;
}
/* CAROUCEL */

/* media queries::begin */

@media (min-width: 2000px) {
  .index {
    height: 670vh;
  }
  .section2_our_mission {
    padding-top: 100vh;
  }
  .section2_stats_text {
    bottom: 120px;
    margin-left: 101px;
  }
  .cageBgImgBottom{
  bottom: -361vh;
    
  }
  .contactForm {
    /* height: 120vh; */
  margin-top: 140vh;

  }
}
@media (max-height: 1300px) {
  .section1_heading_container {
    padding-top: 15vh;
  }
}

@media (min-width: 1850px) {
  .imgFoam {
    bottom: 10vh;
  }
}
@media (max-width: 1450px) {
  /* .seaweed {
    top: -32vh;
  } */

  .section1_heading_container {
    margin-left: 100px;
  }
  .section1_heading_container > h1 {
    font: normal normal bold 80px/85px Bree-Bold;
    width: 65%;
  }
}
@media (max-width: 920px) {
  .section1_heading_container {
    margin-left: 10vw;
  }
  .section1_heading_container > h1 {
    font: normal normal bold 50px/55px Bree-Bold;
    width: 70%;
    min-width: 350px;
  }
  .section1_heading_container > p {
    font: normal normal normal 20px/30px Montserrat;
    width: 65%;
    min-width: 350px;
  }
}
/* media queries::end */
</style>
