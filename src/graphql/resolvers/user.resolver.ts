import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SignUpDto } from "src/core/user/sign-up/sign-up.dto";
import { SignUpService } from "src/core/user/sign-up/sign-up.service";

@Resolver('User')
export class UserResolver {
    constructor(private readonly signUpService: SignUpService) { }

    @Query("hello")
    hello(): string {
        return "Hello"
    }

    @Mutation("userSignUp")
    async signUp(@Args('request') request: SignUpDto): Promise<boolean> {
        await this.signUpService.execute(request)
        return true
    }
}