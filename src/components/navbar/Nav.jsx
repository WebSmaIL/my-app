import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/dialogs">Messages</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
};

export default Nav;
