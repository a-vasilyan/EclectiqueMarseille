import Button from "../UI/Button"
import "../style/contactUs.css"
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact({setVisible}) {
    const {t} = useTranslation()
    const [count, setCount] = useState(0);


    return(
            <div className="div-contact-form">
                <div className="contact-close">
                    <h2>{t("contact")}</h2>
                        <img className="icon-close" onClick={() =>setVisible(false)} src={require("../image/icons8-multiply-24.png")} alt="close-logo"/>
                </div>
                <form className="contact-form">
                    <input type="text"  name="name" placeholder={t("contact-form-name")}/>
                    <input type="tel"  name="phone" placeholder={t("contact-form-phone")}/>
                    <input type="email"  name="email" placeholder={t("contact-form-email")} required/>
                    <span>{t("contact-form-required")}</span>
                    <i>{t("contact-form-help")}</i>
                    <textarea className="text-message" onChange={() => setCount(count+1)} name="userHelpMessge" type="text" maxLength="1000"
                        placeholder={t("contact-form-message")}
                    />
                    <p>{count} / 1,000</p>
                    <button type="submit" className="btn">{t("submit")}</button>
                </form>
                <p className="text">{t("contact-form-text")}</p>

            </div>
    )
}