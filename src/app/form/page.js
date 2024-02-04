/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaFacebook, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/image-removebg-preview.png";
import { FaGoogle } from "react-icons/fa";

const Form = () => {
  const [isRegisterActive, setRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setRegisterActive(true);
  };

  const handleLoginClick = () => {
    setRegisterActive(false);
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.remove("active");
  };

  return (
    <div className={`wrapper ${isRegisterActive ? "active" : ""}`}>
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>
      <div className="form-box login">
        <h2 className="animation" style={{ "--i": 0, "--j": 21 }}>
          Login
        </h2>
        <form action="#">
          <div className="input-box animation" style={{ "--i": 1, "--j": 22 }}>
            <input type="text" required />
            <label>Email</label>
            <span className="icon">
              {" "}
              <MdEmail />
            </span>
          </div>
          <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
            <input type="text" required />
            <label>Password</label>
            <span className="icon">
              <FaLock />
            </span>
          </div>
          <button
            type="submit"
            className="btn animation"
            style={{ "--i": 3, "--j": 24 }}
          >
            Login
          </button>
          <div
            className="logreg-link animation"
            style={{ "--i": 4, "--j": 25 }}
          >
            <p>
              {isRegisterActive
                ? "Already have an account? "
                : "Don't have an account? "}
              <a
                href="#"
                className="register-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegisterClick();
                }}
              >
                {isRegisterActive ? "Login" : "Sign Up"}
              </a>
            </p>
          </div>
          <div className="social-accounts animation" style={{ "--i": 5, "--j": 26 }}>
            <h3 className="social-text">Or</h3>
            <div className="social-icons">
              <span className="social-icon">
                {" "}
                <FaGoogle/>
              </span>
              <span className="social-icon">
                {" "}
                <FaFacebook />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="info-text login">
        <div className="logo animation" style={{ "--i": 0, "--j": 19 }}>
          <Image src={Logo} width={150} sx={{ height: "auto" }} alt="Logo" />
        </div>

        <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>
          Login and Explore.
        </h2>
        <p className="animation" style={{ "--i": 1, "--j": 21 }}>
          Welcome back! Log in now to continue your fitness adventure.
        </p>
      </div>
      <div className="form-box register">
        <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>
          Sign Up
        </h2>
        <form action="#">
          <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
            <input type="text" required />
            <label>Name</label>
            <span className="icon">
              {" "}
              <FaUser />
            </span>
          </div>
          <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
            <input type="text" required />
            <label>Email</label>
            <span className="icon">
              {" "}
              <MdEmail />
            </span>
          </div>

          <div className="input-box animation" style={{ "--i": 20, "--j": 3 }}>
            <input type="text" required />
            <label>Password</label>
            <span className="icon">
              <FaLock />
            </span>
          </div>
          {/* Image input */}
         <div className="animation img-upload" style={{ "--i": 21, "--j": 4 }}>
         <input type="file" required className="upload-box" />
       
         </div>

          <button
            type="submit"
            className="btn animation"
            style={{ "--i": 21, "--j": 4 }}
          >
            Sign Up
          </button>
          <div
            className="logreg-link animation"
            style={{ "--i": 22, "--j": 5 }}
          >
            <p>
              {isRegisterActive
                ? "Already have an account? "
                : "Don't have an account? "}
              <a
                href="#"
                className="register-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleLoginClick();
                }}
              >
                {isRegisterActive ? "Login" : "Sign Up"}
              </a>
            </p>
          </div>
          <div className="social-accounts animation" style={{ "--i": 23, "--j": 6 }}>
            <h3 className="social-text">Or</h3>
            <div className="social-icons">
              <span className="social-icon">
                {" "}
                <FaGoogle/>
              </span>
              <span className="social-icon">
                {" "}
                <FaFacebook />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="info-text register">
        <div className="logo animation" style={{ "--i": 16, "--j": 0 }}>
          <Image src={Logo} width={150} sx={{ height: "auto" }} alt="Logo" />
        </div>
        <h2 className="animation" style={{ "--i": 17, "--j": 1 }}>
          Sign Up Today.
        </h2>
        <p className="animation" style={{ "--i": 18, "--j": 2 }}>
          Join for personalized fitness. Start your journey to a healthier
          lifestyle.
        </p>
      </div>
    </div>
  );
};

export default Form;
