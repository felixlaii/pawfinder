import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/Input";
import LoginHero from "../../assets/images/login-hero.jpeg";
import SignInIcon from "../../assets/icons/dog-signin.png";
import "./login.scss";

export default function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/users/login`, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        let token = res.data.token;
        sessionStorage.setItem("authToken", token);
        props.history.push(`/dashboard`);
      });
  };
  return (
    <div className="login-popup">
      <div className="login-popup__wrapper">
        <form
          onSubmit={handleLogin}
          action="/dashboard"
          className="login-popup__form"
        >
          <div className="login-pop__titlewrapper">
            <h1 className="login-popup__header">Log In</h1>

            <div className="login-popup__iconwrapper">
              <img
                className="login-popup__icon"
                src={SignInIcon}
                alt="sign up icon"
              />
            </div>
          </div>

          <Input label="Username" name="username" type="text" />
          <Input label="Password" name="password" type="password" />
          <div className="login-popup__submits">
            <button className="login-popup__button" type="submit">
              login
            </button>

            <Link to="/signup">
              <button className="login-popup__button" type="submit">
                signup
              </button>
            </Link>
          </div>
        </form>
        <div className="login-popup__logo">
          <img
            className="login-popup__hero"
            src={LoginHero}
            alt="login hero image"
          />
        </div>
      </div>
    </div>
  );
}
