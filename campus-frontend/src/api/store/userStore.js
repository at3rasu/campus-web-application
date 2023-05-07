//import { IUser } from "../users/IUser";
import {makeAutoObservable} from "mobx"
import api from "../create-api";


export default class UserStore{
    IsAuth = false
    user = {}
    constructor(){
        makeAutoObservable(this)
    }

    setAuth(flag){
        this.IsAuth = true
    }

    setUser(user){
        this.user = user
    }

    async registration (email, password, login, name, surname, city, repeatPass) {
        try{
            const response = await api.post(`/auth/registration`, {email, password, login, name, surname, city, repeatPass})
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
            
            this.setUser(response.data.user)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async set_login (login, password) {
        try{
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
            this.setAuth(true)
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
                this.setUser(undefined)
            }
            else{
                console.log('Пользователь не авторизован')
            }
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }
}