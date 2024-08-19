import { Outlet } from "react-router";
import css from "./Layout.module.css";
import React from "react";
import Navigation from "../Navigation/Navigation";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={css.footer}>AndriiTarbanchuk, 2024&copy;</footer>
    </div>
  );
};

export default Layout;
