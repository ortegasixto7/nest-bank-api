import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './core/user/user.module';
import { UserController } from './controllers/user.controller';
import { AccountModule } from './core/account/account.module';
import { CurrencyModule } from "./core/currency/currency.module";
import { CurrencyController } from "./controllers/currency.controller";

@Module({
    imports: [MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`),
        UserModule, AccountModule, CurrencyModule],
    controllers: [UserController, CurrencyController],
    providers: [],
})
export class AppModule { }
