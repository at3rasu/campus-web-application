import api from "./create-api";
import VacancyStore from "./store/vacancyStore";



const vacancyStore = new VacancyStore()
export const createVacancy = async (nameVacancy, nameCompany, companyDescription, duties,
                                    expectations, skills, conditions, image, fullAddress, number, email) => {
    return vacancyStore.createVacancy(nameVacancy, nameCompany, companyDescription, duties,
        expectations, skills, conditions, image, fullAddress, number, email)
}