import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'


@Injectable()
export class UploadFilesService {

    async createFile(file): Promise<string>{
        try{
            const fileName = uuid.v4() + '.png'
            const filePath = path.resolve(__dirname, '..', 'static')
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }
            console.log(typeof file)
            console.log(file)
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        }catch(e){
            console.log(e)
            throw new HttpException('Ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
