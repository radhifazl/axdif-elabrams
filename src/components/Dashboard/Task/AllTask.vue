<script setup>
import CustomCard from '@/components/Card/CustomCard.vue';
import CardHeadline from '@/components/Card/CardHeadline.vue';
import Task from '@/components/Dashboard/Task/Task.vue';
import { ref } from 'vue';
const tasks = ref([
    {
        headline: 'UI/UX Designer',
        title: '[Wms][Web][Task] Create Goals Design',
        attachment: 44,
        comment: 1,
        difficulty: 'medium',
        date: '06 Aug 2021'
    },
    {
        headline: 'UI/UX Designer',
        title: '[Wms][Chat] Improve Design',
        attachment: 44,
        comment: 1,
        difficulty: 'medium',
        date: '06 Aug 2021'
    },
    {
        headline: 'UI/UX Designer',
        title: '[Wms][Task] Improve Dashboard',
        attachment: 44,
        comment: 1,
        difficulty: 'medium',
        date: '06 Aug 2021'
    }
])
</script>

<template>
    <div class="dashboard-info task">
        <CustomCard>
            <div class="header-card mb-4 w-100 d-flex align-center justify-space-between">
                <CardHeadline headline="Task Due Soon"/>
                <button class="text-subtitle-1 d-flex align-center text-blue">
                    <span>See All</span>
                    <v-icon>{{ 'mdi-play' }}</v-icon>
                </button>
            </div>
            <Task v-for="(task, i) in tasks" :key="i" :task="task"/>
        </CustomCard>
    </div>
</template>

<style>

.header-card {
    border-bottom: 2px solid #9ba4a881;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}
</style>