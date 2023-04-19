import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
// import * as cookieParser from 'cookie-parser'

async function start() {
  const PORT = process.env.PORT || 5000
  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter(),
  // );
  // await app.register(fastifyCookie, {
  //   secret: 'my-secret', // for cookies signature
  // });
  const app = await NestFactory.create(AppModule)
  // app.use(cookieParser())
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })
  // const authRouter = require('./routers/auth-router')
  // app.use('/auth', authRouter)
  
  await app.listen(PORT, () => console.log('Server started on port ' + PORT))
  
}

start()