//import { IUser } from "../users/IUser";
import {makeAutoObservable} from "mobx"
import api from "../create-api";


export default class VacancyStore{
    constructor(){
        makeAutoObservable(this)
    }


    async createVacancy (nameVacancy, nameCompany, companyDescription, duties,
        expectations, skills, conditions, image, fullAddress, number, email) {
        try{
            console.log(image)
            const response = await api.post(`/vacancies`, 
            {
                nameVacancy,
                nameCompany, 
                companyDescription, 
                duties,
                expectations, 
                skills, 
                conditions, 
                image, 
                fullAddress, 
                number, 
                email
            })
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }
}