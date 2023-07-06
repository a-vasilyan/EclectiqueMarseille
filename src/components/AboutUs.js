import "../style/aboutUs.css";
import "../style/media.css";

export default function AboutUs({ setVisible, t }) {
    return (
        <div className="about-modal">
            <div className="aboute-close">
                <h2>{t("about")}</h2>
                <img className="close-icon" onClick={() => setVisible(false)}
                     src={require("../image/icons8-multiply-24.png")} alt="close-logo" 
                />
            </div>
            <div className="about-text">
                <p>{t("about-text")}</p>
            </div>
            <form className="about-feedback">
                <input type="text" placeholder={t("about-placeholder")} />
                <button type="submit" className="btn">{t("submit")}</button>
            </form>
        </div>
    )
}