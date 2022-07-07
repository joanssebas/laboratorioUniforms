import React, {Children, ReactElement} from "react";
import {
  AutoForm,
  AutoField,
  ErrorField,
  SubmitField,
  SelectField,
  TextField,
} from "uniforms-semantic";
import UserLoginSchema from "../src/schema/schema";
import UserLoginSchemaBridge from "../src/validations/Bridge";
import UserLoginSchemaValidator from "../src/validations/validationSchema";

import {Context, useForm} from "uniforms";

//import {bridge as schema} from "../src/schema/schema";

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
      <AutoForm
        schema={bridge}
        onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))}
      >
        {/* <h4>Formulario de prueba</h4>
      <AutoField name="firstName" />

      <ErrorField name="firstName" errorMessage="El nombre es obligatorio" />

      <DisplayIf condition={(context) => context.model.firstName}>
        <section>
          <AutoField name="lastName" />

          <ErrorField
            name="lastName"
            errorMessage="El apellido es obligatorio"
          />
        </section>
      </DisplayIf>

      <AutoField name="workExperience" />
      <ErrorField
        name="workExperience"
        errorMessage="Your work experience cannot be lesser than 0 or greater than 100 years!"
      />
      <AutoField name="profession" />

      <SubmitField /> */}
      </AutoForm>
    </div>
  );
}

export default App;
