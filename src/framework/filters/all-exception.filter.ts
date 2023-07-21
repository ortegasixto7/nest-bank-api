import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common'
import { CustomError } from "../errors/custom-error.enum"
import { HttpAdapterHost } from "@nestjs/core"

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: unknown, host: ArgumentsHost) {
        const { httpAdapter } = this.httpAdapterHost;
        const context = host.switchToHttp()
        const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionResponse = context.getResponse() as any
        let responseBody = { error: 'INTERNAL_SERVER_ERROR' }
        if (httpStatus !== 500) {
            const responseMessage = Object.keys(CustomError)[Object.values(CustomError).indexOf(Number(exceptionResponse.message[0]))]
            responseBody.error = responseMessage
        }
        httpAdapter.reply(context.getResponse(), responseBody, httpStatus);
    }
}