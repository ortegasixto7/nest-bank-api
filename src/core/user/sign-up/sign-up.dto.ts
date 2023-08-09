import { IsNotEmpty } from 'class-validator';
import { CustomException } from "src/framework/errors/custom-exception.enum";

export class SignUpDto {

    @IsNotEmpty({ message: CustomException.FIRST_NAME_IS_REQUIRED })
    firstName: string

    @IsNotEmpty({ message: CustomException.LAST_NAME_IS_REQUIRED })
    lastName: string

    @IsNotEmpty({ message: CustomException.USER_NAME_IS_REQUIRED })
    userName: string

    @IsNotEmpty({ message: CustomException.PASSWORD_IS_REQUIRED })
    password: string
}