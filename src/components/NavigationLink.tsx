import React from "react";
import { Link, To } from "react-router-dom";

const NavigationLink = (props: { route: To; icon: string ; name: string ; }) => (
  <Link className="main-nav-item" to={props.route}>
    <i className={props.icon} />
    {props.name}
  </Link>
);

export default NavigationLink;
