import React from "react";
import Authentication from "../feature/auth/Authentication";
import CreateForm from "../feature/create/CreateForm";

function Create() {
  return (
    <Authentication>
      <CreateForm />
    </Authentication>
  );
}
export default Create;
