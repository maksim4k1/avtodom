import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import HeaderLink from "./HeaderLink/HeaderLink";

function Header() {
    return(
        <header className={style.header}>
            <div className={`${style.header__container} container`}>
                <h2 className={style.header__logo}><NavLink to="/">Авто Дом</NavLink></h2>
                <nav className={style.header__navigation}>
                    <ul className={style.header__menu}>
                        <HeaderLink href="/" textContent="Главная"/>
                        <HeaderLink href="/parts" textContent="Каталог"/>
                        <HeaderLink href="/contacts" textContent="Контакты"/>
                        <HeaderLink href="/address" textContent="Адрес"/>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;