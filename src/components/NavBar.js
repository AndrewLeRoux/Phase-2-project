import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "white",
    textDecoration: "none",
    color: "maroon",
};
  
function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "green"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/athletebios"
          exact
          style={linkStyles}
          activeStyle={{
            background: "green",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/form"
          exact
          style={linkStyles}
          activeStyle={{
            background: "green",
          }}
        >
          Form
        </NavLink>
      </div>
    );
}

export default NavBar