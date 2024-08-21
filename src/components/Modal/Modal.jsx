import css from "./Modal.module.css";
import React, { Children } from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Button from "../Button/Button";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { hideModal } from "../../redux/modal/slice";
import {
  selectIsVisibleModal,
  selectItemModal,
} from "../../redux/modal/selectors";
import { addContact, deleteContact } from "../../redux/contacts/operations";

const Modal = () => {
  const user = useSelector(selectUser);
  const isVisibleModal = useSelector(selectIsVisibleModal);
  const itemModal = useSelector(selectItemModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideModal());
    console.log("Close ");
  };

  const handleOperation = () => {
    console.log(itemModal.item);
    switch (itemModal.operation) {
      case "del":
        dispatch(deleteContact(itemModal.item.id));
        break;
      case "add":
        dispatch(addContact(itemModal.item));
        break;
      default:
        break;
    }
    dispatch(hideModal());
  };

  if (!isVisibleModal) {
    return null;
  }

  return (
    <div className={css.modal} onClick={() => dispatch(hideModal())}>
      <div
        className={css.modal__container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={css.modal__header}>
          <h3 className={css.modal__title}>Hi, {user.email}.</h3>
          <div className={css.modal__close}>
            <Button onClick={() => handleClose()}>
              <FaXmark size={10} />
            </Button>
          </div>
        </div>
        <div className={css.modal__body}>
          <h3 className={css.modal__title}>
            Do you want to {itemModal.operation} it?
          </h3>
        </div>
        <div className={css.modal__footer}>
          <div className={css.modal__box}>
            <Button onClick={() => handleOperation()}>
              {/* <FaXmark size={24} /> */}
              Ok
            </Button>
            <Button onClick={() => handleClose()}>
              {/* <FaXmark size={24} /> */}
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
