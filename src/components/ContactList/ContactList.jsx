import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectFilteredContactsMemo } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const contacts = useSelector(selectorContacts);
  // const filter = useSelector(selectStatusFilter);
  // const filteredData = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const filteredData = useSelector(selectFilteredContactsMemo);
  return (
    <div className={css.wrap}>
      <h3 className={css.title}>List contacts...</h3>
      <ul className={css.contList}>
        {filteredData.map((contact) => {
          return (
            <li key={contact.id}>
              <ContactCard contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
