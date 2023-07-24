<script setup>
defineProps({
    difficulty: String
})
</script>

<template>
    <div class="task-difficulty pa-2 px-4"
        :class="difficulty === 'easy' ? 'easy' : difficulty === 'medium' ? 'medium' : 'hard'"
    >
        <span>{{ difficulty }}</span>
    </div>
</template>

<style>
.task-difficulty.medium {
    color: #09A262;
    background: #09A2621F;
    border-radius: 17px;
}

.task-difficulty span {
    text-transform: capitalize;
}
</style>