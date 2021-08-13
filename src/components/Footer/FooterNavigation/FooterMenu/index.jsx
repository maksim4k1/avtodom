import React from "react";
import style from "./FooterMenu.module.scss"

function FooterMenu (props) {
    const menuItems = props.menuItems.map((item) => {
        if(item.isTitle === true){
            return(
                <li className={style.footer__item}>{item.textContent}</li>
            );
        }
        return(
            <li className={style.footer__item}><a href={item.href} className={style.footer__link}>{item.textContent}</a></li>
        );
    });

    return(
        <ul className={style.footer__menu}>
            { menuItems }
        </ul>
    );
}

export default FooterMenu;