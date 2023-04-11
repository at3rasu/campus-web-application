import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles";

interface UserCompanyCreationAttrs{
    email: string;
    password: string;
}

@Table({tableName: 'users_company'})
export class UserCompany extends Model<UserCompany, UserCompanyCreationAttrs>{ 
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @Column({type: DataType.STRING,  unique: true, allowNull: false})
    login: string

    @Column({type: DataType.STRING, allowNull: false})
    companyName: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}