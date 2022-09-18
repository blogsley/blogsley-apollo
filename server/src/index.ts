import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import  { GraphQLSchema } from 'graphql';

import { TypeOrmConnection } from '@auto-relay/typeorm'
import { AutoRelayConfig } from 'auto-relay'
new AutoRelayConfig({ orm: () => TypeOrmConnection })

import container from './inversify.config';

import { AuthResolver } from "./auth/auth.resolver";
import { UserResolver } from "./user/user.resolver";
import { PostResolver } from "./post/post.resolver";

import dbConfig from "./config/database";

async function generateSchema(): Promise<GraphQLSchema> {
  try {
    const schema = await buildSchema({
      container,
      resolvers: [
        AuthResolver,
        UserResolver,
        PostResolver
      ]
    })
    return schema
  } catch (e) {
    console.error(e)
    throw e
  }
}

async function main() {
  const connection = await createConnection(dbConfig);
  const schema = await generateSchema();
  console.log(schema);
  const server = new ApolloServer({
    schema,
  });
  await server.listen(5000);
  console.log("Server has started!");
}

main();