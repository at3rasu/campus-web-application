import { CreateResumeDto } from './dto/create-resume.dto';
import { ResumeService } from './resume.service';
export declare class ResumeController {
    private resumeService;
    constructor(resumeService: ResumeService);
    create(resumeDto: CreateResumeDto, request: Request): Promise<{
        token: string;
    }>;
    getAllVacancies(): Promise<import("./resume.model").Resume[]>;
    updateResume(id: any, updateResumeDto: any): Promise<[affectedCount: number, affectedRows: import("./resume.model").Resume[]]>;
    deleteResume(id: any): Promise<number>;
}
