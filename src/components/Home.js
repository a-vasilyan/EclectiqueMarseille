import Button from "../UI/Button";
import "../style/home.css";
import ContactUs from "./ContactUs"
import ModalContact from "./ModalContact";
import ModalAbout from "./ModalAbout";
import AboutUs from "./AboutUs";
import { useState } from "react";
import Nav from '../navbar/Nav';
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import "../style/media.css";

export default function Home (){

    const {t} = useTranslation()

    const [modalContact, setModalContact] = useState(false);
    const [modalAbout, setModalAbout] = useState(false);

    if(modalContact || modalAbout){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto"
    }

    const changeLanguages =(e) => {
        changeLanguage(e.target.value)
    }

    return(
        <div>
            <Nav setVisible={setModalAbout}/>
            <div className="container-fluid home-page">
                <div className="container">
                <div className="home-contact">
                        <h1>{t("title")}</h1>
                        <div className="div-work-time">
                            <span>{t("title")}</span>
                            <span>{t("open")}</span>
                        </div>
                        <Button name={t("contact")} click={() => setModalContact(true)}/>
                        <ModalContact visible={modalContact} setVisible={setModalContact}>
                            <ContactUs setVisible={setModalContact}/>
                        </ModalContact>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide container home-page-carousel" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require("../image/carouselitem1.jpg")} className="d-block w-100" alt="carousel-item-1"/>
                            </div>
                            <div className="carousel-item">
                                <img src={require("../image/carouselitem2.jpg")} className="d-block w-100" alt="carousel-item-2"/>
                            </div>
                            <div className="carousel-item">
                                <img src={require("../image/carouselitem3.jpg")} className="d-block w-100" alt="carousel-item-3"/>
                            </div>
                            <div className="carousel-item">
                                <img src={require("../image/carouselitem6.jpg")} className="d-block w-100" alt="carousel-item-6"/>
                            </div>  <div className="carousel-item">
                                <img src={require("../image/carouselitem7.jpg")} className="d-block w-100" alt="carousel-item-7"/>
                            </div> 
                            <div className="carousel-item">
                                <img src={require("../image/carouselitem8.jpg")} className="d-block w-100" alt="carousel-item-8"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="home-page-btn">
                        <Button name={t("about")} click={() => setModalAbout(true)}/>
                        <span>&#183;&#183;&#183;&#183;&#183;&#183;&#183;</span>
                        <a className="btn" href="https://www.google.com/maps/place/ECLECTIQUE+MARSEILLE/@43.300375,5.386987,17z/data=!4m6!3m5!1s0x12c9c1b94b7e1367:0x5c9dbd5501b4ed67!8m2!3d43.3003745!4d5.3869868!16s%2Fg%2F11fkmnmh2c?hl=ru&entry=ttu" target="_blank">
                            {t("find")}
                        </a>
                    </div>
                    <ModalAbout visible={modalAbout} setVisible={setModalAbout}>
                        <AboutUs setVisible={setModalAbout}/>
                    </ModalAbout>
                    <div>
                        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.6630113143506!2d5.38441187508767!3d43.30037837518041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c1b94b7e1367%3A0x5c9dbd5501b4ed67!2sECLECTIQUE%20MARSEILLE!5e0!3m2!1sru!2sam!4v1687173021548!5m2!1sru!2sam" 
                            width="600" height="450"  loading="lazy" 
                           >
                        </iframe>
                    </div>
                    <div className="row footer">
                        <div className="col-lg-6  home-page-address">
                            <h2>{t("address")}</h2>
                            <a className="btn" href="https://www.google.com/maps/place/ECLECTIQUE+MARSEILLE/@43.300375,5.386987,17z/data=!4m6!3m5!1s0x12c9c1b94b7e1367:0x5c9dbd5501b4ed67!8m2!3d43.3003745!4d5.3869868!16s%2Fg%2F11fkmnmh2c?hl=ru&entry=ttu" target="_blank">
                                {t("get_directions")}
                            </a>
                            <div className="address">
                                <img src={require("../image/icons8-location-48.png")}  alt="location-logo"/>
                                <span>30 Cr Joseph Thierry, 13001 Marseille, Franse</span>
                            </div>
                            <div className="change-languages">
                                <select onChange={changeLanguages}>
                                    <option value="fr">🇫🇷 {t("fr")}</option>
                                    <option value="en">🇬🇧 {t("en")}</option>
                                </select>
                                    <a href="https://www.instagram.com/eclectiquemarseille/" target="_blank">
                                            <img src={require("../image/icons8-instagram-48.png")} alt="instagram-logo"/>  
                                    </a>
                               </div>
                        </div>
                        <div className="col-lg-6 home-page-work-time">
                                <table className="table-dusinnes-hours">
                                <thead>
                                    <tr>
                                        <th colSpan="2">{t("business_hours")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t("monday")}:</td>
                                        <td>08:00 AM - 23:30 PM</td>
                                    </tr>
                                    <tr>
                                        <td>{t("tuesday")}:</td>
                                        <td>08:00 AM - 23:30 PM</td>
                                    </tr> 
                                    <tr>
                                        <td>{t("wednesday")}:</td>
                                        <td>08:00 AM - 23:30 PM</td>
                                    </tr> 
                                    <tr>
                                        <td>{t("thursday")}:</td>
                                        <td>08:00 AM - 23:30 PM</td>
                                    </tr> 
                                    <tr>
                                        <td>{t("friday")}:</td>
                                        <td>08:00 AM - 23:30 PM</td>
                                    </tr> 
                                    <tr>
                                        <td>{t("saturday")}:</td>
                                        <td>08:00 AM - 23:30 PM</td>
                                    </tr> 
                                    <tr>
                                        <td>{t("sunday")}:</td>
                                        <td>10:00 AM - 21:00 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4 col-md-6 home-page-hours">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}