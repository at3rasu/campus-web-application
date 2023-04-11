import axios from "axios";

export const registration = async (email, password, login, name, surname, city, repeatPass) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/registration`, {email, password, login, name, surname, city, repeatPass})
    return response
}

export const set_login = async (login, password) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {login, password})
    return response
}

export const registrationUserCompany = async (email, password, login, secondPass, companyName) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/registration_userCompany`, {email, password, login, secondPass, companyName})
    return response
}