import { useLocation } from "react-router-dom";
import css from "./Home.module.css";
import React from "react";
import pc from "../../assets/pc_late.jpg";

const Home = () => {
  const location = useLocation();
  return (
    <div className={css.wrap} state={location}>
      <div className={css.box}>
        <h3 className={css.title}>Home</h3>
        <p className={css.text}>
          Congratulations on making it to our homepage. We're thrilled to have
          you here!
        </p>
      </div>
      {/* <Link to="./contacts"> Go to Contacts..</Link> */}
      <img className={css.img} src={pc} alt="Laptop and late" />
    </div>
  );
};

export default Home;
