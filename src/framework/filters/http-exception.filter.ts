import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Response } from 'express'
import { CustomError } from "../errors/custom-error.enum"

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp()
        const response = context.getResponse<Response>()
        const status = exception.getStatus()
        const exceptionResponse = exception.getResponse() as any
        if (status === 500) return response.status(status).json({ error: 'INTERNAL_SERVER_ERROR' })
        const responseMessage = Object.keys(CustomError)[Object.values(CustomError).indexOf(Number(exceptionResponse.message[0]))]
        return response.status(status).json({ error: responseMessage })
    }
}