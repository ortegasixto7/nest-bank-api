import { User } from "./user.schema";

export interface IUserPersistence {
    create(data: User): Promise<void>;
}