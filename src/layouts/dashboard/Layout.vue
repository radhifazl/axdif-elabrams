<template>
    <v-app>
      <DashboardBar/>
      
      <DashboardView/>
    </v-app>
  </template>
  
<script setup>
import DashboardBar from './AppBar.vue'
import DashboardView from '../default/View.vue'
import useIsMobile from '@/utils/useIsMobile';

const { isMobile } = useIsMobile()
</script>

<style>
</style>
  