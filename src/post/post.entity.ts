import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ObjectType, Int, ID } from "type-graphql";

@ObjectType()
@Entity("post")
export class Post {
  @Field(type => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("varchar", { length: 256, unique: true })
  title: string;

  @Field()
  @Column()
  model: string;

  @Field()
  @Column()
  body: string;
}
