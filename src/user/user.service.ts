import { Repository, getRepository } from "typeorm";

import { User } from "./user.entity";
import { UserInput } from "./user.input";

export class UserService {
  private static instance: UserService;

  constructor(
    private userRepository: Repository<User>
  ){}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService(getRepository(User));
    }
    return UserService.instance;
  }

  async createUser(data: UserInput): Promise<User> {
    let user = new User();
    user.username = data.username;
    user.email = data.email;
    user.firstName = data.firstName;
    user.lastName = data.lastName;

    await this.userRepository.save(user);

    return user;
  }

  async getUsers() {
    return await this.userRepository.find();
  }

  async page(offset?: number, limit?: number): Promise<[User[], number]> {
    return this.userRepository.findAndCount({ 
      where: { 
        // any business logic you might have
      },
      skip: offset,
      take: limit
    })
  }
}