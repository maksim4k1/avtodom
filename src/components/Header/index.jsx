import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import HeaderBurgerMenu from "./HeaderBurgerMenu/index";
import HeaderNavigation from "./HeaderNavigation";

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
                <HeaderNavigation/>
                <button className={style.header__button} onClick={toggleBurgerMenu}>
                    <span></span>
                </button>
                <HeaderBurgerMenu
                    toggleBurgerMenu={toggleBurgerMenu}
                    isOpenMenu={isOpenMenu}
                />
            </div>
        </header>
    );
}

export default Header;