import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { EnrollmentResolver } from "./resolvers/enrollment-resolver";
import path from "node:path";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            EnrollmentResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen();

    console.log(`server running on ${url}`)
}

bootstrap();