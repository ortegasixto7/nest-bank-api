import { Body, Controller, Post, HttpCode } from '@nestjs/common'
import { CreateDto } from "src/core/currency/create/create.dto"
import { CreateService } from "src/core/currency/create/create.service"

@Controller('currencies')
export class CurrencyController {

    constructor(private readonly createService: CreateService) { }

    @Post('/v1')
    @HttpCode(200)
    async signIp(@Body() request: CreateDto): Promise<any> {
        return await this.createService.execute(request)
    }

}
