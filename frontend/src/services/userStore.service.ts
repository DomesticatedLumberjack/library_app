import { defineStore } from "pinia";
import User from "../models/user.model";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const isLoggedIn = ref<boolean>(false)
    const user = ref<User | null>(null)

    const logInUser = (newUser: User) => {
        isLoggedIn.value = true;
        user.value = newUser;
    }

    const logOutUser = () => {
        isLoggedIn.value = false;
        user.value = null;
    }

    return {isLoggedIn, user, logInUser, logOutUser}
})