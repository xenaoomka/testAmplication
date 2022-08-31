import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DepartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
