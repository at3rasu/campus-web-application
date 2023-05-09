import { UserCompany } from "src/users-company/users-company.model"

export class CreateVacancyDto{
    readonly nameVacancy: string

    readonly companyDescription: string
    
    readonly duties: string

    readonly expectations: string

    readonly skills: string

    readonly conditions: string

    readonly email: string

    readonly fullAddress: string

    readonly number: string

    readonly image: string

    userCompanyId: number

    readonly author: UserCompany
}