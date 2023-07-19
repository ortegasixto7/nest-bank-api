import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { SignUpService } from './sign-up/sign-up.service';
import { User, UserSchema } from "./user.schema";
import { UserPersistence } from "./user-persistence.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [SignUpService, UserPersistence],
    exports: [SignUpService]
})
export class UserModule { }
