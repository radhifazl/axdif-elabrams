<template>
    <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }"
        :pagination="{
        clickable: true,
        }"
        :modules="modules"
        class="mySwiper w-100 h-75"
    >
        <swiper-slide v-for="(slide, i) in slides" :key="i" class="text-center text-white bg-transparent d-flex flex-column">
            <div class="slide-image">
                <img :src="slide.image" alt="slide image"/>
            </div>
            <h1 class="text-h6 font-weight-bold">
                {{ slide.text }}
            </h1>
            <p class="text-body-1 font-weight-regular mt-5">
                {{ slide.description }}
            </p>
        </swiper-slide>
    </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    props: {
      slides: {
        type: Array,
        required: true,
      },
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style>

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
    width: 200px;
}

.slide-image img {
    width: 100%;
}
</style>