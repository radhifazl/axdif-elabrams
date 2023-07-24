<script setup>
defineProps(['status', 'time'])
</script>

<template>
    <div class="clock-card pa-5"
        :class="[status === 'In' ? 'in' : 'out']"
    >
        <span>Clock {{ status }}</span>
        <h1 class="font-weight-bold">{{ time }}</h1>
    </div>
</template>

<style>
.clock-card {
    width: 254px;
    height: 112px;
    /* UI Properties */
    border: 1px solid #E2E4EB;
    border-top-width: 8px;
    background: #FFFFFF;
    border-radius: 6px;
}

.in {
    border-top-color: #09A262;
}

.out {
    border-top-color: #FF2442;
}
</style>