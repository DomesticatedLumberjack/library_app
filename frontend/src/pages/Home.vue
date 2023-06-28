<script setup lang="ts">
import BookListItem from '../components/BookListItem.vue';
import { useBookStore } from '../services/bookStore';

const bookStore = useBookStore();

bookStore.getAllBooks();
</script>

<template>
    <div v-for="book in bookStore.books">
        <!-- <h3>{{ book.title }}</h3>
        <img :src="book.image_url"/> -->
        <BookListItem :book="book"></BookListItem>
    </div>
</template>

<style scoped>
</style>

