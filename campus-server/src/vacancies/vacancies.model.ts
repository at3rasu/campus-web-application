import { Column, DataType, Model, Table, BelongsToMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { UserCompany } from "src/users-company/users-company.model";


interface VacancyCreationAttrs{
    nameVacancy: string;
    userCompanyId: number;
    image: string;
}

@Table({tableName: 'vacancies'})
export class Vacancy extends Model<Vacancy, VacancyCreationAttrs>{ 
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    nameVacancy: string

    @Column({type: DataType.STRING, allowNull: false})
    nameCompany: string

    @Column({type: DataType.STRING, allowNull: false})
    companyDescription: string
    
    @Column({type: DataType.STRING, allowNull: false})
    duties: string

    @Column({type: DataType.STRING,  allowNull: false})
    expectations: string

    @Column({type: DataType.STRING, allowNull: false})
    skills: string

    @Column({type: DataType.STRING, allowNull: false})
    conditions: string

    @Column({type: DataType.STRING, allowNull: false})
    email: string

    @Column({type: DataType.STRING, allowNull: false})
    fullAddress: string

    @Column({type: DataType.STRING, allowNull: false})
    number: string

    @Column({type: DataType.STRING})
    image: string

    @ForeignKey(() => UserCompany)
    @Column({type: DataType.INTEGER})
    userCompanyId: number

    @BelongsTo(() => UserCompany)
    author: UserCompany
}