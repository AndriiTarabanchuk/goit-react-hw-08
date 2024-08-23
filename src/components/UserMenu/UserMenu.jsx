import { NavLink } from "react-router-dom";
import css from "./UserMenu.module.css";
import React from "react";
import { logoutThunk } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li className={css.box}>
        {/* <NavLink to="/">Log out</NavLink> */}
        <div className={css.userName}>
          {user?.email && (
            <i>
              Welcome, <span>{user.email}</span>!
            </i>
          )}
        </div>
        <button className={css.btn} onClick={() => dispatch(logoutThunk())}>
          Logout
        </button>
      </li>
    </>
  );
};

export default UserMenu;
