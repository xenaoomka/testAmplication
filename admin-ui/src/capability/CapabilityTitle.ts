import { Capability as TCapability } from "../api/capability/Capability";

export const CAPABILITY_TITLE_FIELD = "name";

export const CapabilityTitle = (record: TCapability): string => {
  return record.name || record.id;
};
