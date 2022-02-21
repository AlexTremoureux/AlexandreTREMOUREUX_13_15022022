import React from "react";
import Input from "../components/Input";
import { inputList } from "../utils/constantes";

const SignIn = () => (
  <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon" />
      <h1>Sign In</h1>
      <form>
        {inputList.map(input => (
          <Input label={input.label} type={input.type} />
        ))}
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* PLACEHOLDER DUE TO STATIC SITE */}
        <a href="./profile" className="sign-in-button">
          Sign In
        </a>
        {/* SHOULD BE THE BUTTON BELOW */}
        {/* <button class="sign-in-button">Sign In</button> */}
        {/*  */}
      </form>
    </section>
  </main>
);

export default SignIn;
