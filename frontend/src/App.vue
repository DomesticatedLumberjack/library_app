<script setup lang="ts">
import '@coreui/coreui/dist/css/coreui.min.css';
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"
import { CContainer } from '@coreui/vue';

</script>

<template>
  <NavBar/>
  <CContainer class="router-outlet" xl>
    <RouterView/>
  </CContainer>
  <Footer class="footer"/>
</template>

<style scoped>
  .footer{
    margin-bottom: auto;
  }
  .router-outlet{
    padding: 20px 0px 20px 0px;
  }
</style>
