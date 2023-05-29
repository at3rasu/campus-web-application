import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
export declare class FrontendMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
