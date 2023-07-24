<script setup>
defineProps(['icon', 'stepTitle', 'stepDescription', 'isNotLast'])
</script>

<template>
    <div>
        <div class="step d-flex flex-column flex-lg-row align-center">
            <div class="step-icon">
                <img :src="icon" alt="Step">
            </div>

            <div class="step-text text-center text-lg-left">
                <h1 class="text-subtitle-1 font-weight-bold">{{ stepTitle }}</h1>
                <p class="font-weight-medium">
                    {{ stepDescription }}
                </p>
            </div>
        </div>

        <div class="separator" v-if="isNotLast">

        </div>
    </div>

</template>

<style>
.step {
    gap: 1rem;
}

.step-text p {
    color: #6E7DA5;
    font-size: 12px;
}

.separator {
    width: 45px;
    height: 25px;
    border-left: 3px dashed #2B427C;
    margin: 1rem auto;
    margin-left: 9.1rem;
}

@media screen and (min-width: 868px) {
    .separator {
        height: 45px;
        border-left: 3px dashed #2B427C;
        border-bottom: 3px dashed #2B427C;
    }
    

    .adjust-separator {
        transform: translateX(-5rem);
    }

    .adjust-separator .separator {
        transform: translateX(-7rem);
    }

    .adjust-separator-2 {
        transform: translate(1rem, -2.5rem);
    }

    .adjust-separator-2 .separator {
        transform: translateX(-7rem);
    }

    .last-separator {
        transform: translate(7rem, -5rem);
    }
}
</style>