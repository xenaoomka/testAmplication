import { CapabilityCreateNestedManyWithoutDepartmentsInput } from "./CapabilityCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  capability?: CapabilityCreateNestedManyWithoutDepartmentsInput;
  title?: string | null;
};
