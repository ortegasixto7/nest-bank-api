import { Auth } from "./auth.schema";

export interface IAuthPersistence {
    create(data: Auth): Promise<void>;
    getByUserNameOrNull(userName: string): Promise<Auth | null>;
}