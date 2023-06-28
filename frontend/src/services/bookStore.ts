import { defineStore } from "pinia";
import { ref } from "vue";
import Book from "../models/book.model";
import { Http } from "./http";
import ApiResponse from "../models/apiResponse.model";
import BookInventory from "../models/bookInventory.model";

export const useBookStore = defineStore('book', () => {
    const books = ref<Book[]>();
    const checkedOutBooks = ref<BookInventory[]>();

    const getAllBooks = (): Promise<ApiResponse> => {
        return Http.getAllBooks().then(res => {
            const reqBooks = res.data as Book[];
            
            books.value = reqBooks;

            return res.data;
        })
    }

    const addBookToCheckout = (bookInv: BookInventory) => {
        //Update book store
        if(!books.value) books.value = [];

        let bookIndex = books.value.findIndex(b => b.id === bookInv.book_id);
        if(bookIndex < 0) return;

        let bookInvIndex = books.value[bookIndex].book_inventories.findIndex(i => i.id === bookInv.id);
        if(bookInvIndex < 0) return;

        books.value[bookIndex].book_inventories[bookInvIndex].checked_out = true;

        //Add book inventory item to store
        if(!checkedOutBooks.value) checkedOutBooks.value = [];

        checkedOutBooks.value.push(bookInv);
    }

    const returnBook = (bookInv: BookInventory) => {
        //Update book store
        if(!books.value) books.value = [];

        let bookIndex = books.value.findIndex(b => b.id === bookInv.book_id);
        if(bookIndex < 0) return;

        let bookInvIndex = books.value[bookIndex].book_inventories.findIndex(i => i.id === bookInv.id);
        if(bookInvIndex < 0) return;

        books.value[bookIndex].book_inventories[bookInvIndex].checked_out = false;

        //Add book inventory item to store
        if(!checkedOutBooks.value) checkedOutBooks.value = [];

        checkedOutBooks.value = checkedOutBooks.value.filter(c => c.id !== bookInv.id);
    }

    return { books, checkedOutBooks, getAllBooks, addBookToCheckout, returnBook}
})