import { CapabilityListRelationFilter } from "../capability/CapabilityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DepartmentWhereInput = {
  capability?: CapabilityListRelationFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
