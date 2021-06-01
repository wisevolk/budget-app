import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <div>
        <h3>Budget App!</h3>
        <NavLink to={ "/" } activeClassName={ "is-active" } exact>Home</NavLink>
        <NavLink to={ "/create" } activeClassName={ "is-active" }>Create new expense</NavLink>
        <NavLink to={ "/help" } activeClassName={ "is-active" }>Help</NavLink>
    </div>
);

export default Header;
