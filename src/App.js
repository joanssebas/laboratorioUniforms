import React, {Children, ReactElement} from "react";
import {
  AutoForm,
  AutoField,
  ErrorField,
  SubmitField,
  SelectField,
} from "uniforms-semantic";
import UserLoginSchema from "../src/schema/schema";
import UserLoginSchemaBridge from "../src/validations/Bridge";
import UserLoginSchemaValidator from "../src/validations/validationSchema";

import {Context, useForm} from "uniforms";

import {bridge as schema} from "../src/schema/schema";

// type DisplayIfProps<T> = {
//   children: ReactElement,
//   condition: (context: Context<T>) => boolean,
// };

// We have to ensure that there's only one child, because returning an array
// from a component is prohibited.
// function DisplayIf({children, condition}: DisplayIfProps<T>) {
//   const uniforms = useForm();
//   return condition(uniforms) ? Children.only(children) : null;
// }

function App() {
  const createUser = async (event) => {
    console.log("datos del formulario ", event);
  };

  const bridge = new UserLoginSchemaBridge(
    UserLoginSchema,
    UserLoginSchemaValidator
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <AutoForm schema={bridge} onSubmit={(text) => createUser(text)}>
        <h4>Datos para la entrega del bono</h4>
        <AutoField name="login" />
        <ErrorField name="login" />
        <AutoField name="password1" />
        <ErrorField name="password1" />
        <AutoField name="password2" />
        <ErrorField name="password2" />
        <SubmitField value="Validar" />
      </AutoForm>
    </div>
  );
}

export default App;
