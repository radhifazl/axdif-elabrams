<template>
  <v-app>
    <default-bar v-if="isMobile"/>
    
    <default-view/>
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import useIsMobile from '@/utils/useIsMobile';

const { isMobile } = useIsMobile()
</script>
