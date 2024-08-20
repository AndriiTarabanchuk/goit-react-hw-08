import { Outlet } from "react-router";
import css from "./Layout.module.css";
import React from "react";
import Navigation from "../Navigation/Navigation";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div className={css.wrap}>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={css.footer}>&copy;AndriiTarbanchuk, 2024</footer>
    </div>
  );
};

export default Layout;
