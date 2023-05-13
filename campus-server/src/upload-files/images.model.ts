import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'images' })
export class Image extends Model<Image> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  filename: string;

  @Column({
    type: DataType.BLOB,
    allowNull: false,
  })
  data: Buffer;
}