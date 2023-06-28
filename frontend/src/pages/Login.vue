<script setup lang="ts">
import { CButton, CForm, CFormInput } from '@coreui/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from "../services/userStore";

const userStore = useUserStore();
userStore.logOutUser();

const email = ref<string>();
const password = ref<string>();
const router = useRouter();

const login = (e: SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if(email.value && password.value){
        userStore.logInUser(email.value, password.value).then(res => {
            if(res && res.status.code === 200 && userStore.isLoggedIn){
                router.push('/')
            }
        })
    }
}

const register = () => {
    router.push('/register');
}
</script>

<template>
    <div class="login-form">
        <CForm @submit="login">
            <CFormInput
                type="email"
                id="libraryEmailLoginInput"
                label="Email"
                placeholder="name@example"
                text="Must be 8-20 characters long"
                v-model="email"
                required
            />
            <CFormInput
                type="password"
                id="libraryPasswordLoginInput"
                label="Password"
                v-model="password"
                required
            />
            <CButton 
                class="login-btn" 
                color="primary" 
                type="submit"
            >
                Login
            </CButton>
            <CButton
                class="register-btn"
                color="secondary"
                @click="register"
            >
                Create Account
            </CButton>
        </CForm>
    </div>
</template>


<style scoped>
    .login-form{
        margin: auto;
        max-width: 500px;
    }

    .login-btn{
        margin-top: 20px;
        float: left;
    }

    .register-btn{
        margin-top: 20px;
        float: right;
    }
</style>