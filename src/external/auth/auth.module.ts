import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Auth, AuthSchema } from "./auth.schema";
import { AuthPersistence } from "./auth-persistence.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }])],
    providers: [AuthPersistence, AuthPersistence],
    exports: [AuthPersistence]
})
export class AuthModule { }
