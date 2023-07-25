import { InjectModel } from "@nestjs/mongoose";
import { ICurrencyPersistence } from "./currency-persistence.interface";
import { Currency } from "./currency.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CurrencyPersistence implements ICurrencyPersistence {
    constructor(@InjectModel(Currency.name) private readonly database: Model<Currency>) { }

    async getByCodeOrNull(code: string): Promise<Currency | null> {
        return this.database.findOne({ code })
    }

    async create(data: Currency): Promise<void> {
        await this.database.create(data)
    }

}