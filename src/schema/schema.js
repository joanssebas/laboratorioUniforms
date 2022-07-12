import React, {useEffect, useState} from "react";
import Ajv from "ajv";
import {JSONSchemaBridge} from "uniforms-bridge-json-schema";

const ajv = new Ajv({allErrors: true, useDefaults: true});
//aqui se valida los valores del list que vienen del endpoint
var data;
var items = [];
var coindesk1;
var coindesk2;

// console.log("numb 1 schema ", coindesk1);

export const getData = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const myJson = await response.json(); //extract JSON from the http response
  // hacemos el map de la data
  //mapData(myJson)
  // console.log("api result ", myJson[0].name.common);
  mapData(myJson);
};

// const getNumb1 = () => {
//   fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//     .then((res) => res.json())
//     .then((data) => (coindesk1 = data.bpi.EUR.rate_float.toString()))
//     .then(() => console.log("numb1 var promise ", coindesk1));
//   return coindesk1;
//   // exportnumb1();
// };

if (coindesk1) {
  coindesk2 = coindesk1;
}

// getDataCoindesk().then(function (data) {
//   coindesk1 = data;
//   console.log("coin desk ", coindesk1);
// });

const mapData = async (jsonData) => {
  data = jsonData.map(function (item) {
    return {
      label: item.name.common,
      value: item.name.common,
    };
  });
  console.log("data json map ", data);
  for (let index = 0; index < data.length / 2; index++) {
    await items.push(data[index]);
  }
  console.log("items info ", items);
};

const schema = {
  title: "DisplayIf",
  type: "object",
  properties: {
    fieldA: {
      type: "string",
      label: "Cedula",
    },
    fieldB: {type: "string", label: "Texto de validacion"},
    fieldNumber1: {
      type: "string",
      label: "number 1",
      // value: getNumb1(),
    },
    fieldNumber2: {
      type: "string",
      label: "number 2",
      // value: getNumb1(),
    },
    fieldTotal: {
      type: "string",
      label: "Total",
      // value: getNumb1(),
    },
    profession: {
      type: "string",
      label: "selecciona una ciudad por favor",
      options: items,
    },
  },
};

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? {details: validator.errors} : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
//--------------------
// import Ajv from "ajv";
// import {JSONSchemaBridge} from "uniforms-bridge-json-schema";

// export const schema = {
//   title: "Guest",
//   type: "object",
//   properties: {
//     firstName: {type: "string"},
//     lastName: {type: "string"},
//     workExperience: {
//       description: "Work experience in years",
//       type: "integer",
//       minimum: 0,
//       maximum: 100,
//     },
//     profession: {type: "string"},
//   },
//   // required: ["firstName", "lastName"],
// };

// const ajv = new Ajv({allErrors: true, useDefaults: true});

// function createValidator(schema: object) {
//   const validator = ajv.compile(schema);

//   return (model: object) => {
//     validator(model);
//     return validator.errors?.length ? {details: validator.errors} : null;
//   };
// }

// const schemaValidator = createValidator(schema);

// export const bridge = new JSONSchemaBridge(schema, schemaValidator);

//----------------------

// const UserLoginSchema = {
//   login: {
//     __type__: String,
//     required: true,
//     initialValue: "",
//     label: "Correo",
//   },
//   password1: {
//     __type__: String,
//     required: true,
//     initialValue: "",
//     label: "Contraseña",
//   },
//   password2: {
//     __type__: String,
//     required: true,
//     initialValue: "",
//     label: "Repite la contraseña",
//   },
// };

// export default UserLoginSchema;
