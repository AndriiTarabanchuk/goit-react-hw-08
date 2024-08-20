import { useLocation } from "react-router";
import css from "./Contacts.module.css";
import React from "react";

const Contacts = () => {
  const location = useLocation();
  return <div state={location}>Contacts</div>;
};

export default Contacts;
