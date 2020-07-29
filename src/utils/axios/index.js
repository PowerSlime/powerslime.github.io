import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.BASE_PATH,
});

export const axiosFetcher = (url, config) => axiosInstance({ url, ...config }).then((response) => response.data);
