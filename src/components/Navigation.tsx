import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLogged } from "../app/features/loggedSlice";
import { tokenDelete } from "../app/features/tokenSlice";
import { selectLogged } from "../app/selectors";
import { useAppDispatch } from "../hooks/store";

import Logo from "./Logo";
import NavLink from "./NavLink";

const Navigation = () => {
  const Logged = useSelector(selectLogged);
  const { logged } = Logged;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleProfile = (evt: React.SyntheticEvent) => {
    dispatch(tokenDelete());
    dispatch(isLogged(false));
    navigate("/");
  };

  const handleLogOut = (evt: React.SyntheticEvent) => {
    dispatch(tokenDelete());
    dispatch(isLogged(false));
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Logo />
      {logged ? (
        <div>
          <a onClick={handleProfile} href="/">
            <i className="fa fa-user-circle"></i>
            Tony
          </a>
          <a className="main-nav-item" onClick={handleLogOut} href="/">
            <i className="fa fa-sign-out"></i>
            Log out
          </a>
        </div>
      ) : (
        <div>
          <NavLink
            route={"/login"}
            icon={"fa fa-user-circle"}
            name={"Sign In"}
          />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
