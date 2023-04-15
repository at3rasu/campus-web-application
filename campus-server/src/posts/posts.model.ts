import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";


interface PostCreationAttrs{
    nameVacancy: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs>{ 
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    nameVacancy: string

    @Column({type: DataType.STRING, allowNull: false})
    companyDescription: string
    
    @Column({type: DataType.STRING, allowNull: false})
    city: string

    @Column({type: DataType.STRING,  allowNull: false})
    vacancyDescription: string

    @Column({type: DataType.STRING, allowNull: false})
    fullAddress: string

    @Column({type: DataType.STRING, allowNull: false})
    telephoneNumber: string

    @Column({type: DataType.STRING, allowNull: false})
    email: string

    @Column({type: DataType.STRING, allowNull: false})
    keySkills: string
}