import axios from "axios";
import UserStore from "../stores/UserStore";

const api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7000'
})

api.interceptors.request.use((config) => {
    if (UserStore.IsAuth) {
        config.headers.Authorization = `Bearer ${UserStore.userToken}`;
    } else if (UserStore.IsAuthCompany) {
        config.headers.Authorization = `Bearer ${UserStore.companyToken}`;
    }
    return config
})

export default api;