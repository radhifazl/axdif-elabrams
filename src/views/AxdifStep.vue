<script setup>
import { ref } from 'vue';
import AuthWrapper from '@/components/AuthWrapper.vue';
import Card from '@/components/Card/Card.vue';
import Step from '@/components/Step.vue';
import VerifySVG from '@/assets/icons/verify.svg';
import SetupSVG from '@/assets/icons/setup.svg';
import LoginSVG from '@/assets/icons/login.svg';
import CustomButton from '@/components/Buttons/CustomButton.vue';

import { useRouter } from 'vue-router';
import useIsMobile from '@/utils/useIsMobile';

const { isMobile } = useIsMobile()

const router = useRouter()

const steps = ref([
    {
        icon: VerifySVG,
        title: 'Verify your account',
        description: 'A verification link has been sent to your email account.',
        isNotLast: true,
        class: 'adjust-separator'
    },
    {
        icon: SetupSVG,
        title: 'Setup your data',
        description: 'Input your employee data and get the ease of managing employees',
        isNotLast: true,
        class: 'adjust-separator-2'
    },
    {
        icon: LoginSVG,
        title: 'Login to your account',
        description: 'Login your WMS account',
        isNotLast: false,
        class: 'last-separator'
    }
])

const directLogin = () => {
    router.push('/login')
}
</script>

<template>
    <AuthWrapper>
      <h1 class="mb-5 text-center" v-if="isMobile">A few clicks away from being a part of Axdif</h1>

      <Card>
        <template #card-content>
            <div class="steps-container">
                <div class="steps-wrapper w-50 mx-auto">
                    <Step 
                        v-for="(step, i) in steps" 
                        :key="i" 
                        :icon="step.icon" 
                        :stepTitle="step.title" 
                        :stepDescription="step.description"
                        :isNotLast="step.isNotLast"
                        :class="step.class"
                    />
                </div>
            </div>
        </template>
        <template #card-actions>
            <v-card-actions class="flex justify-center">
                <CustomButton type="button" text="Login To Axdif" @click="directLogin"/>
            </v-card-actions>
        </template>
      </Card>
    </AuthWrapper>
</template>


<style scoped>
</style>
