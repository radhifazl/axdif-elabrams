<script setup>
import OAuthButton from '@/components/Buttons/OAuthButton.vue';
import GoogleIcon from '@/assets/icons/google.png';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import CustomInput from '@/components/Inputs/CustomInput.vue';
import CustomCheckbox from '@/components/Inputs/CustomCheckbox.vue';
import CustomButton from '@/components/Buttons/CustomButton.vue';

import { ref } from 'vue';
import useIsMobile from '@/utils/useIsMobile';

const { isMobile } = useIsMobile();

const loginForm = ref({
    email: '',
    password: '',
    rememberMe: false
})
</script>

<template>
    <div class="wrapper login"
      :class="{
        'login-desktop d-flex items-center justify-content-between': !isMobile,
      }"
    >
        <div class="login-icon w-75 d-flex flex-column justify-center items-center" v-if="!isMobile">
            <img src="../assets/icons/login-icon.png" alt="Login Icon">
            <footer class="login-footer">
                © Copyright 2023. All Right Reserved.
            </footer>
        </div>
        <div class="login-form"
            :class="{'login-form-lg pa-5': !isMobile}"
            :style="{width: isMobile ? '100%' : '35%'}"
        >
            <div class="login-content mx-auto">
                <img class="login-logo" src="../assets/logo.png" alt="Logo" width="150" v-if="!isMobile"/>
                <div class="login-text">
                    <h1 class="text-h6 font-weight-black">Login to your Account</h1>
                    <p class="text-body-3 font-weight-medium my-5">Hi, welcome back! Select method to login</p>
                </div>

                <div class="login-with-buttons"
                    :class="{
                        'd-flex items-center login-btn-desktop': !isMobile,
                    }"
                >
                    <OAuthButton text="Google" :icon="GoogleIcon"/>
                    <OAuthButton text="Linked In" :icon="LinkedinIcon"/>
                </div>

                <div class="text-subtitle-2 separator w-100 text-center my-5">
                    Or continue with email
                </div>

                <div class="form-login-wrapper">
                    <v-form>
                        <CustomInput 
                            label="Email"
                            type="email"
                            placeholder="e.g john.doe@mail.com"
                            v-model="loginForm.email"
                        />
                        <CustomInput 
                            label="Password"
                            type="password"
                            placeholder="Insert Password"
                            v-model="loginForm.password"
                        />

                        <div class="password-remember d-flex w-100 justify-space-between"
                            :class="{
                                'pr-desktop': !isMobile,
                            }"
                        >
                            <CustomCheckbox v-model="loginForm.rememberMe" label="Remember me"/>
                            <router-link to="/forgot-password" class="link font-weight-bold">
                                Forgot Password
                            </router-link>
                        </div>

                        <CustomButton class="w-100 my-5" text="Login"/>
                    </v-form>
                </div>

                <div class="terms-privacy text-subtitle-2 d-flex justify-center items-center w-100 text-center my-5">
                    <router-link to="/privacy-policy">Privacy Policy</router-link>
                    <router-link to="/terms-condition">Terms & Condition</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.login-form-lg {
    display: flex;
    align-items: center;
}

.login-logo {
    margin-left: -0.5rem;
    transform: translateY(2rem);
}

.login-icon {
    position: relative;
    background-color: #0796E5;
    z-index: 1;
}

.login-icon::before {
    z-index: -5;
    content: "";
    background: url('../assets/images/Masking-1.svg') no-repeat center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.login-icon img {
    width: 90%;
    height: 80%;
    margin: auto;
}

.login-icon footer {
    padding: 2rem 0;
    text-align: center;
    color: #FFF;
}

.separator {
    color: #5B6591;
    position: relative;
}

.separator::before, .separator::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 25%;
    height: 1px;
    background-color: #5B6591;
}

.separator::before {
    left: 0;
}

.separator::after {
    right: 0;
}

.password-remember {
    align-items: start;
}

.link {
    color: #0796E5;
}

.terms-privacy {
    gap: 1rem;
}

.terms-privacy a {
    color: #5B6591;
}

.terms-privacy a:first-child {
    position: relative;
}

.terms-privacy a:first-child::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -0.7rem;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #5B6591;
    transform: translateY(-50%);
}

.login-desktop {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
}

.login-btn-desktop {
    gap: 1rem;
}

.pr-desktop a {
    font-size: 14px;
}

@media screen and (max-width: 768px) {
    .wrapper {
        width: 100%;
        height: 100%;
        padding: 5rem 1.2rem;
        padding-bottom: 0;
        font-size: 32px/39px;
        letter-spacing: 0.24px;
        z-index: 1;
    }
}
</style>