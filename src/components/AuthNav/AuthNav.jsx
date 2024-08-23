import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import React from "react";

const AuthNav = () => {
  return (
    <>
      <li></li>
      <li className={css.item}>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </>
  );
};

export default AuthNav;
