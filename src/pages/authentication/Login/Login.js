import React, { useState } from "react";
import "./Login.css";

import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Navigation from "../../shared/Navigation/Navigation";

import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const { user, loginUser, loading, error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
    // console.log(loginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData?.email, loginData?.password1, location, history);
    e.preventDefault();
  };

  return (
    <div>
      <Navigation></Navigation>
      <div className="login-container">
        {loading && <CircularProgress />}
        {user?.email && <Alert severity="success">Login Succesfully</Alert>}
        {!loading && (
          <form className="login-form    " onSubmit={handleLoginSubmit}>
            <h2 className="fw-bold  text-center  ">Sign Into Your Account</h2>

            <input
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
              onBlur={handleOnBlur}
              required
            />

            <input
              type="password"
              name="password1"
              id=""
              placeholder="Password"
              onBlur={handleOnBlur}
              required
            />

            <input
              className="mx-auto d-block w-25 mb-5 mt-5 button-style"
              type="submit"
              value="Login"
            />

            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "large",
                fontWeight: "bolder",
              }}
              to="/register"
            >
              {" "}
              Dont Have Account? Register Here
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
