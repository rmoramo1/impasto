import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.webp'

function Header() {
    return (
        <div className="container-fluid header sticky-top-lg">
            <div className="row g-0">
                <div className="col-5 text-end d-none d-lg-block">
                    <div className="d-flex justify-content-end align-items-center h-100">
                        <div className="d-flex">
                            <Link className="link_menu" to="menu">Menu</Link>
                            <Link className="link_menu" to="nosotros">Nosotros</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    <Link to="home">
                        <img className="logo" src={Logo} alt="logo"></img>
                    </Link>
                </div>
                <div className="col-5 d-none d-lg-block">
                    <div className="d-flex justify-content-start align-items-center h-100">
                        <div className="d-flex">
                            <Link className="link_menu" to="contacto">Contacto</Link>
                            <a className="link_menu" href="https://www.facebook.com/Impasto-116662006839995/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook"></i></a>
                            <a className="link_menu" href="https://www.instagram.com/impastocr/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a className="link_menu" href="https://www.tiktok.com/@impastocr/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                            <a className="link_menu" href="https://wa.me/50622378549/"  rel="noopener noreferrer" target="_blank"><i className="fab fa-whatsapp-square"></i></a>
                        </div>
                    </div></div>
                <div className="row d-lg-none" id="menu_movil">
                    <Link className="link_menu col-12" to="menu">Menu</Link>
                    <Link className="link_menu col-12" to="nosotros">Nosotros</Link>
                    <Link className="link_menu col-12" to="contacto">Contacto</Link>
                    <a className="link_menu col-3" href="https://www.facebook.com/Impasto-116662006839995/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a className="link_menu col-3" href="https://www.instagram.com/impastocr/"rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a className="link_menu col-3"  href="https://www.tiktok.com/@impastocr/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                    <a className="link_menu col-3" href="https://wa.me/50622378549/" rel="noopener noreferrer" target="_blank"><i className="fab fa-whatsapp-square"></i></a>

                </div>
            </div>
        </div>
    )
}
export default Header;