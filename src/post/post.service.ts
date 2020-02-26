import { Repository, getRepository } from "typeorm";

import { Post } from "./post.entity";
import { PostInput } from "./post.input";

export class PostService {
  private static instance: PostService;

  constructor(
    private postRepository: Repository<Post>
  ){}

  public static getInstance(): PostService {
    if (!PostService.instance) {
      PostService.instance = new PostService(getRepository(Post));
    }
    return PostService.instance;
  }

  async createPost(data: PostInput): Promise<Post> {
    let post = new Post();
    post.title = data.title;
    post.model = data.model;
    post.body = data.body;

    await this.postRepository.save(post);

    return post;
  }

  async getPosts() {
    return await this.postRepository.find();
  }

  async page(offset?: number, limit?: number): Promise<[Post[], number]> {
    return this.postRepository.findAndCount({ 
      where: { 
        // any business logic you might have
      },
      skip: offset,
      take: limit
    })
  }

  async findById(id: string) {
    return this.postRepository.findOne(id)
  }
}