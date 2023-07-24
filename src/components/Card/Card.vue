<script setup>
</script>

<template>
    <v-card class="mx-auto">
            <v-card-text>
                <slot name="card-text"/>
                <slot name="card-content"/>
            </v-card-text>
            <slot name="card-actions"/>
    </v-card>
</template>

<style>
    
</style>