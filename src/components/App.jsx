import { useState } from "react";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../redux/auth/selectors";
import { incrementCount } from "../redux/auth/slice";
function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div className={css.root}>
      <h1>Vite + React</h1>
      <div className={css.card}>
        <button onClick={() => dispatch(incrementCount())}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
