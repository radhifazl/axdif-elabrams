<template>
    <v-alert
        :color="color"
        :icon="`$${color}`"
        :title="title"
        :text="text"
    ></v-alert>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: ''
    },
    color: {
        type: String,
    },
    title: {
        type: String,
        default: ''
    },
})
</script>

<style>
    
</style>