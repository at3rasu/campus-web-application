import {makeAutoObservable} from "mobx"
import api from "../api/create-api"


export default class UserStore{
    IsAuth = false
    IsAuthCompany = false
    user = null
    constructor(){
        makeAutoObservable(this)
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

    async registration (email, password, login, name, surname, city, repeatPass) {
        try{
            if (localStorage.getItem('token')){
                console.log(localStorage.getItem('token'))
                this.logout()
                console.log(localStorage.getItem('token'))
            }
            const response = await api.post(`/auth/registration`, {email, password, login, name, surname, city, repeatPass})
            // localStorage.setItem('token', response.data.token)
            this.setAuth(true)     
            this.setUser(response.data.user)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async set_login (login, password) {
        try{
            if (localStorage.getItem('token')){
                this.logout()
            }
            const response = await api.post(`/auth/login`, {login, password})
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
            this.setUser(response.data.user)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async set_login_user_company (login, password) {
        try{
            const response = await api.post(`/auth/login_userCompany`, {login, password})
            localStorage.setItem('token', response.data.token)
            this.setAuthCompany(true)
            this.setUser(response.data.user)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout(){
        try{
            if (localStorage.getItem('token')){
                localStorage.removeItem('token')
                this.setAuth(false)
                this.setAuthCompany(false)
                this.setUser(undefined)
                window.location.reload()
            }
            else{
                console.log('Пользователь не авторизован')
            }
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