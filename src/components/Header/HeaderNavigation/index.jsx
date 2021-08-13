import React from "react";
import style from "./HeaderNavigation.module.scss";
import HeaderLink from "../HeaderLink/index";

function HeaderNavigation () {
    return(
        <nav className={style.header__navigation}>
            <ul className={style.header__menu}>
                <HeaderLink href="/" textContent="Главная" className={style.header__link}/>
                <HeaderLink href="/catalog" textContent="Каталог" className={style.header__link}/>
                <HeaderLink href="/contacts" textContent="Контакты" className={style.header__link}/>
                <HeaderLink href="/address" textContent="Адрес" className={style.header__link}/>
            </ul>
        </nav>
    );
}

export default HeaderNavigation;