import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import LoginRequest from "../models/loginRequest.model";
import { Environment } from "../environment";
import RegisterRequest from "../models/registerRequest.model";
import LoginResponse from "../models/loginResponse.model";
import RegisterResponse from "../models/registerResponse.model";

const loginRoute = `${Environment.api}/login`;
const registerRoute = `${Environment.api}/signup`;
const booksRoute = `${Environment.api}/books`;

export const Http = {
    loginRequest: (req: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
        const options: AxiosRequestConfig<any> = {
            method: "POST",
            url: loginRoute,
            data: req
        }
    
        return axios.request(options);
    },
    
    registerRequest: (req: RegisterRequest): Promise<AxiosResponse<RegisterResponse>> => {
        const options: AxiosRequestConfig<any> = {
            method: "POST",
            url: registerRoute,
            data: req
        }
    
        return axios.request(options);
    },

    getAllBooks: (): Promise<AxiosResponse<any>> => {
        const options: AxiosRequestConfig<any> = {
            method: "GET",
            url: booksRoute
        }

        return axios.request(options);
    },

}
