import * as bcrypt from "bcrypt";
import * as jsonwebtoken from "jsonwebtoken";
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { SignInDto } from "./sign-in.dto";
import { AuthPersistence } from "src/external/auth/auth-persistence.service";
import { CustomException } from "src/framework/errors/custom-exception.enum";

@Injectable()
export class SignInService {

    constructor(private readonly authPersistence: AuthPersistence) { }

    async execute(request: SignInDto) {
        const auth = await this.authPersistence.getByUserNameOrNull(request.userName)
        if (!auth) throw new NotFoundException(CustomException.USER_NOT_FOUND)

        if (!await bcrypt.compare(request.password, auth.password)) throw new BadRequestException(CustomException.USER_NOT_FOUND)
        const token = jsonwebtoken.sign({ userId: auth.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        return { token }
    }

}
