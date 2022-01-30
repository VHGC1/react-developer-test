import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CategoriesNav extends Component {
  render() {
    return (
      <header>
        <NavLink to="/" end>
          all
        </NavLink>
        <NavLink to="/clothes">
          clothes
        </NavLink>
        <NavLink to="/tech">
          tech
        </NavLink>
        
      </header>
    );
  }
}
