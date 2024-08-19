import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import React from "react";
import Logout from "../Logout/Logout";

const Navigation = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
};

export default Navigation;
