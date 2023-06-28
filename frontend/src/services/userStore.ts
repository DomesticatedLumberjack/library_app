import { defineStore } from "pinia";
import User from "../models/user.model";
import { ref } from "vue";
import { Http } from "./http";
import LoginRequest from "../models/loginRequest.model";
import RegisterRequest from "../models/registerRequest.model";
import ApiResponse from "../models/apiResponse.model";
import { AxiosHeaders } from "axios";

export const useUserStore = defineStore('user', () => {
    const isLoggedIn = ref<boolean>(false)
    const user = ref<User | null>(null)

    const logInUser = (email: string, password: string): Promise<void | ApiResponse> => {
        const req: LoginRequest = {
            user:{
                email: email,
                password: password
            }
        }
        return Http.loginRequest(req).then(res => {
            const headers = res.headers as AxiosHeaders;
            const newUser: User = {
                id: res.data.data.id,
                firstName: res.data.data.first_name,
                lastName: res.data.data.last_name,
                email: res.data.data.email,
                bearerToken: `${headers.getAuthorization()}`,
                isAdmin: res.data.data.admin
            }

            user.value = newUser;
            isLoggedIn.value = true;

            return res.data;
        });
    }

    const registerUser = (email: string, password: string, firstName: string, lastName: string): Promise<void | ApiResponse> => {
        const req: RegisterRequest = {
            user: {
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName
            }
        }

        return Http.registerRequest(req).then(res => {
            const headers = res.headers as AxiosHeaders;
            const newUser: User = {
                id: res.data.data.id,
                firstName: res.data.data.first_name,
                lastName: res.data.data.last_name,
                email: res.data.data.email,
                bearerToken: `${headers.getAuthorization()}`,
                isAdmin: false
            }

            user.value = newUser;
            isLoggedIn.value = true;

            return res.data;
        })
    }

    const logOutUser = () => {
        isLoggedIn.value = false;
        user.value = null;
    }

    return {isLoggedIn, user, logInUser, logOutUser, registerUser}
})