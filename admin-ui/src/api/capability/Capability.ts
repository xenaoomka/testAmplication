import { Department } from "../department/Department";

export type Capability = {
  createdAt: Date;
  departments?: Array<Department>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
