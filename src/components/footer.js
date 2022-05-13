import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.webp'
function Footer() {
    return (
        <div className="footer bg_brown yellow_font">
            <div className="span_yellow"></div>
            <div className="container py-3">
                <div className="row g-0">
                    <div className="col-lg-5">
                        <p>Horario:</p>
                        <p>Martes a Domingo</p>
                        <p>11am a 9pm</p>
                    </div>
                    <div className="col-lg-2">
                        <Link to="home">
                            <img className="logo" src={Logo} alt="logo"></img>
                        </Link>
                    </div>
                    <div className="col-lg-5 text-center d-flex justify-content-center">
                        <a className="link_menu" href="https://www.facebook.com/Impasto-116662006839995/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a className="link_menu" href="https://www.instagram.com/impastocr/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a className="link_menu" href="https://www.tiktok.com/@impastocr/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                        <a className="link_menu" href="https://wa.me/50622378549/" rel="noopener noreferrer" target="_blank"><i className="fab fa-whatsapp-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;