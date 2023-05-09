import { vacancyStore } from "..";




export const createVacancy = async (nameVacancy, nameCompany, companyDescription, duties,
                                    expectations, skills, conditions, image, fullAddress, number, email) => {
    return vacancyStore.createVacancy(nameVacancy, nameCompany, companyDescription, duties,
        expectations, skills, conditions, image, fullAddress, number, email)
}

export const getAllVacancies = async() => {
    return vacancyStore.getAllVacancies()
}