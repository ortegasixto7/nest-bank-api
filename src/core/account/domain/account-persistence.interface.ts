import { Account } from "./account.schema";

export interface IAccountPersistence {
    create(data: Account): Promise<void>;
}