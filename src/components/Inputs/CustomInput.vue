<script setup>
import useIsMobile from '@/utils/useIsMobile';

const { isMobile } = useIsMobile();

defineProps({
    label: String,
    placeholder: String,
    type: String,
    name: String,
    modelValue: String,
    disabled: Boolean,
    isError: Boolean,
})
</script>

<template>
    <div class="input-box">
        <label class="text-subtitle-1 font-weight-bold">
            {{ label }}
        </label>
        <div class="inp">
            <input v-bind="$attrs"
                :value="modelValue" 
                @input="$emit('update:modelValue', $event.target.value)"
                :name="name"
                :type="type" 
                :placeholder="placeholder" 
                :disabled="disabled"
                :class="[`custom-input w-100`,
                    disabled ? 'disabled' : '',
                    isError ? 'error' : '',
                    !isMobile ? 'pa-1' : 'pa-3'
                ]"
            />
        </div>
    </div>
</template>


<style scoped>
.input-box {
    width: 100%;
    margin-bottom: 18px;
}

.custom-input {
    margin-top: 6px;
    border: 1px solid #888FB0;
    outline: none;
    transition: all 0.1s ease-in-out;
    border-radius: 6px;
}

.custom-input:focus {
    border-color: #303444;
}
</style>
