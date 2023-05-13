import { Column, DataType, Model, Table, BelongsToMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { UserCompany } from "src/users-company/users-company.model";
import { User } from "src/users/users.model";


interface ResumeCreationAttrs{
    name: string;
    userId: number;
    image: string;
}

@Table({tableName: 'resume'})
export class Resume extends Model<Resume, ResumeCreationAttrs>{ 
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @Column({type: DataType.STRING, allowNull: false})
    number: string

    @Column({type: DataType.STRING, allowNull: false})
    city: string
    
    @Column({type: DataType.STRING, allowNull: false})
    aboutYou: string

    @Column({type: DataType.STRING,  allowNull: false})
    vacancy: string

    @Column({type: DataType.STRING, allowNull: false})
    workExamples: string

    @Column({type: DataType.STRING, allowNull: false})
    educational: string

    @Column({type: DataType.STRING})
    image: string

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @BelongsTo(() => User)
    author: User
}