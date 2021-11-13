import React, { useState } from "react";
import "./Login.css";

import { Col, Container, Row } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Navigation from "../../shared/Navigation/Navigation";
import registerimg from "../../../images/Register/register2.jpg";
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
    console.log(loginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData?.email, loginData?.password1, location, history);
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
                onSubmit={handleLoginSubmit}
              >
                <h2 className="fw-bold p-2 text-center">Please Login</h2>

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
                  className="mx-auto d-block w-25 mb-5 mt-5 button-style"
                  type="submit"
                  value="Login"
                />

                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                  to="/register"
                >
                  {" "}
                  Dont Have Account?Please Register
                </Link>
              </form>
            )}

            {loading && <CircularProgress />}
            {user?.email && <Alert severity="success">Login Succesfully</Alert>}
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

export default Login;
