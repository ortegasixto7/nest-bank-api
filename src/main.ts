import { config } from 'dotenv'
if (!process.env.NODE_ENV) config()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from "@nestjs/common"
import { HttpExceptionFilter } from "./framework/filters/http-exception.filter"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalFilters(new HttpExceptionFilter())
    await app.listen(process.env.PORT)
}
bootstrap()
