import { Currency } from "./currency.schema";

export interface ICurrencyPersistence {
    create(data: Currency): Promise<void>;
    getByCodeOrNull(code: string): Promise<Currency | null>;
}