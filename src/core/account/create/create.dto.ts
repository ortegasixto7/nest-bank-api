import { IsNotEmpty } from 'class-validator';
import { CustomError } from "src/framework/errors/custom-error.enum";

export class CreateDto {

    @IsNotEmpty({ message: CustomError.CURRENCY_CODE_IS_REQUIRED.toString() })
    currencyCode: string

    userId: string
}