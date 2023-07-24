<script setup>
import useIsMobile from '@/utils/useIsMobile';

const { isMobile } = useIsMobile()
defineProps(['status', 'time'])
</script>

<template>
    <div class="summary-card pa-5"
        :class="{'summary-mobile': isMobile}"
    >
        <span class="font-weight-semibold">{{ status }}</span>
        <h1 class="text-h5 font-weight-bold"
            :class="{'text-subtitle-1': isMobile}"
        >{{ time }}</h1>
    </div>
</template>

<style>
.summary-card {
    height: 115px;
    /* UI Properties */
    border: 1px solid #818e94a8;
    background: #FFFFFF;
    border-radius: 6px;
}

.summary-card span {
    color: #808D93;
}

.summary-mobile {
    height: 90px;
}

.summary-mobile span {
    font-size: 0.8rem;
}
</style>