<script setup>
defineProps(['title', 'total', 'changes', 'detail', 'status'])
</script>

<template>
    <div class="total-task-card pa-2 text-center"
    >
        <div class="flex">
            <span class="title">{{ title }}</span> <img src="../../../assets/icons/Info.svg" alt="Info">
        </div>
        <div class="amount flex" style="gap: 0.5rem">
            <h1 class="font-weight-bold">{{ total }}</h1>
            <div v-if="changes" class="percent pa-1 flex"
                :class="[status === 'increased' ? 'increased' : 'decreased']"
            >
                <span class="total-changes">{{ changes }}</span> 
                <img src="../../../assets/icons/Icon - Increase.svg" alt="Increase" v-if="status === 'increased'">
                <img src="../../../assets/icons/Icon - Decrease.svg" alt="Decrease" v-else>
            </div>
        </div>
        <span class="detail">{{ detail }}</span>
    </div>
</template>

<style>
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.total-task-card {
    width: 152px;
    height: fit-content;
    /* UI Properties */
    border: 1px solid #C6D4DF;
    background: #FFFFFF;
}

.total-task-card:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}

.total-task-card:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
}   

.total-task-card .title {
    font-size: 0.6rem;
    color: #809FB8;
}

.total-task-card .detail {
    font-size: 0.7rem;
}

.total-task-card h1 {
    font-size: 1rem;
}

.total-task-card.late {
    border-left-color: #E53935;
}

.amount .percent {
    border-radius: 4px;
}

.total-changes {
    font-size: 0.5rem;
}

.amount .percent.increased {
    background: #43A0471A;
}

.amount .percent.increased .total-changes {
    color: #43A047;
}

.amount .percent.decreased {
    background: #E539351A;
}

.amount .percent.decreased .total-changes {
    color: #E53935;
}

@media screen and (max-width: 768px) {
    .total-task-card {
        width: 48%;
    }

    .total-task-card:first-child {
        border-bottom-left-radius: 0;
    }

    .total-task-card:last-child {
        border-top-right-radius: 0;
    }

    .total-task-card:nth-child(2) {
        border-top-right-radius: 12px;
    }

    .total-task-card:nth-child(3) {
        border-bottom-left-radius: 12px;
    }
}
</style>