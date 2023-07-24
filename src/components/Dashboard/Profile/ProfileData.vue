<script setup>
defineProps(['title', 'profileData'])
</script>

<template>
    <div class="profile-data w-100 mb-5 d-flex align-center justify-space-between">
        <span class="title font-weight-regular">{{ title }}</span>
        <span class="profile-data-content">{{ profileData }}</span>
    </div>
</template>

<style>
.profile-data {
    color: #808D93;
}

.profile-data-content {
    color: #000000;
}
</style>