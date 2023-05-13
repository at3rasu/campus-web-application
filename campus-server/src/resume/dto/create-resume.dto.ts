import { User } from "src/users/users.model"

export class CreateResumeDto{
    readonly name: string;

    readonly number: string;

    readonly city: string;

    readonly aboutYou: string;

    readonly vacancy: string;

    readonly workExamples: string;

    readonly educational: string;

    userId: number;

    readonly author: User;
}