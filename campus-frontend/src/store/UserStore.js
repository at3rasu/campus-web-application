import {makeAutoObservable} from "mobx"
import api from "../api/create-api";


export default class UserStore{
    IsAuth = false
    user = null
    constructor(){
        makeAutoObservable(this)
    }

    setAuth(){
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
            console.log(this.IsAuth)
            this.setUser(response.data.user)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }
}