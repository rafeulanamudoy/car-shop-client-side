import React, { useState } from "react";
import "./Register.css";
import { Col, Container, Row } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Navigation from "../../shared/Navigation/Navigation";
import registerimg from "../../../images/Register/register1.jpg";

import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const { user, registerUser, loading, error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
    console.log(loginData);
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
    <>
      <Navigation></Navigation>
      <Container fluid="md" className="reg-container">
        <Row>
          <Col xs={12} sm={6}>
            {!loading && (
              <form
                className="register-form text-center"
                onSubmit={handleRegisterSubmit}
              >
                <h2 className="fw-bold p-2 text-center">
                  Register New Account
                </h2>
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
          </Col>
          <Col>
            <img
              className="img-fluid w-100vw h-100 reg-img-set"
              src={registerimg}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
