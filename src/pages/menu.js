import React from "react";
import pan_ajo from '../assets/img/productos/pan_ajo.webp';
import pan_ajo_supremo from '../assets/img/productos/pan_ajo_supremo.webp';
import focaccia from '../assets/img/productos/focaccia.webp';
import calzone_supremo from '../assets/img/productos/calzone_supremo.webp';
import calzone_jamon_hongos from '../assets/img/productos/calzone_jamon_hongos.webp';
import calzone_pepperoni_hongos from '../assets/img/productos/calzone_pepperoni_hongos.webp';
import calzone_margarita from '../assets/img/productos/calzone_margarita.webp';
import calzone_hawaiano from '../assets/img/productos/calzone_hawaiano.webp';
import pizza_suprema from '../assets/img/productos/pizza_suprema.webp';
import margarita from '../assets/img/productos/margarita.webp';
import peperoni_hongos from '../assets/img/productos/peperoni_hongos.webp';
import jamon_hongos from '../assets/img/productos/jamon_hongos.webp';
import hawaiana from '../assets/img/productos/hawaiana.webp';
function Menu() {
    return (
        <div className="container-fluid p-0" id="menu">
            <div className="slider">
                <div className="slider_menu d-flex justify-content-center align-items-center display-1 fuente_especial text-white text_shadow">
                    Menu
                </div>
            </div>
            <div className="span_yellow"></div>
            <div className="container-fluid pan_de_ajo_bg">
                <div className="container pt-5">
                    <div className="col-12 ">
                        <h2 className="fuente_especial display-1 text_shadow text-white">Pan de Ajo</h2>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-6 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Pan de Ajo de la casa</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={pan_ajo} className="img_products" alt="pan de ajo de la casa"></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>Pan de la Casa, ajo confitado, aceite de oliva, hierbas italianas.</p>
                                        <p className="text-center fw-bold fs-2">₡2500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Pan de Ajo Supremo</div>
                                <div className="row g-0">
                                    <div className="col-12 text-center p-1">
                                        <img src={pan_ajo_supremo} className="img_products" alt="pan de ajo de la casa"></img>
                                    </div>
                                    <div className="col-12 text-center py-2">
                                        <p>Nuestra receta de pan de ajo de la casa con un topping de salsa de tomate y queso parmesano gratinado.</p>
                                        <p className="text-center fw-bold fs-2">₡3500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="span_yellow"></div>
            <div className="container-fluid p-0 focaccia">
                <div className="container pt-5">
                    <div className="col-12 ">
                        <h2 className="fuente_especial display-1 text_shadow text-white">Focaccia</h2>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-12 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Focaccia</div>
                                <div className="row g-0">
                                    <div className="col-lg-4 text-center p-1">
                                        <img src={focaccia} className="img-fluid" alt="pan de ajo de la casa"></img>
                                    </div>
                                    <div className="col-lg-8 p-2">
                                        <p>Deliciosa base de Pizza horneada con hierbas , especias italianas y aceite de oliva extra virgen hacen de nuestra masa un deleite a su paladar. Puedes elegir la opción de hacerla picante. Ambas opciones vienen con nuestro clásico queso parmesano rallado al momento.</p>
                                        <p className="text-center fw-bold fs-2">₡3000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="span_yellow"></div>
            <div className="container-fluid p-0 calzone">
                <div className="container pt-5">
                    <div className="col-12 ">
                        <h2 className="fuente_especial display-1 text_shadow text-white">Calzone</h2>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Margarita</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={calzone_margarita} className="img-fluid" alt="calzone margarita"></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>La clásica. Si es buena para la realeza es buena para nosotros. Nuestra base de tomate con mozzarella fresca y tomate Cherry. Al salir albahaca fresca y aceite de oliva.</p>
                                        <p className="text-center fw-bold fs-2">₡6000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Pepperoni y Hongos</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={calzone_pepperoni_hongos} className="img-fluid" alt="calzone Pepperoni y Hongos "></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>Champiñones frescos, pepperoni sin curar. Al salir un borde bañado en clásico chimichurri argentino y nuestro queso parmesano rallado.</p>
                                        <p className="text-center fw-bold fs-2">₡7500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Jamón y Hongos</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={calzone_jamon_hongos} className="img-fluid" alt="calzone jamon y hongos"></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>Champiñones frescos sobre nuestra clásica mezcla de tres quesos. Al salir lascas de jamón curado, aceite de oliva y queso parmesano.</p>
                                        <p className="text-center fw-bold fs-2">₡7000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Hawaiano</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={calzone_hawaiano} className="img-fluid" alt="calzone hawaianao"></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>Piña Rostizada, jamón, tocineta crocante.</p>
                                        <p className="text-center fw-bold fs-2">₡7000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Supremo</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={calzone_supremo} className="img-fluid" alt="calzone supremo"></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>Carne Molida, cebolla morada, chile dulce, pepperoni y tocineta cocinados a la perfección con una mezcla de especias frescas. Puedes agregar hongos frescos y aceitunas negras.</p>
                                        <p className="text-center fw-bold fs-2">₡8000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="span_yellow"></div>
            <div className="container-fluid p-0 pizzas">
                <div className="container pt-5">
                    <div className="col-12 ">
                        <h2 className="fuente_especial display-1 text_shadow text-white">Pizzas</h2>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Margarita</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={margarita} className="img-fluid" alt="calzone margarita"></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>La clásica. Si es buena para la realeza es buena para nosotros. Nuestra base de tomate con mozzarella fresca y tomate Cherry. Al salir albahaca fresca y aceite de oliva.</p>
                                    </div>
                                    <div className="row g-0 py-1">
                                        <div className="col-6 border_derecha">
                                            <p className="text-center fw-bold fs-2">Mediana</p>
                                            <p className="text-center fw-bold fs-2">₡6000</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-center fw-bold fs-2">Grande</p>
                                            <p className="text-center fw-bold fs-2">₡7500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Pepperoni y Hongos</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={peperoni_hongos} className="img-fluid" alt="calzone Pepperoni y Hongos "></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>Champiñones frescos, pepperoni sin curar. Al salir un borde bañado en clásico chimichurri argentino y nuestro queso parmesano rallado.</p>
                                    </div>
                                    <div className="row g-0 py-1">
                                        <div className="col-6 border_derecha">
                                            <p className="text-center fw-bold fs-2">Mediana</p>
                                            <p className="text-center fw-bold fs-2">₡7500</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-center fw-bold fs-2">Grande</p>
                                            <p className="text-center fw-bold fs-2">₡9500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Jamón y Hongos</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={jamon_hongos} className="img-fluid" alt="calzone jamon y hongos"></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>Champiñones frescos sobre nuestra clásica mezcla de tres quesos. Al salir lascas de jamón curado, aceite de oliva y queso parmesano.</p>
                                    </div>
                                    <div className="row g-0 py-1">
                                        <div className="col-6 border_derecha">
                                            <p className="text-center fw-bold fs-2">Mediana</p>
                                            <p className="text-center fw-bold fs-2">₡7500</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-center fw-bold fs-2">Grande</p>
                                            <p className="text-center fw-bold fs-2">₡9500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Hawaiana</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={hawaiana} className="img-fluid" alt="calzone hawaianao"></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>Piña Rostizada, jamón, tocineta crocante.</p>
                                    </div>
                                    <div className="row g-0 py-1">
                                        <div className="col-6 border_derecha">
                                            <p className="text-center fw-bold fs-2">Mediana</p>
                                            <p className="text-center fw-bold fs-2">₡7000</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-center fw-bold fs-2">Grande</p>
                                            <p className="text-center fw-bold fs-2">₡9000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="bg_beige_trans rounded shadow">
                                <div className="col-12 text-center fw-bold fs-2">Suprema</div>
                                <div className="row g-0">
                                    <div className="col-12 p-1 text-center">
                                        <img src={pizza_suprema} className="img-fluid" alt="calzone supremo"></img>
                                    </div>
                                    <div className="col-12 p-2">
                                        <p>Carne Molida, cebolla morada, chile dulce, pepperoni y tocineta cocinados a la perfección con una mezcla de especias frescas. Puedes agregar hongos frescos y aceitunas negras.</p>
                                    </div>
                                    <div className="row g-0 py-1">
                                        <div className="col-6 border_derecha">
                                            <p className="text-center fw-bold fs-2">Mediana</p>
                                            <p className="text-center fw-bold fs-2">₡8000</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-center fw-bold fs-2">Grande</p>
                                            <p className="text-center fw-bold fs-2">₡10000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu