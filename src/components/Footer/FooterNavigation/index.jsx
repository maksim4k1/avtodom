import React from "react";
import FooterMenu from "./FooterMenu";
import style from "./FooterNavigation.module.scss";

function FooterNavigation () {
    return(
        <div className={style.footer__navigation}>
            <FooterMenu
                menuItems={[
                    {href: "/", textContent: "Главная"},
                    {href: "/catalog", textContent: "Каталог"},
                    {href: "/contacts", textContent: "Контакты"},
                    {href: "/address", textContent: "Адрес"},
                ]}
            />
            <FooterMenu
                menuItems={[
                    {textContent: "Наши контакты", isTitle: true},
                    {href: "tel:+996556705055", textContent: "+996 556-70-50-55"},
                    {href: "tel:+996502705055", textContent: "+996 502‒70‒50‒55"},
                ]}
            />
            <FooterMenu
                menuItems={[
                    {textContent: (<address>Тоголок Молдо 136<br/>г. Бишкек</address>), isTitle: true},
                    {textContent: (<time>Пн-Вс<br/>9:00-19:00</time>), isTitle: true},
                ]}
            />
        </div>
    );
}

export default FooterNavigation;