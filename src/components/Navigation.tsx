import React from "react";
import { NavLink } from "react-router-dom";
import { logged } from "../app/features/loggedSlice";
import { tokenDelete } from "../app/features/tokenSlice";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import Logo from "./Logo";
import NavigationLink from "./NavigationLink";


const Navigation = () => {
  const isLogged:boolean = useAppSelector((state) => state.logged);
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.userProfile)
  const {firstName} = userProfile

  const handleLogOut = () => {
    dispatch(tokenDelete());
    dispatch(logged(false));
  };

  return (
    <nav className="main-nav">
      <Logo />
      {isLogged ? (
        <div>
          <NavigationLink 
            route={"/profile"}
            icon={"fa fa-user-circle"}
            name={firstName}
          />
          <NavLink className="main-nav-item" onClick={handleLogOut} to={"/"} >
            <i className="fa fa-sign-out"></i>
            Log out
          </NavLink>
        </div>
      ) : (
        <div>
          <NavigationLink
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
