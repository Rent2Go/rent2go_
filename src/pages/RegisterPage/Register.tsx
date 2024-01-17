import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { Field, Form, Formik } from "formik";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

import "./register.css";

type Props = {
  name?: string;
  type?: string;
  placeHolder?: string;
};

const Register: React.FC<Props> = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const authContext: any = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    if (isActive) {
      // Sign Up işlemleri
      console.log("Sign Up", values);
    } else {
      // Sign In işlemleri
      console.log("Sign In", values);
    }
  };

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  return (
    <div className={`register ${isActive ? "active" : ""}`} ref={containerRef}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <div className={`containers ${isActive ? "active" : ""}`}>
          <div
            className={`form-containers sign-up ${isActive ? "active" : ""}`}
          >
            <Form className="form">
              <h1>Create Account</h1>
              <div className="social-icons">
                <Link to="#" className="icon">
                  <FaGithub />
                </Link>
                <Link to="#" className="icon">
                  <FaLinkedin />
                </Link>
                <Link to="#" className="icon">
                  <FaYoutube />
                </Link>
                <Link to="#" className="icon">
                  <FaInstagram />
                </Link>
              </div>
              <span>or use your email for registration</span>
              <Field
                name="name"
                className="input"
                type="text"
                placeholder="Name"
              />
              <Field
                name="email"
                className="input"
                type="email"
                placeholder="Email"
              />
              <Field
                name="password"
                className="input"
                type="password"
                placeholder="Password"
              />
              <button className="btn" type="submit">
                Sign Up
              </button>
            </Form>
          </div>
          <div
            className={`form-containers sign-in ${isActive ? "active" : ""}`}
          >
            <Form className="form" action="">
              <h1>Sign In</h1>
              <div className="social-icons">
                <Link to="#" className="icon">
                  <FaGithub />
                </Link>
                <Link to="#" className="icon">
                  <FaLinkedin />
                </Link>
                <Link to="#" className="icon">
                  <FaYoutube />
                </Link>
                <Link to="#" className="icon">
                  <FaInstagram />
                </Link>
              </div>
              <span>or use your email password</span>
              <Field
                name="email"
                className="input"
                type="email"
                placeholder="Email"
              />
              <Field
                name="password"
                className="input"
                type="password"
                placeholder="Password"
              />
              <Link to="#">Forget Your Password?</Link>
              <button className="btn" type="submit">
                Sign In
              </button>
            </Form>
          </div>
          <div className="toggle-containers">
            <div className={`toggle ${isActive ? "active" : ""}`}>
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
                <button
                  id="login"
                  className={isActive ? "toggle-btn active" : "toggle-btn"}
                  onClick={handleClick}
                >
                  Sign In
                </button>
              </div>
              <div
                className={`toggle-panel toggle-right ${
                  isActive ? "active" : ""
                }`}
              >
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all site features
                </p>
                <button
                  id="register"
                  className={!isActive ? "toggle-btn active" : "toggle-btn"}
                  onClick={handleClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default Register;
