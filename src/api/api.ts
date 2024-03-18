import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://35.157.234.188/',
    timeout: 1000,
});