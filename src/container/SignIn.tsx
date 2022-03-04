import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logged } from "../app/features/loggedSlice";
import { tokenCreate } from "../app/features/tokenSlice";
import { useLoginMutation } from "../app/services/userSlice";
import { LoginRequest, UserResponse } from "../utils/interfaceTypes";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [formState, setFormState] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const handleClick = () => setShow(!show);
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
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
              type={show ? "text" : "password"}
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
          <button
            className="sign-in-button"
            onClick={async () => {
              try {
                const data:UserResponse = await login(formState).unwrap();
                dispatch(tokenCreate(data.body.token));
                dispatch(logged(true));
                navigate("/profile");
              } catch (err) {
                setError(true);
              }
            }}
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
