import Button from "../UI/Button";
import "../style/home.css";
import ContactUs from "./ContactUs"
import ModalContact from "./ModalContact";
import ModalAbout from "./ModalAbout";
import AboutUs from "./AboutUs";
import { useState } from "react";
import Nav from '../navbar/Nav';
import { useTranslation } from "react-i18next";
import "../style/media.css";
import Carousel from "./Carousel";
import Map from "./GoogleMap";
import Footer from "./Footer";

export default function Home() {

    const { t } = useTranslation()

    const [modalContact, setModalContact] = useState(false);
    const [modalAbout, setModalAbout] = useState(false);

    if (modalContact || modalAbout) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto"
    }

    return (
        <div>
            <Nav setVisible={setModalAbout} />
            <div className="container-fluid home-page">
                <div className="container">
                    <div className="home-contact">
                        <h1>{t("title")}</h1>
                        <div className="div-work-time">
                            <span>{t("title")}</span>
                            <span>{t("open")}</span>
                        </div>
                        <Button name={t("contact")} click={() => setModalContact(true)} />
                        <ModalContact visible={modalContact} setVisible={setModalContact}>
                            <ContactUs setVisible={setModalContact} t={t} />
                        </ModalContact>
                    </div>
                    <Carousel />
                    <div className="home-page-btn">
                        <Button name={t("about")} click={() => setModalAbout(true)} />
                        <span>&#183;&#183;&#183;&#183;&#183;&#183;&#183;</span>
                        <a className="btn" href="https://www.google.com/maps/place/ECLECTIQUE+MARSEILLE/@43.300375,5.386987,17z/data=!4m6!3m5!1s0x12c9c1b94b7e1367:0x5c9dbd5501b4ed67!8m2!3d43.3003745!4d5.3869868!16s%2Fg%2F11fkmnmh2c?hl=ru&entry=ttu" target="_blank">
                            {t("find")}
                        </a>
                    </div>
                    <ModalAbout visible={modalAbout} setVisible={setModalAbout}>
                        <AboutUs setVisible={setModalAbout} t={t}/>
                    </ModalAbout>
                    <Map />
                    <Footer t ={t} />
                </div>
            </div>
        </div>
    )
}