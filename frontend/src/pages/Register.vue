<script setup lang="ts">
import { CButton, CForm, CFormInput } from '@coreui/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../services/userStore';

const userStore = useUserStore();
userStore.logOutUser();

const router = useRouter();

const email = ref<string>();
const password = ref<string>();
const firstName = ref<string>();
const lastName = ref<string>();

const register = (e: SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if(email.value && password.value && firstName.value && lastName.value){
        userStore.registerUser(email.value, password.value, firstName.value, lastName.value)
            .then(res => {
                if(res && res.status.code === 200 && userStore.isLoggedIn){
                    router.push('/')
                }
            })
    }
}

</script>


<template>
    <div class="register-form">
        <CForm @submit="register">
            <CFormInput
                type="email"
                id="libraryEmailRegisterInput"
                label="Email"
                placeholder="name@example"
                text="Must be 8-20 characters long"
                v-model="email"
                required
            />
            <CFormInput
                type="password"
                id="libraryPasswordRegisterInput"
                label="Password"
                v-model="password"
                required
            />
            <CFormInput
                type="text"
                id="libraryFirstNameRegisterInput"
                label="First Name"
                v-model="firstName"
                required
            />
            <CFormInput
                type="text"
                id="libraryLastNameRegisterInput"
                label="Last Name"
                v-model="lastName"
                required
            />
            <CButton
                class="register-btn"
                color="primary"
                type="submit"
            >
                Create Account
            </CButton>
        </CForm>
    </div>
</template>


<style scoped>
    .register-form{
        margin: auto;
        max-width: 500px;
    }

    .register-btn{
        margin-top: 20px;
        float: left;
    }
</style>