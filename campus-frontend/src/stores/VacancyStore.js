import {makeAutoObservable, runInAction } from "mobx"
import api from "../api/create-api"
import { Vacancy } from "../pages/vacancy/Vacancy"

export default class VacancyStore{
    vacancies = []
    
    constructor(){
        makeAutoObservable(this)
    }


    async createVacancy (nameVacancy, nameCompany, companyDescription, duties,
        expectations, skills, conditions, image, fullAddress, number, email) {
        try{
            const formData = new FormData()
            formData.append('nameVacancy', nameVacancy)
            formData.append('nameCompany', nameCompany)
            formData.append('companyDescription', companyDescription)
            formData.append('duties', duties)
            formData.append('expectations', expectations)
            formData.append('skills', skills)
            formData.append('conditions', conditions)
            formData.append('image', image)
            formData.append('fullAddress', fullAddress)
            formData.append('number', number)
            formData.append('email', email)


            // const imageData = new FormData()
            // imageData.append('image', image)

            // const vacancy = new CreateVacancyDto(
            //     nameVacancy,
            //     nameCompany, 
            //     companyDescription,
            //     duties,
            //     expectations, 
            //     skills, 
            //     conditions, 
            //     fullAddress, 
            //     number, 
            //     email,
            // )
            const response = await api(
            {
                url:"/vacancies",
                method:"post",
                headers:{
                    Authorization: `Bearer your token`
                },
                data: formData
            })

            console.log(response.data)

            // const imageResponse = await api.post({
            //     url:"/vacancies/add_image",
            //     method:"post",
            //     headers:{
            //         Authorization: `Bearer your token`
            //     },
            //     data:imageData
            // })
            // const response = await api.post('/vacancies/check', {image: formData});
            // const response = await api({
            //     url:"/vacancies/check",
            //     method:"post",
            //     headers:{
            //         Authorization: `Bearer your token`
            //     },
            //     data:formData
            // }).then(r => r);

            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }


    async getAllVacancies(){
        try{
            const response = await api.get("/vacancies/get_all_vacancies")
            this.vacancies = response.data
            runInAction(() => {
                this.vacancies = response.data
                console.log(response)
            })
            console.log(response)
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
}