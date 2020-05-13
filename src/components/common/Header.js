import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" }; // style
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      {"|"}
      <NavLink activeStyle={activeStyle} to="/courses">
        Courses
      </NavLink>
      {"|"}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/users">
        create account
      </NavLink>
    </nav>
  );
}
export default Header;
