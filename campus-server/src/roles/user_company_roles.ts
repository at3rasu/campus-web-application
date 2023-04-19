import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserCompany } from "src/users-company/users-company.model";
import { Role } from "./roles.model";


@Table({tableName: 'user_company_roles', createdAt: false, updatedAt: false})
export class UserCompanyRoles extends Model<UserCompanyRoles>{ 
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => UserCompany)
    @Column({type: DataType.INTEGER})
    userCompanyId: number
    
    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number
}