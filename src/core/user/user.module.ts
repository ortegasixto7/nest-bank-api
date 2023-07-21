import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { SignUpService } from './sign-up/sign-up.service';
import { User, UserSchema } from "./domain/user.schema";
import { UserPersistence } from "../user/domain/user-persistence.service";
import { AuthModule } from "src/external/auth/auth.module";
import { SignInService } from "./sign-in/sign-in.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), AuthModule],
    providers: [SignUpService, SignInService, UserPersistence],
    exports: [SignUpService, SignInService]
})
export class UserModule { }
