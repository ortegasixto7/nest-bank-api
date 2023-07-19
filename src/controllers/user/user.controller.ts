import { Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { SignUpDto } from "src/core/user/sign-up/sign-up.dto";

@Controller('users')
export class UserController {

    @Post('sign-up/v1')
    signUp(@Body() request: SignUpDto) {
        console.log(request)
        throw new InternalServerErrorException();
        return { message: 'Hello World' }
    }

}
