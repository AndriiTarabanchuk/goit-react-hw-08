import { NavLink } from "react-router-dom";
import css from "./UserMenu.module.css";
import React from "react";

const UserMenu = () => {
  return (
    <>
      <li className={css.item}>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/">Log out</NavLink>
        {/* <Logout /> */}
      </li>
    </>
  );
};

export default UserMenu;
