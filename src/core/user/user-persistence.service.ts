import { InjectModel } from "@nestjs/mongoose";
import { IUserPersistence } from "./user-persistence.interface";
import { User } from "./user.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserPersistence implements IUserPersistence {
    constructor(@InjectModel(User.name) private readonly database: Model<User>) { }

    async create(data: User): Promise<void> {
        await this.database.create(data)
    }

}