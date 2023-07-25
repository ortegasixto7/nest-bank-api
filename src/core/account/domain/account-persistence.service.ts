import { InjectModel } from "@nestjs/mongoose";
import { IAccountPersistence } from "./account-persistence.interface";
import { Account } from "./account.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AccountPersistence implements IAccountPersistence {
    constructor(@InjectModel(Account.name) private readonly database: Model<Account>) { }

    async create(data: Account): Promise<void> {
        await this.database.create(data)
    }

}