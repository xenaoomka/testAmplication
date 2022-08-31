import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CapabilityResolverBase } from "./base/capability.resolver.base";
import { Capability } from "./base/Capability";
import { CapabilityService } from "./capability.service";

@graphql.Resolver(() => Capability)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CapabilityResolver extends CapabilityResolverBase {
  constructor(
    protected readonly service: CapabilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
