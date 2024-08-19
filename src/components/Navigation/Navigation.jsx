import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import React from "react";
import Logout from "../Logout/Logout";

const Navigation = () => {
  return (
    <div className={css.wrap}>
      <div>
        <p>
          Welcome, <span>user.email</span>
        </p>
      </div>
      <nav className={css.nav}>
        <li className={css.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/">Log out</NavLink>
          {/* <Logout /> */}
        </li>
      </nav>
    </div>
  );
};

export default Navigation;
