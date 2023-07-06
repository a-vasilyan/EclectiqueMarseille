import "../style/nav.css";
import "../style/media.css";
import logo from "../image/logo.png";
import { useTranslation } from "react-i18next";
import "../style/media.css";

export default function Nav({setVisible}) {
    const {t} =useTranslation()
    return (
           <nav className="navbars">
            <div className="navbar-logo">
                    <img src={logo} alt="logo"/>
                    <span>{t("title")}</span>
            </div>
                <div className="nav-link">
                    <ul className="nav-menu">
                        <li>
                            <a className="navbar-link" onClick={() => setVisible(true)}>
                                <img src={require("../image/icons8-guardian-24.png")}  alt="about-logo"/>{t("about")}
                            </a>
                        </li>
                        <li>
                            <a className="navbar-link" href="https://www.google.com/maps/place/ECLECTIQUE+MARSEILLE/@43.300375,5.386987,17z/data=!4m6!3m5!1s0x12c9c1b94b7e1367:0x5c9dbd5501b4ed67!8m2!3d43.3003745!4d5.3869868!16s%2Fg%2F11fkmnmh2c?hl=ru&entry=ttu" target="_blank">
                                <img src={require("../image/icons8-location-24.png")}  alt="location-logo"/>{t("find")}
                            </a>
                        </li>
                    </ul>
                </div>
           </nav>
    )
}



// function Nav(){
//     return(
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Pricing</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//     )
// }