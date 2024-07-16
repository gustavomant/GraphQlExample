import { Field, InputType } from "type-graphql";

@InputType()
export class CreateEnrollmentInput {
    @Field()
    customerId: String;
    
    @Field()
    course: String;
}