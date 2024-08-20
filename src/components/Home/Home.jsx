import { useLocation } from "react-router-dom";
import css from "./Home.module.css";
import React from "react";

const Home = () => {
  const location = useLocation();
  return <div state={location}>Home</div>;
};

export default Home;
