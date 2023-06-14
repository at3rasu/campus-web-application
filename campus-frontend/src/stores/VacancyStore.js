import {makeAutoObservable, runInAction } from "mobx"
import api from "../api/create-api"

export default class VacancyStore{
    vacancies = []
    vacancyCount = 0 

    constructor(){
        makeAutoObservable(this)
    }


    async createVacancy (nameVacancy, nameCompany, companyDescription, duties,
        expectations, skills, conditions, fullAddress, number, email) {
        try{
            const formData = new FormData()
            formData.append('nameVacancy', nameVacancy)
            formData.append('nameCompany', nameCompany)
            formData.append('companyDescription', companyDescription)
            formData.append('duties', duties)
            formData.append('expectations', expectations)
            formData.append('skills', skills)
            formData.append('conditions', conditions)
            // formData.append('image', image)
            formData.append('fullAddress', fullAddress)
            formData.append('number', number)
            formData.append('email', email)
        
            const response = await api(
            {
                url:"/vacancies/insert",
                method:"post",
                headers:{
                    Authorization: `Bearer your token`
                },
                data: formData
            })

            console.log(response.data)

            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    getIndexedList(data) {
        const lines = data.split('\n')
        return lines.map((line) => line.trim())
    }

    async getAllVacancies(){
        try{
            const response = await api.get("/vacancies/get_all_vacancies")
            this.vacancies = response.data
            runInAction(() => {
                this.vacancies = response.data
                this.vacancyCount = response.data.length
            })
            return response
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }

    getVacancyById(id) {
        return this.vacancies.find((vacancy) => vacancy.id === parseInt(id))
    }

    selectVacancyById(id) {
        this.selectedVacancy = this.getVacancyById(id)
    }

    async getVacanciesByUser() {
        try{
            const response = await api.get(`/users-company/get_vacancies`)
            runInAction(() => {
                this.vacancies = response.data
            })
            console.log(response)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }
}