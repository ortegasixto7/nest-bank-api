import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from "src/core/user/sign-up/sign-up.dto";
import { SignUpService } from "src/core/user/sign-up/sign-up.service";

@Controller('users')
export class UserController {

    constructor(private readonly signUpService: SignUpService) { }

    @Post('sign-up/v1')
    async signUp(@Body() request: SignUpDto): Promise<void> {
        await this.signUpService.execute(request)
    }

}
