import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { Field, Form, Formik } from "formik";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import user1 from "../../assets/img/userImages/soner.jpg";
import user2 from "../../assets/img/userImages/yagmur.jpg";
import user3 from "../../assets/img/userImages/seyhmus.jpeg";
import user4 from "../../assets/img/userImages/feyza.jpeg";
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
    name: "",
    surName: "",
    email: "",
    phone: "",
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
                <Link to="https://github.com/sonersyln" className="icon">
                  <img src={user1} alt="user" />
                </Link>
                <Link to="https://github.com/yagmurcurku" className="icon">
                  <img src={user2} alt="user" />
                </Link>
                <Link to="https://github.com/shmserl" className="icon">
                  <img src={user3} alt="user" />
                </Link>
                <Link to="https://github.com/feyzaerat" className="icon">
                  <img src={user4} alt="user" />
                </Link>
              </div>
              <span>or use your email for registration</span>
              <div className="row">
                <div className="col-6">
                  <Field
                    name="name"
                    className="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="col-6">
                  <Field
                    name="surName"
                    className="input"
                    type="text"
                    placeholder="Surname"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Field
                    name="email"
                    className="input"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-6">
                  <Field
                    name="phone"
                    className="input"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
              </div>
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
                <Link to="https://github.com/sonersyln" className="icon">
                  <img src={user1} alt="user" />
                </Link>
                <Link to="https://github.com/yagmurcurku" className="icon">
                  <img src={user2} alt="user" />
                </Link>
                <Link to="https://github.com/shmserl" className="icon">
                  <img src={user3} alt="user" />
                </Link>
                <Link to="https://github.com/feyzaerat" className="icon">
                  <img src={user4} alt="user" />
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
              <button className="btn" type="submit"
              
              onClick={() => {
                authContext.setIsAuthenticated(true);
                navigate("/");
                localStorage.setItem("token", "abc");
              }}
              >
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
