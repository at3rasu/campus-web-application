import axios from "axios";

export const registration = async (email, password, login, name, surname, repeatPass) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/registration`, {email, password, login, name, surname, repeatPass})
    return response
}

export const login = async (login, password) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {login, password})
    return response
}