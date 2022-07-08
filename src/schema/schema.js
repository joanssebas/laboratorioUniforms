import Ajv from "ajv";
import {JSONSchemaBridge} from "uniforms-bridge-json-schema";

const ajv = new Ajv({allErrors: true, useDefaults: true});

const schema = {
  title: "DisplayIf",
  type: "object",
  properties: {
    fieldA: {type: "string"},
    fieldB: {type: "string"},
    profession: {
      type: "string",
      label: "selecciona una ciudad por favor",
      options: [
        {
          label: "Cali",
          value: "Cali",
        },
        {
          label: "Medellin",
          value: "Medellin",
        },
        {
          label: "Bucaramanga",
          value: "Bucaramanga",
        },
        {
          label: "Pasto",
          value: "Pasto",
        },
        {
          label: "Pereira",
          value: "Pereira",
        },
      ],
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
