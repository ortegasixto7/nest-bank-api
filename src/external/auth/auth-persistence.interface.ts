import { Auth } from "./auth.schema";

export interface IAuthPersistence {
    create(data: Auth): Promise<void>;
}