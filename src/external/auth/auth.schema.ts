import * as crypto from 'crypto'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'auth' })
export class Auth {
    @Prop()
    id: string = crypto.randomUUID()

    @Prop()
    userName: string

    @Prop()
    password: string

    @Prop()
    roles: string[]

    @Prop()
    createdAt: number = Date.now()
}

export const AuthSchema = SchemaFactory.createForClass(Auth);