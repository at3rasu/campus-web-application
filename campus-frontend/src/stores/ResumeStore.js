import {makeAutoObservable, runInAction } from "mobx"
import api from "../api/create-api"

export default class ResumeStore{
    resume = []
    resumeCount = 0 

    constructor(){
        makeAutoObservable(this)
    }


    async createResume (name, number, city, aboutYou, vacancy, workExamples, educational) {
        try{
            const formData = new FormData()
            formData.append('name', name)
            formData.append('number', number)
            formData.append('city', city)
            formData.append('aboutYou', aboutYou)
            formData.append('vacancy', vacancy)
            formData.append('workExamples', workExamples)
            formData.append('educational', educational)

            const response = await api(
            {
                url:"/resume",
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


    async getAllResume(){
        try{
            const response = await api.get("/resume/get_all_resume")
            this.resume = response.data
            runInAction(() => {
                this.resume = response.data
                this.resumeCount = response.data.length
            })
            return response
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }

    getResumeById(id) {
        return this.vacancies.find((vacancy) => vacancy.id === parseInt(id))
    }

    async getResumeByUser(){
        try{
            const response = await api.get(`/users/get_resume`)
            runInAction(() => {
                this.resume = response.data
            })
            console.log(response)
            return response
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }
}