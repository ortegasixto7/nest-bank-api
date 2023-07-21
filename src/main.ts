import { config } from 'dotenv'
if (!process.env.NODE_ENV) config()

import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from "@nestjs/common"
import { AllExceptionFilter } from "./framework/filters/all-exception.filter"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalFilters(new AllExceptionFilter(app.get(HttpAdapterHost)));
    await app.listen(process.env.PORT)
}
bootstrap()
