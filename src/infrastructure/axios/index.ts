import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_TODOS_URL
})

export default axiosClient;