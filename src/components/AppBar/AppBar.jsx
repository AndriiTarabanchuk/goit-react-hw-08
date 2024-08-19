import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import React from "react";

const AppBar = () => {
  return (
    <div className={css.wrap}>
      <div>
        <p>
          Welcome, <span>user.email</span>
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
