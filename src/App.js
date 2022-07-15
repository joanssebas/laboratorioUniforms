import React, {Children, ReactElement, useState, useEffect} from "react";
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
import {getData} from "../src/schema/schema";

import {Context, useForm} from "uniforms";

import {bridge as schema} from "../src/schema/schema";

export var numb1 = "";

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
var index = 0;

function App() {
  const [number1, setnumber1] = useState("");
  const [number2, setnumber2] = useState("");
  const [valueList, setvalueList] = useState("");
  const [valuenumb1, setvaluenumb1] = useState("");

  useEffect(() => {
    getData();
    getNumb1();
    getNumb2();
  }, []);

  const search = (data) => {
    var search = "USD";
    setvalueList(data);
    if (data === "Turkey") {
      setvaluenumb1(number1.bpi[search].code);
      //var found = number1.find((e) => e.bpi === search);
    } else {
      setvaluenumb1("valor no valido");
    }
  };

  const getNumb1 = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => setnumber1(data))
      .then(() => console.log("numb1 var promise ", number1));
  };

  const getNumb2 = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => setnumber2(data.bpi.USD.rate_float))
      .then(() => console.log("numb1 var promise ", number1));
  };

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

  const convertText = (text) => {
    // console.log("convert text result", text);
    text.fieldNumber1 = number1;
    text.fieldNumber2 = number2;
    text.profession = valueList;
    console.log("convert text result FINAL", text);
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
      <AutoForm schema={schema} onSubmit={(text) => convertText(text)}>
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
        <TextField name="fieldNumber1" value={valuenumb1} disabled={true} />
        <TextField name="fieldNumber2" value={number2} disabled={true} />
        <TextField
          name="fieldTotal"
          value={number1 + number2}
          disabled={true}
        />
        <SelectField
          name="profession"
          onChange={
            (key) => search(key)
            // console.log("valor onchange ", key, value)
          }
          value={valueList}
          // onChange={(text) => setvalorLista(text)}
        />
        <DisplayIf
          condition={(context) => displayList(context.model.profession)}
        >
          <section>
            <span>La ciudad que seleccionaste fue {valorLista}</span>
          </section>
        </DisplayIf>
        <SubmitField value="Enviar información" />
      </AutoForm>
    </div>
  );
}

export default App;
