import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'
import { Image } from './images.model';


@Injectable()
export class UploadFilesService {

    async createFile(file): Promise<string>{
        try{
            const fileName = uuid.v4() + '.png'
            const filePath = path.resolve(__dirname, '..', 'uploads')
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        }catch(e){
            console.log(e)
            throw new HttpException('Ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    private async uploadImage(file){
        const image = new Image();
        image.filename = file.filename;
        image.data = file.buffer;
        await image.save();
        return { filename: image.filename };
    }
}
