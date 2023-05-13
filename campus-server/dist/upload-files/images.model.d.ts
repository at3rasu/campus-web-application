/// <reference types="node" />
import { Model } from 'sequelize-typescript';
export declare class Image extends Model<Image> {
    filename: string;
    data: Buffer;
}
