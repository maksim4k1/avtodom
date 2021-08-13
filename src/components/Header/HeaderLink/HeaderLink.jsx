import React from "react";
import { NavLink } from "react-router-dom";

function HeaderLink (props) {
    return(
        <li className={props.className}><NavLink to={props.href}>{props.textContent}</NavLink></li>
    );
}

export default HeaderLink;