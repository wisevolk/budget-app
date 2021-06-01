import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = ()=>(
    <div>
        404 Not found! -- <NavLink to={"/"}>Go home</NavLink>
    </div>
);

export default NotFoundPage;
