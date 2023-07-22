import * as crypto from 'crypto'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ collection: 'currencies' })
export class Currency {
    @Prop()
    id: string = crypto.randomUUID()

    @Prop()
    symbol: string

    @Prop()
    code: string

    @Prop()
    isActive: boolean = true

    @Prop()
    exchangeRates: ExchangeRate[] = []

    @Prop()
    createdAt: number = Date.now()
}

export class ExchangeRate {
    code: string
    value: string
}

export const CurrencySchema = SchemaFactory.createForClass(Currency)