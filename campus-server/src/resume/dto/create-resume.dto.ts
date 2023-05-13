import { User } from "src/users/users.model"

export class CreateResumeDto{
    

    userId: number

    readonly author: User
}