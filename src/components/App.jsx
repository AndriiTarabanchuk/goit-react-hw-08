import { useEffect, useState } from "react";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../redux/auth/selectors";
import { incrementCount } from "../redux/auth/slice";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router";
import { refreshUserThunk } from "../redux/auth/operations";
import { PublicRoute } from "../Routes/PublicRoute";
import { PrivateRoute } from "../Routes/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <div className={css.root}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

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
