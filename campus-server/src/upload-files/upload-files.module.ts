import { Module } from '@nestjs/common';
import { UploadFilesService } from './upload-files.service';

@Module({
    providers: [UploadFilesService],
    exports: [UploadFilesService]
})
export class UploadFilesModule {}
