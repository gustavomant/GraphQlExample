import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class EnrollmentModel {
    @Field()
    course: String;
}