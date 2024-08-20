import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import React from "react";
import { selectUser } from "../../redux/auth/selectors";

const AppBar = () => {
  const user = useSelector(selectUser);
  return (
    <div className={css.wrap}>
      <div>
        <p>
          Welcome, <span>{user.email}</span>
        </p>
      </div>
      <nav className={css.nav}>
        <ul className={css.list}>
          <Navigation />
          <AuthNav />
          <UserMenu />
        </ul>
      </nav>
    </div>
  );
};

export default AppBar;
