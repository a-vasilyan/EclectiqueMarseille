import { changeLanguage } from "i18next";
import "../style/footer.css";
import "../style/media.css";

export default function Footer({t}) {
    return (
        <footer>
            <div className="row footer">
                <div className="col-lg-8 col-md-6 home-page-address">
                    <h2>{t("address")}</h2>
                    <a className="btn" href="https://www.google.com/maps/place/ECLECTIQUE+MARSEILLE/@43.300375,5.386987,17z/data=!4m6!3m5!1s0x12c9c1b94b7e1367:0x5c9dbd5501b4ed67!8m2!3d43.3003745!4d5.3869868!16s%2Fg%2F11fkmnmh2c?hl=ru&entry=ttu" target="_blank">
                        {t("get_directions")}
                    </a>
                    <div className="address">
                        <img src={require("../image/icons8-location-48.png")} alt="location-logo" />
                        <span>30 Cr Joseph Thierry, 13001 Marseille, Franse</span>
                    </div>
                    <div className="change-languages">
                        <select onChange={(e) => changeLanguage(e.target.value)}>
                            <option value="fr">🇫🇷 {t("fr")}</option>
                            <option value="en">🇬🇧 {t("en")}</option>
                        </select>
                        <a href="https://www.instagram.com/eclectiquemarseille/" target="_blank">
                            <img src={require("../image/icons8-instagram-48.png")} alt="instagram-logo" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 home-page-work-time">
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
            </div>
        </footer>
    )
}