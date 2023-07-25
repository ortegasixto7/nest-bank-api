import { IsNotEmpty } from 'class-validator';
import { CustomError } from "src/framework/errors/custom-error.enum";

export class SignUpDto {

    @IsNotEmpty({ message: CustomError.FIRST_NAME_IS_REQUIRED.toString() })
    firstName: string

    @IsNotEmpty({ message: CustomError.LAST_NAME_IS_REQUIRED.toString() })
    lastName: string

    @IsNotEmpty({ message: CustomError.USER_NAME_IS_REQUIRED.toString() })
    userName: string

    @IsNotEmpty({ message: CustomError.PASSWORD_IS_REQUIRED.toString() })
    password: string
}