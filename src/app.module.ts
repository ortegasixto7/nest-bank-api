import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './core/user/user.module';
import { UserController } from './controllers/user.controller';

@Module({
    imports: [MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`), UserModule],
    controllers: [UserController],
    providers: [],
})
export class AppModule { }
