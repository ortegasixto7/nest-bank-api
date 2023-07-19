import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { SignUpService } from './sign-up/sign-up.service';
import { User, UserSchema } from "./user.entity";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [SignUpService]
})
export class UserModule { }
