import React, { useState } from "react";
import "./Register.css";

import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Navigation from "../../shared/Navigation/Navigation";

import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const history = useHistory();
  const { user, registerUser, loading, error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  const handleRegisterSubmit = (e) => {
    if (loginData?.password1 !== loginData?.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(
      loginData?.email,
      loginData?.password1,
      loginData?.name,
      history
    );
    e.preventDefault();
  };

  return (
    <div>
      <Navigation></Navigation>
      <div className="login-container">
        {!loading && (
          <form
            className="register-form text-center"
            onSubmit={handleRegisterSubmit}
          >
            <h2 className="fw-bold p-2 text-center">Register New Account</h2>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              onBlur={handleOnBlur}
              required
            />

            <br />
            <input
              type="email"
              name="email"
              id=""
              placeholder="User Email"
              onBlur={handleOnBlur}
              required
            />
            <br />
            <input
              type="password"
              name="password1"
              id=""
              placeholder="User Password"
              onBlur={handleOnBlur}
              required
            />
            <br />
            <input
              type="password"
              name="password2"
              id=""
              placeholder="Retype Password"
              onBlur={handleOnBlur}
              required
            />

            <input
              className="mx-auto d-block w-25 mb-5 mt-5 button-style"
              type="submit"
              value="Register"
            />
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bolder",
              }}
              to="/login"
            >
              {" "}
              Already Have Account?Please Login
            </Link>
          </form>
        )}

        {loading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">User Created Succesfully</Alert>
        )}
        {error && <Alert severity="error">{error}</Alert>}
      </div>
    </div>
  );
};

export default Register;
