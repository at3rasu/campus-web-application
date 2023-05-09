import { Model } from "sequelize-typescript";
import { UserCompany } from "src/users-company/users-company.model";
interface VacancyCreationAttrs {
    nameVacancy: string;
    userCompanyId: number;
    image: string;
}
export declare class Vacancy extends Model<Vacancy, VacancyCreationAttrs> {
    id: number;
    nameVacancy: string;
    companyDescription: string;
    duties: string;
    expectations: string;
    skills: string;
    conditions: string;
    email: string;
    fullAddress: string;
    number: string;
    image: string;
    userCompanyId: number;
    author: UserCompany;
}
export {};
