<script setup>
defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    isPressed: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        default: 'Submit'
    },
    icon: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <button type="button" :class="[`w-100 oauth-button text-none d-flex items-center mb-5`,
        disabled ? 'disabled' : '',
        isPressed ? 'pressed' : ''
    ]">
        <div class="icon">
            <img :src="icon" :alt="text">
        </div>

        <div class="text w-100">
            <p class="font-weight-bold">{{ text }}</p>
        </div>
    </button>
</template>

<style>
.oauth-button {
    padding: 12px 16px;
    border: 1px solid #888FB0;
    border-radius: 8px;
}

.text {
    color: #132662;
}
</style>