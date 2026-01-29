import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <NavLink to="/" className={({isActive}) => isActive ? "link active" : "link"}>
        Add Item
      </NavLink>
      <NavLink to="/list" className={({isActive}) => isActive ? "link active" : "link"}>
        List Items
      </NavLink>
      <NavLink to="/orders" className={({isActive}) => isActive ? "link active" : "link"}>
        Orders
      </NavLink>
      <NavLink to="/users" className={({isActive}) => isActive ? "link active" : "link"}>
        Users
      </NavLink>
    </div>
  );
};

export default Sidebar;
