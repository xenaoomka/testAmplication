import { CapabilityWhereInput } from "./CapabilityWhereInput";
import { CapabilityOrderByInput } from "./CapabilityOrderByInput";

export type CapabilityFindManyArgs = {
  where?: CapabilityWhereInput;
  orderBy?: Array<CapabilityOrderByInput>;
  skip?: number;
  take?: number;
};
