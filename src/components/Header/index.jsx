import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import HeaderContactLink from "./HeaderContactLink/index";
import HeaderLink from "./HeaderLink/index";

function Header() {
    const [isOpenMenu, setOpenMenu] = useState(false);

    function toggleBurgerMenu(){
        if(isOpenMenu){
            setOpenMenu(false);
        } else{
            setOpenMenu(true);
        }
    }

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
                <button className={style.header__button} onClick={toggleBurgerMenu}>
                    <span></span>
                </button>
                <div className={`${style.header__burger} ${isOpenMenu ? style["open-burger-menu"] : ""}`} onClick={toggleBurgerMenu}>
                    <nav className={style["header__burger-navigation"]}>
                        <ul className={style["header__burger-menu"]}>
                            <HeaderLink href="/" textContent="Главная" className={style["header__burger-link"]}/>
                            <HeaderLink href="/parts" textContent="Каталог" className={style["header__burger-link"]}/>
                            <HeaderLink href="/contacts" textContent="Контакты" className={style["header__burger-link"]}/>
                            <HeaderLink href="/address" textContent="Адрес" className={style["header__burger-link"]}/>
                        </ul>
                        <div className={style.header__contacts}>
                            <HeaderContactLink href="tel:+996556705055" type="phone" textContent="+996 556-70-50-55"/>
                            <HeaderContactLink href="tel:+996502705055" type="phone" textContent="+996 502-70-50-55"/>
                            <HeaderContactLink href="https://wa.me/+996556705055" type="whatsapp" textContent="+996 556-70-50-55"/>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;