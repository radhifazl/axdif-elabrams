<script setup>
import CustomInput from '@/components/Inputs/CustomInput.vue';
import CustomAlert from '@/components/Alert/CustomAlert.vue';
import CustomButton from '@/components/Buttons/CustomButton.vue';
import Card from '../components/Card/Card.vue'
import AuthWrapper from '@/components/AuthWrapper.vue';

import { ref, computed } from 'vue';
import CustomSelect from '@/components/Inputs/CustomSelect.vue';
import CustomCheckbox from '@/components/Inputs/CustomCheckbox.vue';

const phone = ref({
    countryCode: '',
    number: '',
})

const success = ref(false)

const options = ref(['+61', '+62', '+63', '+64', '+65', '+66'])

const signupForm = ref({
    companyName: '',
    name: '',
    email: '',
    phone: computed(() => {
        return `${phone.value.countryCode}${phone.value.number}`
    }),
    password: '',
    confirmPassword: '',
    newsletter: false,
    terms: false,
})

const signup = () => {
    const {
        companyName,
        name,
        email,
        phone,
        password,
        confirmPassword,
        terms
    } = signupForm.value

    if(!companyName || !name || !email || !phone || !password || !confirmPassword || !terms) {
        alert('Please fill all the fields')
        return
    } else {
        if(password !== confirmPassword) {
            alert('Password and confirm password must be the same')
            return
        } else {
            alert('Success')
        }
    }
}
</script>

<template>
    <AuthWrapper>

      <CustomAlert v-if="success" color="success" title="Success" text="Berhasil Daftar"/>

      <Card>
        <template #card-text>
            <h1 class="text-h5 text--primary font-weight-black">
              Manage all your employee efficiently
            </h1>
            <p class="my-5 font-weight-medium">
              Let’s get you all set up so you can verify your personal account and begin setting up your profile
            </p>
        </template>

        <template #card-content>
          <v-form @submit.prevent="signup">
            <CustomInput 
              label="Company name" 
              placeholder="e.g PT. Elabrams System" 
              type="text"
              name="companyName"
              v-model="signupForm.companyName"
            />
            <CustomInput 
              label="Name" 
              placeholder="e.g John Doe" 
              type="text"
              name="name"
              v-model="signupForm.name"
            />
            <CustomInput 
              label="Email" 
              placeholder="e.g john.doe@mail.com" 
              type="email"
              name="email"
              v-model="signupForm.email"
            />
            <div class="phone-input">
              <label class="text-subtitle-1 font-weight-bold">
                  Phone Number
              </label>
              
              <div class="d-flex justify-space-between align-center">
                <CustomSelect :options="options" v-model="phone.countryCode"/>
                <CustomInput 
                  placeholder="e.g 821 2345 6789" 
                  type="text"
                  name="phone"
                  v-model="phone.number"
                />
              </div>
            </div>
            <CustomInput 
              label="Password" 
              placeholder="Insert Password" 
              type="password"
              name="password"
              v-model="signupForm.password"
            />
            <CustomInput 
              label="Password" 
              placeholder="Confirm Password" 
              type="password"
              name="confirmPassword"
              v-model="signupForm.confirmPassword"
            />
            <div>
              <CustomCheckbox 
                  label="Yes I want to receive Axdif’s Newsletter"
                  v-model="signupForm.newsletter"
              />
            </div>
            <div class="my-5">
              <CustomCheckbox 
                  label="I have read and accept the Terms & Conditions and Privacy Policy"
                  v-model="signupForm.terms"
              />
            </div>
            <CustomButton type="submit"/>
          </v-form>
        </template>
      </Card>
    </AuthWrapper>
</template>


<style scoped>

</style>
