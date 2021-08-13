import React from "react";
import style from "./Header.module.scss";

function Header() {
    return(
        <header className={style.header}>
            <div className={`${style.header__container} container`}>
                <h2 className={style.header__logo}><a href="/">Авто Дом</a></h2>
            </div>
        </header>
    );
}

export default Header;