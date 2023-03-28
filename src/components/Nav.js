import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h2>Book Haven</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/BookList">Book List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Book</NavLink>
        </li>
      </ul>
    </nav>
  );
}
