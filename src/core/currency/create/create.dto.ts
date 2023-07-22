import { IsNotEmpty } from 'class-validator';
import { CustomError } from "src/framework/errors/custom-error.enum";

export class CreateDto {

    @IsNotEmpty({ message: CustomError.CURRENCY_CODE_IS_REQUIRED.toString() })
    code: string

    @IsNotEmpty({ message: CustomError.CURRENCY_SYMBOL_IS_REQUIRED.toString() })
    symbol: string
}