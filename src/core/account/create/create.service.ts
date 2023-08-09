import * as bcrypt from "bcrypt";
import * as jsonwebtoken from "jsonwebtoken";
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDto } from "./create.dto";
import { AuthPersistence } from "src/external/auth/auth-persistence.service";
import { CustomException } from "src/framework/errors/custom-exception.enum";

@Injectable()
export class CreateService {

    constructor(private readonly authPersistence: AuthPersistence) { }

    async execute(request: CreateDto) {

    }

}
