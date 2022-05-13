import React from "react";

function Nosotros() {
    return (
        <div className="container-fluid p-0">
            <div className="slider">
                <div className="slider_nosotros d-flex justify-content-center align-items-center display-1 fuente_especial text-white text_shadow">
                    Nosotros
                </div>
            </div>
            <div className="span_yellow"></div>
            <div className="container-fluid p-0">
                <div className="container">
                    <h1 className='fuente_especial display-1 text-center pt-4'>El arte del buen comer</h1>
                    <p>Bienvenido a Impasto, donde el arte del buen comer es nuestra pasión. En nuestra búsqueda por crear la mejor experiencia gastronómica, la atención al detalle que lleva cada una de nuestras preparaciones es inigualable. Desde el estirado a mano hasta la curación de nuestros fiambres, todo debe de ser llevado al mas alto nivel para obtener un resultado inmemorable.</p>
                    <p>Cuando tratamos de separar el arte de la vida, usualmente terminamos sorprendidos de como una imita a la otra. En impasto, queremos que nuestros comensales no solo puedan tener de nosotros su comida. Buscamos una experiencia que los haga querer volver a nosotros.</p>
                    <p>
                        Es un privilegio ser escogido como una fuente de sustento. Es por esto que nos damos la tarea de no solo alimentar a nuestros clientes, sino también darles algo de que hablar. Ya sea una simple focaccia o uno de nuestros emparedados, cada uno de nuestros platos cuenta una historia que pertenece a cada uno de los ingredientes que lo conforman.
                    </p>
                </div>
                <div className="container-fluid p-0">
                    <h1 className='fuente_especial display-1 text-center pt-4'>Nuestros Ingredientes</h1>
                    <div className="row g-0">
                        <div className="col-lg-6 bg-danger ingrediente_img nuestra_masa"></div>
                        <div className="col-lg-6 p-2 d-flex justify-content-center align-items-center">
                            <div>
                                <h2 className="fuente_especial display-2 text-center">Nuestra Masa</h2>
                                <p>Harina, levadura, agua y aceite. Los pilares para la elaboración de nuestra exquisita masa. Un proceso de levado nos ayuda a obtener una textura crocante por fuera y suave por dentro. Lo suficientemente delgada para disfrutar de mejor manera los ingredientes que la cubren. Estirada a mano al momento, llega hasta el horno donde las altas temperaturas hacen que su cocción sea al punto perfecto.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-6 p-2 d-flex justify-content-center align-items-center">
                            <div>
                                <h2 className="fuente_especial display-2 text-center">Nuestras especias </h2>
                                <p>Tratamos de romper los moldes y llevar la experiencia de nuestros comensales a otro nivel. Basándonos en la tradicional gastronomía italiana y su respeto por los ingredientes, nuestra cocina busca empujar el umbral de la tradición e innovar con nuevos perfiles de sabor. Combinaciones arriesgadas que desafían las tradiciones, pero mantienen la base de su sabor.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 bg-danger ingrediente_img nuestras_especies"></div>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-6 bg-danger ingrediente_img nuestra_masa"></div>
                        <div className="col-lg-6 p-2 d-flex justify-content-center align-items-center">
                            <div>
                                <h2 className="fuente_especial display-2 text-center">Nuestros Embutidos</h2>
                                <p>Elaborados bajo los mas altos estándares de calidad, nuestros embutidos se roban el show. Desde nuestro pepperoni sin curar hasta nuestro prosciutto cotto, todos provienen de pequeños productores. Estos embutidos son el complemento perfecto en cada uno de nuestros platillos. Donde su mineralidad y proceso de curación aportan un perfil único al comensal.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Nosotros;