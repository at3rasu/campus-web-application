import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
interface ResumeCreationAttrs {
    name: string;
    userId: number;
    image: string;
}
export declare class Resume extends Model<Resume, ResumeCreationAttrs> {
    id: number;
    name: string;
    number: string;
    city: string;
    aboutYou: string;
    vacancy: string;
    workExamples: string;
    educational: string;
    image: string;
    userId: number;
    author: User;
}
export {};
