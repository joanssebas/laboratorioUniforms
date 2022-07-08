const UserLoginSchemaValidator = (model) => {
  const error = {};

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  if (!model.login) {
    error.login = "El correo es obligatorio";
  } else if (!validateEmail(model.login)) {
    error.login = "El correo no es valido";
  }

  if (!model.password1) {
    error.password1 = "La contraseña es obligatoria";
  } else if (model.password1.length < 5) {
    error.login = "La contraseña debe ser de almenos 5 caracteres";
  }

  if (model.password1 !== model.password2) {
    error.password1 = "No coinciden las contraseñas";
  }

  if (Object.keys(error).length) {
    return error;
  }
};

export default UserLoginSchemaValidator;
