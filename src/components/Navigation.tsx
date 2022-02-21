import React from "react";
import logo from '../img/argentBankLogo.png'

const Navigation = () => {
  const isLogged:Boolean = false
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      {
        isLogged?(<div>
          <a className="main-nav-item" href="./user.html">
            <i className="fa fa-user-circle" />
            Tony
          </a>
          <a className="main-nav-item" href="./index.html">
            <i className="fa fa-sign-out" />
            Sign Out
          </a>
        </div>) 
        : (<div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle" />
            Sign In
          </a>
        </div>)
      }
    </nav>
  );
  };

export default Navigation;
