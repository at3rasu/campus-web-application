import {makeAutoObservable} from "mobx"
import api from "../api/create-api"


export default class VacancyStore{
    vacancies = []

    constructor(){
        makeAutoObservable(this)
    }


    async createVacancy (nameVacancy, nameCompany, companyDescription, duties,
        expectations, skills, conditions, image, fullAddress, number, email) {
        try{
            //console.log(image)
            const formData = new FormData()
            formData.append('image', image)
            const response = await api( 
            {
                url:"/vacancies",
                method:"post",
                headers:{
                    Authorization: `Bearer your token`
                },
                
                nameVacancy : nameVacancy,
                nameCompany : nameCompany, 
                companyDescription : companyDescription,
                duties : duties,
                expectations : expectations, 
                skills : skills, 
                conditions : conditions, 
                fullAddress : fullAddress, 
                number : number, 
                email : email
                
                
            }).then(r => r)

            // const response = await api.post(`/vacancies/check`, formData)
            // console.log(response)
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
            console.log(response)
            return response
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }
}