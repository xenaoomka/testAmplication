import { Capability } from "../capability/Capability";

export type Department = {
  capability?: Array<Capability>;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
