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
                        <HeaderLink href="/" textContent="Главная" className={style.header__link}/>
                        <HeaderLink href="/parts" textContent="Каталог" className={style.header__link}/>
                        <HeaderLink href="/contacts" textContent="Контакты" className={style.header__link}/>
                        <HeaderLink href="/address" textContent="Адрес" className={style.header__link}/>
                    </ul>
                </nav>
                <button className={style.header__button}>
                    <span></span>
                </button>
                <div className={style.header__burger}>
                    <nav className={style["header__burger-navigation"]}>
                        <ul className={style["header__burger-menu"]}>
                            <HeaderLink href="/" textContent="Главная" className={style["header__burger-link"]}/>
                            <HeaderLink href="/parts" textContent="Каталог" className={style["header__burger-link"]}/>
                            <HeaderLink href="/contacts" textContent="Контакты" className={style["header__burger-link"]}/>
                            <HeaderLink href="/address" textContent="Адрес" className={style["header__burger-link"]}/>
                        </ul>
                        <div className={style.header__contacts}>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;