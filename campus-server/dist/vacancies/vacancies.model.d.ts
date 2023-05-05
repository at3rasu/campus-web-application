import { Model } from "sequelize-typescript";
interface VacancyCreationAttrs {
    nameVacancy: string;
}
export declare class Vacancy extends Model<Vacancy, VacancyCreationAttrs> {
    id: number;
    nameVacancy: string;
    companyDescription: string;
    city: string;
    vacancyDescription: string;
    fullAddress: string;
    telephoneNumber: string;
    email: string;
    keySkills: string;
    userCompanyId: number;
}
export {};
