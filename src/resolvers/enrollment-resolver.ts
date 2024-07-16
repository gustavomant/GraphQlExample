import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateEnrollmentInput } from "../dtos/inputs/create-enrollment-input";
import { EnrollmentModel } from "../dtos/models/enrollment-model";
import { CustomerModel } from "../dtos/models/customer-model";

@Resolver(() => EnrollmentModel)
export class EnrollmentResolver {
    
    @Query(() => String)
    async helloWorld() {
        return 'Hello World';
    }

    @Query(() => [EnrollmentModel])
    async enrollments() {
        return [
            {course: "portuguese"}
        ]
    }

    @Mutation(() => EnrollmentModel)
    async createEnrollment(@Arg('data') data : CreateEnrollmentInput) {
        const enrollment = {
            course: data.course,
        }
        return enrollment;
    }

    @FieldResolver(() => CustomerModel)
    async customer(@Root() enrollment: EnrollmentModel) {
        console.log(enrollment.course);

        return {
            name: "John Doe",
            email: "johndoe@example.com"
        }
    }
}