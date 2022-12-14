/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CapabilityWhereInput } from "./CapabilityWhereInput";
import { Type } from "class-transformer";
import { CapabilityOrderByInput } from "./CapabilityOrderByInput";

@ArgsType()
class CapabilityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CapabilityWhereInput,
  })
  @Field(() => CapabilityWhereInput, { nullable: true })
  @Type(() => CapabilityWhereInput)
  where?: CapabilityWhereInput;

  @ApiProperty({
    required: false,
    type: [CapabilityOrderByInput],
  })
  @Field(() => [CapabilityOrderByInput], { nullable: true })
  @Type(() => CapabilityOrderByInput)
  orderBy?: Array<CapabilityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CapabilityFindManyArgs };
