import * as bcrypt from "bcrypt";
import * as jsonwebtoken from "jsonwebtoken";
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDto } from "./create.dto";
import { AuthPersistence } from "src/external/auth/auth-persistence.service";
import { CustomError } from "src/framework/errors/custom-error.enum";

@Injectable()
export class CreateService {

    constructor(private readonly authPersistence: AuthPersistence) { }

    async execute(request: CreateDto) {

    }

}
