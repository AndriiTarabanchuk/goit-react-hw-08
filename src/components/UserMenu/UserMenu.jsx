import { NavLink } from "react-router-dom";
import css from "./UserMenu.module.css";
import React from "react";
import { logoutThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <li className={css.item}>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        {/* <NavLink to="/">Log out</NavLink> */}
        <button className={css.btn} onClick={() => dispatch(logoutThunk())}>
          Logout
        </button>
      </li>
    </>
  );
};

export default UserMenu;
