<script setup>
</script>

<template>
    <div class="card w-100 mx-auto bg-white pa-3 h-100 rounded-sm">
            <slot />
    </div>
</template>

<style>
.card {
    box-shadow: 1px 1px 2px #00000005;
    border: 1px solid #E2E4EB;
    position: relative;
    z-index: 1;
}
</style>