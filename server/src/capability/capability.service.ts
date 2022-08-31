import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CapabilityServiceBase } from "./base/capability.service.base";

@Injectable()
export class CapabilityService extends CapabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
