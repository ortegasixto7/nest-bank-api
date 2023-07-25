import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Account, AccountSchema } from "./domain/account.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),]
})
export class AccountModule { }
