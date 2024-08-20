import { useLocation } from "react-router";
import css from "./Contacts.module.css";
import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactSearch from "../ContactSearch/ContactSearch";
import ContactList from "../ContactList/ContactList";

const Contacts = () => {
  const location = useLocation();
  return (
    <div className={css.wrap} state={location}>
      <h2 className={css.title}>Contacts page</h2>
      <ContactForm />
      <ContactSearch />
      <ContactList />
    </div>
  );
};

export default Contacts;
