import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common'
import { HttpAdapterHost } from "@nestjs/core"
import { isArray } from "class-validator";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: unknown, host: ArgumentsHost) {
        const { httpAdapter } = this.httpAdapterHost;
        const context = host.switchToHttp()
        const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        let responseBody = { error: 'INTERNAL_SERVER_ERROR' }
        if (httpStatus !== 500) {
            responseBody.error = 'UNKNOWN_ERROR'
            if (exception instanceof HttpException) {
                const exceptionResponse = exception.getResponse() as any
                if (isArray(exceptionResponse.message)) responseBody.error = exceptionResponse.message[0]
                else responseBody.error = exceptionResponse.message
            }
        }

        if ((context as any)?.contextType === 'graphql') {
            if (httpStatus === 400) throw new BadRequestException(responseBody.error)
            if (httpStatus === 404) throw new NotFoundException(responseBody.error)
            throw new InternalServerErrorException(responseBody.error)
        }

        httpAdapter.reply(context.getResponse(), responseBody, httpStatus);
    }
}