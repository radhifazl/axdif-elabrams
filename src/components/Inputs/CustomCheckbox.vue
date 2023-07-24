<template>
    <div class="checkbox-wrapper d-flex items-center mb-2"
    >
        <input :id="label" type="checkbox" class="checkbox" 
            v-model="model" :value="value"
        >
        <label :for="label"
        >
          {{ label }}
        </label>
    </div>
</template>
<script setup>
import { computed, defineEmits } from "vue";
import useIsMobile from "@/utils/useIsMobile";

const { isMobile } = useIsMobile();

const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  label: { type: String },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<style>
    .checkbox-wrapper {
        gap: 5px;
    }

    .checkbox {
        accent-color: #EC4B5A;
    }
</style>