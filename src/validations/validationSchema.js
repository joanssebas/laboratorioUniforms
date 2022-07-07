import * as yup from "yup";

const UserLoginSchemaValidator = (model) => {
  const error = {};

  if (!model.login) {
    error.login = "Nombre de usuario es requerido";
  } else if (model.login.length < 5) {
    error.login = "El nombre debe contener al menos 5 caracteres";
  }

  if (!model.password1) {
    error.password1 = "Se requiere residencia";
  } else if (model.password1.length < 10) {
    error.login = "Password has to be at least 10 characters long!";
  }

  // if (model.password1 !== model.password2) {
  //   error.password1 = "Passwords mismatch!";
  // }

  if (Object.keys(error).length) {
    return error;
  }
};

export default UserLoginSchemaValidator;
