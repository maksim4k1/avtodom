import React from "react";
import style from "./HeaderContactLink.module.scss";
import phone from "../../../../img/svg/contacts/phone-icon.svg";
import whatsapp from "../../../../img/svg/contacts/whatsapp-icon.svg";

function HeaderContactLink (props) {
    const{type, href, textContent} = props;
    function renderLink() {
        if(type === "phone"){
            return(
                <a href={href}>
                    <img src={phone} alt="Телефон" className={style["header__contacts-icon"]}/>
                    <h4 className={style["header__contacts-subtitle"]}>{textContent}</h4>
                </a>
            );
        } else if(type === "whatsapp"){
            return(
                <a href={href} target="_blank" rel="noreferrer">
                    <img src={whatsapp} alt="WhatsApp" className={style["header__contacts-icon"]}/>
                    <h4 className={style["header__contacts-subtitle"]}>{textContent}</h4>
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