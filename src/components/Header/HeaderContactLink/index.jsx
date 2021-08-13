import React from "react";
import style from "../Header.module.scss";

function HeaderContactLink (props) {
    const{type, href, textContent} = props;
    function renderLink() {
        if(type === "phone"){
            return(
                <a href={href}>
                    <img src="img/svg/contacts/phone-icon.svg" alt="Телефон" className={style["header__contacts-icon"]}/>
                    <h4 className={style["header__contacts-subtitle"]}>{textContent}</h4>
                </a>
            );
        } else if(type === "whatsapp"){
            return(
                <a href={href} target="_blank" rel="noreferrer">
                    <img src="img/svg/contacts/whatsapp-icon.svg" alt="WhatsApp" class={style["header__contacts-icon"]}/>
                    <h4 class={style["header__contacts-subtitle"]}>{textContent}</h4>
                </a>
            );
        }
    }

    return(
        <div className={`${style["header__contacts-link"]} ${type === "whatsapp" ? style["header__contacts-link_green"] : ""}`}>
            {renderLink()}
        </div>
    );
}

export default HeaderContactLink;