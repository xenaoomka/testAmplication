import { Module } from "@nestjs/common";
import { CapabilityModuleBase } from "./base/capability.module.base";
import { CapabilityService } from "./capability.service";
import { CapabilityController } from "./capability.controller";
import { CapabilityResolver } from "./capability.resolver";

@Module({
  imports: [CapabilityModuleBase],
  controllers: [CapabilityController],
  providers: [CapabilityService, CapabilityResolver],
  exports: [CapabilityService],
})
export class CapabilityModule {}
