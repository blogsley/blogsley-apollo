import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { UserInput } from "./user.input";

import { RelayedQuery, RelayLimitOffset, RelayLimitOffsetArgs } from 'auto-relay';

import { injectable, inject } from 'inversify';
import TYPE from '../inversify.types';

@injectable()
@Resolver(of => User)
export class UserResolver {
  constructor(@inject(TYPE.UserService) private readonly userService: UserService) {}

  /*
  @Query(() => [User])
  async users() {
    return this.userService.getUsers();
  } */

  @RelayedQuery(() => User)
  async allUsers(
    @RelayLimitOffset() {limit, offset}: RelayLimitOffsetArgs
  ): Promise<[User[], number]> {
    return this.userService.page(offset, limit)
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: UserInput) {
    return this.userService.createUser(data);
  }
}
