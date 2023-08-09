import { BadRequestException, Injectable } from '@nestjs/common';
import { SignUpDto } from "./sign-up.dto";
import { User } from "../domain/user.schema";
import { UserPersistence } from "../domain/user-persistence.service";
import { Auth } from "src/external/auth/auth.schema";
import { AuthPersistence } from "src/external/auth/auth-persistence.service";
import { CustomException } from "src/framework/errors/custom-exception.enum";
import { AuthRole } from "src/external/auth/auth-roles.enum";

@Injectable()
export class SignUpService {

    constructor(private readonly userPersistence: UserPersistence, private readonly authPersistence: AuthPersistence) { }

    async execute(request: SignUpDto) {

        const userExists = await this.authPersistence.getByUserNameOrNull(request.userName)
        if (userExists) throw new BadRequestException(CustomException.UNAVAILABLE_USER_NAME)

        const auth = new Auth()
        auth.password = request.password
        auth.userName = request.userName
        auth.roles = [AuthRole.USER]

        const user = new User()
        user.id = auth.id
        user.firstName = request.firstName
        user.lastName = request.lastName
        user.userName = request.userName

        await Promise.all([this.userPersistence.create(user), this.authPersistence.create(auth)])
    }

}
