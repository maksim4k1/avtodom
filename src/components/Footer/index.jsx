import React from "react";
import style from "./Footer.module.scss";
import whatsapp from "../../img/svg/footer/whatsapp-footer-icon.svg";
import FooterNavigation from "./FooterNavigation";

function Footer() {
    return(
        <footer className={style.footer}>
            <div className={`${style.footer__container} container`}>
                <h2 className={style.footer__logo}><a href="/">Авто Дом</a></h2>
                <FooterNavigation/>
                <div className={style.footer__license}>
                    <a href="https://wa.me/+996556705055" rel="noreferrer" target="_blank" className={style.footer__whatsapp}><img src={whatsapp} alt="WhatsApp" className={style.footer__icon}/></a>
                    <p className={style.footer__text}>©Авто Дом 2021</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;