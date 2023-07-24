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
    type: {
        type: String,
        default: 'button'
    },
    text: {
        type: String,
        default: 'Submit'
    }
})
</script>

<template>
    <v-btn variant="flat" :type="type" :class="[`custom-button text-none`,
        disabled ? 'disabled' : '',
        isPressed ? 'pressed' : ''
    ]">
        {{ text }}
    </v-btn>
</template>

<style>
    .custom-button {
        background-color: #EC4B5A;
        color: #FFFFFF;
        padding: 12px 24px;
        border-radius: 8px;
    }

    .custom-button.disabled {
        background: #B6BBD0;
        pointer-events: none;
    }
</style>