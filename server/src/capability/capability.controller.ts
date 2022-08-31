import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CapabilityService } from "./capability.service";
import { CapabilityControllerBase } from "./base/capability.controller.base";

@swagger.ApiTags("capabilities")
@common.Controller("capabilities")
export class CapabilityController extends CapabilityControllerBase {
  constructor(
    protected readonly service: CapabilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
