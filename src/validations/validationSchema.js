import * as yup from "yup";

const UserLoginSchemaValidator = (model) => {
  const error = {};

  if (!model.login) {
    error.login = "Login is required!";
  } else if (model.login.length < 5) {
    error.login = "Login has to be at least 5 characters long!";
  }

  if (!model.password1) {
    error.password1 = "Password is required!";
  } else if (model.password1.length < 10) {
    error.login = "Password has to be at least 10 characters long!";
  }

  if (model.password1 !== model.password2) {
    error.password1 = "Passwords mismatch!";
  }

  if (Object.keys(error).length) {
    return error;
  }
};

export default UserLoginSchemaValidator;
