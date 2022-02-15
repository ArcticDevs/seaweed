<template>
  <div class="index">
    <div class="section1">
        <div class="imgBoat">
        <lottie :options="defaultOptions.lottieOptions2" />
      </div>
    </div>
    <div class="section2">
    
      <!-- <div class="h-100 w-100"> -->
      <div class="seaweed">
        <lottie :options="defaultOptions.lottieOptions" />
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
      },
    }
  },
}
</script>

<style scoped>
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
/* .index {
  width: 100%;
  height: 200vh;
} */
.bgImg {
  top: -22vh;
  width: 100%;
  content-visibility: visible;
  position: absolute;
  z-index: 2;
}
.imgBoat {
  /* top:25vh; */
  bottom: 40vh;
  width: 80%;
  max-width: 1000px;
  content-visibility: visible;
  position: absolute;
  z-index: 100;
  right: 5vw;
}
.seaweed {
  position: absolute;
  z-index: 99;
  top: -350px;
  width: 100% !important;
}
</style>
