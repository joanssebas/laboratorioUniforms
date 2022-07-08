import React, {Children, ReactElement, useState} from "react";
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

import {bridge as schema} from "../src/schema/schema";

type DisplayIfProps<T> = {
  children: ReactElement,
  condition: (context: Context<T>) => boolean,
};

// We have to ensure that there's only one child, because returning an array
// from a component is prohibited.
function DisplayIf({children, condition}: DisplayIfProps<T>) {
  const uniforms = useForm();
  return condition(uniforms) ? Children.only(children) : null;
}

function App() {
  const [valorLista, setvalorLista] = useState("");

  const diplayIfValidation = (text) => {
    if (text === "1116275254") {
      return true;
    }
  };
  const displayList = (text) => {
    if (text === "Medellin") {
      setvalorLista(text);
      return true;
    }
  };
  // const createUser = async (event) => {
  //   console.log("datos del formulario ", event);
  // };

  // const bridge = new UserLoginSchemaBridge(
  //   UserLoginSchema,
  //   UserLoginSchemaValidator
  // );

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
        schema={schema}
        onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))}
      >
        <TextField name="fieldA" />
        <DisplayIf
          condition={(context) => diplayIfValidation(context.model.fieldA)}
        >
          <section>
            <TextField name="fieldB" />
            {/* <DisplayIf condition={(context) => context.model.fieldB}>
              <span>Cedula que activa la validacion</span>
            </DisplayIf> */}
          </section>
        </DisplayIf>
        <SelectField
          name="profession"
          // onChange={(text) => setvalorLista(text)}
        />
        <DisplayIf
          condition={(context) => displayList(context.model.profession)}
        >
          <section>
            <span>La ciudad que seleccionaste fue {valorLista}</span>
          </section>
        </DisplayIf>
        <SubmitField />
      </AutoForm>
    </div>
  );
}

export default App;
