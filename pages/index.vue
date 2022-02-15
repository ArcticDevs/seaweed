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
      <div class="seaweed">
        <lottie :options="defaultOptions.lottieOptions" />
      </div>
      <div class="lanternNet1">
        <lottie :options="defaultOptions.lottieOptions4" />
      </div>
      <div class="lanternNet2">
        <lottie :options="defaultOptions.lottieOptions4" />
      </div>
      <div class="bgImg">
        <lottie :options="defaultOptions.lottieOptions1" />
      </div>
    </div>

    <!-- </div>
    <div class="h-100 w-100"> -->

    <!-- </div> -->
  </div>
</template>

<script>
import lottie from 'vue-lottie'
import * as animationData from '../assets/animation/seaweed_farm_structure_animation.json'
import * as animationData1 from '../assets/animation/main_sea_animation.json'
import * as animationData2 from '../assets/animation/ship_animation.json'
import * as animationData3 from '../assets/animation/sea_foam_animation.json'
import * as animationData4 from '../assets/animation/lanternCuston1.json'

export default {
  name: 'IndexPage',
  components: {
    lottie,
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
      },
    }
  },
}
</script>

<style scoped>
/* import font : Bree */
/* @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
/* @font-face {
  font-family: 'Bree';
  src: local('Bree'),
    url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.ttf') format('ttf'),
    url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.eot') format('eot'),
    url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.woff') format('woff'),
    url('../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.woff2') format('woff2');
} */
@font-face {font-family: "Bree-Bold";
  src: url("../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.eot"); /* IE9*/
  src: url("../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
  url("../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.woff2") format("woff2"), /* chrome、firefox */
  url("../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.woff") format("woff"), /* chrome、firefox */
  url("../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url("../assets/fonts/Bree-Bold/@font-face/1e1ee1ec762e9ee51ae4633db26665fd.svg#Bree-Bold") format("svg"); /* iOS 4.1- */
}
/* background CSS::begin */
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
  bottom: 18vh;
}
.seaweed {
  position: absolute;
  z-index: 99;
  top: -38vh;

  width: 100% !important;
}
.lanternNet1 {
  position: absolute;
  z-index: 99;
  top: 210px;
  left: 13vw;
}
.lanternNet2 {
  position: absolute;
  z-index: 99;
  top: 210px;
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

/* media queries::begin */
@media (min-width: 1850px) {
  .imgFoam {
    bottom: 0;
  }
}
@media (max-height: 1300px) {
  .section1_heading_container {
    padding-top: 15vh;
  }
}

@media (max-width: 2560px) {
  .seaweed {
    top: -31vh;
  }
  .lanternNet1 {
    top: 120px;
    left: 17vw;
  }
  .lanternNet2 {
    top: 130px;
  }
}
@media (max-width: 1450px) {
  .seaweed {
    top: -32vh;
  }
  .lanternNet1 {
    top: 75px !important;
    left: 11vw !important;
  }
  .lanternNet2 {
    top: 80px !important;
  }
  .section1_heading_container {
    margin-left: 100px;
  }
  .section1_heading_container > h1 {
    font: normal normal bold 80px/85px Bree Serif;
    width: 65%;
  }
}
@media (max-width: 920px) {
  .section1_heading_container {
    margin-left: 10vw;
  }
  .section1_heading_container > h1 {
    font: normal normal bold 50px/55px Bree Serif;
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
