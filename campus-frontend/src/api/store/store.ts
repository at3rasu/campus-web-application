import axios from "axios";
import { IUser } from "../users/IUser";
import {makeAutoObservable} from "mobx"
import api from "../create-api.ts";


export default class Store{
    IsAuth = false
    user = {} as IUser

    constructor(){
        makeAutoObservable(this)
    }

    setAuth(flag: boolean){
        this.IsAuth = true
    }

    setUser(user: IUser){
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
}