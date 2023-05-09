export declare enum FileType {
    IMAGE = "image"
}
export declare class FilesService {
    createFile(type: FileType, file: any): string;
    removeFile(fileName: string): void;
}
