import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './core/user/user.module';

@Module({
    imports: [MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`), UserModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
