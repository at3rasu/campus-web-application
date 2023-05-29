import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as cookieParser from 'cookie-parser'
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { NestExpressApplication } from "@nestjs/platform-express";
import path, { join, resolve } from "path";
import { NotFoundException } from "@nestjs/common";

async function start() {
  const PORT = process.env.PORT || 5000
 
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // const app = await NestFactory.create(AppModule)
  app.use(cookieParser())
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })

  app.useStaticAssets(join(__dirname, '..', 'build'));
  
  await app.listen(PORT, () => console.log('Server started on port default ' + PORT))
  
}

start()