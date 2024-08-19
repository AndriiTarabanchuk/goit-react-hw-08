import { useDispatch } from "react-redux";
import css from "./Logout.module.css";
import React from "react";
import { logoutThunk } from "../../redux/auth/operations";

export const Logout = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className={css.btn} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};
