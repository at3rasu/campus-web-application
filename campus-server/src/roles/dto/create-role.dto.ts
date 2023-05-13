export class CreateRoleDto{
    readonly value: string;
    readonly description: string;

    constructor(value, description){
        this.value = value
        this.description = description
    }
}