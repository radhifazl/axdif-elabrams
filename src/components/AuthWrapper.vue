<script setup>
import useIsMobile from '@/utils/useIsMobile'
import Carousels from '@/components/Carousels/Carousels.vue'

import Slide1 from '@/assets/slider/illustration-1.svg'
import Slide2 from '@/assets/slider/illustration-2.svg'
import Slide3 from '@/assets/slider/illustration-3.svg'

import { ref } from "vue";

const carouselImages = ref( [
        {
          image: Slide1,
          text: 'Manage Task Easily & Efficiently',
          description: 'Increase employee productivity and performance in a measurable and precision system in one application.'
        },
        {
          image: Slide2,
          text: 'Communication Is Key',
          description: 'Connect with your coworkers anywhere like you are in one workspace. Very simple and fast.'
        },
        {
          image: Slide3,
          text: 'Employee Self-Service',
          description: 'Simplify the administrative affairs of the company where you work wherever and whenever. Let’s get started with all these conveniences'
        },
        // Add more slides as needed
])

const { isMobile } = useIsMobile()
</script>

<template>
    <div class="wrapper"
      :class="{
        'd-flex items-center justify-content-between': !isMobile,
      }"
    >
        <div class="slider h-screen pa-5" v-if="!isMobile">
          <h1 class="slider-title text-white my-5 text-center">A few clicks away from being a part of Axdif</h1>
          <Carousels :slides="carouselImages"/>
        </div>

        <div class="slot w-100">
          <img src="../assets/logo.png" class="pa-2" alt="Logo" width="150" v-if="!isMobile"/>
          <slot/>

          <v-footer>© Copyright 2023. All Right Reserved.</v-footer>
        </div>
    </div>
</template>

<style scoped>
.slider {
  width: 35%;
  position: relative;
  letter-spacing: 0.24px;
  background-color: #0796E5;
  z-index: 1;
}


.slider::after {
  z-index: -1;
  content: "";
  background: url('../assets/images/Masking-1.svg');
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot {
  width: 65%;
}
.wrapper {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  position: relative;
  font-size: 32px/39px;
  letter-spacing: 0.24px;
  z-index: 100;
  overflow: hidden;
}

.wrapper .slot {
  overflow-y: auto;
}

@media screen and (max-width: 868px) {
  .wrapper {
    background-color: #0796E5;
    padding: 7rem 1rem;
  }
  .wrapper::after {
    z-index: -5;
    content: "";
    background: url('../assets/images/Masking-1.svg');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>