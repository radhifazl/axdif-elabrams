<script setup>
defineProps({
    modelValue: String,
    options: Array,
    label: String,
    disabled: {
        type: Boolean,
        default: false
    },
    isError: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="select-box">
        <select name="countryCode" id="countryCode" class="custom-select pr-5"
            v-bind="$attrs"
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
            placeholder="Country Code" required
            :class="[`custom-input pa-3 w-100`,
                        disabled ? 'disabled' : '',
                        isError ? 'error' : ''
                    ]"
        >
            <option value="" selected disabled>Country Code</option>
            <option v-for="(option, i) in options" :key="i" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>


<style>
.select-box {
    width: 25%;
    margin-bottom: 18px;
    padding-right: 12px;
}

.custom-select {
    margin-top: 6px;
    border: 1px solid #888FB0;
    outline: none;
    transition: all 0.1s ease-in-out;
    border-radius: 6px;
}

.custom-select:focus {
    border-color: #303444;
}
</style>
