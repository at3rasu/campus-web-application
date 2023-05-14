import {makeAutoObservable} from "mobx"
import api from "../api/create-api"


export default class UserStore{
    IsAuth = false
    IsAuthCompany = false
    user = null
    userToken = null // Токен пользователя
    companyToken = null
    constructor(){
        makeAutoObservable(this)
        this.checkLocalStorage()
    }

    setAuth(){
        this.IsAuth = true
    }

    setAuthCompany(){
        this.IsAuthCompany = true
    }

    setUser(user){
        this.user = user
    }

    setUserToken(token) {
        this.userToken = token
    }

    setCompanyToken(token) {
        this.companyToken = token
    }

    checkLocalStorage() {
        const userToken = localStorage.getItem("userToken")
        const companyToken = localStorage.getItem("companyToken")

        if (userToken) {
            this.setAuth(true)
            this.setUserToken(userToken)
        }

        if (companyToken) {
            this.setAuthCompany(true)
            this.setCompanyToken(companyToken)
        }
    }

    async registration (email, password, login, name, surname, city, repeatPass) {
        try{
            if (localStorage.getItem('userToken')){
                localStorage.removeItem('userToken')
            }
            const response = await api.post(`/auth/registration`, {email, password, login, name, surname, city, repeatPass})
            this.setAuth(true)   
            this.setUser(response.data.user)
            localStorage.setItem("userToken", response.data.token)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration_userCompany(email, password, login, secondPass, companyName){
        try{
            if (localStorage.getItem('companyToken')){
                localStorage.removeItem('companyToken')
            }
            const response = await api.post(`/auth/registration_userCompany`, {email, password, login, secondPass, companyName})
            this.setAuth(true)
            this.setUser(response.data.user)
            localStorage.setItem("companyToken", response.data.token)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async set_login (login, password) {
        try{
            if (localStorage.getItem('userToken')){
                localStorage.removeItem('userToken')
            }
            const response = await api.post(`/auth/login`, {login, password})
            localStorage.setItem('userToken', response.data.token)
            this.setAuth(true)
            this.setUserToken(response.data.token)  
            this.setUser(response.data.user)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async set_login_user_company (login, password) {
        try{
            const response = await api.post(`/auth/login_userCompany`, {login, password})
            localStorage.setItem('companyToken', response.data.token)
            this.setAuthCompany(true)
            this.setUser(response.data.user)
            this.setCompanyToken(response.data.token)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout(){
        try{
            if (localStorage.getItem('userToken')){
                localStorage.removeItem('userToken')
            }
            else if(localStorage.getItem('companyToken')){
                localStorage.removeItem('companyToken')
            }
            else{
                console.log('Пользователь не авторизован')
            }
            this.setAuth(false)
            this.setAuthCompany(false)
            this.setUser(undefined)
            window.location.reload()
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async getVacanciesByUser(){
        try{
            const response = await api.get(`/users-company/get_vacancies`)
            console.log(response)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }
}