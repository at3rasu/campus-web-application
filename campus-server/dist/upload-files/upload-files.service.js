"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFilesService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
let UploadFilesService = class UploadFilesService {
    async createFile(file) {
        try {
            const fileName = uuid.v4() + '.png';
            const filePath = path.resolve(__dirname, '..', 'static');
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }
            console.log(typeof file);
            console.log(file);
            fs.writeFileSync(path.join(filePath, fileName), file.buffer);
            return fileName;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException('Ошибка при записи файла', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
UploadFilesService = __decorate([
    (0, common_1.Injectable)()
], UploadFilesService);
exports.UploadFilesService = UploadFilesService;
//# sourceMappingURL=upload-files.service.js.map