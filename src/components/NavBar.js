import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "130px",
    padding: "12px",
    margin: "0px 6px 6px",
    background: "none",
    textDecoration: "none",
    color: "white",
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
          Athlete Bios
        </NavLink>
        <NavLink
          to="/form"
          exact
          style={linkStyles}
          activeStyle={{
            background: "green",
          }}
        >
          New Athlete Form
        </NavLink>
      </div>
    );
}

export default NavBar