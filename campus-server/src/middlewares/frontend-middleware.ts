import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import path from 'path';
import { join } from 'path';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
use(req: Request, res: Response, next: NextFunction) {
    // res.sendFile('index.html', { root: 'build' });
    // console.log(join(__dirname, '..', '..', 'build', 'index.html'))
    res.sendFile(join(__dirname, '..', '..', 'build', 'index.html'));
    // console.log(path.resolve('../../'))
    // console.log(path.resolve('../build/index.html'))
    // console.log(path.resolve('../../build/index.html'))
    // res.sendFile(path.resolve('../../build/index.html'));
  }
}