import { Model } from "sequelize-typescript";
import { Resume } from "src/resume/resume.model";
import { Role } from "src/roles/roles.model";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    login: string;
    name: string;
    surname: string;
    roles: Role[];
    resume: Resume[];
}
export {};
