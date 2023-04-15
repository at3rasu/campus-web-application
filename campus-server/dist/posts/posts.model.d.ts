import { Model } from "sequelize-typescript";
interface PostCreationAttrs {
    nameVacancy: string;
}
export declare class Post extends Model<Post, PostCreationAttrs> {
    id: number;
    nameVacancy: string;
    companyDescription: string;
    city: string;
    vacancyDescription: string;
    fullAddress: string;
    telephoneNumber: string;
    email: string;
    keySkills: string;
}
export {};
