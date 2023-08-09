import { IsNotEmpty } from 'class-validator';
import { CustomException } from "src/framework/errors/custom-exception.enum";

export class CreateDto {

    @IsNotEmpty({ message: CustomException.CURRENCY_CODE_IS_REQUIRED })
    code: string

    @IsNotEmpty({ message: CustomException.CURRENCY_SYMBOL_IS_REQUIRED })
    symbol: string
}