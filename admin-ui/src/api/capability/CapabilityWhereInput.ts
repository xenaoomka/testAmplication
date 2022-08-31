import { DepartmentListRelationFilter } from "../department/DepartmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CapabilityWhereInput = {
  departments?: DepartmentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
