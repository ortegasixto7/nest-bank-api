import { InjectModel } from "@nestjs/mongoose";
import { IAuthPersistence } from "./auth-persistence.interface";
import { Auth } from "./auth.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthPersistence implements IAuthPersistence {
    constructor(@InjectModel(Auth.name) private readonly database: Model<Auth>) { }

    async getByUserNameOrNull(userName: string): Promise<Auth | null> {
        return await this.database.findOne({ userName })
    }

    async create(data: Auth): Promise<void> {
        data.password = await bcrypt.hash(data.password, 10);
        await this.database.create(data)
    }

}