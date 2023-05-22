import axios from "axios";
import store from "..";


const api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    if (store.IsAuth) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
    } else if (store.IsAuthCompany) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('companyToken')}`;
    }
    return config
})

export default api;