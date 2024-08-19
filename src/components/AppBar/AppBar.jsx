import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import React from "react";

const AppBar = () => {
  return (
    <div>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </div>
  );
};

export default AppBar;
