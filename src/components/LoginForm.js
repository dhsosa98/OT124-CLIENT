import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "../services/auth";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Obligatorio").email("Email invalido").max(255),
  password: Yup.string()
    .min(6, "Muy corta!")
    .max(50, "Muy larga!")
    .required("Obligatorio"),
});

export default function LoginForm() {
  const navigate = useNavigate();

  const [showErrorMessage, setShowErrorMessage] = useState();

  function getErrorMessage(errorMessage) {
    let message;
    switch (errorMessage) {
      case "User does not exist": {
        message = "El usuario no existe";
        break;
      }
      case "Password invalid": {
        message = "La constraseña es incorrecta";
        break;
      }
      default: {
        message = "Algo salió mal";
      }
    }
    return message;
  }

  async function handleSubmit(values, { setSubmitting }) {
    setShowErrorMessage();
    const { email, password } = values;
    const res = await logIn(email, password);

    if (res.status === 200) {
      navigate("/");
    } else {
      setShowErrorMessage(getErrorMessage(res.response.data.errors));
      setSubmitting(false);
    }
  }

  const styles = {
    label: "block text-gray-700 text-sm font-bold pt-2 pb-1",
    field:
      "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",
    button:
      "bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-full",
    errorMsg: "text-red-500 text-sm text-center",
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="grid w-80">
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field
            className={styles.field}
            autoComplete="off"
            id="email"
            name="email"
            type="email"
          />
          <ErrorMessage
            className={styles.errorMsg}
            component="a"
            name="email"
          />
          <label className={styles.label} htmlFor="password">
            Contraseña
          </label>
          <Field
            className={styles.field}
            id="password"
            name="password"
            type="password"
          />
          <ErrorMessage
            className={styles.errorMsg}
            component="a"
            name="password"
          />
          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            Log In
          </button>

          {showErrorMessage && (
            <div className={styles.errorMsg}>{showErrorMessage}</div>
          )}
        </Form>
      )}
    </Formik>
  );
}
