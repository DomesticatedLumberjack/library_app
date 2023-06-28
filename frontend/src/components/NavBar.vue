<script setup lang="ts">
import { CAvatar, CContainer, CNavLink, CNavbar, CNavbarBrand, CNavbarNav } from '@coreui/vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../services/userStore';
import { computed } from 'vue';

const router = useRouter();
const userStore = useUserStore();

const initals = computed(() => {
  let initalsSetup = "";
  if(userStore.user?.firstName){
    initalsSetup += userStore.user.firstName[0];
  }
  if(userStore.user?.lastName){
    initalsSetup += userStore.user.lastName[0];
  }
  if(initalsSetup === ""){
    initalsSetup = "?"
  }
  return initalsSetup;
})
</script> 

<template>
    <CNavbar colorScheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand class="title clickable" @click="router.push('/')">Tybrary</CNavbarBrand>
      <CNavbarNav class="nav-item clickable">
        <CNavLink v-if="userStore.user?.isAdmin" @click="router.push('/admin')">Admin</CNavLink>
      </CNavbarNav>
      <CNavbarNav class="nav-item clickable">
        <CNavLink v-if="!userStore.isLoggedIn && $route.path !== '/login' && $route.path !== '/register'" @click="router.push('/login')" active>Login</CNavLink>
        <CNavLink v-if="userStore.isLoggedIn" @click="router.push('/login')">
          <CAvatar  color="secondary">{{ initals }}</CAvatar>
        </CNavLink>
      </CNavbarNav>
    </CContainer>
  </CNavbar>
</template>

<style scoped>
.title{
    margin: 0px auto 0px 10px
}

.sidebar{
    float: left;
    height: 100%;
}

.nav-item{
  margin: 0px 10px 0px 10px;
}

.CNavLink{
  cursor: help;
}
</style>