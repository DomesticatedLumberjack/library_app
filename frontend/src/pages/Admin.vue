
<script setup lang="ts">
import { useUserStore } from '../services/userStore';

const userStore = useUserStore();
</script>
<template>
    <div>
        <h1>Admin Works!</h1>
        <p>{{ userStore.user?.email }}</p>
    </div>
</template>

<style>
    
</style>