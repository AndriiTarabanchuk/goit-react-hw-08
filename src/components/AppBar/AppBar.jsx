import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import React from "react";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const AppBar = () => {
  // const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrap}>
      {/* <b>Contacts book. </b> */}
      {/* <div className={css.userName}>
        {user?.email && (
          <i>
            Welcome, <span>{user.email}</span>!
          </i>
        )}
      </div> */}
      <nav className={css.nav}>
        <ul className={css.list}>
          <Navigation />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </ul>
      </nav>
    </div>
  );
};

export default AppBar;
