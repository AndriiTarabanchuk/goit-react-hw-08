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
    <div className={css.wrapItem}>
      <div className={css.innerWrap}>
        <div className={css.box}>
          <div className={css.item}>
            <FaUser className={css.person} />
            <p className={css.text}>{name}</p>
          </div>
          <div className={css.item}>
            <FaPhoneAlt className={css.person} />
            <p className={css.text}>{number}</p>
          </div>
        </div>

        <div className={css.btnBox}>
          {/* <Button>
            <FaEdit size={24} />
          </Button> */}
          <Button
            onClick={() =>
              dispatch(showModal({ item: contact, operation: "delete" }))
            }
          >
            <FaXmark size={24} className={css.textBtn} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
