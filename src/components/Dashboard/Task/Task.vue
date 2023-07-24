<script setup>
import TaskDifficulty from './TaskDifficulty.vue';
import useIsMobile from '@/utils/useIsMobile';

const { isMobile } = useIsMobile()

defineProps({
    task: Object
})
</script>

<template>
    <div class="task-card pa-3 mb-3"
        :class="{'card-flex justify-space-between': !isMobile}"
    >
        <div class="task-headline w-50">
            <span class="font-weight-semibold">{{ task.headline }}</span>
            <h1 class="text-subtitle-1 font-weight-bold">{{ task.title }}</h1>
        </div>
        <div class="task-info w-50 card-flex"
            :class="{'w-100': isMobile}"
        >
            <div class="attach-comment mr-lg-1 card-flex">
                <div class="info link">
                    <img src="../../../assets/images/dashboard/attach.png" alt="Attachment">
                    <span class="text-body-1">{{ task.attachment }}</span>
                </div>

                <div class="info comment">
                    <img src="../../../assets/images/dashboard/Comments.svg" alt="Comment">
                    <span class="text-body-1">{{ task.comment }}</span>
                </div>
            </div>
            <TaskDifficulty :difficulty="task.difficulty"/>
            <div class="info date">
                <img src="../../../assets/images/dashboard/Callendar.svg" alt="Date">
                <span class="font-weight-semibold"
                    :style="[isMobile ? 'font-size: 0.7rem' : '']"
                >{{ task.date }}</span>
            </div>
        </div>
    </div>
</template>

<style>
.task-card {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #818E941A;
    border-radius: 6px;
}

.task-headline span {
    color: #808D93;
}

.task-info {
    gap: 2rem;
}

.card-flex, .info {
    display: flex;
    align-items: center;
}

.info {
    color: #808D93;
}

.info.date {
    color: #808D93;
}

.attach-comment {
    border-right: 1px solid #D4D4D4;
    padding-right: 1rem;
    gap: 1rem;
}
</style>