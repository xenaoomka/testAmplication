import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DepartmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
