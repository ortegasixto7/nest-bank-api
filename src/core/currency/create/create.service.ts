import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDto } from "./create.dto";
import { CustomError } from "src/framework/errors/custom-error.enum";
import { CurrencyPersistence } from "../domain/currency-persistence.service";
import { Currency } from "../domain/currency.schema";

@Injectable()
export class CreateService {

    constructor(private readonly currencyPersistence: CurrencyPersistence) { }

    async execute(request: CreateDto) {
        const currency = new Currency()
        currency.code = request.code
        currency.symbol = request.symbol

        const existDuplicatedCode = await this.currencyPersistence.getByCodeOrNull(request.code)
        if (existDuplicatedCode) throw new BadRequestException(CustomError.CURRENCY_CODE_ALREADY_EXIST)

        await this.currencyPersistence.create(currency)
    }

}
