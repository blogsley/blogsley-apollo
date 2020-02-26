import { Field, InputType } from "type-graphql";

@InputType()
export class PostInput {
  @Field() readonly title: string;
  @Field() readonly model: string;
  @Field() readonly body: string;
}
