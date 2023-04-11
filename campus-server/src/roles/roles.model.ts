import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserCompany } from "src/users-company/users-company.model";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles";

interface RoleCreationAttrs{
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs>{ 
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string

    @Column({type: DataType.STRING, allowNull: false})
    description: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]

    @BelongsToMany(() => UserCompany, () => UserRoles)
    users_company: UserCompany[]
}