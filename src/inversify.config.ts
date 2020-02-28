import { Container } from 'inversify';
import TYPE from './inversify.types'
import { Repository } from "typeorm";
import { Post } from './post/post.entity'
import { AuthResolver } from './auth/auth.resolver'
import { UserResolver } from './user/user.resolver'
import { PostResolver } from './post/post.resolver'
import { PostService } from './post/post.service'

const container = new Container();

container.bind<AuthResolver>(AuthResolver).toSelf();
container.bind<UserResolver>(UserResolver).toSelf();

container.bind<PostResolver>(PostResolver).toSelf();
container.bind<PostService>(TYPE.PostService).to(PostService);
container.bind<Repository<Post>>(TYPE.PostRepository).toDynamicValue(() => {
  return PostService.getRepository();
}).inRequestScope();

export default container;