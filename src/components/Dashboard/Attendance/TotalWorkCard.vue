<script setup>
defineProps(['status', 'total'])
</script>

<template>
    <div class="total-work-card pa-2"
        :class="[status === 'Total Late Coming' ? 'late' : '']"
    >
        <span>{{ status }}</span>
        <h1 class="font-weight-bold">{{ total }}</h1>
    </div>
</template>

<style>
.total-work-card {
    width: 252px;
    height: fit-content;
    /* UI Properties */
    border: 1px solid #E2E4EB;
    border-left-color: #0796E5;
    border-left-width: 5px;
    background: #FFFFFF;
    border-radius: 6px;
}

.total-work-card span {
    font-size: 0.7rem;
}

.total-work-card h1 {
    font-size: 1rem;
}

.total-work-card.late {
    border-left-color: #E53935;
}

@media screen and (max-width: 768px) {
    .total-work-card {
        width: 48%;
    }
}
</style>