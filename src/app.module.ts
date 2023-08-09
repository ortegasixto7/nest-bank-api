import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserModule } from './core/user/user.module';
import { UserController } from './controllers/user.controller';
import { AccountModule } from './core/account/account.module';
import { CurrencyModule } from "./core/currency/currency.module";
import { CurrencyController } from "./controllers/currency.controller";
import { UserResolver } from "./graphql/resolvers/user.resolver";
import { GraphQLError, GraphQLFormattedError } from "graphql";

@Module({
    imports: [
        MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ['./**/*.graphql'],
            playground: true,
            definitions: {
                path: join(process.cwd(), 'src/graphql.ts'),
                outputAs: 'class'
            },
            formatError: (error: GraphQLError) => {
                const graphQLFormattedError: GraphQLFormattedError = {
                    message: error.message
                };
                return graphQLFormattedError;
            },
        }),
        UserModule, AccountModule, CurrencyModule],
    controllers: [UserController, CurrencyController],
    providers: [UserResolver],
})
export class AppModule { }
