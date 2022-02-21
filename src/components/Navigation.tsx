import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Navigation = () => {
  const isLogged: Boolean = false;
  return (
    <nav className="main-nav">
      <Logo />

      {isLogged ? (
        <div>
          <NavLink route={"/profile"} icon={"fa fa-user-circle"} name={"Tony"} />
          <NavLink route={"/"} icon={"fa fa-sign-out"} name={"Sign Out"} />
        </div>
      ) : (
        <div>
          <NavLink route={"/login"} icon={"fa fa-user-circle"} name={"Sign In"} />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
