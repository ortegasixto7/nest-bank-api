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
        let responseBody = { error: 'INTERNAL_SERVER_ERROR' }
        if (httpStatus === 400) {

            let responseMessage = 'UNKNOWN_ERROR'
            if (exception instanceof HttpException) {
                const exceptionMessage = (exception.getResponse() as any).message
                responseMessage = Object.keys(CustomError)[Object.values(CustomError).indexOf(Number(exceptionMessage[0]))]
                responseBody.error = responseMessage
            }
        }
        if (httpStatus === 404) {
            let responseMessage = 'UNKNOWN_ERROR'
            if (exception instanceof HttpException) {
                responseMessage = Object.keys(CustomError)[Object.values(CustomError).indexOf(Number(exception.getResponse()))]
                responseBody.error = responseMessage
            }
        }
        httpAdapter.reply(context.getResponse(), responseBody, httpStatus);
    }
}