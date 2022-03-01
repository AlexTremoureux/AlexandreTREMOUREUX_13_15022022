import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import { logged } from "../app/features/loggedSlice";
import { tokenCreate } from "../app/features/tokenSlice";
import { useLoginMutation } from "../app/features/userSlice";

interface LoginRequest {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => setFormState((prev) => {
    console.log({[name]: value})
    return({ ...prev, [name]: value })});
  ;
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [error, setError] = useState(false);
  const [login] = useLoginMutation()

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    
    /*fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    })
      .then(async (response) => {
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          setError(false);
          dispatch(tokenCreate(data.body.token))
          dispatch(logged(true))
          navigate("/profile");
        } else {
          console.error(response);
          setError(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.toString());
      });*/
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {/*inputList.map((input,index) => (
            <Input key={input.label+index} label={input.label} type={input.type} />
          ))*/}

          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="on"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              type={show ? 'text' : 'password'}
              id="password"
              autoComplete="on"
              name="password"
              onChange={handleChange}
              
            />
            <i className="bi bi-eye-slash" onClick={handleClick}></i>
          </div>
          {error ? (
            <div>
              <h4>Veuillez vérifier vos identifiants de connexion</h4>
            </div>
          ) : (
            <div></div>
          )}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={async () => {
            try {
              const data = await login(formState).unwrap()
              dispatch(tokenCreate(data.body.token))
              dispatch(logged(true))
              navigate('/profile')
            } catch (err) {
              setError(true)
            }
          }} >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
