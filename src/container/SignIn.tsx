import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logged } from "../app/features/loggedSlice";
import { setToken } from "../app/features/tokenSlice";
import { useLoginMutation } from "../app/services/userSlice";
import { LoginRequest, UserResponse } from "../utils/interfaceTypes";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false)
  const [formState, setFormState] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const updateCredentials = () => {
    if (emailRef.current !== null && passwordRef.current !== null) {
      const emailValue: string = emailRef.current.value;
      const passwordValue: string = passwordRef.current.value;
      setFormState({ email: emailValue, password: passwordValue });
    }
  };
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const loginForm = async () => {
      try {
        const data: UserResponse = await login(formState).unwrap();
        dispatch(setToken(data.body.token));
        dispatch(logged(true));
        if (rememberMe) {
          localStorage.setItem("Bearer", data.body.token);
          localStorage.setItem("isLogged", "true");
        }
        sessionStorage.setItem("Bearer", data.body.token);
        sessionStorage.setItem("isLogged", "true");
        navigate("/profile");
      } catch (err) {
        setError(true);
      }
    };
    loginForm();
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="email"
              autoComplete="on"
              ref={emailRef}
            />
          </div>
          <div className="input-wrapper">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="on"
              ref={passwordRef}
              name="password"
            />
          </div>
          {error ? (
            <div>
              <h4>Veuillez vérifier vos identifiants de connexion</h4>
            </div>
          ) : (
            <div></div>
          )}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" defaultChecked={rememberMe} onChange={()=> setRememberMe(!rememberMe)} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={updateCredentials}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
