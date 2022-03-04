import React from "react";
import { useNavigate } from "react-router-dom";
import { logged } from "../app/features/loggedSlice";
import { tokenDelete } from "../app/features/tokenSlice";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Navigation = () => {
  const isLogged:boolean = useAppSelector((state) => state.logged);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.userProfile)
  const {firstName} = userProfile
  const handleProfile = (event: React.SyntheticEvent) => {
  event.preventDefault()
    navigate("/profile");
  };

  const handleLogOut = (event: React.SyntheticEvent) => {
    event.preventDefault()
    dispatch(tokenDelete());
    dispatch(logged(false));
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Logo />
      {isLogged ? (
        <div>
          <a onClick={handleProfile} >
            <i className="fa fa-user-circle"></i>
            {firstName}
          </a>
          <a className="main-nav-item" onClick={handleLogOut} >
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
