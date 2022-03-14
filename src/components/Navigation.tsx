import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logged } from "../app/features/loggedSlice";
import { setToken } from "../app/features/tokenSlice";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import Logo from "./Logo";
import NavigationLink from "./NavigationLink";


const Navigation = () => {
  const navigate = useNavigate()
  const isLogged:boolean = useAppSelector((state) => state.logged);
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.userProfile)
  const {firstName} = userProfile

  const handleLogOut = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    dispatch(setToken(""));
    dispatch(logged(false));
    sessionStorage.clear()
    navigate("/")

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
