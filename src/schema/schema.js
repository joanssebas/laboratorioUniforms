// import Ajv from "ajv";
// import {JSONSchemaBridge} from "uniforms-bridge-json-schema";

// const ajv = new Ajv({allErrors: true, useDefaults: true});

// const schema = {
//   title: "DisplayIf",
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
//     profession: {
//       type: "string",
//       options: [
//         {
//           label: "Developer",
//           value: "developer",
//         },
//         {
//           label: "Tester",
//           value: "tester",
//         },
//         {
//           label: "Product owner",
//           value: "product-owner",
//         },
//         {
//           label: "Project manager",
//           value: "project-manager",
//         },
//         {
//           label: "Businessman",
//           value: "businessman",
//         },
//       ],
//     },
//   },
//   required: ["firstName", "lastName"],
// };

// function createValidator(schema: object) {
//   const validator = ajv.compile(schema);

//   return (model: object) => {
//     validator(model);
//     return validator.errors?.length ? {details: validator.errors} : null;
//   };
// }

// const schemaValidator = createValidator(schema);

// export const bridge = new JSONSchemaBridge(schema, schemaValidator);

//validacion personalizada con el schema a continuacion
const UserLoginSchema = {
  login: {
    __type__: String,
    required: true,
    initialValue: "",
    label: "Nombre de usuario",
  },
  password1: {
    __type__: String,
    required: true,
    initialValue: "",
    label: "Contraseña",
  },
  password2: {
    __type__: String,
    required: true,
    initialValue: "",
    label: "Contraseña (nuevamente)",
  },
};

export default UserLoginSchema;
