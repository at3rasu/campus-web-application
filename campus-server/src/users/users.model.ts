import { Column, DataType, Model, Table, BelongsToMany, HasMany } from "sequelize-typescript";
import { Resume } from "src/resume/resume.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles";

interface UserCreationAttrs{
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{ 
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @Column({type: DataType.STRING,  unique: true, allowNull: false})
    login: string

    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @Column({type: DataType.STRING, allowNull: false})
    surname: string

    // @Column({type: DataType.STRING, allowNull: false})
    // city: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Resume)
    resume: Resume[]
}