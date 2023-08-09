import { IsNotEmpty } from 'class-validator';
import { CustomException } from "src/framework/errors/custom-exception.enum";

export class SignInDto {

    @IsNotEmpty({ message: CustomException.USER_NAME_IS_REQUIRED })
    userName: string

    @IsNotEmpty({ message: CustomException.PASSWORD_IS_REQUIRED })
    password: string
}