<script setup lang="ts">
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow, CButton, CButtonGroup, CCardFooter } from '@coreui/vue';
import { LoremIpsum } from "lorem-ipsum";
import Book from '../models/book.model';
import { useUserStore } from '../services/userStore';
import { useBookStore } from '../services/bookStore';
import { computed } from 'vue';

const userStore = useUserStore();
const bookStore = useBookStore();

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const sentences = Math.floor(Math.random() * 10);
const desc = lorem.generateSentences(sentences);

const props = defineProps<{
    book: Book
}>();

const bookInvCount = computed(() => props.book.book_inventories.reduce((prev, cur) => !cur.checked_out ? prev += 1 : prev, 0))

const checkoutButtonDisable = computed(() => bookInvCount.value <= 0 || !userStore.isLoggedIn)
const returnButtonDisable = computed(() => !bookStore.checkedOutBooks || !bookStore.checkedOutBooks.some(c => c.book_id === props.book.id))

const checkoutBook = (checkedOutBook: Book) => {
    const bookInvItem = checkedOutBook.book_inventories.find(x => !x.checked_out);

    if(bookInvItem)
        bookStore.addBookToCheckout(bookInvItem);
}

const returnBook = (returnedBook: Book) => {
    if(!bookStore.checkedOutBooks) return;
    
    const bookInvItem = bookStore.checkedOutBooks.find(c => c.book_id === returnedBook.id);
    
    if(bookInvItem)
        bookStore.returnBook(bookInvItem);
}
</script>

<template>
    <CCard class="mb-3" style="max=width: 540px">
    <CRow class="g-0">
        <CCol :md="4">
            <CCardImage class="rounded-0" :src="props.book.image_url" />
        </CCol>
        <CCol :md="8">
            <CCardBody>
                <CCardTitle>{{ props.book.title }}</CCardTitle>
                <CCardText>{{ props.book.author }}</CCardText>
                <CCardText>{{ desc }}</CCardText>
            </CCardBody>
        </CCol>
        <CCardFooter>
            <small>
                Inventory: {{ bookInvCount }}
            </small>
            <CButtonGroup class="card-buttons" role="group">
                <CButton color="primary" variant="outline" :disabled="checkoutButtonDisable" @click="checkoutBook(props.book)">Checkout</CButton>
                <CButton color="primary" variant="outline" :disabled="returnButtonDisable" @click="returnBook(props.book)">Return</CButton>
            </CButtonGroup>
        </CCardFooter>
    </CRow>
    </CCard>
</template>

<style scoped>
    .card-buttons{
        float: right;
    }
</style>