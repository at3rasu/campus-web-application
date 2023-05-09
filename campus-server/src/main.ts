import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as cookieParser from 'cookie-parser'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


async function start() {
  const PORT = process.env.PORT || 5000
  
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: '*', 
  };

  app.enableCors(corsOptions);

  
  // app.use(cookieParser())
  // app.enableCors({
  //   origin: true,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // })
  // app.enableCors()
  // const authRouter = require('./routers/auth-router')
  // app.use('/auth', authRouter)
  
  await app.listen(PORT, () => console.log('Server started on port ' + PORT))
  
}

start()