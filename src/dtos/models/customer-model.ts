import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CustomerModel {
    @Field()
    name: String;

    @Field()
    email: String;
}