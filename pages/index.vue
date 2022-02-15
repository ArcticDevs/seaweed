<template>
  <div class="index">
    <div class="section1">
      <div class="imgBoat">
        <lottie :options="defaultOptions.lottieOptions2" />
      </div>
      <div class="imgFoam">
        <lottie :options="defaultOptions.lottieOptions3" />
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
  bottom: 35vh;
  width: 80%;
  max-width: 1000px;
  content-visibility: visible;
  position: absolute;
  z-index: 100;
  right: 5vw;
}
.imgFoam {
  bottom: 8vh;
  opacity: 0.1;
  width: 100%;
  content-visibility: visible;
  position: absolute;
  z-index: 100;
}
.seaweed {
  position: absolute;
  z-index: 99;
  top: -38vh;

  width: 100% !important;
}
.lanternNet1{
  position: absolute;
  z-index: 99;
  top: 210px;
  left: 13vw;
}
.lanternNet2{
  position: absolute;
  z-index: 99;
   top: 210px;

  left: 27vw;
}
@media (max-width: 1450px) {
  .seaweed {
    top: -32vh;
  }
    .lanternNet1{
  top: 75px !important;
  left: 11vw !important;

}
.lanternNet2{
   top: 80px !important;
}
}
@media (max-width: 2560px) {
  .seaweed {
    top: -31vh;
  }
    .lanternNet1{
  top: 120px;
  left: 17vw;
}
.lanternNet2{
   top: 130px;
}
}
</style>
