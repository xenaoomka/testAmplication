import { DepartmentCreateNestedManyWithoutCapabilitiesInput } from "./DepartmentCreateNestedManyWithoutCapabilitiesInput";

export type CapabilityCreateInput = {
  departments?: DepartmentCreateNestedManyWithoutCapabilitiesInput;
  name?: string | null;
};
