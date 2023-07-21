import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'users' })
export class User {
    @Prop()
    id: string

    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    userName: string

    @Prop()
    createdAt: number = Date.now();
}

export const UserSchema = SchemaFactory.createForClass(User);