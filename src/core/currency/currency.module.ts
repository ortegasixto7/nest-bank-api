import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Currency, CurrencySchema } from "./domain/currency.schema";
import { CurrencyPersistence } from "./domain/currency-persistence.service";
import { CreateService } from "./create/create.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Currency.name, schema: CurrencySchema }]),],
    providers: [CreateService, CurrencyPersistence],
    exports: [CreateService]
})
export class CurrencyModule { }
