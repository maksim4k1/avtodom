import React from "react";
import style from "./HeaderBurgerMenu.module.scss";
import HeaderLink from "../HeaderLink/index";
import HeaderContactLink from "./HeaderContactLink/index";

function HeaderBurgerMenu (props) {
    return(
        <div className={`${style.header__burger} ${props.isOpenMenu ? style["open-burger-menu"] : ""}`} onClick={props.toggleBurgerMenu}>
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
    );
}

export default HeaderBurgerMenu;