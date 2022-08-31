import { DepartmentUpdateManyWithoutCapabilitiesInput } from "./DepartmentUpdateManyWithoutCapabilitiesInput";

export type CapabilityUpdateInput = {
  departments?: DepartmentUpdateManyWithoutCapabilitiesInput;
  name?: string | null;
};
