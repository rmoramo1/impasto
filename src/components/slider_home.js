import React from "react";

function Slider_Home() {
    return (
        <div id="carouselHOme" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselHOme" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselHOme" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselHOme" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active slider">
                    <div className="slider1 d-flex justify-content-center align-items-center">
                        <div className="display-1 fuente_especial text-white text_shadow text-center">
                            Hacemos que tu experiencia sea inolvidable.
                        </div>
                    </div>
                </div>
                <div className="carousel-item slider">
                    <div className="slider2 d-flex justify-content-center align-items-center">
                        <div className="display-1 fuente_especial text-white text_shadow text-center">
                        La pizza conecta emociones, conecta personas.
                        </div>
                    </div>
                </div>
                <div className="carousel-item slider">
                    <div className="slider3 d-flex justify-content-center align-items-center">
                        <div className="display-1 fuente_especial text-white text_shadow text-center">
                        Nuestro mejor secreto en pizzas:<br/> Ingredientes de felicidad y toques de alegría.
                        </div>
                    </div>
                </div>
            </div>
            <div className="span_yellow"></div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHOme" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselHOme" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
};
export default Slider_Home; 