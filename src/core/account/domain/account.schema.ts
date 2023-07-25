import * as crypto from 'crypto'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ collection: 'accounts' })
export class Account {
    @Prop()
    id: string = crypto.randomUUID()

    @Prop()
    number: string

    @Prop()
    currencyCode: string

    @Prop()
    balance: number = 0

    @Prop()
    isEnabled: boolean

    @Prop()
    userId: string

    @Prop()
    cardId: string | null = null

    @Prop()
    token: string | null = null

    @Prop()
    createdAt: number = Date.now()
}

export const AccountSchema = SchemaFactory.createForClass(Account)