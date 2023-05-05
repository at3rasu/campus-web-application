import api from "./create-api";
import UserStore from "./store/store";


const store = new UserStore()

export const registration = async (email, password, login, name, surname, city, repeatPass) => {
    return store.registration(email, password, login, name, surname, city, repeatPass)
}

export const set_login = async (login, password) => {
    const response = store.set_login(login, password)
    return response
}

export const registrationUserCompany = async (email, password, login, secondPass, companyName) => {
    const response = await api.post(`/auth/registration_userCompany`, {email, password, login, secondPass, companyName})
    return response
}

export const get_users = async() => {
    const response = await api.get(`/users`)
    console.log(response)
    return response
}