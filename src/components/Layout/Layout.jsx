import { Outlet } from "react-router";
import css from "./Layout.module.css";
import React from "react";
import Navigation from "../Navigation/Navigation";
import AppBar from "../AppBar/AppBar";

import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

const Layout = () => {
  return (
    <div className={css.wrap}>
      <Modal />
      <h1 className={css.visualliHidden}>Contacts book</h1>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
