export enum CustomError {
    // Required Errors
    FIRST_NAME_IS_REQUIRED,
    LAST_NAME_IS_REQUIRED,
    USER_NAME_IS_REQUIRED,
    PASSWORD_IS_REQUIRED,
    CURRENCY_CODE_IS_REQUIRED,
    CURRENCY_SYMBOL_IS_REQUIRED,

    // Exceptions
    INVALID_CREDENTIALS,
    CURRENCY_CODE_ALREADY_EXIST,

    // Not Found Errors
    USER_NOT_FOUND
}