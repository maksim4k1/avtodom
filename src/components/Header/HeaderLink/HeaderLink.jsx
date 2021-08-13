import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Header.module.scss";

function HeaderLink (props) {
    return(
        <li className={style.header__link}><NavLink to={props.href}>{props.textContent}</NavLink></li>
    );
}

export default HeaderLink;