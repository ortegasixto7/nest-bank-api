import { Injectable } from '@nestjs/common';
import { SignUpDto } from "./sign-up.dto";
import { User } from "../domain/user.schema";
import { UserPersistence } from "../domain/user-persistence.service";
import { Auth } from "src/external/auth/auth.schema";
import { AuthPersistence } from "src/external/auth/auth-persistence.service";

@Injectable()
export class SignUpService {

    constructor(private readonly userPersistence: UserPersistence, private readonly authPersistence: AuthPersistence) { }

    async execute(request: SignUpDto) {

        const auth = new Auth()
        auth.password = request.password
        auth.userName = request.userName
        auth.roles = ['USER']

        const user = new User()
        user.firstName = request.firstName
        user.lastName = request.lastName
        user.userName = request.userName
        user.id = auth.id

        await Promise.all([this.userPersistence.create(user), this.authPersistence.create(auth)])
    }

}
