import {makeAutoObservable} from "mobx"
import api from "../api/create-api"


export default class UserStore{
    IsAuth = false
    IsAuthCompany = false
    user 
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

    async setUser(user) {
        this.user = await user
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
            this.loadUser()
        }

        if (companyToken) {
            this.setAuthCompany(true)
            this.setCompanyToken(companyToken)
            this.loadUserCompany()
        }
    }

    async registration (email, password, login, name, surname, city, repeatPass) {
        try{
            if (localStorage.getItem('userToken')){
                localStorage.removeItem('userToken')
            }
            const response = await api.post(`/auth/registration`, {email, password, login, name, surname, city, repeatPass})
            this.setAuth(true)  
            localStorage.setItem("userToken", response.data.userToken)
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
            localStorage.setItem("companyToken", response.data.companyToken)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async loadUser() {
        try {
            const user_response = await api.get('/users/get_user')
            this.user = user_response.data
        } catch (error) {
            console.log('Error loading user:', error)
        }
    }

    async loadUserCompany() {
        try {
            const user_response = await api.get('/users-company/get_user')
            this.user = user_response.data
        } catch (error) {
            console.log('Error loading user:', error)
        }
    }

    async set_login (login, password) {
        try{
            if (localStorage.getItem('userToken')){
                localStorage.removeItem('userToken')
            }
            const response = await api.post(`/auth/login`, {login, password})
            localStorage.setItem('userToken', response.data.userToken)
            this.setAuth(true)
            this.setUserToken(response.data.userToken)  
            await this.loadUser()
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async set_login_user_company (login, password) {
        try{
            const response = await api.post(`/auth/login_userCompany`, {login, password})
            localStorage.setItem('companyToken', response.data.companyToken)
            this.setAuthCompany(true)
            this.setCompanyToken(response.data.companyToken)
            await this.loadUserCompany()
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout (){
        try{
            if (localStorage.getItem('userToken')){
                localStorage.removeItem('userToken')
            }
            if(localStorage.getItem('companyToken')){
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
}