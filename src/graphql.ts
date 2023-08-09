
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UserSignUpRequest {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

export abstract class IQuery {
    abstract hello(): Nullable<string> | Promise<Nullable<string>>;
}

export abstract class IMutation {
    abstract userSignUp(request: UserSignUpRequest): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
