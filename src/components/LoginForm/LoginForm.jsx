import css from "./LoginForm.module.css";
import { Field, Formik, Form } from "formik";
import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (value, options) => {
    dispatch(loginThunk(value));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to={location?.state ?? "/"} />;
  }

  return (
    <div className={css.wrapLogin}>
      <p className={css.title}>Login form:</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formLogin}>
          <Field
            className={css.inputLogin}
            name="email"
            placeholder="Enter your email..."
          />
          <Field
            className={css.inputLogin}
            name="password"
            type="password"
            placeholder="Enter your password..."
          />
          <Button type="submit">
            <p>Login</p>
          </Button>
          <p className={css.question}>
            You don't have account?
            <Link className={css.link} to="/register">
              Sing up!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
