<script setup lang="ts">
import { CContainer, CNavItem, CNavbar, CNavbarBrand, CNavbarToggler, COffcanvas, COffcanvasHeader, COffcanvasTitle, CCloseButton, COffcanvasBody, CNavbarNav, CNavLink, CAvatar } from '@coreui/vue';
import { ref } from 'vue';

const visible = ref<boolean>(false);
</script>

<template>
    <CNavbar colorScheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarToggler
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        @click="visible = !visible"
      />
      <CNavbarBrand class="title">Tybrary</CNavbarBrand>
      <CAvatar color="secondary">TM</CAvatar>
      <COffcanvas id="offcanvasNavbar" placement="start" :visible="visible" @hide="visible = false">
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton class="text-reset" @click="visible = false" />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
        </COffcanvasBody>
      </COffcanvas>
    </CContainer>
  </CNavbar>
</template>

<style>
.title{
    margin: 0px auto 0px 10px
}

.sidebar{
    float: left;
    height: 100%;
}
</style>