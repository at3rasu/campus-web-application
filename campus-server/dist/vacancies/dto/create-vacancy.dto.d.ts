import { UserCompany } from "src/users-company/users-company.model";
export declare class CreateVacancyDto {
    readonly nameVacancy: string;
<<<<<<< HEAD
    readonly nameCompany: string;
=======
    readonly companyName: string;
>>>>>>> fbbe953882d82b2aa0be2fdf49073fe85d10f71d
    readonly companyDescription: string;
    readonly duties: string;
    readonly expectations: string;
    readonly skills: string;
    readonly conditions: string;
    readonly email: string;
    readonly fullAddress: string;
    readonly number: string;
    readonly image: string;
    userCompanyId: number;
    readonly author: UserCompany;
}
