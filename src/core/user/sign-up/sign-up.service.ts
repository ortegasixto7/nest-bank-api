import { Injectable } from '@nestjs/common';
import { SignUpDto } from "./sign-up.dto";
import { User } from "../user.schema";
import { UserPersistence } from "../user-persistence.service";

@Injectable()
export class SignUpService {

    constructor(private readonly userPersistence: UserPersistence) { }

    async execute(request: SignUpDto) {

        const user = new User()
        user.firstName = request.firstName
        user.lastName = request.lastName
        user.userName = request.userName

        await this.userPersistence.create(user)

    }

}
