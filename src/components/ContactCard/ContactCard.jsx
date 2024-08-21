import { useDispatch, useSelector } from "react-redux";
import css from "./ContactCard.module.css";
import { FaPhoneAlt, FaUser, FaEdit, FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Button from "../Button/Button";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import { selectIsVisibleModal } from "../../redux/modal/selectors";
import { showModal } from "../../redux/modal/slice";

function ContactCard({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div className={css.card__container}>
        <div className={css.card__boxElements}>
          <div className={css.card__boxItem}>
            <FaUser className={css.card__icon} />
            <p className={css.card__item}>{name}</p>
          </div>
          <div className={css.card__boxItem}>
            <FaPhoneAlt className={css.card__icon} />
            <p className={css.card__item}>{number}</p>
          </div>
        </div>

        <div className={css.card__boxBtn}>
          {/* <Button>
            <FaEdit size={24} />
          </Button> */}
          <Button
            onClick={() =>
              dispatch(showModal({ item: contact, operation: "delete" }))
            }
          >
            <FaXmark size={24} className={css.card__textBtn} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
