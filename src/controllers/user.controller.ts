import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { SignInDto } from "src/core/user/sign-in/sign-in.dto";
import { SignInService } from "src/core/user/sign-in/sign-in.service";
import { SignUpDto } from "src/core/user/sign-up/sign-up.dto";
import { SignUpService } from "src/core/user/sign-up/sign-up.service";

@Controller('users')
export class UserController {

    constructor(private readonly signUpService: SignUpService, private readonly signInService: SignInService) { }

    @Post('sign-in/v1')
    @HttpCode(200)
    async signIp(@Body() request: SignInDto): Promise<any> {
        return await this.signInService.execute(request)
    }


    @Post('sign-up/v1')
    @HttpCode(200)
    async signUp(@Body() request: SignUpDto): Promise<void> {
        await this.signUpService.execute(request)
    }

}
